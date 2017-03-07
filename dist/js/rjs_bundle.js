/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

var requirejs,require,define;!function(n){function e(n,e){return $.call(n,e)}function o(n,e){var o,i,r,t,l,c,s,u,a,f,d,h,p=e&&e.split("/"),m=v.map,g=m&&m["*"]||{};if(n){for(n=n.split("/"),l=n.length-1,v.nodeIdCompat&&k.test(n[l])&&(n[l]=n[l].replace(k,"")),"."===n[0].charAt(0)&&p&&(h=p.slice(0,p.length-1),n=h.concat(n)),a=0;a<n.length;a++)if(d=n[a],"."===d)n.splice(a,1),a-=1;else if(".."===d){if(0===a||1===a&&".."===n[2]||".."===n[a-1])continue;a>0&&(n.splice(a-1,2),a-=2)}n=n.join("/")}if((p||g)&&m){for(o=n.split("/"),a=o.length;a>0;a-=1){if(i=o.slice(0,a).join("/"),p)for(f=p.length;f>0;f-=1)if(r=m[p.slice(0,f).join("/")],r&&(r=r[i])){t=r,c=a;break}if(t)break;!s&&g&&g[i]&&(s=g[i],u=a)}!t&&s&&(t=s,c=u),t&&(o.splice(0,c,t),n=o.join("/"))}return n}function i(e,o){return function(){var i=w.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),f.apply(n,i.concat([e,o]))}}function r(n){return function(e){return o(e,n)}}function t(n){return function(e){p[n]=e}}function l(o){if(e(m,o)){var i=m[o];delete m[o],g[o]=!0,a.apply(n,i)}if(!e(p,o)&&!e(g,o))throw new Error("No "+o);return p[o]}function c(n){var e,o=n?n.indexOf("!"):-1;return o>-1&&(e=n.substring(0,o),n=n.substring(o+1,n.length)),[e,n]}function s(n){return n?c(n):[]}function u(n){return function(){return v&&v.config&&v.config[n]||{}}}var a,f,d,h,p={},m={},v={},g={},$=Object.prototype.hasOwnProperty,w=[].slice,k=/\.js$/;d=function(n,e){var i,t=c(n),s=t[0],u=e[1];return n=t[1],s&&(s=o(s,u),i=l(s)),s?n=i&&i.normalize?i.normalize(n,r(u)):o(n,u):(n=o(n,u),t=c(n),s=t[0],n=t[1],s&&(i=l(s))),{f:s?s+"!"+n:n,n:n,pr:s,p:i}},h={require:function(n){return i(n)},exports:function(n){var e=p[n];return"undefined"!=typeof e?e:p[n]={}},module:function(n){return{id:n,uri:"",exports:p[n],config:u(n)}}},a=function(o,r,c,u){var a,f,v,$,w,k,y,b=[],j=typeof c;if(u=u||o,k=s(u),"undefined"===j||"function"===j){for(r=!r.length&&c.length?["require","exports","module"]:r,w=0;w<r.length;w+=1)if($=d(r[w],k),f=$.f,"require"===f)b[w]=h.require(o);else if("exports"===f)b[w]=h.exports(o),y=!0;else if("module"===f)a=b[w]=h.module(o);else if(e(p,f)||e(m,f)||e(g,f))b[w]=l(f);else{if(!$.p)throw new Error(o+" missing "+f);$.p.load($.n,i(u,!0),t(f),{}),b[w]=p[f]}v=c?c.apply(p[o],b):void 0,o&&(a&&a.exports!==n&&a.exports!==p[o]?p[o]=a.exports:v===n&&y||(p[o]=v))}else o&&(p[o]=c)},requirejs=require=f=function(e,o,i,r,t){if("string"==typeof e)return h[e]?h[e](o):l(d(e,s(o)).f);if(!e.splice){if(v=e,v.deps&&f(v.deps,v.callback),!o)return;o.splice?(e=o,o=i,i=null):e=n}return o=o||function(){},"function"==typeof i&&(i=r,r=t),r?a(n,e,o,i):setTimeout(function(){a(n,e,o,i)},4),f},f.config=function(n){return f(n)},requirejs._defined=p,define=function(n,o,i){if("string"!=typeof n)throw new Error("See almond README: incorrect module build, no module name");o.splice||(i=o,o=[]),e(p,n)||e(m,n)||(m[n]=[n,o,i])},define.amd={jQuery:!0}}(),define("../../tools/almond",function(){}),define("nav",[],function(){return console.log("nav script module loaded"),{navani:function(){$(document).ready(function(){$("#nav").addClass("js").before('<div id="menu">☰</div>'),$("#menu").click(function(){$("#nav").slideToggle("slow")}),$(window).resize(function(){window.innerWidth<=524&&$(".logo-h-mob").addClass("logoHide")}),$(window).resize(function(){window.innerWidth>768&&$("#nav").removeAttr("style")}),$(window).resize(function(){window.innerWidth>524&&$(".logo-h-mob").removeClass("logoHide")}),$(window).scroll(function(){$(document).scrollTop()>50?($(".nav.shrink").addClass("shrink-nav"),$(".logo.shrink").addClass("shrink-logo")):($(".nav.shrink").removeClass("shrink-nav"),$(".logo.shrink").removeClass("shrink-logo"))})})}}}),define("smoothscll",[],function(){return console.log("nav script module loaded"),{smoothScroll:function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})}}}),define("nav_color",[],function(){return console.log("nav_color script module loaded"),{nav_color_change:function(){$(document).ready(function(){$(window).scroll(function(){$(document).scrollTop()>50?($(".nav-clr-change").addClass("nav-color"),$(".link-clr-change").addClass("link-color")):($(".nav-clr-change").removeClass("nav-color"),$(".link-clr-change").removeClass("link-color"))})})}}}),requirejs.config({baseUrl:"./lib",paths:{nav:"modules/navmod",smoothscll:"modules/smoothscroll",nav_color:"modules/nav_color"}}),require(["nav","smoothscll","nav_color"],function(n,e,o){n.navani(),e.smoothScroll(),o.nav_color_change()}),define("require.config",function(){});