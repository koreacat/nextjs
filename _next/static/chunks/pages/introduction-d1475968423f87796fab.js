_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"2UhM":function(e,t,n){"use strict";var r=n("nKUr"),c=n("chhm"),s=n.n(c),a=n("q1tI"),i=n("UbMB"),l=n.n(i).a.bind(s.a),o=function(e){var t=e.num,n=e.delay,c=Object(a.useState)({transform:"translateY(132px)"}),s=c[0],i=c[1];Object(a.useEffect)((function(){setTimeout((function(){i({transform:"translateY(-".concat(132*t,"px)")})}),n)}),[t]);var o=[0,1,2,3,4,5,6,7,8,9].map((function(e,t){return Object(r.jsx)("span",{className:l("digit"),children:t},t)}));return Object(r.jsx)("div",{className:l("number"),style:s,children:o})};t.a=function(e){var t=e.count,n=e.unitText;if(!t)return Object(r.jsx)(r.Fragment,{});for(var c=t.toString().split(""),s=Array.from({length:c.length},(function(){return"0"})),a=0;a<c.length;a++)s[s.length-c.length+a]=c[a];var i=s.map((function(e,t){return Object(r.jsx)(o,{num:parseInt(e),delay:300*(s.length-1-t)},t)}));return Object(r.jsx)("div",{children:Object(r.jsxs)("span",{className:l("countWrap"),children:[Object(r.jsx)("div",{className:l("count"),children:i}),Object(r.jsx)("span",{className:l("unitText"),children:n})]})})}},"38tU":function(e,t,n){"use strict";var r=n("nKUr"),c=n("Bihf"),s=n.n(c),a=n("UbMB"),i=n.n(a).a.bind(s.a);t.a=function(e){return Object(r.jsx)("div",{className:i("contents"),children:e.children})}},"85V/":function(e,t,n){"use strict";var r=n("nKUr"),c=n("8dai"),s=n.n(c),a=n("UbMB"),i=n.n(a),l=n("q1tI"),o=i.a.bind(s.a),d=function(e){var t,n=e.title,c=e.color,s=e.value,a=e.interactionTrigger,i=Object(l.useState)(56),d=i[0],j=i[1];Object(l.useEffect)((function(){return a?t=setTimeout((function(){j(s)}),550):j(56),function(){clearTimeout(t)}}),[a,s]);return Object(r.jsxs)("div",{className:o("barWrap"),children:[Object(r.jsx)("span",{className:o("title"),children:n}),Object(r.jsxs)("div",{className:o("bar"),onClick:function(){},children:[Object(r.jsx)("div",{className:o("valueWrap"),children:Object(r.jsx)("div",{className:o("value",c,{bigger:a}),style:{width:d}})}),Object(r.jsx)("div",{className:o("per",{show:a}),children:"0%"})]})]})};t.a=function(e){var t=e.interactionTrigger;return Object(r.jsx)("div",{className:o("wrap"),children:Object(r.jsxs)("div",{className:o("barChart"),children:[Object(r.jsx)(d,{title:"\uacbd\uc601\uc9c0\uc6d0",color:"GREEN",value:334,interactionTrigger:t}),Object(r.jsx)(d,{title:"\uc5f0\uad6c\u02d9\uac1c\ubc1c",value:192,interactionTrigger:t}),Object(r.jsx)(d,{title:"\uc11c\ube44\uc2a4",value:150,interactionTrigger:t})]})})}},"8dai":function(e,t,n){e.exports={hidden:"type02_hidden__294HK",barWrap:"type02_barWrap__2zLRu",title:"type02_title__3EZnP",bar:"type02_bar__3mphv",valueWrap:"type02_valueWrap__3qtjT",value:"type02_value__21QVm",GREEN:"type02_GREEN__3eBBv",bigger:"type02_bigger__1uZ6K",per:"type02_per__2WMIP",show:"type02_show__xQDAT"}},AhJb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return Math.floor(Math.random()*e)}},Bihf:function(e,t,n){e.exports={contents:"contents_contents__2RZDA"}},FQxu:function(e,t,n){e.exports={hidden:"lineChart_hidden__JM49L",wrap:"lineChart_wrap__3nMDs",path:"lineChart_path__3XWDE"}},H0kW:function(e,t,n){e.exports={hidden:"resultProcess_hidden__zZ_hH",wrap:"resultProcess_wrap__1LFMf",chartWrap:"resultProcess_chartWrap__2Q2Ti",textWrap:"resultProcess_textWrap__H8-E1",titleWrap:"resultProcess_titleWrap__FdrMz",em:"resultProcess_em__naujj",descWrap:"resultProcess_descWrap__10PPt",highlight:"resultProcess_highlight__2xrHT",desc:"resultProcess_desc__1sxAS",bold:"resultProcess_bold__wIkIX"}},Kokk:function(e,t,n){e.exports={hidden:"fixedHeader_hidden__AGUu4",fixedHeader:"fixedHeader_fixedHeader__18tHr",up:"fixedHeader_up__5cKX5"}},N4HJ:function(e,t,n){e.exports={hidden:"onOffCover_hidden__1FWpW",wrap:"onOffCover_wrap__3i-Jb",contentsWrap:"onOffCover_contentsWrap__2wGUU",contents:"onOffCover_contents__3EPki",off:"onOffCover_off__3avxr",bulbOff:"onOffCover_bulbOff__2o3m1",on:"onOffCover_on__3WqKZ",text:"onOffCover_text__2PccA",bulbOn:"onOffCover_bulbOn__1Yfzi",em:"onOffCover_em__3Fj0b",contentsCover:"onOffCover_contentsCover__2c1MQ",visible:"onOffCover_visible__1vADY",cardWrap:"onOffCover_cardWrap__3t_xt",card:"onOffCover_card__3hRG3",profileWrap:"onOffCover_profileWrap__16Rw8",title:"onOffCover_title__2Zs8u",profileImg:"onOffCover_profileImg__1WB7z",listWrap:"onOffCover_listWrap__2XLlC",listTitle:"onOffCover_listTitle__ozCqY",list:"onOffCover_list__lxgTr",item:"onOffCover_item__2weYb"}},Nauy:function(e,t,n){e.exports={hidden:"introduction_hidden__1yW7t",wrap:"introduction_wrap__2i-7c",contents:"introduction_contents__gzo-7",bannerWrap:"introduction_bannerWrap__25ybW",trendsWrap:"introduction_trendsWrap__e-VXI",questionWrap:"introduction_questionWrap__33fU1",mySelfWrap:"introduction_mySelfWrap__1aVT0",onOffCoverWrap:"introduction_onOffCoverWrap__ekump",processWrap:"introduction_processWrap__3LNMj",realYouWrap:"introduction_realYouWrap__2yUj9",guideWrap:"introduction_guideWrap__3iLkj",resultProcessWrap:"introduction_resultProcessWrap__3PFZE",fitWrap:"introduction_fitWrap__VH2AR",interviewWrap:"introduction_interviewWrap__3tVeH",cardBannerWrap:"introduction_cardBannerWrap__2BUx1"}},"NdY/":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("38tU"),s=n("Z5kR"),a=n("UbMB"),i=n.n(a),l=n("Nauy"),o=n.n(l),d=n("N4HJ"),j=n.n(d),u=n("q1tI");function p(e){var t=0,n=e.el,r=e.onScrollUp,c=e.scrollUpTop,s=e.scrollUpTopStart,a=e.scrollUpTopEnd,i=e.onScrollDown,l=e.scrollDownTop,o=e.scrollDownTopSrtart,d=e.scrollDownTopEnd,j=function(e,t){var n,r,c,s,a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=function(){r=!1===i.leading?0:Date.now(),n=null,s=e.apply(a,c),n||(a=c=null)},o=function(){var o=Date.now();r||!1!==i.leading||(r=o);var d=t-(o-r);a=this;for(var j=arguments.length,u=new Array(j),p=0;p<j;p++)u[p]=arguments[p];return c=u,d<=0||d>t?(n&&(clearTimeout(n),n=null),r=o,s=e.apply(a,c),n||(a=c=null)):n||!1===i.trailing||(n=setTimeout(l,d)),s};return o.cancel=function(){null!==n&&(clearTimeout(n),r=0,n=a=c=null)},o}((function(){var e,j=window.pageYOffset||document.documentElement.scrollTop,u=j>t?"UP":"DOWN",p=null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect().top,_=window.innerHeight,f=p-_;r&&"UP"===u&&(s&&a?_*a<=f&&f<=_*s&&r():c?f<=_*c&&r():r()),i&&"DOWN"===u&&(o&&d?_*d>=f&&f>=_*o&&(console.log("da"),i()):l?f>_*l&&(console.log("ba"),i()):i()),t=j<=0?0:j}),e.wait||50);Object(u.useEffect)((function(){return document.addEventListener("scroll",j,!1),function(){document.removeEventListener("scroll",j)}}),[])}var _=i.a.bind(j.a),f=function(e){var t=e.title,n=e.listTitle,c=e.list,s=e.img,a=null===c||void 0===c?void 0:c.map((function(e,t){return Object(r.jsx)("li",{className:_("item"),children:e},t)}));return Object(r.jsxs)("div",{className:_("card"),children:[Object(r.jsxs)("div",{className:_("profileWrap"),children:[Object(r.jsx)("span",{className:_("title"),children:t}),Object(r.jsx)("img",{className:_("profileImg"),src:"/nextjs/img/".concat(s)})]}),Object(r.jsxs)("div",{className:_("listWrap"),children:[Object(r.jsx)("span",{className:_("listTitle"),children:n}),Object(r.jsx)("ul",{className:_("list"),children:a})]})]})},b=function(){var e=Object(u.useState)(!1),t=e[0],n=e[1],c=Object(u.useRef)(null);return p({el:c,scrollUpTop:-1,onScrollUp:function(){n(!0)}}),Object(r.jsx)("div",{ref:c,className:_("wrap"),children:Object(r.jsxs)("div",{className:_("contentsWrap"),children:[Object(r.jsxs)("div",{className:_("contents","off"),children:[Object(r.jsx)("span",{className:_("text"),children:"\uc11c\ub958\uc640 \uba87 \uc904 \uc2a4\ud399\ub9cc\uc73c\ub85c\ub294.."}),Object(r.jsx)("span",{className:_("text","em"),children:"\ub098\uc758 \ubaa8\ub4e0 \uac83\uc744 \ub2e4 \uc124\uba85\ud560 \uc218 \uc5c6\uc5b4\uc694."}),Object(r.jsxs)("div",{className:_("cardWrap"),children:[Object(r.jsx)("i",{className:_("bulbOff"),onClick:function(){return n(!0)}}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 A",listTitle:"\ubcf4\uc720 \uc2a4\ud399",list:["\uc9c0\ubc29 \ucd9c\uc2e0 \ub300\ud559","\uc774\uacf5\uacc4","\ud559\uc810 3.2","\uc5b4\ud559\uc810\uc218 \u7121","\uc5b4\ud559\uc5f0\uc218 \u7121"],img:"imgApplicantOffA.png"}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 B",listTitle:"\ubcf4\uc720 \uc2a4\ud399",list:["\uace0\ub4f1\ud559\uad50 \uc878\uc5c5","\uc778\ud134\uacbd\ud5d8 \u7121","\ub300\uc678\ud65c\ub3d9 \u7121","\uc218\uc0c1\uacbd\ud5d8 \u7121","\ubcf4\uc720 \uc790\uaca9\uc99d 3\uac1c"],img:"imgApplicantOffB.png"}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 C",listTitle:"\ubcf4\uc720 \uc2a4\ud399",list:["\uc218\ub3c4\uad8c \ub300\ud559","\uc778\ubb38\uacc4","\ud559\uc810 3.2","\uc5b4\ud559\uc810\uc218 890\uc810","\ubd09\uc0ac\ud65c\ub3d9 \u7121"],img:"imgApplicantOffC.png"})]})]}),Object(r.jsx)("div",{className:_("contentsCover",{visible:t}),children:Object(r.jsxs)("div",{className:_("contents","on"),children:[Object(r.jsx)("span",{className:_("text"),children:"\uc11c\ub958\uc640 \uba87 \ub9c8\ub514 \ub9d0\ub85c\ub294 \ub2e4 \ud45c\ud604\ud558\uc9c0 \ubabb\ud55c"}),Object(r.jsx)("span",{className:_("text","em"),children:"\uc5ec\ub7ec\ubd84\ub9cc\uc758 \uc5ed\ub7c9 \uc2a4\ud399\ud2b8\ub7fc\uc744 \ubcf4\uc5ec\uc8fc\uc138\uc694."}),Object(r.jsxs)("div",{className:_("cardWrap"),children:[Object(r.jsx)("i",{className:_("bulbOn"),onClick:function(){return n(!1)}}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 A",listTitle:"\ub3d9\ub8cc \ud3c9\uac00",list:["\u201c \ud611\uc5c5 \ubc0f \uc18c\ud1b5 \ub2a5\ub825\uc774 \ub6f0\uc5b4\ub098 \u201d","\u201c \uc815\ub9d0 \uc5f4\uc815\uc801\uc778 \uc0ac\ub78c\uc774\uc57c! \u201d","\u201c \ubc1c\uc0c1\uc774 \uc815\ub9d0 \ucc3d\uc758\uc801\uc774\uc57c! \u201c","\u201c \ub17c\ub9ac\uc801\uc73c\ub85c \ud45c\ud604\ud560 \uc904 \uc54c\uc544 \u201c"],img:"imgApplicantOnA.png"}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 B",listTitle:"\ub3d9\ub8cc \ud3c9\uac00",list:["\u201c \ub048\uae30 \uc788\uace0 \ucd94\uc9c4\ub825 \uc788\uc5b4 \u201d","\u201c \uc5b4\ub5a4 \uc77c\uc744 \ub9e1\uaca8\ub3c4 \uc798 \ud574\ub0b4! \u201d","\u201c \uc815\ub9d0 \uc131\uc2e4\ud55c \ud3b8\uc774\uc57c \u201d","\u201c \ubaa9\ud45c\ub2ec\uc131 \ub2a5\ub825\uc774 \ub300\ub2e8\ud574 \u201d"],img:"imgApplicantOnB.png"}),Object(r.jsx)(f,{title:"\uc9c0\uc6d0\uc790 C",listTitle:"\ub3d9\ub8cc \ud3c9\uac00",list:["\u201c \uc758\uc0ac\ud45c\ud604 \ub2a5\ub825\uc774 \uc88b\uc544 \u201d","\u201c \uc77c\uc744 \uc804\ub7b5\uc801\uc73c\ub85c \uc811\uadfc\ud574! \u201d","\u201c \uac10\uc815\uc804\ub2ec \ub2a5\ub825\uc774 \ub6f0\uc5b4\ub098 \u201d","\u201c \ub9e4\uc0ac\uc5d0 \uc815\ub9d0 \uae0d\uc815\uc801\uc778 \ud3b8\uc774\uc57c \u201d"],img:"imgApplicantOnC.png"})]})]})})]})})},h=n("xBkw"),x=n.n(h),O=i.a.bind(x.a),m=function(){var e=Object(u.useRef)(null),t=Object(u.useState)(!1),n=t[0],c=t[1];return p({el:e,scrollUpTopStart:-.5,scrollUpTopEnd:-1,onScrollUp:function(){c(!0)},scrollDownTopSrtart:-1,scrollDownTopEnd:-.5,onScrollDown:function(){c(!1)},wait:10}),p({el:e,scrollUpTopStart:-2,scrollUpTopEnd:-2.5,onScrollUp:function(){c(!1)},scrollDownTopSrtart:-2.5,scrollDownTopEnd:-2,onScrollDown:function(){c(!0)},wait:10}),Object(r.jsxs)("div",{ref:e,className:O("wrap"),children:[Object(r.jsx)("span",{className:O("cover",{covered:n})}),Object(r.jsxs)("div",{className:O("contentsWrap",{covered:n}),children:[Object(r.jsxs)("span",{className:O("title"),children:["THE REAL ",Object(r.jsx)("span",{onClick:function(){return c(!1)},style:{cursor:"pointer"},children:"YOU"})]}),Object(r.jsxs)("div",{className:O("textWrap"),children:[Object(r.jsx)("span",{className:O("text"),children:"\uc5f4\uc2ec\ud788 \uc751\uc2dc\ud55c AI\uc5ed\ub7c9\uac80\uc0ac \uacb0\uacfc\ub294"}),Object(r.jsx)("span",{className:O("text"),children:"\ub2f9\uc2e0\uc758 \uc9c4\uc9dc \ubaa8\uc2b5\ub9cc \uafb9\uafb9 \ub2f4\uc544 \uc778\uc0ac\ud300\uc5d0 \uc804\ub2ec\ub429\ub2c8\ub2e4."})]})]})]})},v=n("tCIV"),N=n.n(v),W=n("2UhM"),g=i.a.bind(N.a),w=function(){var e=Object(u.useRef)(null),t=Object(u.useState)(!1),n=t[0],c=t[1];return p({el:e,scrollUpTop:-.5,onScrollUp:function(){c(!0)}}),Object(r.jsxs)("div",{ref:e,className:g("wrap"),children:[Object(r.jsxs)("div",{className:g("emWrap"),children:[Object(r.jsx)("span",{className:g("em"),children:"\uc138\uc0c1\uc5d0 \uc5c6\ub358 \uc0c8\ub85c\uc6b4 \ucc44\uc6a9 \ud2b8\ub80c\ub4dc\ub97c"}),Object(r.jsx)("span",{className:g("em"),children:"\ub9cc\ub4e4\uc5b4 \uac00\uace0 \uc788\uc2b5\ub2c8\ub2e4."})]}),Object(r.jsxs)("ul",{className:g("countList"),children:[Object(r.jsxs)("li",{className:g("item"),children:[Object(r.jsxs)("div",{className:g("textWrap"),children:[Object(r.jsx)("span",{className:g("title"),children:"\uae30\uc5c5"}),Object(r.jsx)("span",{className:g("text"),children:"\ub300\uae30\uc5c5, \uacf5\uacf5\uae30\uc5c5, \uc2a4\ud0c0\ud2b8\uc5c5 \ub4f1"}),Object(r.jsx)("span",{className:g("text"),children:"450\uc0ac \uc774\uc0c1\uc774 AI\uc5ed\ub7c9\uac80\uc0ac \ub3c4\uc785"})]}),Object(r.jsx)(W.a,{count:n&&450,unitText:"\uc0ac"})]}),Object(r.jsxs)("li",{className:g("item"),children:[Object(r.jsxs)("div",{className:g("textWrap"),children:[Object(r.jsx)("span",{className:g("title"),children:"\uc751\uc2dc\uc790"}),Object(r.jsx)("span",{className:g("text"),children:"2020\ub144 \uae30\uc900"}),Object(r.jsx)("span",{className:g("text"),children:"\ub204\uc801 \uc751\uc2dc\uc790 \uc218 30\ub9cc\uba85"})]}),Object(r.jsx)(W.a,{count:n&&30,unitText:"\ub9cc"})]}),Object(r.jsxs)("li",{className:g("item"),children:[Object(r.jsxs)("div",{className:g("textWrap"),children:[Object(r.jsx)("span",{className:g("title"),children:"\ud2b8\ub80c\ub4dc"}),Object(r.jsx)("span",{className:g("text"),children:"\ucde8\uc900\uc0dd\uc774 \uc120\ud0dd\ud55c"}),Object(r.jsx)("span",{className:g("text"),children:"2021 \ucc44\uc6a9 \ud2b8\ub80c\ub4dc 1\uc704"})]}),Object(r.jsx)(W.a,{count:n&&1,unitText:"\uc704"})]})]})]})},T=n("iPLn"),y=n.n(T),C=n("TnBQ"),E=n("T13X"),U=i.a.bind(y.a),S=function(){return Object(r.jsxs)("div",{className:U("wrap"),children:[Object(r.jsxs)("div",{className:U("textWrap"),children:[Object(r.jsx)("span",{children:"\ucde8\uc5c5 \uc900\ube44\ud558\uba74\uc11c"}),Object(r.jsx)("span",{children:"\uc774\ub7f0 \uc0dd\uac01\ud574 \ubcf8 \uc801 \uc5c6\ub098\uc694?"})]}),Object(r.jsx)("div",{className:U("speechBubbleWrap"),children:Object(r.jsx)(C.a,{})}),Object(r.jsx)("div",{className:U("wordSliderWrap"),children:Object(r.jsx)(E.a,{})})]})},M=n("mNtZ"),k=n("H0kW"),A=n.n(k),B=i.a.bind(A.a),D=function(){return Object(r.jsxs)("div",{className:B("wrap"),children:[Object(r.jsx)("div",{className:B("chartWrap"),children:Object(r.jsx)(M.a,{})}),Object(r.jsxs)("div",{className:B("textWrap"),children:[Object(r.jsxs)("div",{className:B("titleWrap"),children:[Object(r.jsx)("span",{children:"\uacb0\uacfc\ub9cc\uc774 \uc544\ub2cc"}),Object(r.jsx)("span",{className:B("em"),children:"\uacfc\uc815\uae4c\uc9c0."})]}),Object(r.jsxs)("div",{className:B("descWrap"),children:[Object(r.jsx)("span",{className:B("highlight"),children:"\ub09c\uc774\ub3c4 \uc801\uc751 \ud328\ud134"}),Object(r.jsxs)("div",{className:B("desc"),children:[Object(r.jsx)("span",{children:"AI\uc5ed\ub7c9\uac80\uc0ac\ub294 \uacb0\uacfc\ubfd0\ub9cc \uc544\ub2c8\ub77c"}),Object(r.jsx)("span",{children:"\uacfc\uc815\ub3c4 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud574\uc694."}),Object(r.jsx)("span",{children:"\uc751\uc2dc \uacfc\uc815\uc5d0\uc11c \ubcf4\uc774\ub294 \ud589\ub3d9 \ubd84\uc11d\uc744 \ud1b5\ud574"}),Object(r.jsx)("span",{children:"\ub09c\uc774\ub3c4 \uc801\uc751 \ud328\ud134, \uc9d1\uc911\ub825, \uc758\uc0ac \uacb0\uc815 \uc720\ud615 \ub4f1"})]}),Object(r.jsx)("span",{className:B("bold"),children:"\u201c\ub098\ub9cc\uc758 \ub2e4\ucc44\ub85c\uc6b4 \uc131\ud5a5\uc744 \ubcf4\uc5ec\uc904 \uc218 \uc788\uc5b4\uc694.\u201d"})]})]})]})},I=n("85V/"),H=n("iExe"),L=n.n(H),P=i.a.bind(L.a),R=function(){var e=Object(u.useState)(!1),t=e[0],n=e[1],c=Object(u.useRef)(null);return p({el:c,scrollUpTop:-.1,onScrollUp:function(){n(!0)}}),Object(r.jsxs)("div",{ref:c,className:P("wrap"),children:[Object(r.jsxs)("div",{className:P("textWrap"),children:[Object(r.jsxs)("div",{className:P("titleWrap"),children:[Object(r.jsx)("span",{children:"\uc131\uc801\uc774 \uc544\ub2cc"}),Object(r.jsx)("span",{className:P("em"),children:"\uc801\ud569\ub3c4\ub97c."})]}),Object(r.jsxs)("div",{className:P("descWrap"),children:[Object(r.jsx)("span",{className:P("highlight"),children:"\uc9c1\uad70 \uc801\ud569\ub3c4"}),Object(r.jsxs)("div",{className:P("desc"),children:[Object(r.jsx)("span",{children:"AI\uc5ed\ub7c9\uac80\uc0ac\ub294 \uc11d\ucc28, \uc810\uc218\uac00 \uc544\ub2cc "}),Object(r.jsx)("span",{children:"\uc9c1\uad70 \uc801\ud569\ub3c4\ub97c \ub354 \uc911\uc694\ud558\uac8c \uc0dd\uac01\ud574\uc694."})]}),Object(r.jsxs)("span",{className:P("bold"),children:["\u201c\ub0b4\uac00 \uc5b4\ub290 \uc9c1\uad70\uc5d0\uc11c \ub354 \uc131\uc7a5\ud560 \uc218 \uc788\ub294",Object(r.jsx)("br",{}),"\uc0ac\ub78c\uc778\uc9c0 \ubcf4\uc5ec\uc904 \uc218 \uc788\uc5b4\uc694.\u201d"]})]})]}),Object(r.jsx)("div",{className:P("chartWrap"),children:Object(r.jsx)(I.a,{interactionTrigger:t})})]})},Y=n("Uszz"),q=n.n(Y),Q=i.a.bind(q.a),K=function(){return Object(r.jsxs)("div",{className:Q("wrap"),children:[Object(r.jsxs)("div",{className:Q("textWrap"),children:[Object(r.jsxs)("div",{className:Q("titleWrap"),children:[Object(r.jsx)("span",{children:"\uc2a4\ud399\uc774 \uc544\ub2cc"}),Object(r.jsx)("span",{className:Q("em"),children:"\uc5ed\ub7c9\uc73c\ub85c."})]}),Object(r.jsxs)("div",{className:Q("descWrap"),children:[Object(r.jsx)("span",{className:Q("highlight"),children:"\uba74\uc811 \uc9c8\ubb38 \uac00\uc774\ub4dc"}),Object(r.jsxs)("div",{className:Q("desc"),children:[Object(r.jsx)("span",{children:"\uc2a4\ud399\uc774 \uc544\ub2cc \uc9c0\uc6d0\uc790 \uc5ed\ub7c9 \uae30\ubc18"}),Object(r.jsx)("span",{children:"\uba74\uc811 \uc9c8\ubb38 \uac00\uc774\ub4dc\uac00 \uae30\uc5c5\uc5d0 \uc804\ub2ec\ub3fc\uc694."}),Object(r.jsx)("span",{children:"\uaf2c\ub9ac\ub97c \ubb34\ub294 \uc9c8\ubb38, \uc2a4\ud399\ub9cc \ubb3b\ub294 \uc9c8\ubb38\uc774 \uc544\ub2cc"})]}),Object(r.jsx)("span",{className:Q("bold"),children:"\u201c\uc9c4\uc9dc \ub098\ub97c \ud45c\ud604\ud560 \uc218 \uc788\ub294 \uba74\uc811\uc774 \ub420 \uc218 \uc788\uc5b4\uc694.\u201d"})]})]}),Object(r.jsxs)("div",{className:Q("cardWrap"),children:[Object(r.jsx)("div",{className:Q("card")}),Object(r.jsx)("div",{className:Q("card")})]})]})},z=i.a.bind(o.a),V=function(){return Object(r.jsxs)("div",{className:z("wrap"),children:[Object(r.jsx)("div",{className:z("bannerWrap","contents")}),Object(r.jsx)("div",{className:z("trendsWrap","contents"),children:Object(r.jsx)(w,{})}),Object(r.jsx)("div",{className:z("questionWrap","contents"),children:Object(r.jsx)(S,{})}),Object(r.jsx)("div",{className:z("mySelfWrap","contents")}),Object(r.jsx)("div",{className:z("onOffCoverWrap","contents"),children:Object(r.jsx)(b,{})}),Object(r.jsx)("div",{className:z("processWrap","contents"),children:"AI\uc5ed\ub7c9\uac80\uc0ac, \uc5b4\ub5a4 \uacfc\uc815\uc73c\ub85c \uc9c4\ud589\ub420\uae4c\uc694? \uc751\uc2dc \ud504\ub85c\uc138\uc2a4\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4."}),Object(r.jsx)("div",{className:z("realYouWrap","contents"),children:Object(r.jsx)(m,{})}),Object(r.jsx)("div",{className:z("guideWrap","contents"),children:Object(r.jsx)(K,{})}),Object(r.jsx)("div",{className:z("resultProcessWrap","contents"),children:Object(r.jsx)(D,{})}),Object(r.jsx)("div",{className:z("fitWrap","contents"),children:Object(r.jsx)(R,{})}),Object(r.jsx)("div",{className:z("interviewWrap","contents"),children:"\uba3c\uc800 \uacbd\ud5d8\ud55c \uc120\ubc30\ub4e4\uc774 \uc54c\ub824\uc8fc\ub294 AI\uc5ed\ub7c9\uac80\uc0ac \uafc0\ud301. \uc9c0\uae08 \ubc14\ub85c \ud655\uc778\ud558\uc138\uc694."}),Object(r.jsx)("div",{className:z("cardBannerWrap","contents"),children:"\ub0a8\ub4e4\uacfc\ub294 \ub2e4\ub974\uac8c, \ub204\uad6c\ubcf4\ub2e4 \ube60\ub974\uac8c! \uacf5\uc2dd \uac1c\ubc1c\uc0ac\uc640 \ud568\uaed8\ub77c\uba74 AI\uc5ed\ub7c9\uac80\uc0ac \uc900\ube44 \ub05d."})]})};t.default=function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(V,{})})})}},RjuB:function(e,t,n){e.exports={hidden:"wordSlider_hidden__2GD4T",slider:"wordSlider_slider__2_nMI",words:"wordSlider_words__3mszE",wordSlider:"wordSlider_wordSlider__1Qr_t",word:"wordSlider_word__234jA"}},RzvT:function(e,t,n){e.exports={hidden:"footer_hidden__3PsVa",footer:"footer_footer__3XHPM"}},T13X:function(e,t,n){"use strict";var r=n("nKUr"),c=n("UbMB"),s=n.n(c),a=n("RjuB"),i=n.n(a),l=s.a.bind(i.a),o=["\u201c\uc11c\ub958\ub9cc \ubcf4\uace0 \ub098\ub97c \ub2e4 \uc54c \uc218 \uc788\uc744\uae4c? \u201d","\u201c \uc778\uc801\uc131 \uc798 \ud478\ub294 \uac83\uacfc \uc77c \uc798\ud558\ub294 \uac83\uc740 \uc5b4\ub5a4 \uc5f0\uad00\uc131\uc774 \uc788\uc744\uae4c? \u201d","\u201c \uba74\uc811\uad00\ub9c8\ub2e4 \ud3c9\uac00\uac00 \uc8fc\uad00\uc801\uc778 \uac83\uc740 \uc544\ub2d0\uae4c? \u201d","\u201c\uc11c\ub958\ub9cc \ubcf4\uace0 \ub098\ub97c \ub2e4 \uc54c \uc218 \uc788\uc744\uae4c? \u201d"],d=function(){var e=o.map((function(e,t){return Object(r.jsx)("li",{className:l("word"),children:e},t)}));return Object(r.jsx)("ul",{className:l("words"),children:e})};t.a=function(){return Object(r.jsx)("div",{className:l("wrap"),children:Object(r.jsx)("div",{className:l("slider"),children:Object(r.jsx)(d,{})})})}},TnBQ:function(e,t,n){"use strict";var r=n("nKUr"),c=n("UbMB"),s=n.n(c),a=n("vbXA"),i=n.n(a),l=s.a.bind(i.a);t.a=function(){return Object(r.jsx)("div",{className:l("wrap"),children:Object(r.jsxs)("svg",{width:"148",height:"76",viewBox:"0 0 148 76",children:[Object(r.jsx)("path",{d:"M132.76 67.5244C132.76 67.5244 123.63 76 110.284 76H107.805H93.4605H33.0696C14.8783 76 0 61.191 0 42.9998V33.0693C0 14.878 14.8783 -0.000244141 33.0696 -0.000244141H107.805C125.997 -0.000244141 140.875 14.878 140.875 33.0693V42.9998C140.875 51.8975 139.61 60.451 142.123 65.5883C144.635 70.7255 148 71.4656 148 71.4656C148 71.4656 140.178 72.8854 132.76 67.5244Z",fill:"white"}),Object(r.jsx)("circle",{className:l("dot"),cx:"42",cy:"38",r:"8",fill:"#3ED160"}),Object(r.jsx)("circle",{className:l("dot"),cx:"70",cy:"38",r:"8",fill:"#3ED160"}),Object(r.jsx)("circle",{className:l("dot"),cx:"98",cy:"38",r:"8",fill:"#3ED160"})]})})}},UbMB:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(c.apply(this,r));else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},Uszz:function(e,t,n){e.exports={hidden:"guide_hidden__3Q3RX",wrap:"guide_wrap__3lrkS",cardWrap:"guide_cardWrap__1b2eh",card:"guide_card__3GTV8",textWrap:"guide_textWrap__2-4Mg",titleWrap:"guide_titleWrap__16j0I",em:"guide_em__CaX9A",descWrap:"guide_descWrap__2bdwB",highlight:"guide_highlight__2fF1V",desc:"guide_desc__3HJQu",bold:"guide_bold__3gN6-"}},YFqc:function(e,t,n){e.exports=n("cTJO")},Z5kR:function(e,t,n){"use strict";var r=n("nKUr"),c=n("YFqc"),s=n.n(c),a=n("q1tI"),i=n("vN0C"),l=n.n(i),o=n("UbMB"),d=n.n(o),j=d.a.bind(l.a),u=function(){return Object(r.jsx)("header",{className:j("header"),children:Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{children:"index"})})})})},p=n("Kokk"),_=n.n(p),f=d.a.bind(_.a),b=function(){var e=0,t=Object(a.useState)(!0),n=(t[0],t[1]),c=function(t){t.preventDefault();var r=window.pageYOffset||document.documentElement.scrollTop;n(r>e),e=r<=0?0:r};return Object(a.useEffect)((function(){return document.addEventListener("scroll",c,!1),function(){document.removeEventListener("scroll",c)}}),[]),Object(r.jsx)("div",{className:f("fixedHeader",!1),children:Object(r.jsx)(u,{})})},h=n("RzvT"),x=n.n(h),O=d.a.bind(x.a),m=function(){return Object(r.jsx)("footer",{className:O("footer")})};t.a=function(e){return Object(r.jsxs)("div",{className:"layout",children:[Object(r.jsx)(u,{}),Object(r.jsx)(b,{}),e.children,Object(r.jsx)(m,{})]})}},botx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduction",function(){return n("NdY/")}])},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),l=n("vNVm"),o={};function d(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[t+"%"+n+(c?"%"+c:"")]=!0}}var j=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",j=s.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),s=n[0],i=n[1];return{href:s,as:e.as?(0,a.resolveHref)(c,e.as):i||s}}),[c,e.href,e.as]),u=j.href,p=j.as,_=e.children,f=e.replace,b=e.shallow,h=e.scroll,x=e.locale;"string"===typeof _&&(_=s.default.createElement("a",null,_));var O=s.Children.only(_),m=O&&"object"===typeof O&&O.ref,v=(0,l.useIntersection)({rootMargin:"200px"}),N=r(v,2),W=N[0],g=N[1],w=s.default.useCallback((function(e){W(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,W]);(0,s.useEffect)((function(){var e=g&&t&&(0,a.isLocalURL)(u),r="undefined"!==typeof x?x:n&&n.locale,c=o[u+"%"+p+(r?"%"+r:"")];e&&!c&&d(n,u,p,{locale:r})}),[p,u,g,x,t,n]);var T={ref:w,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,s,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:s,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,u,p,f,b,h,x)},onMouseEnter:function(e){(0,a.isLocalURL)(u)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(n,u,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var y="undefined"!==typeof x?x:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,y,n&&n.locales,n&&n.domainLocales);T.href=C||(0,a.addBasePath)((0,a.addLocale)(p,y,n&&n.defaultLocale))}return s.default.cloneElement(O,T)};t.default=j},chhm:function(e,t,n){e.exports={hidden:"type02_hidden__w0EKL",wrap:"type02_wrap__u7GQQ",countWrap:"type02_countWrap__2ZABe",count:"type02_count__3YyVq",unitText:"type02_unitText__20Lf4",number:"type02_number__1UIHL",digit:"type02_digit__2F5V4"}},iExe:function(e,t,n){e.exports={hidden:"fit_hidden__1Grrw",wrap:"fit_wrap__1HBOn",chartWrap:"fit_chartWrap__3Dn-b",textWrap:"fit_textWrap__koKJd",titleWrap:"fit_titleWrap__2_O4H",em:"fit_em__3rX2j",descWrap:"fit_descWrap__1dYtx",highlight:"fit_highlight__3diui",desc:"fit_desc__1Rp61",bold:"fit_bold__2S2nF"}},iPLn:function(e,t,n){e.exports={hidden:"question_hidden__10WO-",wrap:"question_wrap__3gFXa",textWrap:"question_textWrap__C1iEe",speechBubbleWrap:"question_speechBubbleWrap__Yy2fQ",wordSliderWrap:"question_wordSliderWrap__3Zurr"}},mNtZ:function(e,t,n){"use strict";var r=n("nKUr"),c=n("FQxu"),s=n.n(c),a=n("UbMB"),i=n.n(a),l=n("q1tI"),o=n("AhJb"),d=i.a.bind(s.a);t.a=function(){var e=Object(l.useState)(["M -10 154 Q -100 299 -75 200 T 0 161 T 100 153 T 200 151 T 300 156 T 426 158 L 426 370 L -10 370 Z"]),t=e[0],n=e[1],c=Object(l.useState)("M -10 234 Q -100 174 -75 200 T -10 239 T 100 231 T 200 236 T 300 239 T 426 230"),s=c[0],a=c[1],i=Object(l.useState)("M -10 240 Q -100 162 -75 200 T -10 245 T 100 241 T 200 242 T 300 249 T 426 245"),j=i[0],u=i[1],p=Object(l.useState)("M -10 73 Q -100 378 -75 200 T -10 71 T 100 78 T 200 71 T 300 79 T 426 71"),_=p[0],f=p[1],b=function(e,t,n){return"\n        M -10 ".concat(Object(o.a)(10)+e,"\n        Q -100 ").concat(Object(o.a)(n)+t,", -75 200 \n        T -10 ").concat(Object(o.a)(10)+e,"  \n        T 100 ").concat(Object(o.a)(10)+e,"  \n        T 200 ").concat(Object(o.a)(10)+e,"  \n        T 300 ").concat(Object(o.a)(10)+e,"  \n        T 426 ").concat(Object(o.a)(10)+e)};return Object(r.jsx)("div",{className:d("wrap"),onClick:function(){var e="M -10 ".concat(Object(o.a)(20)+150),t=[];t.push(e),t.push("\n            Q -100 ".concat(Object(o.a)(200)+100,", -75 200 \n            T 0 ").concat(Object(o.a)(20)+150,"  \n            T 100 ").concat(Object(o.a)(20)+150,"  \n            T 200 ").concat(Object(o.a)(20)+150,"  \n            T 300 ").concat(Object(o.a)(20)+150,"  \n            T 426 ").concat(Object(o.a)(20)+150,"  \n            ")),t.push("L 426 370 L -10 370 Z"),n(t),a(b(230,170,5)),u(b(240,160,5)),f(b(70,300,100))},children:Object(r.jsxs)("svg",{width:"416",height:"360",children:[Object(r.jsx)("path",{className:d("path"),stroke:"#6CDD83",strokeWidth:5,fill:"url('#myGradient')",d:t.join("")}),Object(r.jsx)("path",{className:d("path"),stroke:"#6CDD83",strokeWidth:1,fill:"transparent",d:s}),Object(r.jsx)("path",{className:d("path"),stroke:"#6CDD83",strokeWidth:1,fill:"transparent",d:j}),Object(r.jsx)("path",{className:d("path"),stroke:"#fef8b1",strokeWidth:5,fill:"transparent",d:_}),Object(r.jsx)("defs",{children:Object(r.jsxs)("linearGradient",{id:"myGradient",gradientTransform:"rotate(90)",children:[Object(r.jsx)("stop",{offset:"0%",stopColor:"#6CDD8399"}),Object(r.jsx)("stop",{offset:"100%",stopColor:"#effdf3"})]})})]})})}},tCIV:function(e,t,n){e.exports={hidden:"trends_hidden__1xwdO",wrap:"trends_wrap__1FS3c",emWrap:"trends_emWrap__ImK9i",em:"trends_em__3Rw5v",countList:"trends_countList__1zs0x",item:"trends_item__2MHve",textWrap:"trends_textWrap__2sEGx",title:"trends_title__39OTy",text:"trends_text__kWlO_"}},vN0C:function(e,t,n){e.exports={hidden:"header_hidden__1kCA3",header:"header_header__ADI_k"}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,l=(0,c.useRef)(),o=(0,c.useState)(!1),d=r(o,2),j=d[0],u=d[1],p=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||j||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(c))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,j]);return(0,c.useEffect)((function(){if(!a&&!j){var e=(0,s.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[j]),[p,j]};var c=n("q1tI"),s=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},vbXA:function(e,t,n){e.exports={hidden:"speechBubble_hidden__3iHjZ",dot:"speechBubble_dot__3aQhq",opacityRepeat:"speechBubble_opacityRepeat__1pcvu"}},xBkw:function(e,t,n){e.exports={hidden:"realYou_hidden__3oAmn",wrap:"realYou_wrap__28jrI",cover:"realYou_cover__2cqxD",covered:"realYou_covered__yI2rb",contentsWrap:"realYou_contentsWrap__IHDcH",title:"realYou_title__iHnQA",text:"realYou_text__1ROdP",textWrap:"realYou_textWrap__3PhPp"}}},[["botx",0,2,1]]]);