!function(e,t){"use strict";var r=function(e){var r=e.getAttribute("type")||input.nodeName.toLowerCase(),i="number"===r||"range"===r,a=e.value.length,n=!0;if("radio"===e.type&&e.name){var s=t.getElementsByName(e.name);if(s.length>0)for(var o=0;o<s.length;o++)if(s[o].form===e.form&&e.checked){e=s[o];break}}var l={badInput:i&&a>0&&!/[-+]?[0-9]/.test(e.value),patternMismatch:e.hasAttribute("pattern")&&a>0&&!1===new RegExp(e.getAttribute("pattern")).test(e.value),rangeOverflow:e.hasAttribute("max")&&i&&e.value>0&&Number(e.value)>Number(e.getAttribute("max")),rangeUnderflow:e.hasAttribute("min")&&i&&e.value>0&&Number(e.value)<Number(e.getAttribute("min")),stepMismatch:i&&(e.hasAttribute("step")&&"any"!==e.getAttribute("step")&&Number(e.value)%Number(e.getAttribute("step"))!=0||!e.hasAttribute("step")&&Number(e.value)%1!=0),tooLong:e.hasAttribute("maxLength")&&e.getAttribute("maxLength")>0&&a>parseInt(e.getAttribute("maxLength"),10),tooShort:e.hasAttribute("minLength")&&e.getAttribute("minLength")>0&&a>0&&a<parseInt(e.getAttribute("minLength"),10),typeMismatch:a>0&&("email"===r&&!/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e.value)||"url"===r&&!/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,5})?(?:[\/?#]\S*)?$/.test(e.value)),valueMissing:e.hasAttribute("required")&&(("checkbox"===r||"radio"===r)&&!e.checked||"select"===r&&e.options[e.selectedIndex].value<1||"checkbox"!==r&&"radio"!==r&&"select"!==r&&a<1)};for(var u in l)if(l.hasOwnProperty(u)&&l[u]){n=!1;break}return l.valid=n,l};Object.defineProperty(HTMLInputElement.prototype,"validity",{get:function(){return r(this)},configurable:!0})}(window,document),/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){"use strict";if("Element"in e){var t="classList",r="prototype",i=e.Element[r],a=Object,n=String[r].trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array[r].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},o=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},l=function(e,t){if(""===t)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(e,t)},u=function(e){for(var t=n.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],i=0,a=r.length;i<a;i++)this.push(r[i]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=u[r]=[],f=function(){return new u(this)};if(o[r]=Error[r],c.item=function(e){return this[e]||null},c.contains=function(e){return e+="",-1!==l(this,e)},c.add=function(){var e,t=arguments,r=0,i=t.length,a=!1;do{e=t[r]+"",-1===l(this,e)&&(this.push(e),a=!0)}while(++r<i);a&&this._updateClassName()},c.remove=function(){var e,t,r=arguments,i=0,a=r.length,n=!1;do{for(e=r[i]+"",t=l(this,e);-1!==t;)this.splice(t,1),n=!0,t=l(this,e)}while(++i<a);n&&this._updateClassName()},c.toggle=function(e,t){e+="";var r=this.contains(e),i=r?!0!==t&&"remove":!1!==t&&"add";return i&&this[i](e),!0===t||!1===t?t:!r},c.toString=function(){return this.join(" ")},a.defineProperty){var d={get:f,enumerable:!0,configurable:!0};try{a.defineProperty(i,t,d)}catch(e){e.number!==undefined&&-2146823252!==e.number||(d.enumerable=!1,a.defineProperty(i,t,d))}}else a[r].__defineGetter__&&i.__defineGetter__(t,f)}}(self),function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var r,i=arguments.length;for(r=0;r<i;r++)e=arguments[r],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:r.call(this,e)}}e=null}());for(var forms=document.querySelectorAll(".validate"),i=0;i<forms.length;i++)forms[i].setAttribute("novalidate",!0);var hasError=function(e){if(!e.disabled&&"file"!==e.type&&"reset"!==e.type&&"submit"!==e.type&&"button"!==e.type){var t=e.validity;if(!t.valid){if(t.valueMissing)return"Please fill out this field.";if(t.typeMismatch){if("email"===e.type)return"Please enter an email address.";if("url"===e.type)return"Please enter a URL."}return t.tooShort?"Please lengthen this text to "+e.getAttribute("minLength")+" characters or more. You are currently using "+e.value.length+" characters.":t.tooLong?"Please shorten this text to no more than "+e.getAttribute("maxLength")+" characters. You are currently using "+e.value.length+" characters.":t.patternMismatch?e.hasAttribute("title")?e.getAttribute("title"):"Please match the requested format.":t.badInput?"Please enter a number.":t.stepMismatch?"Please select a valid value.":t.rangeOverflow?"Please select a value that is no more than "+e.getAttribute("max")+".":t.rangeUnderflow?"Please select a value that is no less than "+e.getAttribute("min")+".":"The value you entered for this field is invalid."}}},showError=function(e,t){if(e.classList.add("error"),"radio"===e.type&&e.name){var r=e.form.querySelectorAll('[name="'+e.name+'"]');if(r.length>0){for(var i=0;i<r.length;i++)r[i].classList.add("error");e=r[r.length-1]}}var a=e.id||e.name;if(a){var n=e.form.querySelector(".error-message#error-for-"+a);if(!n){n=document.createElement("div"),n.className="error-message",n.id="error-for-"+a;var s;"radio"!==e.type&&"checkbox"!==e.type||(s=e.form.querySelector('label[for="'+a+'"]')||e.parentNode)&&s.parentNode.insertBefore(n,s.nextSibling),s||e.parentNode.insertBefore(n,e.nextSibling)}e.setAttribute("aria-describedby","error-for-"+a),n.innerHTML=t,n.style.display="block",n.style.visibility="visible"}},removeError=function(e){if(e.classList.remove("error"),e.removeAttribute("aria-describedby"),"radio"===e.type&&e.name){var t=e.form.querySelectorAll('[name="'+e.name+'"]');if(t.length>0){for(var r=0;r<t.length;r++)t[r].classList.remove("error");e=t[t.length-1]}}var i=e.id||e.name;if(i){var a=e.form.querySelector(".error-message#error-for-"+i);a&&(a.innerHTML="",a.style.display="none",a.style.visibility="hidden")}},serialize=function(e){var t="";for(i=0;i<e.elements.length;i++){var r=e.elements[i];r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type&&(("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&(t+="&"+encodeURIComponent(r.name)+"="+encodeURIComponent(r.value)))}return t};window.displayMailChimpStatus=function(e){if(e.result&&e.msg&&mcStatus){if(mcStatus.innerHTML=e.msg,"error"===e.result)return mcStatus.classList.remove("success-message"),void mcStatus.classList.add("error-message");mcStatus.classList.remove("error-message"),mcStatus.classList.add("success-message")}};var submitMailChimpForm=function(e){var t=e.getAttribute("action");t=t.replace("/post?u=","/post-json?u="),t+=serialize(e)+"&c=displayMailChimpStatus";var r=window.document.getElementsByTagName("script")[0],i=window.document.createElement("script");i.src=t,window.mcStatus=e.querySelector(".mc-status"),r.parentNode.insertBefore(i,r),i.onload=function(){this.remove()}};document.addEventListener("blur",function(e){if(e.target.form.classList.contains("validate")){var t=hasError(e.target);if(t)return void showError(e.target,t);removeError(e.target)}},!0),document.addEventListener("submit",function(e){if(e.target.classList.contains("validate")){e.preventDefault();for(var t,r,i=e.target.elements,a=0;a<i.length;a++)(t=hasError(i[a]))&&(showError(i[a],t),r||(r=i[a]));r&&r.focus(),submitMailChimpForm(e.target)}},!1);