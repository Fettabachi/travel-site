(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[582],{222:(e,n,s)=>{"use strict";function i(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}s.r(n),s.d(n,{default:()=>a});const a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var n,s;return n=e,(s=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)}))}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal">\n        <div class="modal__inner">\n        <h2\n            class="section-title section-title--blue section-title--less-margin"\n        >\n            <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n            Get in <strong>Touch</strong>\n        </h2>\n        <div class="wrapper wrapper--narrow">\n            <p class="modal__description">\n            We will have an online order system in place soon. Until then,\n            connect with us on any of the platforms below!\n            </p>\n        </div>\n\n        <div class="social-icons">\n            <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n            /></a>\n            <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n            /></a>\n            <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n            /></a>\n            <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n            /></a>\n        </div>\n        </div>\n        <div class="modal__close">X</div>\n        </div>\n\n        ')}}])&&i(n.prototype,s),e}()}}]);