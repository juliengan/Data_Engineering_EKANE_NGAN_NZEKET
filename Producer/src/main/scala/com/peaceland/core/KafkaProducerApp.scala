package com.peaceland.core

import org.apache.kafka.clients.producer.{KafkaProducer, ProducerConfig, ProducerRecord, RecordMetadata}
import org.apache.kafka.common.serialization.StringSerializer

import java.util.Properties

object KafkaProducerApp extends App {
  val props: Properties = new Properties()
  props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "127.0.0.1:9092")
  props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, classOf[StringSerializer])
  props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, classOf[StringSerializer])

  val producer = new KafkaProducer[String, String](props)
  val topic = "atopic"
  val record = new ProducerRecord[String, String](topic, "akey", "adata")
  producer.send(record, (recordMetadata: RecordMetadata, exception: Exception) => {
    if(exception != null){
      exception.printStackTrace()
    }else{println(s"Metadata about the sent record: $recordMetadata")
  }})
  producer.close()

}

