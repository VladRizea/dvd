(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(t,n,e){var content=e(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(71).default)("56b15182",content,!0,{sourceMap:!1})},143:function(t,n,e){"use strict";e(187),e(41),e(18),e(29),e(44);var o={name:"DVD",mounted:function(){var section=document.getElementById("section"),t=document.getElementById("logo");section.style.height=window.innerHeight+"px",section.style.width=window.innerWidth+"px";var n,e,o=30,l=30;function r(){var t="#";return t+=Math.random().toString(16).slice(2,8).toUpperCase()}n=Math.floor(10*Math.random())>4?3:-3,e=Math.floor(10*Math.random())>4?3:-3,setInterval((function(){(o+t.clientWidth>=window.innerWidth||o<=0)&&(n=-n,t.style.fill=r()),(l+t.clientHeight>=window.innerHeight||l<=0)&&(e=-e,t.style.fill=r()),o+=n,l+=e,t.style.left=o+"px",t.style.top=l+"px"}),1e3/57),console.log(r()),window.addEventListener("resize",(function(){o=10,l=10,section.style.height=window.innerHeight+"px",section.style.width=window.innerWidth+"px"}))}},l=(e(189),e(30)),component=Object(l.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"body"},[n("div",{attrs:{id:"section"}},[n("svg",{attrs:{id:"logo",viewBox:"0 0 16 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.4 4.959C3.268 4.959 0 5.509 0 6.186C0 6.864 3.268 7.413 7.4 7.413C11.532 7.413 14.943 6.864 14.943 6.186C14.944 5.508 11.533 4.959 7.4 4.959ZM7.263 6.51C6.306 6.51 5.53 6.273 5.53 5.98C5.53 5.687 6.306 5.45 7.263 5.45C8.22 5.45 8.995 5.687 8.995 5.98C8.995 6.273 8.219 6.51 7.263 6.51ZM13.319 0.052002H9.701L7.769 2.291L6.849 0.0830021H1.145L0.933 1.045H3.202C3.202 1.045 4.239 0.909002 4.273 1.739C4.273 3.177 1.897 3.055 1.897 3.055L2.341 1.555H0.869L0.194 3.988H2.862C2.862 3.988 5.683 3.738 5.683 1.77C5.683 1.77 5.797 1.196 5.749 0.943002L7.124 4.62L10.559 1.055H13.165C13.165 1.055 13.963 1.123 13.963 1.74C13.963 3.178 11.604 3.028 11.604 3.028L11.969 1.556H10.682L9.946 3.989H12.399C12.399 3.989 15.465 3.799 15.465 1.71C15.465 1.709 15.404 0.052002 13.319 0.052002Z"}})])])])}),[],!1,null,null,null);n.a=component.exports},144:function(t,n,e){e(145),t.exports=e(146)},189:function(t,n,e){"use strict";e(138)},190:function(t,n,e){(n=e(70)(!1)).push([t.i,"*{padding:0;margin:0;box-sizing:border-box}.body{overflow:hidden}#section{background-color:#000;position:relative}svg{position:absolute;width:200px;fill:#0051ff}@media (max-width:768px){svg{width:150px}}",""]),t.exports=n}},[[144,2,1,3]]]);