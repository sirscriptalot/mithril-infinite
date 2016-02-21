"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_github=require("app/app/github"),_github2=_interopRequireDefault(_github),_mithrilInfinite=require("mithril-infinite"),_mithrilInfinite2=_interopRequireDefault(_mithrilInfinite),_styler=require("app/app/styler"),_styler2=_interopRequireDefault(_styler),_imagesStyle=require("./images-style"),_imagesStyle2=_interopRequireDefault(_imagesStyle);_styler2.default.add("images",_imagesStyle2.default);var IMG_URL="http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/",vm={expanded:{},dirty:{},toggle:function(e){vm.expanded[e]?delete vm.expanded[e]:vm.expanded[e]=1,vm.dirty[e]=1},isExpanded:function(e){return vm.expanded[e]},isDirty:function(e){return vm.dirty[e]},clearDirty:function(e){return delete vm.dirty[e]}},item=function(e,r){var t=r.page+e.src,l=vm.isExpanded(t),n=vm.isDirty(t),i=l?.5:.25;return(0,_mithril2.default)("a.list-item",{style:{height:Math.floor(parseInt(e.height,10)*i)+"px"},onclick:function(){vm.toggle(t)}},[(0,_mithril2.default)("span.pageNum",r.page),(0,_mithril2.default)(".image",{style:{height:Math.floor(parseInt(e.height,10)*i)+"px",width:Math.floor(parseInt(e.width,10)*i)+"px"},config:function(i,a,r){if((!r.inited||n)&&_mithrilInfinite2.default.isElementInViewport({el:i})){var l=IMG_URL+e.src;i.style.backgroundImage=i.style.backgroundImage="url("+l+")",r.inited=!0,vm.clearDirty(t)}}}),(0,_mithril2.default)(".toggle",l?_mithril2.default.trust("&#150;"):_mithril2.default.trust("&#43;"))])},component={};component.view=function(){return _mithril2.default.component(_mithrilInfinite2.default,{maxPages:20,item:item,pageUrl:function(e){return"app/images/data/page-"+e+".json"},preloadPages:3,class:"images",before:(0,_mithril2.default)("a",{class:["list-item",vm.isExpanded("before")?"open":"closed"].join(" "),onclick:function(){vm.toggle("before")}},[(0,_mithril2.default)("div",_mithril2.default.trust('A list of pugs. Courtesy the <a href="http://airbnb.io/infinity/demo-off.html">AirBnb Infinity demo</a>.')),(0,_mithril2.default)(".toggle",vm.isExpanded("before")?_mithril2.default.trust("&#150;"):_mithril2.default.trust("&#43;"))]),after:(0,_github2.default)(),pageChange:function(e){console&&console.log("page",e)}})},exports.default=component;