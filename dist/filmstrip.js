(()=>{"use strict";var e={SLIDES:"slides",SLIDE:"slide"};e.SLIDES_SEPARATE=e.SLIDES+"-separate",e.SLIDES_SEPARATE_UP=e.SLIDES_SEPARATE+"-up",e.SLIDES_SEPARATE_LEFT=e.SLIDES_SEPARATE+"-left",e.SLIDES_SEPARATE_RIGHT=e.SLIDES_SEPARATE+"-right",e.SLIDES_FILMSTRIP_HORIZONTAL=e.SLIDES+"-filmstrip-horizontal";var t=e.SLIDE+"-format-";e.SLIDE_FORMAT_4_3_LANDSCAPE=t+"4-3-landscape",e.SLIDE_FORMAT_16_9_LANDSCAPE=t+"16-9-landscape",e.SLIDE_FORMAT_4_3_PORTRAIT=t+"4-3-portrait",e.SLIDE_FORMAT_16_9_PORTRAIT=t+"16-9-portrait",e.SLIDE_FORMAT_SQUARE=t+"square",e.SHOW_PERFORATIONS="show-perforations",e.PERFORATION_WRAPPER="perforation-wrapper";const i={SLIDESHOW_TYPE:{SEPARATE:"separate",FILMSTRIP:"filmstrip"},SEPARATE_SLIDES_DIRECTION:{UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right"},FILMSTRIP_DIRECTION:{HORIZONTAL:"horizontal",VERTICAL:"vertical"},SLIDE_FORMAT:{FLEXIBLE:"flexible",SQUARE:"square",LANDSCAPE_4_3:"4:3-landscape",LANDSCAPE_16_9:"16:9-landscape",PORTRAIT_4_3:"4:3-portrait",PORTRAIT_16_9:"16:9-portrait"},CLASSES:e,SWITCHES:{PREVIOUS:"previous",NEXT:"next"},hasSpecificFormat:function(t){var i=t.classList;return i.contains(e.SLIDE_FORMAT_4_3_LANDSCAPE)||i.contains(e.SLIDE_FORMAT_16_9_LANDSCAPE)||i.contains(e.SLIDE_FORMAT_4_3_PORTRAIT)||i.contains(e.SLIDE_FORMAT_16_9_PORTRAIT)||i.contains(e.SLIDE_FORMAT_SQUARE)},addPerforationToSlide:function(t,i){var n=document.createElement("div");n.classList.add(e.PERFORATION_WRAPPER),t.append(n);for(var s=1;s<i;s++)n=n.cloneNode(!1),t.append(n)}};function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){r(e,t),t.add(e)}function r(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function a(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,E(e,t,"get"))}function S(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,E(e,t,"set"),i),i}function E(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function o(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}var l=new WeakMap,_=new WeakSet,c=new WeakSet,I=new WeakSet,T=new WeakSet,h=function(){function e(t){var n,a,E;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,T),s(this,I),s(this,c),s(this,_),E={writable:!0,value:0},r(n=this,a=l),a.set(n,E),this._parent=document.getElementsByClassName(i.CLASSES.SLIDES)[0],this._isLoop=!!this._parent.dataset.loop,this._isLoop){var h=this._parent.children[0].cloneNode(!0);this._parent.append(h)}if(this._slideshowStyle=o(this,c,R).call(this,i.CLASSES.SLIDES_SEPARATE)?i.SLIDESHOW_TYPE.SEPARATE:i.SLIDESHOW_TYPE.FILMSTRIP,this._slideshowStyle===i.SLIDESHOW_TYPE.SEPARATE)this._slidesDirection=o(this,c,R).call(this,i.CLASSES.SLIDES_SEPARATE_UP)?i.SEPARATE_SLIDES_DIRECTION.UP:o(this,c,R).call(this,i.CLASSES.SLIDES_SEPARATE_RIGHT)?i.SEPARATE_SLIDES_DIRECTION.RIGHT:o(this,c,R).call(this,i.CLASSES.SLIDES_SEPARATE_LEFT)?i.SEPARATE_SLIDES_DIRECTION.LEFT:i.SEPARATE_SLIDES_DIRECTION.DOWN;else{this._slidesDirection=o(this,c,R).call(this,i.CLASSES.SLIDES_FILMSTRIP_HORIZONTAL)?i.FILMSTRIP_DIRECTION.HORIZONTAL:i.FILMSTRIP_DIRECTION.VERTICAL;var L=o(this,c,R).call(this,i.CLASSES.SLIDE_FORMAT_4_3_LANDSCAPE)?i.SLIDE_FORMAT.LANDSCAPE_4_3:o(this,c,R).call(this,i.CLASSES.SLIDE_FORMAT_16_9_LANDSCAPE)?i.SLIDE_FORMAT.LANDSCAPE_16_9:o(this,c,R).call(this,i.CLASSES.SLIDE_FORMAT_4_3_PORTRAIT)?i.SLIDE_FORMAT.PORTRAIT_4_3:o(this,c,R).call(this,i.CLASSES.SLIDE_FORMAT_16_9_PORTRAIT)?i.SLIDE_FORMAT.PORTRAIT_16_9:o(this,c,R).call(this,i.CLASSES.SLIDE_FORMAT_SQUARE)?i.SLIDE_FORMAT.SQUARE:i.SLIDE_FORMAT.FLEXIBLE;if(i.hasSpecificFormat(this._parent)&&o(this,c,R).call(this,i.CLASSES.SHOW_PERFORATIONS))switch(L){case i.SLIDE_FORMAT.LANDSCAPE_4_3:o(this,_,A).call(this,this._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?4:8);break;case i.SLIDE_FORMAT.SQUARE:o(this,_,A).call(this,4);break;case i.SLIDE_FORMAT.LANDSCAPE_16_9:o(this,_,A).call(this,this._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?3:12);break;case i.SLIDE_FORMAT.PORTRAIT_4_3:o(this,_,A).call(this,this._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?8:4);break;case i.SLIDE_FORMAT.PORTRAIT_16_9:o(this,_,A).call(this,this._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?12:3)}}this._automatedSwitchBetweenSlides=this._parent.dataset.switchAfter,o(this,T,d).call(this),this._slidesCount=document.getElementsByClassName(i.CLASSES.SLIDE).length,t&&t>1&&(S(this,l,t-2),this.nextSlide())}var t,E,h;return t=e,(E=[{key:"previousSlide",value:function(){var e;a(this,l)>0&&(o(this,I,L).call(this,i.SWITCHES.PREVIOUS),S(this,l,(e=a(this,l),--e)),o(this,T,d).call(this))}},{key:"nextSlide",value:function(){var e;a(this,l)+1<this._slidesCount&&(o(this,I,L).call(this,i.SWITCHES.NEXT),S(this,l,(e=a(this,l),++e)),o(this,T,d).call(this))}},{key:"slidesDirection",get:function(){return this._slidesDirection}},{key:"isBeginning",value:function(){return 0===a(this,l)}},{key:"isEnding",value:function(){return a(this,l)+1===this._slidesCount}}])&&n(t.prototype,E),h&&n(t,h),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){for(var t=this._parent.children,n=0;n<t.length;n++)if(i.hasSpecificFormat(t[n]))return;for(var s=0;s<t.length;s++)i.addPerforationToSlide(t[s],e)}function R(e){return this._parent.classList.contains(e)}function L(e){var t=this,n=100,s=-100*a(this,l),r=1,E=1;this._slideshowStyle===i.SLIDESHOW_TYPE.SEPARATE?function a(o){setTimeout((function(){t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.UP?t._parent.style.top=-(o?100-E:E)+"vh":t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.RIGHT?t._parent.style.left=(o?100-E:E)+"vw":t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.LEFT?t._parent.style.left=-(o?100-E:E)+"vw":t._parent.style.top=(o?100-E:E)+"vh",E<50?r++:r>1&&r--,E+=r,o?E<=n?a(!0):t._isLoop&&t.isEnding()&&(S(t,l,0),t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.UP||t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.DOWN?t._parent.style.left="0vw":t._parent.style.top="0vh"):E<=n?a(!1):(t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.UP||t._slidesDirection===i.SEPARATE_SLIDES_DIRECTION.DOWN?t._parent.style.left=(e===i.SWITCHES.NEXT?s-100:s+100)+"vw":t._parent.style.top=(e===i.SWITCHES.NEXT?s-100:s+100)+"vh",r=1,E=1,a(!0))}),20)}():function a(){setTimeout((function(){t._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?t._parent.style.top=(e===i.SWITCHES.NEXT?s-E:s+E)+"vh":t._parent.style.left=(e===i.SWITCHES.NEXT?s-E:s+E)+"vw",E<50?r++:r>1&&r--,(E+=r)<=n?a():t._isLoop&&t.isEnding()&&(S(t,l,0),t._slidesDirection===i.FILMSTRIP_DIRECTION.VERTICAL?t._parent.style.top="0vh":t._parent.style.left="0vw")}),20)}()}function d(){var e=this;if(clearTimeout(this._timer),!this.isEnding()||this._isLoop&&this.isEnding()){var t=this._parent.children[a(this,l)].dataset.switchAfter||this._automatedSwitchBetweenSlides,i=parseInt(t);if(Number.isNaN(i)||i<=0)return;this._timer=setTimeout((function(){e.nextSlide()}),1e3*i)}}function D(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("overlay","overlay-"+t),this.overlayElement.innerHTML='<div class="previous-slide" name="previous">\n                                            <div class="arrow" title="Previous slide"></div>\n                                        </div>\n                                        <div class="next-slide" name="next">\n                                            <div class="arrow" title="Next slide"></div>\n                                        </div>',document.body.append(this.overlayElement)}var t,i,n;return t=e,(i=[{key:"addNextSlideClickListener",value:function(e){this.overlayElement.children.next.children[0].onclick=e}},{key:"addPreviousSlideClickListener",value:function(e){this.overlayElement.children.previous.children[0].onclick=e}}])&&D(t.prototype,i),n&&D(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p=new h(function(){var e=window.location.hash;e=e?e.substring(1):e;var t=parseInt(e);return window.location.hash="",Number.isNaN(t)?1:t}()),P=new u(p.slidesDirection),f=function(){p.previousSlide()},O=function(){p.nextSlide()};P.addPreviousSlideClickListener(f),P.addNextSlideClickListener(O);var v,C,N,w=new Set(["ArrowLeft","ArrowUp"]),F=new Set(["ArrowRight","ArrowDown","Space","Enter","NumpadEnter"]);document.addEventListener("keyup",(function(e){w.has(e.code)?f():F.has(e.code)&&O()})),v=p.slidesDirection,C=0,N=0,document.addEventListener("touchstart",(function(e){C="vertical"===v||"up"===v||"down"===v?e.changedTouches[0].screenY:e.changedTouches[0].screenX})),document.addEventListener("touchend",(function(e){(N="vertical"===v||"up"===v||"down"===v?e.changedTouches[0].screenY:e.changedTouches[0].screenX)<C?O():N>C&&f()}))})();