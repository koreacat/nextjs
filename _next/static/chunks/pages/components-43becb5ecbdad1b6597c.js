_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{BEAS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return a("kM0U")}])},DNU7:function(e,t,a){e.exports={hidden:"waterFill_hidden__11tIk",waterFill:"waterFill_waterFill__2aTAI",box:"waterFill_box__2cuq8",POSITIVE:"waterFill_POSITIVE__3f6BV",title:"waterFill_title__2U2rZ",wave:"waterFill_wave__2Iboo",back:"waterFill_back__3rxJx",front:"waterFill_front__2lIDF",cover:"waterFill_cover__1oDNw",PERFORMANCE:"waterFill_PERFORMANCE__3XzVd",VALUE:"waterFill_VALUE__32htk",water:"waterFill_water__1tRPI","wave-back":"waterFill_wave-back__17e9E","wave-front":"waterFill_wave-front__2jApr",waterText:"waterFill_waterText__2gUpH",percentArea:"waterFill_percentArea__wg_ft",num:"waterFill_num__-iNQe",per:"waterFill_per__382oe"}},LNH9:function(e,t,a){e.exports={hidden:"hearthFill_hidden__2RDJX",waterFill:"hearthFill_waterFill__1VmuE",box:"hearthFill_box__2Rarp",POSITIVE:"hearthFill_POSITIVE__2tAiS",title:"hearthFill_title__34Mvh",wave:"hearthFill_wave__VmMWG",back:"hearthFill_back__2dL2w",front:"hearthFill_front__QmtGP",cover:"hearthFill_cover__1x8qf",PERFORMANCE:"hearthFill_PERFORMANCE__2XcVI",VALUE:"hearthFill_VALUE__12oD6",water:"hearthFill_water__1TkKH","wave-back":"hearthFill_wave-back__1mBIK","wave-front":"hearthFill_wave-front__2bho3",waterText:"hearthFill_waterText__3vyt4",percentArea:"hearthFill_percentArea__2dDdB",num:"hearthFill_num__32FJM",per:"hearthFill_per__1cldK",heartFill:"hearthFill_heartFill__2q_I2",heartWrap:"hearthFill_heartWrap__2tjn3",heartBorderWrap:"hearthFill_heartBorderWrap__3pmL9",heartShapeWrap:"hearthFill_heartShapeWrap__3dxZr",heartBorder:"hearthFill_heartBorder__rIx0g",heartShape:"hearthFill_heartShape__Dj58I"}},P5D8:function(e,t,a){e.exports={wrap:"count_wrap__1lFgE",countWrap:"count_countWrap__1tuOq",count:"count_count__1GXYh",number:"count_number__3c9Ap",digit:"count_digit__3BFOP"}},kM0U:function(e,t,a){"use strict";a.r(t);var r=a("nKUr"),l=a("Z5kR"),c=a("38tU"),n=a("P5D8"),s=a.n(n),i=a("UbMB"),_=a.n(i),j=a("q1tI"),h=_.a.bind(s.a),o=function(e){var t=e.num,a=Object(j.useState)({transform:"translateY(0px)"}),l=a[0],c=a[1];Object(j.useEffect)((function(){setTimeout((function(){c({transform:"translateY(-".concat(57*t,"px)")})}),0)}),[t]);var n=[0,1,2,3,4,5,6,7,8,9].map((function(e,t){return Object(r.jsx)("span",{className:h("digit"),children:t},t)}));return Object(r.jsx)("div",{className:h("number"),style:l,children:n})},b=function(e){for(var t=e.count,a=e.maxLength,l=t.toString().split(""),c=Array.from({length:a},(function(){return"0"})),n=0;n<l.length;n++)c[c.length-l.length+n]=l[n];var s=c.map((function(e,t){return Object(r.jsx)(o,{num:parseInt(e)},t)}));return Object(r.jsx)("div",{className:h("wrap"),children:Object(r.jsxs)("span",{className:h("countWrap"),children:[Object(r.jsx)("div",{className:h("count"),children:s}),"\uac1c"]})})},u=a("DNU7"),O=a.n(u),x=_.a.bind(O.a),v=function(){return Object(r.jsx)("path",{d:"M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420Z M420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420Z M140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z M140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140Z"})},w=function(e){var t=Object(j.useState)(0),a=t[0],l=t[1],c=Object(j.useRef)(null),n=Object(j.useRef)(null),s=e.title,i=e.average,_=e.type,h=null;return Object(j.useEffect)((function(){return function(e){h&&clearInterval(h);var t=e.water,a=e.waterCover,r=e.count,l=e.setCount,c=e.average,n=c>r,s=r,i=c>=100?100:c<=0?0:c,_=Math.abs(r-i);c!==r&&a&&t&&(a.style.transform="translate(0, 8%)",t.style.transition="all linear ".concat(60*_/1e3+.2,"s"),t.style.transform="translate(0, ".concat(100-i,"%)"),h=setInterval((function(){l(n?++s:--s),((n?s>=c:s<=c)||s>=100||s<=0)&&(a.style.transform="translate(0, 0%)",h&&clearInterval(h),h=null)}),60))}({water:c.current,waterCover:n.current,count:a,setCount:l,average:i}),function(){clearInterval(h)}}),[i,_]),Object(r.jsx)("div",{className:x("waterFill"),children:Object(r.jsxs)("div",{className:x("box",_),children:[Object(r.jsxs)("div",{ref:c,className:x("water"),children:[Object(r.jsx)("svg",{viewBox:"0 0 560 20",className:x("wave","back"),children:Object(r.jsx)(v,{})}),Object(r.jsx)("svg",{viewBox:"0 0 560 20",className:x("wave","front"),children:Object(r.jsx)(v,{})}),Object(r.jsx)("div",{ref:n,className:x("wave","cover")})]}),Object(r.jsxs)("div",{className:x("waterText"),children:[Object(r.jsxs)("div",{className:x("percentArea"),children:[Object(r.jsx)("span",{className:x("num"),children:a}),Object(r.jsx)("span",{className:x("per"),children:"%"})]}),Object(r.jsx)("span",{className:x("title"),children:s})]})]})})},d=a("LNH9"),p=a.n(d),C=_.a.bind(p.a),f=function(){return Object(r.jsx)("path",{d:"M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420Z M420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420Z M140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z M140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140Z"})},m=function(e){var t=Object(j.useState)(0),a=t[0],l=t[1],c=Object(j.useRef)(null),n=Object(j.useRef)(null),s=e.title,i=e.average,_=e.type,h=null;return Object(j.useEffect)((function(){return function(e){h&&clearInterval(h);var t=e.water,a=e.waterCover,r=e.count,l=e.setCount,c=e.average,n=c>r,s=r,i=c>=100?100:c<=0?0:c,_=Math.abs(r-i);c!==r&&a&&t&&(a.style.transform="translate(0, 8%)",t.style.transition="all linear ".concat(60*_/1e3+.2,"s"),t.style.transform="translate(0, ".concat(100-i,"%)"),h=setInterval((function(){l(n?++s:--s),((n?s>=c:s<=c)||s>=100||s<=0)&&(a.style.transform="translate(0, 0%)",h&&clearInterval(h),h=null)}),60))}({water:c.current,waterCover:n.current,count:a,setCount:l,average:i}),function(){clearInterval(h)}}),[i,_]),Object(r.jsx)("div",{className:C("heartFill"),children:Object(r.jsxs)("div",{className:C("heartWrap",_),style:{clipPath:'path("'.concat("M24.0748 101.514L24.0516 101.491C8.35072 85.8073 0 69.5004 0 51.8627C0 23.2461 23.3213 0 51.8842 0C68.2024 0 83.3983 7.76195 93.0951 20.5416C102.799 7.75562 118.022 0 134.497 0C163.072 0 186.2 23.2626 185.999 51.8795C185.994 69.6616 177.872 85.9736 161.924 101.514L100.481 162.89C96.3283 167.039 89.6669 167.037 85.517 162.881L83.3333 160.694L83.3245 160.685C68.0859 145.422 30.2079 107.484 24.0983 101.537L24.0748 101.514Z",'")')},children:[Object(r.jsx)("svg",{className:C("heartShapeWrap"),width:"176",height:"156",viewBox:"0 0 176 156",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{className:C("heartShape"),d:"M46.8833 0.0614014C21.0669 0.0614014 0.03125 21.0742 0.03125 46.8627C0.03125 62.7178 7.48934 77.8089 22.5967 92.8999C29.0582 99.1888 70.6864 140.893 84.0596 154.287C86.2473 156.478 89.7513 156.48 91.9418 154.292C105.346 140.902 147.104 99.1895 153.4 92.8999C168.699 77.9999 175.966 62.9089 175.966 46.8627C176.157 21.0742 155.312 0.0614014 129.496 0.0614014C112.285 0.0614014 96.6039 9.42166 88.3809 24.3217L87.9984 24.8947L87.8072 24.3217C79.5842 9.42166 63.9031 0.0614014 46.8833 0.0614014Z"})}),Object(r.jsxs)("div",{ref:c,className:C("water"),children:[Object(r.jsx)("svg",{viewBox:"0 0 560 20",className:C("wave","back"),children:Object(r.jsx)(f,{})}),Object(r.jsx)("svg",{viewBox:"0 0 560 20",className:C("wave","front"),children:Object(r.jsx)(f,{})}),Object(r.jsx)("div",{ref:n,className:C("wave","cover")})]}),Object(r.jsx)("svg",{className:C("heartBorderWrap"),width:"186",height:"166",viewBox:"0 0 186 166",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{className:C("heartBorder"),d:"M24.0748 101.514L24.0516 101.491C8.35072 85.8073 0 69.5005 0 51.8627C0 23.2461 23.3213 0 51.8842 0C68.2024 0 83.3983 7.76195 93.0951 20.5416C102.799 7.75562 118.022 0 134.497 0C163.072 0 186.2 23.2626 185.999 51.8795C185.994 69.6616 177.872 85.9736 161.924 101.514L100.481 162.89C96.3283 167.039 89.6669 167.037 85.517 162.881L83.3333 160.694C68.1005 145.437 30.209 107.485 24.0983 101.537L24.0748 101.514ZM158.401 97.8999C173.7 82.9999 180.967 67.9089 180.967 51.8627C181.158 26.0742 160.313 5.06142 134.497 5.06142C119.031 5.06142 104.8 12.6201 96.1064 24.965C95.2269 26.2139 94.404 27.5119 93.6423 28.8559C93.5994 28.9316 93.5568 29.0074 93.5143 29.0833C93.4699 29.1626 93.4258 29.2421 93.3818 29.3217L92.9994 29.8948L92.8081 29.3217C92.7221 29.1658 92.6353 29.0106 92.5476 28.8559C92.5177 28.8031 92.4876 28.7503 92.4575 28.6976C91.7211 27.4098 90.9284 26.1647 90.0836 24.9648C81.3919 12.62 67.1785 5.06142 51.8842 5.06142C26.0678 5.06142 5.03216 26.0742 5.03216 51.8627C5.03216 67.7178 12.4902 82.8089 27.5977 97.8999C33.7366 103.875 71.6194 141.818 86.8548 157.078L89.0677 159.295C91.255 161.485 94.7454 161.487 96.9355 159.299L158.401 97.8999Z"})}),Object(r.jsxs)("div",{className:C("waterText"),children:[Object(r.jsxs)("div",{className:C("percentArea"),children:[Object(r.jsx)("span",{className:C("num"),children:a}),Object(r.jsx)("span",{className:C("per"),children:"%"})]}),Object(r.jsx)("span",{className:C("title"),children:s})]})]})})},F=a("5jxN"),N=a("AhJb"),E=function(){var e=Object(j.useState)(Object(N.a)(1e5)),t=e[0],a=e[1],l=Object(j.useState)(Object(N.a)(101)),c=l[0],n=l[1],s=Object(j.useState)(Object(N.a)(101)),i=s[0],_=s[1],h=Object(j.useState)(Object(N.a)(101)),o=h[0],u=h[1],O=Object(j.useState)(2*Object(N.a)(101)),x=O[0],v=O[1];return Object(j.useEffect)((function(){var e=setInterval((function(){a(Object(N.a)(1e5)),n(Object(N.a)(101)),_(Object(N.a)(101)),u(Object(N.a)(101)),v(2*Object(N.a)(101))}),7e3);return function(){clearInterval(e)}}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(b,{maxLength:1,count:t}),Object(r.jsx)(b,{maxLength:3,count:t}),Object(r.jsx)(b,{maxLength:5,count:t})]}),Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(w,{title:"waterFill",type:"POSITIVE",average:c}),Object(r.jsx)(w,{title:"waterFill",type:"PERFORMANCE",average:o}),Object(r.jsx)(w,{title:"waterFill",type:"VALUE",average:i})]}),Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(m,{title:"heartFill",type:"POSITIVE",average:c}),Object(r.jsx)(m,{title:"heartFill",type:"PERFORMANCE",average:o}),Object(r.jsx)(m,{title:"heartFill",type:"VALUE",average:i})]}),Object(r.jsxs)("div",{style:{display:"flex"},children:[Object(r.jsx)(F.a,{r:31.5,title:"\uc26c\uc6c0",percent:x/5,colorType:"YELLOW"}),Object(r.jsx)(F.a,{r:37.8,title:"\ub2e4\uc18c \uc26c\uc6c0",percent:x/4,colorType:"LIME"}),Object(r.jsx)(F.a,{r:44.1,title:"\ubcf4\ud1b5",percent:x/3,colorType:"GREEN"}),Object(r.jsx)(F.a,{r:50.4,title:"\ub2e4\uc18c \uc5b4\ub824\uc6c0",percent:x/2,colorType:"SKY"}),Object(r.jsx)(F.a,{r:56.7,title:"\uc5b4\ub824\uc6c0",percent:x,colorType:"BLUE"})]})]})};t.default=function(){return Object(r.jsx)(l.a,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(E,{})})})}}},[["BEAS",0,2,1,5]]]);