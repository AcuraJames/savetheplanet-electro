"use strict";function init(){var n=new ymaps.Map("map",{center:[61.987903,128.484982],zoom:8,controls:["zoomControl"]});n.behaviors.disable("scrollZoom");var e=new ymaps.Placemark([62.059124,129.780889],{hintContent:"Планета Электро"},{iconColor:"#0d3d8e"}),o=new ymaps.Placemark([62.004914,129.755737],{hintContent:"Планета Электро"},{iconColor:"#0d3d8e"}),t=new ymaps.Placemark([62.030588,129.692832],{hintContent:"Юником"},{iconColor:"#c30f28"}),a=new ymaps.Placemark([62.023743,129.7319],{hintContent:"ГК Синет"},{iconColor:"#82cdff"}),c=new ymaps.Placemark([62.0966526,126.7010228],{hintContent:"ТЦ Дэлэй"}),s=new ymaps.Placemark([61.484846,129.150744],{hintContent:"ТЦ Эдэм"});n.geoObjects.add(e),n.geoObjects.add(o),n.geoObjects.add(t),n.geoObjects.add(a),n.geoObjects.add(c),n.geoObjects.add(s);for(var m=document.getElementById("map"),d=document.getElementsByClassName("show-btn"),r=[e,o,t,a,c,s],i=!1,l=function(o){d[o].onclick=function(e){i||n.setZoom(n.getZoom()+9),n.panTo(r[o].geometry.getCoordinates(),{delay:1e3}),window.scrollTo(0,m.offsetTop),i=!0}},p=0;p<=d.length;p++)l(p)}ymaps.ready(init);