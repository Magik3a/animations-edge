
(function($,Edge,compId){var _=null,y=true,n=false,x31='rgba(39,39,39,1.00)',x97='rgb(0, 0, 0)',x106='782px',cl='clip',x55='rgba(22,22,22,1.00)',x80='rgba(30,30,30,1.00)',x127='42px',e43='${_pageTwoBack}',e153='${_auto_xplane_rotate_a}',x98='rgba(113,172,128,1.00)',i='none',x57='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x119='266px',e58='${_people2}',x111='flower',e67='${_paralax}',om='-ms-transform-origin',x139='stupidyti',fs='font-size',e141='${_Text6}',x109='500px',ta='text-align',e52='${_Stage}',e147='${_auto_xplane_cloud_a2}',x38='stage',x113='pageone',rz='rotateZ',x3='4.0.0.359',x13='%',zx='scaleX',x4='both',x88='rgba(21,114,218,1.00)',e91='${_people3}',e69='${_Text4}',x164='10px',oz='-moz-transform-origin',x122='rgba(49,198,225,1.00)',qir='easeInQuart',t='transform',rbl='border-bottom-left-radius',x158='rgba(11,4,4,1)',e117='${_pageone}',a='Base State',e90='${_fire_explosion_rock_79172}',p='px',o='opacity',e44='${_chair}',e61='${_stupidyti}',oo='-o-transform-origin',x84='rgba(255,255,255,0.77)',x87='rgba(39,39,39,1)',rtl='border-top-left-radius',e66='${_Rectangle}',x14='993.75',e68='${_destroy}',x166='paralax',x129='cloudText',x162='rgba(67,67,67,0.00)',x160='rgba(3,3,3,1.00)',x161='rgba(23,22,22,1.00)',e65='${_people4}',e49='${_element}',x34='24',x82='rgba(0,0,0,0.74)',x151='72px',e50='${_Rectangle6}',e62='${_people1}',x154='506px',or='-webkit-transform-origin',x128='19px',c='color',x148='auto_xplane_rotate_a',x157='RoundRect',x37='900',e63='${_Text2}',x20='rgba(64,64,64,1)',x105='MTLLboErc',x149='Text4',x146='2px',x145='51px',x42='rgba(147,147,147,1.00)',e112='${_MTLLboErc}',x143='Text5',e70='${_logo}',e71='${_hd-wallpaper-paradise-beach}',x142='auto_xplane_cloud_a2',e131='${_auto_xplane_cloud_a}',bsz='background-size',x53='hidden',e77='${_pageOneBack}',x102='rgba(116,113,172,1.00)',e140='${_auto_xplane_rotate_a2}',s='style',e85='${_paralaxCopy}',x138='7px',x137='53px',x135='Text6',x116='pageOneBack',x48='visible',x132='auto_xplane_rotate_a2',e59='${_cloudText}',e130='${_Text3}',lf='left',x163='36px',e89='${_minion_png_by_justelaine-d6cno1z}',x125='60px',x123='Text3',x1='chewy, sans-serif',x120='76px',x118='auto_xplane_cloud_a',bp='background-position',x46='rgba(255,255,255,0.27)',bg='background-color',x41='@@0@@% @@1@@%',rbr='border-bottom-right-radius',e74='${_fire}',x134='rgba(49,198,225,1)',x40='@@0@@% @@1@@px',tp='top',x10='400',ov='overflow',x114='100%',x51='rgba(255,255,255,1)',x108='1132px',zy='scaleY',e54='${_Rectangle2}',x107='2769px',e64='${_minionRocket}',x104='round',x5='rgba(0,0,0,0)',x101='Rectangle3',e100='${symbolSelector}',g='image',r='deg',x95='auto',x96='Rectangle2',x99='pageTwo',x93='1950px',x126='5px',x152='8px',ky='skewY',x='text',e86='${_Rectangle5}',x35='rgba(242,233,216,1)',m='rect',x92='0px',e78='${_one_direction}',h='height',x83='rgba(158,158,158,0.24)',x159='rgba(209,209,209,0.00)',x8='159',e167='${_RoundRect}',e81='${_Text}',e79='${_Rectangle3}',x45='rgba(11,4,4,1.00)',e60='${_Text5}',dt='Default Timeline',e76='${_Text5Copy}',e75='${_minions}',x15='rgba(192,192,192,1)',e56='${_down}',x72='@@0@@px @@1@@px',x47='rgba(255,255,255,1.00)',x9='Arial, Helvetica, sans-serif',on='msTransformOrigin',l='normal',x2='4.0.0',e73='${_rocket_point}',xc='rgba(0,0,0,1)',e39='${_bazuka}',rtr='border-top-right-radius',w='width',x155='108px',ql='linear',x156='272px 272px',po='center',ff='font-family',x103='page3',x94='1200px';var im='images/';var g23='hd-wallpaper-paradise-beach.jpg',g21='people4.png',g19='people3.png',g121='auto_xplane_cloud_a.png',g6='big_04358e8b69017aebe68c60ff91c5ae6fa7e226a3.png',g11='down.png',g30='minionRocket.png',g29='chair.png',g27='bazuka.png',g133='auto_xplane_rotate_a.png',g26='fire_explosion_rock_7917.png',g115='1802585.jpg',g28='rocket_point.png',g18='people2.png',g24='one_direction.png',g110='MTLLboErc.png',g22='element.jpg',g32='logo.png',g17='people1.png',g16='fire.png',g25='minion_png_by_justelaine-d6cno1z.png';var s7="something<br>",s36="THE END",s136="stupidity",s165="Parallax scrolling",s150="destroy",s144="minions",s124="HELP",s12="If you want to see cool parallax effect<br> Keep scroling",s33="Copyright © www.s2kdesign.com 2015";var fonts={};fonts[x1]='<script src=\"http://use.edgefonts.net/chewy:n4:all.js\"></script>';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,stf:w,cg:x4,iS:a,gpu:n,rI:n,cn:{dom:[{id:'pageTwoBack',t:g,r:['0','2650px','1956px','1780px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'pageOneBack',t:m,r:['0','0','auto','auto','auto','auto']},{id:'Text2',t:x,r:['552px','6738px','auto','auto','auto','auto'],o:0.4390243902439,text:s7,align:"left",n:[x9,x8,xc,x10,i,l]},{id:'down',t:g,r:['888px','894px','200px','200px','auto','auto'],cl:['rect(0px 200px 200px 0px)'],f:[x5,im+g11,'0px','0px']},{id:'Text',t:x,r:['476px','2046px','auto','auto','auto','auto'],text:s12,align:"center",n:[x1,[x14,x13],xc,x10,i,l],textShadow:["rgba(0,0,0,0.65098)",3,3,3]},{id:'Rectangle',t:m,r:['0px','2655px','1956px','87px','auto','auto'],f:[x15,[270,[['rgba(163,145,128,1.00)',0],['rgba(64,64,64,1.00)',89],['rgba(64,64,64,1.00)',100]]]],s:[0,xc,i]},{id:'paralax',t:m,r:['250','945','auto','auto','auto','auto']},{id:'paralaxCopy',t:m,r:['1213px','945','auto','auto','auto','auto']},{id:'fire',t:g,r:['218px','2580px','160px','257px','auto','auto'],f:[x5,im+g16,'0px','0px'],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'people1',t:g,r:['935px','2758px','124px','390px','auto','auto'],o:1,f:[x5,im+g17,'0px','0px','99.6%','99.6%'],filter:[0,0,1.07,1,0,0,0,50,"rgba(0,0,0,0)",0,0,0]},{id:'Rectangle2',t:m,r:['129px','2580px','44px','263px','auto','auto'],f:[x15],s:[1,xc,i]},{id:'people2',t:g,r:['2046px','2690px','63px','286px','auto','auto'],o:0.5042735042735,f:[x5,im+g18,'0px','0px'],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'people3',t:g,r:['2119px','2976px','118px','412px','auto','auto'],o:0.71794871794872,f:[x5,im+g19,'0px','0px'],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'Rectangle3',t:m,r:['1505px','2880px','22px','232px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'people4',t:g,r:['2005px','3100px','324px','532px','auto','auto'],f:[x5,im+g21,'0px','0px'],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'element',t:g,r:['1794px','2969px','43px','382px','auto','auto'],f:[x5,im+g22,'0px','0px']},{id:'hd-wallpaper-paradise-beach',t:g,r:['0','3600','98.5%','16.9%','auto','auto'],f:[x5,im+g23,'0px','0px']},{id:'one_direction',t:g,r:['196px','5793px','351px','263px','auto','auto'],f:[x5,im+g24,'0px','0px'],tf:[[],[],['0','-3']]},{id:'minion_png_by_justelaine-d6cno1z',t:g,r:['1966px','5632px','221px','221px','auto','auto'],f:[x5,im+g25,'0px','0px']},{id:'fire_explosion_rock_79172',t:g,r:['227px','5622px','320px','480px','auto','auto'],f:[x5,im+g26,'0px','0px']},{id:'bazuka',t:g,r:['1213px','5593px','177px','167px','auto','auto'],f:[x5,im+g27,'0%','0px'],filter:[0,0,1,1,0,0,0,1,"rgba(0,0,0,0)",0,0,0]},{id:'rocket_point',t:g,r:['1163px','4768px','249px','153px','auto','auto'],f:[x5,im+g28,'0px','0px'],filter:[0,0,1,1,0,0,0,2,"rgba(0,0,0,0)",0,0,0]},{id:'chair',t:g,r:['1301px','5272px','598px','858px','auto','auto'],f:[x5,im+g29,'0px','0px']},{id:'minionRocket',t:g,r:['-314px','4810px','236px','277px','auto','auto'],f:[x5,im+g30,'0px','0px']},{id:'Rectangle5',t:m,r:['0px','4374px','1950px','87px','auto','auto'],f:[x31],s:[0,"rgb(0, 0, 0)",i]},{id:'cloudText',t:m,r:['79','4379','auto','auto','auto','auto']},{id:'stupidyti',t:m,r:['1372','4379','auto','auto','auto','auto']},{id:'destroy',t:m,r:['1075','4379','auto','auto','auto','auto']},{id:'minions',t:m,r:['745','4379','auto','auto','auto','auto']},{id:'logo',t:g,r:['771px','6210px','21.2%','2%','auto','auto'],f:[x5,im+g32,'0px','0px'],filter:[0,0,1.0666666666667,1,0,0,0,0,"rgba(147,147,147,1.00)",3,12,5]},{id:'Text4',t:x,r:['776px','6356px','auto','auto','auto','auto'],text:s33,align:"left",n:[x9,x34,xc,x10,i,l]},{id:'Rectangle6',t:m,r:['0px','6097px','1956px','51px','auto','auto'],f:[x35,[270,[['rgba(189,201,252,1.00)',0],['rgba(0,127,255,1.00)',51],['rgba(255,255,255,1.00)',100]]]],s:[0,"rgb(0, 0, 0)",i]},{id:'Text5',t:x,r:['640px','6100px','95px','24px','auto','auto'],text:s36,align:"left",n:[x1,x34,"rgba(255,255,255,1.00)",x37,i,l],filter:[0,0,1,1,0,0,0,0,"rgba(255,255,255,0.27)",5,1,0],tf:[[],[],[],['1.69','1.69']]},{id:'Text5Copy',t:x,r:['1218px','6100px','95px','24px','auto','auto'],text:s36,align:"left",n:[x1,x34,"rgba(255,255,255,1.00)",x37,i,l],filter:[0,0,1,1,0,0,0,0,"rgba(255,255,255,0.27)",5,1,0],tf:[[],[],[],['1.69','1.69']]}],sI:[{id:'cloudText',sN:'cloudText',a:{}},{id:'paralax',sN:'paralax'},{id:'paralaxCopy',sN:'paralax'},{id:'destroy',sN:'destroy',a:{}},{id:'minions',sN:'minions',a:{}},{id:'pageOneBack',sN:'pageOneBack',a:{}},{id:'stupidyti',sN:'stupidyti',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:7490,a:n,tt:[]}}},"pageTwo":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x92,x92,x93,x94,x95,x95],id:x96,s:[0,x97,i],t:m,f:[x98]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"page3":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x92,x92,x93,x94,x95,x95],id:x101,s:[0,x97,i],t:m,f:[x102]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"round":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3670,a:y,tt:[]}}},"flower":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x105,t:g,r:[x106,x107,x108,x109,x95,x95],f:[x5,im+g110,x92,x92]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3750,a:y,tt:[]}}},"pageOneBack":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x113,t:g,r:[x92,x92,x114,x114,x95,x95],f:[x5,im+g115,x92,x92]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"cloudText":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x118,t:g,r:[x92,x92,x119,x120,x95,x95],f:[x5,im+g121,x92,x92]},{n:[x1,55,x122,x10,i,l],t:x,id:x123,text:s124,align:lf,r:[x125,x126,x127,x128,x95,x95]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"stupidyti":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x132,t:g,r:[x92,x92,x119,x120,x95,x95],f:[x5,im+g133,x92,x92]},{n:[x1,45,x134,x10,i,l],t:x,id:x135,text:s136,align:lf,r:[x137,x138,x95,x95,x95,x95]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"minions":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x142,t:g,r:[x92,x92,x119,x120,x95,x95],f:[x5,im+g121,x92,x92]},{n:[x1,55,x134,x10,i,l],t:x,id:x143,text:s144,align:lf,r:[x145,x146,x95,x95,x95,x95]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"destroy":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x148,t:g,r:[x92,x92,x119,x120,x95,x95],f:[x5,im+g133,x92,x92]},{n:[x1,45,x134,x10,i,l],t:x,id:x149,text:s150,align:lf,r:[x151,x152,x95,x95,x95,x95]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"paralax":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{s:[0,x97,i],r:[x92,x92,x154,x155,x95,x95],br:[x156,x156,x156,x156],filter:[0,0,1,1,0,0,0,0,x5,0,0,0],id:x157,o:0.67,t:m,f:[x158,[270,[[x159,0],[x160,42],[x161,60],[x162,100]]]]},{r:[x163,x164,x95,x95,x95,x95],n:[x1,60,x84,x10,i,l],id:x135,text:s165,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x38];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e39).P(tp,5593).P(lf,1213).P(h,167).P("filter.blur",1,"subproperty").P(bp,[0,0],_,x40).P(w,177);A1.A(e43).P(h,1780).P(tp,2650).P(w,1956);A1.A(e44).P(h,858).P(tp,5272).P(lf,1301).P(w,598);A1.A(e49).P(tp,3806).P(lf,1795);A1.A(e50).P(tp,6097).P("background-image",[270,[['rgba(189,201,252,1.00)',0],['rgba(0,127,255,1.00)',51],['rgba(255,255,255,1.00)',100]]],"gradient").P(lf,0);A1.A(e52).P(bg,x51,c).P(w,1950).P(h,6400).P(ov,x53);A1.A(e54).P("border-style",i).P("border-width",1).P(o,1,_,_,"").P(lf,129,_,_,p).P(tp,3892).T(0,3892).P(bg,x55,c).T(1.652,x55);A1.A(e56).P(lf,875).P(h,200).P(o,0.47,_,_,"").P(w,200,_,_,p).P(tp,894).T(0,-266,1.075,ql).P(cl,[0,200,190,0],_,x57).T(0,[0,200,190,0]).P(rz,0,t,_,r).T(0,180,0.5);A1.A(e58).P("filter.blur",1,"subproperty").P(tp,3632).T(1.807,3756,0.979,ql).P(h,87).T(1.807,200,0.979).P(o,0,_,_,"").T(2.273,0.5,0.441).P(lf,1252,_,_,p).T(1.807,1381,0.979).P(w,19).T(1.807,100,0.979);A1.A(e59).P(lf,338).T(0,338).T(2.714,-642,0.832,ql);A1.A(e60).P("filter.drop-shadow.color",x46,"subproperty").P(c,x47,c).P("font-weight",900,_,_,"").P(lf,640,_,_,p).P(w,95).P(tp,6100).P("filter.drop-shadow.offsetV",1,"subproperty").P("filter.drop-shadow.offsetH",5,"subproperty").P(h,24).P(ff,x1).P(fs,24).P(zy,1.26,t,_,"").T(4.25,1.26).P(zx,1.69,t).T(4.25,4.28,0.472,ql);A1.A(e61).P(lf,1266).T(0,1266).T(2.714,2316,0.832,ql);A1.A(e62).P(bsz,[99.6,99.6],_,x41).P("filter.contrast",1.07,"subproperty",_,"").P(o,1).P(lf,935,_,_,p).P(w,95).P(h,277).T(1.902,277).P("filter.blur",50,"subproperty").T(1.902,4,0.598,ql).P(tp,3588).T(0,3588);A1.A(e63).P(tp,6738).P(lf,552).P(o,0.44,_,_,"").T(7.25,0,0.24,ql);A1.A(e64).P(h,277).P(tp,4810).T(3.274,4951,0.26,ql).T(3.534,4803,0.145).T(3.679,4958,0.151).T(3.83,4684,0.276).P(lf,-314).T(3.274,864,0.405).T(3.679,1330,0.151).T(3.83,1982,0.276).P(rz,0,t,_,r).T(3.274,37,0.13).T(3.404,-31,0.13).T(3.534,44,0.145).T(3.679,-24,0.151).T(3.83,-18,0.276);A1.A(e65).P(h,532).P("filter.blur",1,"subproperty").P(w,324).P(tp,3930).T(0,3930).P(o,0,_,_,"").T(2.188,1,0.441,ql).P(lf,2005,_,_,p).T(2.188,578,0.441);A1.A(e66).P(tp,2655).P(bg,x45,c).P(w,1956).P("background-image",[270,[['rgba(163,145,128,1.00)',0],['rgba(63,63,63,1.00)',89],['rgba(63,63,63,1.00)',100]]],"gradient").T(0.894,[270,[['rgba(163,145,128,1.00)',0],['rgba(63,63,63,1.00)',34],['rgba(63,63,63,1.00)',100]]],0.498,ql);A1.A(e67).P(tp,945).T(0,1378,0.46,ql).P(o,1,_,_,"").T(0,0,0.46);A1.A(e68).P(lf,969).T(0,969).T(2.714,2019,0.832,ql);A1.A(e69).P(lf,768).P(tp,6719).T(4,6339,0.472,ql).P(o,0,_,_,"").T(4,1,0.472);A1.A(e70).P("filter.drop-shadow.color",x42,"subproperty").P("filter.contrast",1.07,"subproperty",_,"").P(lf,771,_,_,p).P(w,21.24,_,_,"%").P(h,2.03).P("filter.drop-shadow.blur",5,"subproperty",_,p).P("filter.drop-shadow.offsetV",12,"subproperty").P("filter.drop-shadow.offsetH",3,"subproperty").P(tp,6498).T(4,6153,0.472,ql).P(o,0,_,_,"").T(4,1,0.472);A1.A(e71).P(tp,4413).T(0,4413).P(h,26.83,_,_,"%").T(0,26.83).P(or,[50,50],_,x41).T(0,[50,50]).P(oz,[50,50],_,x41).T(0,[50,50]).P(om,[50,50],_,x41).T(0,[50,50]).P(on,[50,50],_,x41).T(0,[50,50]).P(oo,[50,50],_,x41).T(0,[50,50]).P(bp,[0,0],_,x72).T(0,[0,0]).P(w,100.31).T(0,100.31);A1.A(e73).P(ky,0,t,_,r).P(ov,x48).P(tp,5581,_,_,p).T(3.303,5581).T(3.637,5246,0.3,ql,5501).T(3.937,5586,0.154).P("filter.blur",2,"subproperty").T(3.274,1,0.662).T(3.937,0,0.154).P(rz,0,t,_,r).T(3.303,-23,0.133).T(3.437,47,0.2).T(3.637,-16,0.3).T(3.937,-80,0.154).P(h,65,_,_,p).T(3.304,105,0.633).T(3.937,148,0.153).P(o,1,_,_,"").T(4.074,0,0.015).P(lf,1163,_,_,p).T(3.303,742,0.333).T(3.637,398,0.3).T(3.937,290,0.154).P(w,146).T(3.304,216,0.633).T(3.937,257,0.153);A1.A(e74).P("filter.drop-shadow.color",x5,"subproperty").P(w,160).P("filter.drop-shadow.offsetV",0,"subproperty").P("filter.saturate",0,"subproperty",_,"").P(h,257,_,_,p).P("filter.blur",1,"subproperty").P("filter.drop-shadow.blur",0,"subproperty").P("filter.drop-shadow.offsetH",0,"subproperty").P(lf,-252).T(1.652,218,0.598,ql).P(tp,3903).T(0,3903);A1.A(e75).P(lf,639).T(0,639).T(2.714,-341,0.832,ql);A1.A(e76).P("filter.drop-shadow.color",x46,"subproperty").P(c,x47,c).P("font-weight",900,_,_,"").P(lf,1218,_,_,p).P(w,95).P(tp,6100).P(fs,24).P(h,24).P(ff,x1).P("filter.drop-shadow.offsetH",5,"subproperty").P("filter.drop-shadow.offsetV",1,"subproperty").P(zx,1.69,t,_,"").T(4.25,4.28,0.472,ql).P(zy,1.26,t).T(4.25,1.26);A1.A(e77).P(zy,1.32333,t,_,"").P(tp,194,_,_,p).T(0,194);A1.A(e78).P(tp,5793).P(ky,-3,t,_,r).P(h,263,_,_,p).P(lf,196).P(w,351).P(o,1,_,_,"").T(4.075,0,0.015,ql);A1.A(e79).P("filter.blur",1,"subproperty").P(h,232).P(bg,x80,c).T(3.095,x80).P(tp,3710).T(0,3710);A1.A(e81).P("textShadow.offsetH",0,"subproperty").P(lf,476).P(w,1084).P(tp,2046).P(ta,po).P(h,286).P(ff,x1).P(fs,500,_,_,"%").P("textShadow.blur",11,"subproperty",_,p).T(0,11).P("textShadow.color",x82,"subproperty").T(0,x82).P(c,x83,c).T(0,x84,1.075,ql).P("textShadow.offsetV",130,"subproperty").T(0,-50,1.075,qir);A1.A(e85).P(lf,1213).P(tp,945).T(0,1378,0.46,ql).P(o,1,_,_,"").T(0,0,0.46);A1.A(e86).P(bg,x87,c).T(2.714,x88,0.226,ql);A1.A(e89).P(h,221).P(w,221).P(tp,5632).T(3.274,5815,0.816,ql).P(lf,1966).T(3.274,971,0.816).P(rz,0,t,_,r).T(3.274,-12,0.13).T(3.404,13,0.13).T(3.534,-18,0.145).T(3.679,23,0.151).T(3.83,-18,0.107).T(3.937,5,0.169);A1.A(e90).P(zy,1,t,_,"").P(lf,212,_,_,p).P(tp,6002).T(4.09,5552,0.1,ql).P(o,0,_,_,"").T(4.09,0.92,0.1).P(h,95,_,_,p).T(4.09,545,0.1);A1.A(e91).P("filter.blur",1,"subproperty").P(h,412).P(o,0.72,_,_,"").P(w,118,_,_,p).P(tp,3806).T(0,3806).P(lf,2119).T(2.093,1644,0.664,ql);var S2=symbols[x99];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e100).P(h,1200).P(w,1950);A2.A(e54).P(bg,x98,c).P(lf,0).P(tp,0);var S3=symbols[x103];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e100).P(h,1200).P(w,1950);A3.A(e79).P(bg,x102,c).P(lf,0).P(tp,0);var S4=symbols[x104];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e100).P(h,441).P(w,427);var S5=symbols[x111];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e100).P(h,0).P(w,0);A5.A(e112).P(tp,2769).P(h,500).P(zx,1.21,t,_,"").P(lf,782,_,_,p).P(w,372).P(zy,0,t,_,"").T(3.25,0.98,0.5,ql);var S6=symbols[x116];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e117).P(tp,0).P(lf,0).P(w,100.01,_,_,"%");A6.A(e100).P(h,33.33,_,_,"%").P(w,100.32);var S7=symbols[x129];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e130).P(tp,5).P(w,x95).P(h,19).P("font-style",l).P(c,x122,c).P(ff,x1).P(lf,60).P(fs,55);A7.A(e131).P(tp,0).P(h,76).P(lf,0).P(w,266);A7.A(e100).P(h,76).P(w,266);var S8=symbols[x139];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e140).P(tp,0).P(h,76).P(lf,0).P(w,266);A8.A(e141).P(tp,7).P(lf,53).P(fs,45);A8.A(e100).P(h,76).P(w,266);var S9=symbols[s144];var tl8=S9.tl[dt].tt,st9=S9.s[a]={},A9=A(_,tl8,st9);A9.A(e147).P(tp,0).P(h,76).P(lf,0).P(w,266);A9.A(e60).P(tp,2).P(lf,51).P(fs,55);A9.A(e100).P(h,76).P(w,266);var S10=symbols[s150];var tl9=S10.tl[dt].tt,st10=S10.s[a]={},A10=A(_,tl9,st10);A10.A(e69).P(tp,8).P(lf,72).P(fs,45);A10.A(e153).P(h,76).P(tp,0).P(lf,0).P(w,266);A10.A(e100).P(h,76).P(w,266);var S11=symbols[x166];var tl10=S11.tl[dt].tt,st11=S11.s[a]={},A11=A(_,tl10,st11);A11.A(e141).P(tp,10).P(lf,36).P(fs,60);A11.A(e167).P(rtl,[272,272],_,x72).P(rbr,[272,272],_,x72).P("background-image",[270,[['rgba(209,209,209,0.00)',0],['rgba(3,3,3,1.00)',42],['rgba(23,22,22,1.00)',60],['rgba(67,67,67,0.00)',100]]],"gradient").P(lf,0).P(w,506).P(tp,0).P(rbl,[272,272],_,x72).P(o,0.67,_,_,"").P(h,108,_,_,p).P(rtr,[272,272],_,x72);A11.A(e100).P(h,108).P(w,506);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-6624565");