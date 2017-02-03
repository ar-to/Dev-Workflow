/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

var requirejs,require,define;!function(n){function e(n,e){return w.call(n,e)}function o(n,e){var o,i,r,t,l,s,u,f,c,a,d,p,h=e&&e.split("/"),m=g.map,v=m&&m["*"]||{};if(n){for(n=n.split("/"),l=n.length-1,g.nodeIdCompat&&y.test(n[l])&&(n[l]=n[l].replace(y,"")),"."===n[0].charAt(0)&&h&&(p=h.slice(0,h.length-1),n=p.concat(n)),c=0;c<n.length;c++)if(d=n[c],"."===d)n.splice(c,1),c-=1;else if(".."===d){if(0===c||1===c&&".."===n[2]||".."===n[c-1])continue;c>0&&(n.splice(c-1,2),c-=2)}n=n.join("/")}if((h||v)&&m){for(o=n.split("/"),c=o.length;c>0;c-=1){if(i=o.slice(0,c).join("/"),h)for(a=h.length;a>0;a-=1)if(r=m[h.slice(0,a).join("/")],r&&(r=r[i])){t=r,s=c;break}if(t)break;!u&&v&&v[i]&&(u=v[i],f=c)}!t&&u&&(t=u,s=f),t&&(o.splice(0,s,t),n=o.join("/"))}return n}function i(e,o){return function(){var i=$.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),a.apply(n,i.concat([e,o]))}}function r(n){return function(e){return o(e,n)}}function t(n){return function(e){h[n]=e}}function l(o){if(e(m,o)){var i=m[o];delete m[o],v[o]=!0,c.apply(n,i)}if(!e(h,o)&&!e(v,o))throw new Error("No "+o);return h[o]}function s(n){var e,o=n?n.indexOf("!"):-1;return o>-1&&(e=n.substring(0,o),n=n.substring(o+1,n.length)),[e,n]}function u(n){return n?s(n):[]}function f(n){return function(){return g&&g.config&&g.config[n]||{}}}var c,a,d,p,h={},m={},g={},v={},w=Object.prototype.hasOwnProperty,$=[].slice,y=/\.js$/;d=function(n,e){var i,t=s(n),u=t[0],f=e[1];return n=t[1],u&&(u=o(u,f),i=l(u)),u?n=i&&i.normalize?i.normalize(n,r(f)):o(n,f):(n=o(n,f),t=s(n),u=t[0],n=t[1],u&&(i=l(u))),{f:u?u+"!"+n:n,n:n,pr:u,p:i}},p={require:function(n){return i(n)},exports:function(n){var e=h[n];return"undefined"!=typeof e?e:h[n]={}},module:function(n){return{id:n,uri:"",exports:h[n],config:f(n)}}},c=function(o,r,s,f){var c,a,g,w,$,y,j,b=[],q=typeof s;if(f=f||o,y=u(f),"undefined"===q||"function"===q){for(r=!r.length&&s.length?["require","exports","module"]:r,$=0;$<r.length;$+=1)if(w=d(r[$],y),a=w.f,"require"===a)b[$]=p.require(o);else if("exports"===a)b[$]=p.exports(o),j=!0;else if("module"===a)c=b[$]=p.module(o);else if(e(h,a)||e(m,a)||e(v,a))b[$]=l(a);else{if(!w.p)throw new Error(o+" missing "+a);w.p.load(w.n,i(f,!0),t(a),{}),b[$]=h[a]}g=s?s.apply(h[o],b):void 0,o&&(c&&c.exports!==n&&c.exports!==h[o]?h[o]=c.exports:g===n&&j||(h[o]=g))}else o&&(h[o]=s)},requirejs=require=a=function(e,o,i,r,t){if("string"==typeof e)return p[e]?p[e](o):l(d(e,u(o)).f);if(!e.splice){if(g=e,g.deps&&a(g.deps,g.callback),!o)return;o.splice?(e=o,o=i,i=null):e=n}return o=o||function(){},"function"==typeof i&&(i=r,r=t),r?c(n,e,o,i):setTimeout(function(){c(n,e,o,i)},4),a},a.config=function(n){return a(n)},requirejs._defined=h,define=function(n,o,i){if("string"!=typeof n)throw new Error("See almond README: incorrect module build, no module name");o.splice||(i=o,o=[]),e(h,n)||e(m,n)||(m[n]=[n,o,i])},define.amd={jQuery:!0}}(),define("almond",function(){}),define("nav",[],function(){return console.log("nav script module loaded"),{navani:function(){$(document).ready(function(){$("#nav").addClass("js").before('<div id="menu">☰</div>'),$("#menu").click(function(){$("#nav").slideToggle("slow")}),$(window).resize(function(){window.innerWidth<=524&&$("#logo").addClass("logoHide")}),$(window).resize(function(){window.innerWidth>768&&$("#nav").removeAttr("style")}),$(window).resize(function(){window.innerWidth>524&&$("#logo").removeClass("logoHide")}),$(window).scroll(function(){$(document).scrollTop()>50?($("#nav").addClass("shrink-nav"),$("#logo").addClass("shrink-logo")):($("#nav").removeClass("shrink-nav"),$("#logo").removeClass("shrink-logo"))})})}}}),define("smoothscll",[],function(){return console.log("nav script module loaded"),{smoothScroll:function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})}}}),requirejs.config({baseUrl:"js/lib",paths:{nav:"modules/navmod",smoothscll:"modules/smoothscroll"}}),require(["nav","smoothscll"],function(n,e){n.navani(),e.smoothScroll()}),define("build",function(){});