"undefined"==typeof globalThis&&(window.globalThis=window),function(){"use strict";var e=document.querySelector('script[type="importmap"]'),o={};if(e)try{o=JSON.parse(e.innerHTML).imports}catch(o){throw Error("invalid import-map syntax: "+e.innerHTML)}function r(e){if(e in o)return o[e];for(var r in o)if("/"===r.slice(-1)&&0===e.indexOf(r))return e.replace(r,o[r]);return e}"undefined"==typeof globalThis&&(window.globalThis=window);var n=globalThis,t=document.getElementsByTagName("script")[0],i={},l="noModule"in t;function a(e,o,n){void 0===o&&(o={});var a=e instanceof Blob;a||(e=r(e));var d=!!o.module,s=!a&&i[e];if(!d||l)if(s)n&&(s.done?n():s.callbacks.push(n));else{a||(s=i[e]={done:!1,callbacks:[]},n&&s.callbacks.push(n));var c=document.createElement("script"),m=o,u=m.async,p=m.crossorigin,f=m.noModule,y=m.integrity,g=m.referrerPolicy;c.async=u||!1,c.charset="utf-8",c.src=a?URL.createObjectURL(e):e,c.type=d?"module":"text/javascript",c.noModule=!0===f,p&&(c.crossOrigin="anonymous"),y&&(c.integrity=y),g&&(c.referrerPolicy=g);var v=function(e){clearTimeout(h),c.onload=c.onerror=null;var o=[];if(a?(URL.revokeObjectURL(c.src),n&&o.push(n)):s&&(s.done=!0,o=s.callbacks.slice(),s.callbacks=[]),e||a)try{c.remove()}catch(e){}for(var r=0;r<o.length;r++)o[r](e)},h=setTimeout(v,12e4,Error("timeout loading "+e));c.onload=function(){return v()},c.onerror=function(){return v(Error("failure loading "+e))},null!=t.parentNode?t.parentNode.insertBefore(c,t.nextSibling):document.head.appendChild(c)}else n&&n(new Error("modules not supported"))}void 0===n.loadJS&&Object.defineProperty(n,"loadJS",{value:a,writable:!1}),void 0===n.loadScript&&(n.loadScript=n.loadJS),a.supportsESM=l,a.resolveImportMappedHref=r,"undefined"==typeof globalThis&&(window.globalThis=window);var d=globalThis,s=document.head.getElementsByTagName("link")[0];function c(e,o,n){if(void 0===o&&(o={}),e=r(e),document.querySelector('link[href="'+e+'"][rel="stylesheet"]'))n&&n();else{var t=document.createElement("link");t.href=e,t.rel="stylesheet",t.media="only loading",o.crossorigin&&(t.crossOrigin="anonymous");var i=function(e){if(clearTimeout(l),t.onload=t.onerror=null,e)try{t.remove()}catch(e){}else t.media="all";n&&n(e)},l=setTimeout(i,12e4,Error("timeout loading "+e));t.onload=function(){return i()},t.onerror=function(){return i(Error("failure loading "+e))},null!=s.parentNode?s.parentNode.insertBefore(t,s.nextSibling):document.head.appendChild(t)}}void 0===d.loadCSS&&Object.defineProperty(d,"loadCSS",{value:c,writable:!1});var m=globalThis;void 0===m.dynamicImport&&(Object.defineProperty(m,"dynamicImport",{value:p,writable:!1}),m.dynamicImport.map={});var u=0;function p(e,o){var r=o?new URL(o,location.href):location.href;e=new URL(loadJS.resolveImportMappedHref(e),r).href;var n=m.dynamicImport.map[e];if(n)return n instanceof Promise?n:Promise.resolve(n);u++,m.module||(m.module={exports:{}},m.exports=m.module.exports);var t=new Promise((function(o,r){var n=loadJS.supportsESM?new Blob(["import * as m from '"+e+"';","if(Object.keys(m).length)globalThis.dynamicImport.map['"+e+"']=m;"],{type:"text/javascript"}):e,t=loadJS.supportsESM?{module:!0}:{async:!0};loadJS(n,t,(function(n){u--;var t=m.dynamicImport.map[e];if(t instanceof Promise&&(t=m.dynamicImport.map[e]=null),n)return f(),r(Error("failure loading "+e));t||(m.module.exports!==m.exports||Object.keys(m.module.exports).length>0)&&(t=m.dynamicImport.map[e]=m.module.exports),t||(console&&console.warn("no module exports detected for '"+e+"'"),t={}),f(),o(t)}))}));return m.dynamicImport.map[e]=t,t}function f(){u<=0?(u=0,delete m.module):m.module.exports=m.exports={}}void 0===window.nrknoStaticLoaders&&(window.nrknoStaticLoaders={loadJS:a,loadCSS:c,dynamicImport:p});var y,g;g=(y="https://static.nrk.no/nrkno-polyfills/1.0.0")+"/es6-polyfill.js",null==window.Reflect&&a(g),function(e){"customElements"in window||a(e)}(y+"/dom-polyfill.js");window.nrknoStaticLoaders.loadJS("https://static.nrk.no/nrkno-toggle/1.1.0/nrkno-toggle-define.mjs",{module:!0,crossorigin:!0}),window.nrknoStaticLoaders.loadJS("https://static.nrk.no/nrkno-toggle/1.1.0/nrkno-toggle-define.js",{noModule:!0,crossorigin:!0})}();
