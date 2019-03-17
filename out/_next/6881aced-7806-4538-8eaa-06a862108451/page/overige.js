module.exports=__NEXT_REGISTER_PAGE("/overige",function(){return{page:webpackJsonp([3],{235:function(e,n,t){e.exports=t(236)},236:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t.n(o),a=t(24),i=(t(2),t(237),t(42)),c=t(29),l=t(30);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}var p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,o,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:"remainder__container"},r.a.createElement(c.a,{infoTitle:"Overige",infoText:"Buiten het slijpen van messen kunnen wij nog veel andere spullen voor u slijpen. Scharen, snoeischaren, heggenscharen, maar ook magimixen, pizzarollers, vleesmachines of groentecutters zijn voor ons geen probleem. Heeft u een voorwerp met een snijvlak welke u graag weer scherp geslepen zou willen hebben? Vraag dan gerust naar de mogelijkheden.",src:"../../static/photos/chef-knives/kitchen-knife.jpg",alt:"Scissors"}),r.a.createElement(l.a,null),r.a.createElement("ul",{className:"remainder__list"},r.a.createElement(i.a,{title:"Schaar",info:"Normale schaar voor alledaagse knipwerkzaamheden in het huis.",photo:"../../static/photos/remainder/Overig_schaar.jpg"}),r.a.createElement(i.a,{title:"Snoeischaar",info:"Gebruikt voor het knippen en snoeien van kleinere takken in boompjes en heggen in de tuin.",photo:"../../static/photos/remainder/Overig_snoeischaar.jpg"}),r.a.createElement(i.a,{title:"Heggenschaar",info:"Grote schaar voor het snoeien en in vorm knippen van heggen.",photo:"../../static/photos/remainder/Overig_heggenschaar.jpg"})))}}])&&f(t.prototype,o),a&&f(t,a),n}(),m=t(25);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{page:"overige"}),r.a.createElement(p,null),r.a.createElement(m.a,null))}},42:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=t(2),i=t.n(a),c=t(7),l=(t.n(c),t(78));t.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?p(e):n}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function n(){var e,t,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return u(o,(t=o=u(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),Object.defineProperty(p(o),"state",{configurable:!0,enumerable:!0,writable:!0,value:{isOpen:!1}}),Object.defineProperty(p(o),"toggleInfo",{configurable:!0,enumerable:!0,writable:!0,value:function(){o.setState(function(e){return{isOpen:!e.isOpen}})}}),t))}var t,o,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.state.isOpen,n=this.props,t=n.title,o=n.info,a=n.photo,c=n.alt,l=n.className;return r.a.createElement("li",{className:"\n          knife-info\n          knife-info--".concat(e?"open":"closed","\n          knife-info--").concat(l,"\n        "),onClick:this.toggleInfo,role:"button",onKeyDown:this.toggleInfo,tabIndex:"0"},r.a.createElement("div",{className:"knife-info__wrapper-left"},r.a.createElement("div",{className:"\n              knife-info__opacity-bg\n              knife-info__opacity-bg--".concat(e?"open":"closed","\n            ")},r.a.createElement("h2",{className:"\n                knife-info__titel\n                knife-info__titel--".concat(e?"open":"closed","\n              ")},t)),r.a.createElement("img",{className:"\n              knife-info__photo\n              knife-info__photo--".concat(e?"open":"closed","\n            "),src:a,alt:c}),!e&&r.a.createElement("img",{className:"knife-info__icon knife-info__icon--down",src:"../../static/icons/arrow-down-2.svg",alt:"Arrow Down"})),r.a.createElement("div",{className:"\n            knife-info__wrapper-right\n            knife-info__wrapper-right--".concat(e?"open":"closed","\n          ")},r.a.createElement("p",{className:"knife-info__info"},o),e&&r.a.createElement("img",{className:"knife-info__icon knife-info__icon--up-left",src:"../../static/icons/arrow-up.svg",alt:"Arrow Up"}),e&&r.a.createElement("img",{className:"knife-info__icon knife-info__icon--up-right",src:"../../static/icons/arrow-up.svg",alt:"Arrow Up"}),r.a.createElement(i.a,{href:"/contact"},r.a.createElement("button",{className:"knife-info__button knife-info__button--right"},r.a.createElement("a",{className:"knife-info__link"},"Meer Informatie Opvragen")))))}}])&&f(t.prototype,o),a&&f(t,a),n}();m.defaultProps={alt:"Foto van messensoort",className:""},n.a=m}},[235]).default}});