function e(){e=function(e,r){return new a(e,void 0,r)};var r=RegExp.prototype,n=new WeakMap;function a(e,r,t){var o=new RegExp(e,r);return n.set(o,t||n.get(e)),l(o,a.prototype)}function o(e,r){var t=n.get(r);return Object.keys(t).reduce(function(r,l){return r[l]=e[t[l]],r},Object.create(null))}return t(a,RegExp),a.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=o(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var l=n.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,r){return"$"+l[r]}))}if("function"==typeof t){var a=this;return r[Symbol.replace].call(this,e,function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(o(e,a)),t.apply(this,e)})}return r[Symbol.replace].call(this,e,t)},e.apply(this,arguments)}function r(){return(r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function t(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&l(e,r)}function l(e,r){return(l=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var n=Object.freeze({scheme:{$white:"#fff",$black:"#000",$gray50:"#eaedf3",$gray100:"#ccd2dd",$gray200:"#adb5c3",$gray300:"#8d97aa",$gray400:"#768197",$gray500:"#5f6d85",$gray600:"#525f74",$gray700:"#414c5e",$gray800:"#323a49",$gray900:"#202632",$blueBlack50:"#70737e",$blueBlack100:"#595c68",$blueBlack200:"#414553",$blueBlack300:"#292e3d",$blueBlack400:"#121728",$blueBlack500:"#101424",$blueBlack600:"#0e1220",$blueBlack700:"#0c101c",$blueBlack800:"#0a0d18",$blueBlack900:"#090b14",$primary50:"#d8fff7",$primary100:"#9affe8",$primary200:"#00ffd9",$primary300:"#00f9c7",$primary400:"#00f0b8",$primary500:"#00e7ab",$primary600:"#00d79b",$primary700:"#00c388",$primary800:"#00b278",$primary900:"#009257",$yellow50:"#fff8df",$yellow500:"#ffc700",$yellow800:"#ff8a00",$green50:"#e7f7eb",$green500:"#2bbd5f",$green800:"#01893d",$red50:"#ffe5ea",$red500:"#ff4b6c",$red800:"#c21e4d",$blue50:"#e2f2ff",$blue500:"#0094fe",$blue800:"#0d62ca"},semanticScheme:{background:"$blueBlack700"}}),a={__proto__:null,light:n,dark:Object.freeze(r({},n))},o=["white","black","gray","blueBlack","primary","yellow","blue","green","red"],c=e(/\$([a-z]+)([1-9][0-9]+)$/,{Group:1,Lightness:2});exports.colors=a,exports.parseColorToken=function(e){var r,t;if("$white"===e)return["$white","white",0];if("$black"===e)return["$black","black",0];var l=e.match(c),n=null==l||null==(r=l.groups)?void 0:r.Group,a=null==l||null==(t=l.groups)?void 0:t.Lightness;if(null==n||null==a)throw new TypeError("Invalid color token: "+e);if(!o.includes(n))throw new TypeError(n+" is unknown color group");return[e,n,parseInt(a)]},exports.populateSemanticColors=function(e,r){for(var t={},l=0,n=Object.entries(r);l<n.length;l++){var a,o=n[l],c=o[1];t[o[0]]=null!=(a=e[c])?a:c}return Object.freeze(t)};
//# sourceMappingURL=index.js.map
