let addClickedMessage;
(function(){
'use strict';Object.freeze({esVersion:6,assumingES6:!0,productionMode:!0,linkerVersion:"1.9.0",fileLevelThis:this});var k;function l(a){for(var b in a)return b}
function m(a){switch(typeof a){case "string":return"java.lang.String";case "number":return"number"===typeof a&&(a|0)===a&&1/a!==1/-0?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"number"!==typeof a||a===a&&Math.fround(a)!==a?"java.lang.Double":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.y():a instanceof n?"java.lang.Long":a&&a.$classData?a.$classData.name:null.z()}}var p=0,q=new WeakMap;
function r(a){switch(typeof a){case "string":return t(a);case "number":a=+a;u||(u=new v);var b=u;var c=a|0;c===a&&-Infinity!==1/a?a=c:(b.p[0]=a,a=(b.j[0]|0)^(b.j[1]|0));return a;case "bigint":b=0;for(a<BigInt(0)&&(a=~a);a!==BigInt(0);)b^=Number(BigInt.asIntN(32,a)),a>>=BigInt(32);return b;case "boolean":return a?1231:1237;case "undefined":return 0;case "symbol":return a=a.description,void 0===a?0:t(a);default:if(null===a)return 0;b=q.get(a);void 0===b&&(p=b=p+1|0,q.set(a,b));return b}}
function w(){}w.prototype.constructor=w;function y(){}y.prototype=w.prototype;w.prototype.o=function(){return r(this)};w.prototype.q=function(){var a=this.o();return m(this)+"@"+(+(a>>>0)).toString(16)};w.prototype.toString=function(){return this.q()};function z(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=null}else this.a=a}z.prototype=new y;z.prototype.constructor=z;function A(){}A.prototype=z.prototype;
function B(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=!1}else this.a=a}B.prototype=new y;B.prototype.constructor=B;function C(a){this.a="number"===typeof a?new Uint16Array(a):a}C.prototype=new y;C.prototype.constructor=C;function D(a){this.a="number"===typeof a?new Int8Array(a):a}D.prototype=new y;D.prototype.constructor=D;function E(a){this.a="number"===typeof a?new Int16Array(a):a}E.prototype=new y;E.prototype.constructor=E;
function F(a){this.a="number"===typeof a?new Int32Array(a):a}F.prototype=new y;F.prototype.constructor=F;function G(a){if("number"===typeof a){this.a=Array(a);for(var b=0;b<a;b++)this.a[b]=k}else this.a=a}G.prototype=new y;G.prototype.constructor=G;function H(a){this.a="number"===typeof a?new Float32Array(a):a}H.prototype=new y;H.prototype.constructor=H;function I(a){this.a="number"===typeof a?new Float64Array(a):a}I.prototype=new y;I.prototype.constructor=I;
function J(){this.k=void 0;this.g=this.c=null;this.h=0;this.r=null;this.d="";this.e=this.f=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function K(a,b,c,d){var e=new J;e.c={};e.r=a;e.d=b;e.e=g=>g===e;e.name=c;e.isPrimitive=!0;e.isInstance=()=>!1;void 0!==d&&(e.f=L(e,d));return e}
function M(a,b,c,d){var e=new J,g=l(a);e.c=c;e.d="L"+b+";";e.e=f=>!!f.c[g];e.name=b;e.isInterface=!1;e.isInstance=d||(f=>!!(f&&f.$classData&&f.$classData.c[g]));return e}function L(a,b,c){var d=new J;b.prototype.$classData=d;var e="["+a.d;d.k=b;d.c={b:1,w:1,l:1};d.g=a;d.h=1;d.d=e;d.name=e;d.isArrayClass=!0;d.e=c||(g=>d===g);d.isInstance=g=>g instanceof b;return d}
function N(){function a(f){if("number"===typeof f){this.a=Array(f);for(var h=0;h<f;h++)this.a[h]=null}else this.a=f}var b=O,c=new J;a.prototype=new A;a.prototype.constructor=a;var d=b.g||b,e=b.h+1;a.prototype.$classData=c;b="["+b.d;c.k=a;c.c={b:1,w:1,l:1};c.g=d;c.h=e;c.d=b;c.name=b;c.isArrayClass=!0;var g=f=>{var h=f.h;return h===e?d.e(f.g):h>e&&d===P};c.e=g;c.isInstance=f=>{f=f&&f.$classData;return!!f&&(f===c||g(f))};return c}var P=new J;P.c={b:1};P.d="Ljava.lang.Object;";P.e=a=>!a.isPrimitive;
P.name="java.lang.Object";P.isInstance=a=>null!==a;P.f=L(P,z,a=>{var b=a.h;return 1===b?!a.g.isPrimitive:1<b});w.prototype.$classData=P;K(void 0,"V","void",void 0);K(!1,"Z","boolean",B);K(0,"C","char",C);K(0,"B","byte",D);K(0,"S","short",E);K(0,"I","int",F);var Q=K(null,"J","long",G);K(0,"F","float",H);K(0,"D","double",I);function R(){}R.prototype=new y;R.prototype.constructor=R;
function aa(){S();var a=document.createElement("button");a.textContent="Click me!";a.addEventListener("click",()=>{T()});document.body.appendChild(a);V("Hello World")}function T(){S();V("You clicked the button!")}function V(a){var b=document.body,c=document.createElement("p");c.textContent=a;b.appendChild(c)}R.prototype.$classData=M({s:0},"analysis.Analysis$",{s:1,b:1});var W;function S(){W||(W=new R)}
function v(){this.p=this.j=this.i=null;u=this;this.i=new ArrayBuffer(8);this.j=new Int32Array(this.i,0,2);new Float32Array(this.i,0,2);this.p=new Float64Array(this.i,0,1);this.j[0]=16909060;new Int8Array(this.i,0,8)}v.prototype=new y;v.prototype.constructor=v;v.prototype.$classData=M({x:0},"java.lang.FloatingPointBits$",{x:1,b:1});var u;function n(a,b){this.n=a;this.m=b}n.prototype=new y;n.prototype.constructor=n;n.prototype.o=function(){return this.n^this.m};
n.prototype.q=function(){X||(X=new Y);var a=this.n,b=this.m;return b===a>>31?""+a:0>b?"-"+Z(-a|0,0!==a?~b:-b|0):Z(a,b)};n.prototype.$classData=M({t:0},"org.scalajs.linker.runtime.RuntimeLong",{t:1,b:1});
function Z(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+Math.clz32(1E9)|0)-(0!==b?Math.clz32(b):32+Math.clz32(a)|0)|0,d=c,e=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var g=a,f=b;for(a=b=0;0<=c&&0!==(-2097152&f);){var h=g,x=f,ba=e,U=d;if(x===U?(-2147483648^h)>=(-2147483648^ba):(-2147483648^x)>=(-2147483648^U))h=f,x=d,f=g-e|0,h=(-2147483648^f)>(-2147483648^g)?-1+(h-x|0)|0:h-x|0,g=f,f=h,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;h=d>>>1|0;e=e>>>1|0|d<<31;d=h}c=f;if(0===
c?-1147483648<=(-2147483648^g):-2147483648<=(-2147483648^c))c=4294967296*f+ +(g>>>0),g=c/1E9,e=g/4294967296|0,d=b,b=g=d+(g|0)|0,a=(-2147483648^g)<(-2147483648^d)?1+(a+e|0)|0:a+e|0,g=c%1E9|0;c=""+g;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function Y(){}Y.prototype=new y;Y.prototype.constructor=Y;Y.prototype.$classData=M({u:0},"org.scalajs.linker.runtime.RuntimeLong$",{u:1,b:1});var X;
function t(a){for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+Math.imul(65535&(a.charCodeAt(d)|0),c)|0,c=Math.imul(31,c),d=-1+d|0;return b}var O=M({v:0},"java.lang.String",{v:1,b:1,l:1,B:1,A:1,C:1,D:1},a=>"string"===typeof a);k=new n(0,0);Q.r=k;addClickedMessage=function(){T()};O.f||(O.f=N());new O.f.k([]);S();document.addEventListener("DOMContentLoaded",()=>{aa()});
}).call(this);
//# sourceMappingURL=main.js.map