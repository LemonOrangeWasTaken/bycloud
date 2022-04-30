(()=>{"use strict";var e={30:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function s(e,t,n){return Math.min(Math.max(e,t),n)}function l(e,t){return e.indexOf(t)>-1}function u(e,t){return e.apply(null,t)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return l(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return d.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!a.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function c(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function g(e,t){var n=c(e),r=s(d.und(n[0])?1:n[0],.1,100),a=s(d.und(n[1])?100:n[1],.1,100),i=s(d.und(n[2])?10:n[2],.1,100),l=s(d.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),g=i/(2*Math.sqrt(a*r)),m=g<1?u*Math.sqrt(1-g*g):0,f=g<1?(g*u-l)/m:-l+u;function p(e){var n=t?t*e/1e3:e;return n=g<1?Math.exp(-n*g*u)*(1*Math.cos(m*n)+f*Math.sin(m*n)):(1+f*n)*Math.exp(-n*u),0===e||1===e?e:1-n}return t?p:function(){var t=o.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===p(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[e]=i,i}}function m(e){return void 0===e&&(e=10),function(t){return Math.ceil(s(t,1e-6,1)*e)*(1/e)}}var f,p,v=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,i){return((t(a,i)*e+n(a,i))*e+r(a))*e}function i(e,a,i){return 3*t(a,i)*e*e+2*n(a,i)*e+r(a)}return function(t,n,r,o){if(0<=t&&t<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(t!==n||r!==o)for(var l=0;l<11;++l)s[l]=a(l*e,t,r);return function(l){return t===n&&r===o||0===l||1===l?l:a(function(n){for(var o=0,l=1;10!==l&&s[l]<=n;++l)o+=e;--l;var u=o+(n-s[l])/(s[l+1]-s[l])*e,d=i(u,t,r);return d>=.001?function(e,t,n,r){for(var o=0;o<4;++o){var s=i(t,n,r);if(0===s)return t;t-=(a(t,n,r)-e)/s}return t}(n,u,t,r):0===d?u:function(e,t,n,r,i){var o,s,l=0;do{(o=a(s=t+(n-t)/2,r,i)-e)>0?n=s:t=s}while(Math.abs(o)>1e-7&&++l<10);return s}(n,o,o+e,t,r)}(l),n,o)}}}}(),h=(f={linear:function(){return function(e){return e}}},p={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=s(e,1,10),r=s(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,t){p[e]=function(){return function(e){return Math.pow(e,t+2)}}})),Object.keys(p).forEach((function(e){var t=p[e];f["easeIn"+e]=t,f["easeOut"+e]=function(e,n){return function(r){return 1-t(e,n)(1-r)}},f["easeInOut"+e]=function(e,n){return function(r){return r<.5?t(e,n)(2*r)/2:1-t(e,n)(-2*r+2)/2}},f["easeOutIn"+e]=function(e,n){return function(r){return r<.5?(1-t(e,n)(1-2*r))/2:(t(e,n)(2*r-1)+1)/2}}})),f);function y(e,t){if(d.fnc(e))return e;var n=e.split("(")[0],r=h[n],a=c(e);switch(n){case"spring":return g(e,t);case"cubicBezier":return u(v,a);case"steps":return u(m,a);default:return u(r,a)}}function _(e){try{return document.querySelectorAll(e)}catch(e){return}}function b(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in e){var o=e[i];t.call(r,o,i,e)&&a.push(o)}return a}function B(e){return e.reduce((function(e,t){return e.concat(d.arr(t)?B(t):t)}),[])}function I(e){return d.arr(e)?e:(d.str(e)&&(e=_(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function x(e,t){return e.some((function(e){return e===t}))}function E(e){var t={};for(var n in e)t[n]=e[n];return t}function w(e,t){var n=E(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function M(e,t){var n=E(e);for(var r in t)n[r]=d.und(e[r])?t[r]:e[r];return n}function k(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function C(e,t){return d.fnc(e)?e(t.target,t.id,t.total):e}function L(e,t){return e.getAttribute(t)}function O(e,t,n){if(x([n,"deg","rad","turn"],k(t)))return t;var r=o.CSS[t+n];if(!d.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var l=s*parseFloat(t);return o.CSS[t+n]=l,l}function P(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?O(e,a,n):a}}function T(e,t){return d.dom(e)&&!d.inp(e)&&(!d.nil(L(e,t))||d.svg(e)&&e[t])?"attribute":d.dom(e)&&x(i,t)?"transform":d.dom(e)&&"transform"!==t&&P(e,t)?"css":null!=e[t]?"object":void 0}function D(e){if(d.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function S(e,t,n,r){switch(T(e,t)){case"transform":return function(e,t,n,r){var a=l(t,"scale")?1:0+function(e){return l(e,"translate")||"perspective"===e?"px":l(e,"rotate")||l(e,"skew")?"deg":void 0}(t),i=D(e).get(t)||a;return n&&(n.transforms.list.set(t,i),n.transforms.last=t),r?O(e,i,r):i}(e,t,r,n);case"css":return P(e,t,n);case"attribute":return L(e,t);default:return e[t]||0}}function A(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=k(e)||0,a=parseFloat(t),i=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function F(e,t){if(d.col(e))return function(e){return d.rgb(e)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t=e))?"rgba("+n[1]+",1)":t:d.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):d.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,l=a[4]||1;function u(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==o)t=n=r=s;else{var d=s<.5?s*(1+o):s+o-s*o,c=2*s-d;t=u(c,d,i+1/3),n=u(c,d,i),r=u(c,d,i-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+l+")"}(e):void 0;var t,n}(e);if(/\s/g.test(e))return e;var n=k(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function $(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function j(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=$(t,i)),t=i}return r}function R(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*L(e,"r")}(e);case"rect":return function(e){return 2*L(e,"width")+2*L(e,"height")}(e);case"line":return function(e){return $({x:L(e,"x1"),y:L(e,"y1")},{x:L(e,"x2"),y:L(e,"y2")})}(e);case"polyline":return j(e);case"polygon":return function(e){var t=e.points;return j(e)+$(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function N(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;d.svg(t)&&d.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),i=L(r,"viewBox"),o=a.width,s=a.height,l=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:s,vW:l[2],vH:l[3]}}function q(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=N(e.el,e.svg),i=r(),o=r(-1),s=r(1),l=n?1:a.w/a.vW,u=n?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*l;case"y":return(i.y-a.y)*u;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function W(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=F(d.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:d.str(e)||t?r.split(n):[]}}function H(e){return b(e?B(d.arr(e)?e.map(I):I(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function V(e){var t=H(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:D(e)}}}))}function Y(e,t){var n=E(t);if(/^spring/.test(n.easing)&&(n.duration=g(n.easing)),d.arr(e)){var r=e.length;2!==r||d.obj(e[0])?d.fnc(t.duration)||(n.duration=t.duration/r):e={value:e}}var a=d.arr(e)?e:[e];return a.map((function(e,n){var r=d.obj(e)&&!d.pth(e)?e:{value:e};return d.und(r.delay)&&(r.delay=n?0:t.delay),d.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return M(e,n)}))}var Q={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var i="";r.list.forEach((function(e,t){i+=t+"("+e+") "})),e.style.transform=i}}};function X(e,t){V(e).forEach((function(e){for(var n in t){var r=C(t[n],e),a=e.target,i=k(r),o=S(a,n,i,e),s=A(F(r,i||k(o)),o),l=T(a,n);Q[l](a,n,s,e.transforms,!0)}}))}function Z(e,t){return b(B(e.map((function(e){return t.map((function(t){return function(e,t){var n=T(e.target,t.name);if(n){var r=function(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=C(e[r],t);d.arr(a)&&1===(a=a.map((function(e){return C(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),i=a.value,o=d.arr(i)?i[1]:i,s=k(o),l=S(t.target,e.name,s,t),u=n?n.to.original:l,c=d.arr(i)?i[0]:u,g=k(c)||k(l),m=s||g;return d.und(o)&&(o=u),a.from=W(c,m),a.to=W(A(o,c),m),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=d.pth(i),a.isPathTargetInsideSVG=a.isPath&&d.svg(t.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!d.und(e)}))}function z(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var G=0,J=[],K=function(){var e;function t(n){for(var r=J.length,a=0;a<r;){var i=J[a];i.paused?(J.splice(a,1),r--):(i.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){ee.suspendWhenDocumentHidden&&(U()?e=cancelAnimationFrame(e):(J.forEach((function(e){return e._onDocumentVisibility()})),K()))})),function(){e||U()&&ee.suspendWhenDocumentHidden||!(J.length>0)||(e=requestAnimationFrame(t))}}();function U(){return!!document&&document.hidden}function ee(e){void 0===e&&(e={});var t,n=0,i=0,o=0,l=0,u=null;function c(e){var t=window.Promise&&new Promise((function(e){return u=e}));return e.finished=t,t}var g=function(e){var t=w(r,e),n=w(a,e),i=function(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=M(function(e){for(var t=b(B(e.map((function(e){return Object.keys(e)}))),(function(e){return d.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)d.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)d.key(a)&&n.push({name:a,tweens:Y(t[a],e)});return n}(n,e),o=V(e.targets),s=Z(o,i),l=z(s,n),u=G;return G++,M(t,{id:u,children:[],animatables:o,animations:s,duration:l.duration,delay:l.delay,endDelay:l.endDelay})}(e);function m(){var e=g.direction;"alternate"!==e&&(g.direction="normal"!==e?"normal":"reverse"),g.reversed=!g.reversed,t.forEach((function(e){return e.reversed=g.reversed}))}function f(e){return g.reversed?g.duration-e:e}function p(){n=0,i=f(g.currentTime)*(1/ee.speed)}function v(e,t){t&&t.seek(e-t.timelineOffset)}function h(e){for(var t=0,n=g.animations,r=n.length;t<r;){var a=n[t],i=a.animatable,o=a.tweens,l=o.length-1,u=o[l];l&&(u=b(o,(function(t){return e<t.end}))[0]||u);for(var d=s(e-u.start-u.delay,0,u.duration)/u.duration,c=isNaN(d)?1:u.easing(d),m=u.to.strings,f=u.round,p=[],v=u.to.numbers.length,h=void 0,y=0;y<v;y++){var _=void 0,B=u.to.numbers[y],I=u.from.numbers[y]||0;_=u.isPath?q(u.value,c*B,u.isPathTargetInsideSVG):I+c*(B-I),f&&(u.isColor&&y>2||(_=Math.round(_*f)/f)),p.push(_)}var x=m.length;if(x){h=m[0];for(var E=0;E<x;E++){m[E];var w=m[E+1],M=p[E];isNaN(M)||(h+=w?M+w:M+" ")}}else h=p[0];Q[a.type](i.target,a.property,h,i.transforms),a.currentValue=h,t++}}function y(e){g[e]&&!g.passThrough&&g[e](g)}function _(e){var r=g.duration,a=g.delay,d=r-g.endDelay,p=f(e);g.progress=s(p/r*100,0,100),g.reversePlayback=p<g.currentTime,t&&function(e){if(g.reversePlayback)for(var n=l;n--;)v(e,t[n]);else for(var r=0;r<l;r++)v(e,t[r])}(p),!g.began&&g.currentTime>0&&(g.began=!0,y("begin")),!g.loopBegan&&g.currentTime>0&&(g.loopBegan=!0,y("loopBegin")),p<=a&&0!==g.currentTime&&h(0),(p>=d&&g.currentTime!==r||!r)&&h(r),p>a&&p<d?(g.changeBegan||(g.changeBegan=!0,g.changeCompleted=!1,y("changeBegin")),y("change"),h(p)):g.changeBegan&&(g.changeCompleted=!0,g.changeBegan=!1,y("changeComplete")),g.currentTime=s(p,0,r),g.began&&y("update"),e>=r&&(i=0,g.remaining&&!0!==g.remaining&&g.remaining--,g.remaining?(n=o,y("loopComplete"),g.loopBegan=!1,"alternate"===g.direction&&m()):(g.paused=!0,g.completed||(g.completed=!0,y("loopComplete"),y("complete"),!g.passThrough&&"Promise"in window&&(u(),c(g)))))}return c(g),g.reset=function(){var e=g.direction;g.passThrough=!1,g.currentTime=0,g.progress=0,g.paused=!0,g.began=!1,g.loopBegan=!1,g.changeBegan=!1,g.completed=!1,g.changeCompleted=!1,g.reversePlayback=!1,g.reversed="reverse"===e,g.remaining=g.loop,t=g.children;for(var n=l=t.length;n--;)g.children[n].reset();(g.reversed&&!0!==g.loop||"alternate"===e&&1===g.loop)&&g.remaining++,h(g.reversed?g.duration:0)},g._onDocumentVisibility=p,g.set=function(e,t){return X(e,t),g},g.tick=function(e){o=e,n||(n=o),_((o+(i-n))*ee.speed)},g.seek=function(e){_(f(e))},g.pause=function(){g.paused=!0,p()},g.play=function(){g.paused&&(g.completed&&g.reset(),g.paused=!1,J.push(g),p(),K())},g.reverse=function(){m(),g.completed=!g.reversed,p()},g.restart=function(){g.reset(),g.play()},g.remove=function(e){ne(H(e),g)},g.reset(),g.autoplay&&g.play(),g}function te(e,t){for(var n=t.length;n--;)x(e,t[n].animatable.target)&&t.splice(n,1)}function ne(e,t){var n=t.animations,r=t.children;te(e,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;te(e,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ee.version="3.2.1",ee.speed=1,ee.suspendWhenDocumentHidden=!0,ee.running=J,ee.remove=function(e){for(var t=H(e),n=J.length;n--;)ne(t,J[n])},ee.get=S,ee.set=X,ee.convertPx=O,ee.path=function(e,t){var n=d.str(e)?_(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:N(n),totalLength:R(n)*(r/100)}}},ee.setDashoffset=function(e){var t=R(e);return e.setAttribute("stroke-dasharray",t),t},ee.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,i=t.axis,o=t.from||0,s="first"===o,l="center"===o,u="last"===o,c=d.arr(e),g=c?parseFloat(e[0]):parseFloat(e),m=c?parseFloat(e[1]):0,f=k(c?e[1]:e)||0,p=t.start||0+(c?g:0),v=[],h=0;return function(e,t,d){if(s&&(o=0),l&&(o=(d-1)/2),u&&(o=d-1),!v.length){for(var y=0;y<d;y++){if(a){var _=l?(a[0]-1)/2:o%a[0],b=l?(a[1]-1)/2:Math.floor(o/a[0]),B=_-y%a[0],I=b-Math.floor(y/a[0]),x=Math.sqrt(B*B+I*I);"x"===i&&(x=-B),"y"===i&&(x=-I),v.push(x)}else v.push(Math.abs(o-y));h=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/h)*h}))),"reverse"===n&&(v=v.map((function(e){return i?e<0?-1*e:-e:Math.abs(h-e)})))}return p+(c?(m-g)/h:g)*(Math.round(100*v[t])/100)+f}},ee.timeline=function(e){void 0===e&&(e={});var t=ee(e);return t.duration=0,t.add=function(n,r){var i=J.indexOf(t),o=t.children;function s(e){e.passThrough=!0}i>-1&&J.splice(i,1);for(var l=0;l<o.length;l++)s(o[l]);var u=M(n,w(a,e));u.targets=u.targets||e.targets;var c=t.duration;u.autoplay=!1,u.direction=t.direction,u.timelineOffset=d.und(r)?c:A(r,c),s(t),t.seek(u.timelineOffset);var g=ee(u);s(g),o.push(g);var m=z(o,e);return t.delay=m.delay,t.endDelay=m.endDelay,t.duration=m.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ee.easing=y,ee.penner=h,ee.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const re=ee},359:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.update_trigger_listener=t.add_trigger_listener=void 0;let n=[];t.add_trigger_listener=(e,t,r,a=!1,i=!1)=>{n.push({trig_id:e,target_trig_id:t,elements:r,passed:a,passed2:i})},t.update_trigger_listener=()=>{for(let e=0;e<n.length;e++){let t=n[e].trig_id,r=n[e].target_trig_id,a=n[e].elements;if(n[e].passed=document.getElementById(t).getBoundingClientRect().y<document.getElementById(r).getBoundingClientRect().y,n[e].passed){if(n[e].passed2)continue;for(let e=0;e<a.length;e++)a[e].scroll_past();n[e].passed2=n[e].passed}else if(n[e].passed2){for(let e=0;e<a.length;e++)a[e].scroll_back();n[e].passed2=n[e].passed}}}},51:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.update_parallax=t.set_element_parallax=t.add_element_parallax=t.fadein_background=t.set_flicker=t.update_bg_container=t.update_title_container=void 0;const a=r(n(30));t.update_title_container=(e=!0)=>{document.getElementById("title-container").style.height=`${document.getElementById("main-bg").getBoundingClientRect().height}px`,document.getElementById("title-container").style.width=`${document.getElementById("main-bg").getBoundingClientRect().width>window.innerWidth?window.innerWidth:document.getElementById("main-bg").getBoundingClientRect().width}px`,document.getElementById("title-container").style.marginLeft=`${document.getElementById("main-bg").getBoundingClientRect().width>window.innerWidth?0:document.getElementById("main-bg").getBoundingClientRect().x}px`,document.getElementById("title-spacer").style.height=(window.innerHeight-document.getElementById("main-bg").getBoundingClientRect().height)/2+"px"},t.update_bg_container=()=>{document.getElementById("bg-container").style.height=`${document.getElementById("main-bg").getBoundingClientRect().height}px`,document.getElementById("bg-container").style.width=`${document.getElementById("main-bg").getBoundingClientRect().width}px`,document.getElementById("bg-container").style.left=`${document.getElementById("main-bg").getBoundingClientRect().width>window.innerWidth?0:document.getElementById("main-bg").getBoundingClientRect().x}px`},t.set_flicker=async(e,t,n,r,a=5e3,i=3e3)=>{const o=(e,t,n)=>{document.getElementById(e).style.backgroundColor="transparent",setTimeout((()=>{document.getElementById(e).style.backgroundColor=n}),200*Math.random()+200),t&&setTimeout((()=>{document.getElementById(e).style.backgroundColor="transparent",setTimeout((()=>{document.getElementById(e).style.backgroundColor=n}),200*Math.random()+200)}),300*Math.random()+200)};for(setTimeout((()=>o(e,t,n)),r);;)await new Promise((r=>{setTimeout((()=>{o(e,t,n),r()}),Math.random()*i+a)}))},t.fadein_background=()=>new Promise((e=>{(0,a.default)({targets:"#main-bg, #glo1, #glo2",opacity:[0,1],duration:2e3,easing:"easeInOutQuart",delay:300,complete:()=>{e()}})}));let i=[];t.add_element_parallax=(e,t,n="0px")=>{i.push({id:e,speed:t,offset:n})},t.set_element_parallax=(e,t,n="0px")=>{i[e].speed=t,i[e].offset=n},t.update_parallax=()=>{for(let e=0;e<i.length;e++){let t=document.getElementById(i[e].id);if(!t)continue;let n=i[e].speed,r=i[e].offset;t.style.transform=`translateY(calc(${r} + calc(-1 * ${document.getElementById("main-page").scrollTop*n}px)))`,requestAnimationFrame((()=>{}))}}},694:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.add_video_control_elements=t.load_video=void 0;const r=n(359);t.load_video=async(e,t,n,a,i=!1)=>{const o=document.getElementById(e);o&&(o.src=t,o.load(),i&&o.pause(),(0,r.add_trigger_listener)(n,"trig-theta",[{scroll_past:()=>{document.getElementById(e).play()},scroll_back:()=>{document.getElementById(e).pause()}}]),(0,r.add_trigger_listener)(a,"trig-omega",[{scroll_past:()=>{document.getElementById(e).pause()},scroll_back:()=>{document.getElementById(e).play()}}]))},t.add_video_control_elements=e=>{const t=document.getElementById(e);if(!t)return;const n=t.getAttribute("ctrl-video-id"),r=document.getElementById(n);if(!r)return;let a=!1,i=!0;t.addEventListener("mouseenter",(()=>{t.src=a?"./assets/img/vec/play-hr.svg":"./assets/img/vec/pause-hr.svg"})),t.addEventListener("mouseleave",(()=>{t.src=a?"./assets/img/vec/play-nm.svg":"./assets/img/vec/pause-nm.svg"})),t.addEventListener("click",(()=>{a=!a,i=!1,a?r.pause():r.play(),t.src=a?"./assets/img/vec/play-hr.svg":"./assets/img/vec/pause-hr.svg",requestAnimationFrame((()=>{})),setTimeout((()=>{i=!0}),20)})),r.addEventListener("play",(()=>{i&&(a=!1,t.src=a?"./assets/img/vec/play-nm.svg":"./assets/img/vec/pause-nm.svg")})),r.addEventListener("pause",(()=>{i&&(a=!0,t.src=a?"./assets/img/vec/play-nm.svg":"./assets/img/vec/pause-nm.svg")}))}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=n(51),t=n(359),r=n(694);window.onload=()=>{(0,r.load_video)("nerf-video","./assets/video/v1.mov","trig-4","trig-4.1",!0),(0,r.load_video)("anime-video","./assets/video/v2.mov","trig-5","trig-5.1",!0),(0,r.load_video)("tutorial-video","./assets/video/v3.mov","trig-7","trig-7.1",!0),(async()=>{(0,e.update_bg_container)(),(0,e.update_title_container)(),document.querySelectorAll(".video-controller").forEach((e=>{(0,r.add_video_control_elements)(`${e.id}`)})),(0,e.add_element_parallax)("bg-container",.4),(0,e.add_element_parallax)("main-bg",.4),(0,e.add_element_parallax)("glo2",-.02,"-2rem"),(0,e.add_element_parallax)("glo1",-.1);const n=-.7;let a=0,i=0;(0,e.add_element_parallax)("vid-sec-title-container",0),(0,e.add_element_parallax)("vid2-sec-title-container",0),(0,t.add_trigger_listener)("trig-1","trig-alpha",[{scroll_past:()=>{document.getElementById("about-content").classList.remove("disable-hidden"),document.getElementById("title-text-container").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("about-content").classList.add("disable-hidden"),document.getElementById("title-text-container").classList.remove("disable-hidden")}}]),(0,t.add_trigger_listener)("trig-2","trig-beta",[{scroll_past:()=>{document.getElementById("title-theory").style.color="#363636",document.getElementById("title-reality").style.color="#f3f3f3"},scroll_back:()=>{document.getElementById("title-theory").style.color="#f3f3f3",document.getElementById("title-reality").style.color="#363636"}}]),(0,t.add_trigger_listener)("trig-2","trig-beta",[{scroll_past:()=>{document.getElementById("vid-sep").classList.remove("disable-hidden"),document.getElementById("vid-section").classList.remove("disable-hidden"),setTimeout((()=>{document.getElementById("vid-sec-title").style.letterSpacing="1pt"}),150)},scroll_back:()=>{}}]),(0,t.add_trigger_listener)("trig-3","trig-alpha",[{scroll_past:()=>{a=document.getElementById("main-page").scrollTop*n-(document.getElementById("trig-alpha").getBoundingClientRect().y-document.getElementById("trig-3").getBoundingClientRect().y)*n,(0,e.set_element_parallax)(4,n,`${a}px`)},scroll_back:()=>{(0,e.set_element_parallax)(4,0)}}]),(0,t.add_trigger_listener)("trig-4","trig-beta",[{scroll_past:()=>{document.getElementById("vid-sec-title-container").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("vid-sec-title-container").classList.remove("disable-hidden")}}]),(0,t.add_trigger_listener)("trig-6","trig-alpha",[{scroll_past:()=>{i=document.getElementById("main-page").scrollTop*n-(document.getElementById("trig-alpha").getBoundingClientRect().y-document.getElementById("trig-6").getBoundingClientRect().y)*n,(0,e.set_element_parallax)(5,n,`${i}px`)},scroll_back:()=>{(0,e.set_element_parallax)(5,0)}}]),(0,t.add_trigger_listener)("trig-7","trig-alpha",[{scroll_past:()=>{document.getElementById("vid2-sec-title-container").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("vid2-sec-title-container").classList.remove("disable-hidden")}}]),(0,t.add_trigger_listener)("trig-8","trig-alpha",[{scroll_past:()=>{document.getElementById("vid-section").classList.add("disable-hidden"),document.getElementById("vid-sep-2").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("vid-section").classList.remove("disable-hidden"),document.getElementById("vid-sep-2").classList.remove("disable-hidden")}}]),(0,t.add_trigger_listener)("trig-9","trig-alpha",[{scroll_past:()=>{document.getElementById("host-section").classList.add("disable-hidden"),document.getElementById("host-sep").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("host-section").classList.remove("disable-hidden"),document.getElementById("host-sep").classList.remove("disable-hidden")}}]),(0,t.add_trigger_listener)("trig-10","trig-beta",[{scroll_past:()=>{document.getElementById("pat-section").classList.add("disable-hidden")},scroll_back:()=>{document.getElementById("pat-section").classList.remove("disable-hidden")}}]),await(0,e.fadein_background)(),(0,e.set_flicker)("glo1",!0,"#b91ad8",700*Math.random()+500),(0,e.set_flicker)("glo2",!0,"#84a4ff",700*Math.random()+200,3e3,6e3)})(),(0,t.update_trigger_listener)(),(0,e.update_parallax)(),document.getElementById("main-page").onscroll=n=>{(0,t.update_trigger_listener)(),(0,e.update_parallax)()},window.onresize=()=>{(0,e.update_bg_container)(),(0,e.update_title_container)(),(0,t.update_trigger_listener)(),(0,e.update_parallax)(),requestAnimationFrame((()=>{}))}}})()})();
//# sourceMappingURL=app.bundle.js.map