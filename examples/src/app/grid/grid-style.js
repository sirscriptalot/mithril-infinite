"use strict";function _defineProperty(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}Object.defineProperty(exports,"__esModule",{value:!0});var gridSpacing=8,itemWidth=210,itemWidthPx=itemWidth+"px",imageHolderPadding=10,imageHolderPaddingPx=imageHolderPadding+"px",makeMediaStyle=function(e,i){return _defineProperty({},"@media ("+e+"-width: "+((i+1)*itemWidth+i*gridSpacing)+"px)",{".scroll-view.grid":{" .scroll-content":{" .content":{width:i*itemWidth+(i-1)*gridSpacing+"px"}}}})},styles=[makeMediaStyle("min",4),makeMediaStyle("max",4),makeMediaStyle("max",3),makeMediaStyle("max",2),makeMediaStyle("max",1),{".scroll-view.grid":{margin:"0 auto"," .scroll-content":{padding:2*gridSpacing+"px 0"," .content":{margin:"0 auto","font-size":0,"line-height":0," .page":{margin:"0 "+-gridSpacing/2+"px"}," .grid-item":{display:"inline-block",height:itemWidthPx,width:itemWidthPx,"background-color":"#f0f0f0",margin:[0,gridSpacing/2,gridSpacing,gridSpacing/2].map(function(i){return i+"px"}).join(" ")," .image-holder":{height:itemWidth-2*imageHolderPadding+"px",width:itemWidth-2*imageHolderPadding+"px",overflow:"hidden",position:"relative",margin:imageHolderPaddingPx," .image":{position:"absolute",left:"auto",top:0,right:"auto",bottom:0,width:"100%","background-size":"contain","background-repeat":"no-repeat","background-position-x":"50%"}}}}}}}];exports.default=styles;