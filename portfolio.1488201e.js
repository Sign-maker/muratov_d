!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},m={},t=a.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in m){var a=m[e];delete m[e];var t={id:e,exports:{}};return r[e]=t,a.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){m[e]=a},a.parcelRequired7c6=t);var o,n,c=t("dDDEV"),u=t("6teoE"),g=t("5jwFo"),d={jpegBigPath:"./images/portfolio/jpeg-big/",jpegThumbPath:"./images/portfolio/jpeg-thumb/",webpThumbPath:"./images/portfolio/webp-thumb/",jpegThumbPath2x:"./images/portfolio/jpeg-thumb2x/",webpThumbPath2x:"./images/portfolio/webp-thumb2x/",namePrefix:"p",jpegBigSufix:".jpg",jpegThumbSufix:"-thumb.jpg",webpThumbSufix:"-thumb.webp",jpegThumbSufix2x:"-thumb@2x.jpg",webpThumbSufix2x:"-thumb@2x.webp"},b=[{categoryId:"0",categoryName:"Wszystko"},{categoryId:"1",categoryName:"Elewacje"},{categoryId:"2",categoryName:"Sklepy, biura"},{categoryId:"3",categoryName:"Litery, szyldy"},{categoryId:"4",categoryName:"Dekor wnętrz"},{categoryId:"5",categoryName:"Witryny"},{categoryId:"6",categoryName:"Pilony"},{categoryId:"7",categoryName:"Auta"},{categoryId:"8",categoryName:"Tablice"},{categoryId:"9",categoryName:"Znaki"}],y=t("88rUX"),N=t("kIc1i"),I=t("bBqzh"),i=d.jpegBigPath,l=d.webpThumbPath,p=d.jpegThumbPath,s=d.webpThumbPath2x,f=d.jpegThumbPath2x,h=d.namePrefix,x=d.jpegBigSufix,v=d.jpegThumbSufix,T=d.webpThumbSufix,w=d.jpegThumbSufix2x,j=d.webpThumbSufix2x,S=document.querySelector("#filterBtnContainer"),L=document.querySelector(".portfolio-list"),A="currentPortfolioCategotyId",P="active",q="non-active",D=b[0].categoryId,E=null!==(o=localStorage.getItem(A))&&void 0!==o?o:D;n=b.map((function(e,a){return'<li class="portfolio-filter-item">\n              <button\n                type="button"\n                class="btn filter-btn"\n                data-category-id="'.concat(e.categoryId,'"\n              >\n                <span class="placeholder"\n                data-lang="pg_button').concat(a,'">').concat(e.categoryName,"</span>\n              </button>\n            </li>")})).join(""),S.innerHTML=n,function(){var a=document.querySelectorAll("[data-lang]"),r=document.querySelector(".backdrop"),m=document.querySelector("#lang-select");m.addEventListener("change",(function(e){o.language=e.target.value,o.applyLangToDocument()}));var t=document.body.dataset.pageId;u.LANG_DATA[t]=e(c)({},u.LANG_DATA[t],u.LANG_MENU);var o=new(0,g.LanguageHandler)(a,u.LANG_DATA);o.init(),d=m,b=o.language,d.value=b,n=r,n.classList.add("is-hidden");var n;var d,b}(),k(E,P),function(e){var a=e.map((function(e){return'<li class="portfolio-item" data-category-id="'.concat(e.categoryId,'">\n              <div class="portfolio-image proportion-type2">\n                <a class="porfolio-page-img-link" href="').concat(i+h+e.nameNumber+x,'">\n                  <picture>\n                    <source\n                          srcset="').concat(l+h+e.nameNumber+T," 1x,\n                          ").concat(s+h+e.nameNumber+j,' 2x"\n                          type="image/webp"\n                    />\n                    <source\n                          srcset="').concat(p+h+e.nameNumber+v," 1x,\n                          ").concat(f+h+e.nameNumber+w,' 2x"\n                          type="image/jpeg"\n                    />\n                      \n                    <img\n                      loading="lazy"\n                      src="').concat(p+h+e.nameNumber+v,'"\n                      alt="').concat(b.find((function(a){return a.categoryId===e.categoryId})).categoryName,'"\n                    />\n                  </picture>\n                </a>\n              </div>\n          </li>')})).join("");L.innerHTML=a}([{nameNumber:"1181",categoryId:"1"},{nameNumber:"1260",categoryId:"3"},{nameNumber:"1182",categoryId:"1"},{nameNumber:"1061",categoryId:"2"},{nameNumber:"1062",categoryId:"2"},{nameNumber:"1063",categoryId:"3"},{nameNumber:"1183",categoryId:"1"},{nameNumber:"1184",categoryId:"1"},{nameNumber:"1186",categoryId:"1"},{nameNumber:"1187",categoryId:"1"},{nameNumber:"1180",categoryId:"1"},{nameNumber:"1148",categoryId:"3"},{nameNumber:"1010",categoryId:"3"},{nameNumber:"1011",categoryId:"3"},{nameNumber:"1153",categoryId:"8"},{nameNumber:"1014",categoryId:"2"},{nameNumber:"1015",categoryId:"8"},{nameNumber:"1017",categoryId:"3"},{nameNumber:"1018",categoryId:"3"},{nameNumber:"1034",categoryId:"3"},{nameNumber:"1020",categoryId:"3"},{nameNumber:"1071",categoryId:"8"},{nameNumber:"1025",categoryId:"3"},{nameNumber:"1027",categoryId:"3"},{nameNumber:"1028",categoryId:"9"},{nameNumber:"1029",categoryId:"3"},{nameNumber:"1030",categoryId:"2"},{nameNumber:"1031",categoryId:"2"},{nameNumber:"1032",categoryId:"9"},{nameNumber:"1033",categoryId:"3"},{nameNumber:"1035",categoryId:"1"},{nameNumber:"1036",categoryId:"2"},{nameNumber:"1037",categoryId:"2"},{nameNumber:"1039",categoryId:"3"},{nameNumber:"1040",categoryId:"3"},{nameNumber:"1041",categoryId:"9"},{nameNumber:"1043",categoryId:"3"},{nameNumber:"1173",categoryId:"2"},{nameNumber:"1045",categoryId:"3"},{nameNumber:"1046",categoryId:"2"},{nameNumber:"1054",categoryId:"3"},{nameNumber:"1055",categoryId:"8"},{nameNumber:"1056",categoryId:"3"},{nameNumber:"1057",categoryId:"8"},{nameNumber:"1058",categoryId:"3"},{nameNumber:"1059",categoryId:"8"},{nameNumber:"1060",categoryId:"3"},{nameNumber:"1064",categoryId:"8"},{nameNumber:"1065",categoryId:"7"},{nameNumber:"1066",categoryId:"3"},{nameNumber:"1067",categoryId:"3"},{nameNumber:"1068",categoryId:"2"},{nameNumber:"1069",categoryId:"3"},{nameNumber:"1070",categoryId:"3"},{nameNumber:"1072",categoryId:"9"},{nameNumber:"1073",categoryId:"2"},{nameNumber:"1074",categoryId:"2"},{nameNumber:"1075",categoryId:"8"},{nameNumber:"1076",categoryId:"2"},{nameNumber:"1077",categoryId:"2"},{nameNumber:"1078",categoryId:"9"},{nameNumber:"1079",categoryId:"3"},{nameNumber:"1080",categoryId:"9"},{nameNumber:"1081",categoryId:"8"},{nameNumber:"1082",categoryId:"1"},{nameNumber:"1083",categoryId:"5"},{nameNumber:"1086",categoryId:"5"},{nameNumber:"1087",categoryId:"9"},{nameNumber:"1088",categoryId:"9"},{nameNumber:"1089",categoryId:"4"},{nameNumber:"1090",categoryId:"8"},{nameNumber:"1091",categoryId:"3"},{nameNumber:"1092",categoryId:"2"},{nameNumber:"1093",categoryId:"1"},{nameNumber:"1094",categoryId:"4"},{nameNumber:"1095",categoryId:"4"},{nameNumber:"1096",categoryId:"4"},{nameNumber:"1097",categoryId:"4"},{nameNumber:"1098",categoryId:"4"},{nameNumber:"1099",categoryId:"2"},{nameNumber:"1100",categoryId:"4"},{nameNumber:"1101",categoryId:"8"},{nameNumber:"1102",categoryId:"4"},{nameNumber:"1103",categoryId:"4"},{nameNumber:"1104",categoryId:"4"},{nameNumber:"1105",categoryId:"4"},{nameNumber:"1106",categoryId:"4"},{nameNumber:"1107",categoryId:"4"},{nameNumber:"1108",categoryId:"3"},{nameNumber:"1109",categoryId:"3"},{nameNumber:"1110",categoryId:"3"},{nameNumber:"1111",categoryId:"3"},{nameNumber:"1112",categoryId:"3"},{nameNumber:"1113",categoryId:"8"},{nameNumber:"1114",categoryId:"8"},{nameNumber:"1115",categoryId:"9"},{nameNumber:"1116",categoryId:"3"},{nameNumber:"1117",categoryId:"3"},{nameNumber:"1118",categoryId:"8"},{nameNumber:"1119",categoryId:"8"},{nameNumber:"1121",categoryId:"2"},{nameNumber:"1122",categoryId:"8"},{nameNumber:"1123",categoryId:"3"},{nameNumber:"1124",categoryId:"5"},{nameNumber:"1125",categoryId:"5"},{nameNumber:"1126",categoryId:"3"},{nameNumber:"1127",categoryId:"3"},{nameNumber:"1128",categoryId:"3"},{nameNumber:"1129",categoryId:"3"},{nameNumber:"1130",categoryId:"8"},{nameNumber:"1131",categoryId:"8"},{nameNumber:"1132",categoryId:"3"},{nameNumber:"1133",categoryId:"5"},{nameNumber:"1134",categoryId:"3"},{nameNumber:"1135",categoryId:"9"},{nameNumber:"1136",categoryId:"8"},{nameNumber:"1137",categoryId:"3"},{nameNumber:"1138",categoryId:"4"},{nameNumber:"1139",categoryId:"2"},{nameNumber:"1249",categoryId:"2"},{nameNumber:"1142",categoryId:"9"},{nameNumber:"1143",categoryId:"2"},{nameNumber:"1144",categoryId:"3"},{nameNumber:"1145",categoryId:"9"},{nameNumber:"1146",categoryId:"2"},{nameNumber:"1147",categoryId:"2"},{nameNumber:"1149",categoryId:"9"},{nameNumber:"1150",categoryId:"3"},{nameNumber:"1151",categoryId:"3"},{nameNumber:"1152",categoryId:"4"},{nameNumber:"1013",categoryId:"8"},{nameNumber:"1154",categoryId:"8"},{nameNumber:"1155",categoryId:"3"},{nameNumber:"1156",categoryId:"8"},{nameNumber:"1157",categoryId:"2"},{nameNumber:"1158",categoryId:"3"},{nameNumber:"1159",categoryId:"8"},{nameNumber:"1160",categoryId:"3"},{nameNumber:"1161",categoryId:"2"},{nameNumber:"1162",categoryId:"3"},{nameNumber:"1163",categoryId:"4"},{nameNumber:"1164",categoryId:"4"},{nameNumber:"1165",categoryId:"4"},{nameNumber:"1166",categoryId:"4"},{nameNumber:"1167",categoryId:"4"},{nameNumber:"1168",categoryId:"2"},{nameNumber:"1169",categoryId:"3"},{nameNumber:"1170",categoryId:"8"},{nameNumber:"1171",categoryId:"3"},{nameNumber:"1172",categoryId:"2"},{nameNumber:"1174",categoryId:"7"},{nameNumber:"1175",categoryId:"7"},{nameNumber:"1176",categoryId:"7"},{nameNumber:"1177",categoryId:"7"},{nameNumber:"1178",categoryId:"4"},{nameNumber:"1179",categoryId:"2"},{nameNumber:"1185",categoryId:"4"},{nameNumber:"1188",categoryId:"1"},{nameNumber:"1189",categoryId:"4"},{nameNumber:"1190",categoryId:"4"},{nameNumber:"1191",categoryId:"4"},{nameNumber:"1192",categoryId:"4"},{nameNumber:"1193",categoryId:"4"},{nameNumber:"1194",categoryId:"4"},{nameNumber:"1195",categoryId:"2"},{nameNumber:"1196",categoryId:"4"},{nameNumber:"1197",categoryId:"2"},{nameNumber:"1198",categoryId:"2"},{nameNumber:"1199",categoryId:"2"},{nameNumber:"1200",categoryId:"2"},{nameNumber:"1201",categoryId:"2"},{nameNumber:"1202",categoryId:"2"},{nameNumber:"1203",categoryId:"1"},{nameNumber:"1204",categoryId:"1"},{nameNumber:"1205",categoryId:"1"},{nameNumber:"1206",categoryId:"7"},{nameNumber:"1207",categoryId:"2"},{nameNumber:"1208",categoryId:"3"},{nameNumber:"1209",categoryId:"3"},{nameNumber:"1210",categoryId:"1"},{nameNumber:"1211",categoryId:"3"},{nameNumber:"1212",categoryId:"3"},{nameNumber:"1213",categoryId:"2"},{nameNumber:"1214",categoryId:"3"},{nameNumber:"1215",categoryId:"3"},{nameNumber:"1216",categoryId:"3"},{nameNumber:"1217",categoryId:"8"},{nameNumber:"1218",categoryId:"8"},{nameNumber:"1219",categoryId:"3"},{nameNumber:"1220",categoryId:"2"},{nameNumber:"1221",categoryId:"2"},{nameNumber:"1222",categoryId:"3"},{nameNumber:"1223",categoryId:"7"},{nameNumber:"1224",categoryId:"6"},{nameNumber:"1225",categoryId:"3"},{nameNumber:"1226",categoryId:"3"},{nameNumber:"1227",categoryId:"8"},{nameNumber:"1228",categoryId:"2"},{nameNumber:"1229",categoryId:"2"},{nameNumber:"1230",categoryId:"3"},{nameNumber:"1231",categoryId:"3"},{nameNumber:"1232",categoryId:"9"},{nameNumber:"1233",categoryId:"6"},{nameNumber:"1234",categoryId:"1"},{nameNumber:"1235",categoryId:"1"},{nameNumber:"1236",categoryId:"1"},{nameNumber:"1237",categoryId:"1"},{nameNumber:"1238",categoryId:"2"},{nameNumber:"1239",categoryId:"1"},{nameNumber:"1254",categoryId:"6"},{nameNumber:"1241",categoryId:"2"},{nameNumber:"1242",categoryId:"3"},{nameNumber:"1243",categoryId:"6"},{nameNumber:"1244",categoryId:"2"},{nameNumber:"1245",categoryId:"3"},{nameNumber:"1246",categoryId:"2"},{nameNumber:"1247",categoryId:"6"},{nameNumber:"1248",categoryId:"2"},{nameNumber:"1250",categoryId:"2"},{nameNumber:"1251",categoryId:"3"},{nameNumber:"1252",categoryId:"3"},{nameNumber:"1253",categoryId:"2"},{nameNumber:"1240",categoryId:"6"},{nameNumber:"1255",categoryId:"4"},{nameNumber:"1256",categoryId:"1"},{nameNumber:"1257",categoryId:"6"},{nameNumber:"1258",categoryId:"9"},{nameNumber:"1259",categoryId:"3"},{nameNumber:"1001",categoryId:"1"},{nameNumber:"1012",categoryId:"1"},{nameNumber:"1044",categoryId:"2"},{nameNumber:"1019",categoryId:"3"},{nameNumber:"1084",categoryId:"4"},{nameNumber:"1085",categoryId:"4"},{nameNumber:"1021",categoryId:"4"},{nameNumber:"1023",categoryId:"3"},{nameNumber:"1042",categoryId:"4"},{nameNumber:"1047",categoryId:"4"},{nameNumber:"1048",categoryId:"4"},{nameNumber:"1049",categoryId:"4"},{nameNumber:"1050",categoryId:"4"},{nameNumber:"1051",categoryId:"4"},{nameNumber:"1052",categoryId:"4"},{nameNumber:"1053",categoryId:"4"},{nameNumber:"1038",categoryId:"1"},{nameNumber:"1024",categoryId:"2"},{nameNumber:"1026",categoryId:"2"},{nameNumber:"1002",categoryId:"6"},{nameNumber:"1006",categoryId:"3"},{nameNumber:"1008",categoryId:"3"},{nameNumber:"1009",categoryId:"5"},{nameNumber:"1000",categoryId:"2"},{nameNumber:"1003",categoryId:"2"},{nameNumber:"1004",categoryId:"2"},{nameNumber:"1005",categoryId:"2"}]);var _=document.querySelectorAll(".portfolio-list .portfolio-item ");function k(e,a){var r=document.querySelector('button[data-category-id="'.concat(e,'"]'));r&&(a===P&&r.classList.add("active"),a===q&&r.classList.remove("active"))}function B(e){_.forEach((function(a){var r=a.querySelector("a"),m=a.dataset,t=a.classList;e===D||m.categoryId===e?(t.add("show"),r.setAttribute("data-fancybox","gallery")):(t.remove("show"),r.removeAttribute("data-fancybox"))})),(0,y.destroyFancybox)(),(0,y.bindFancybox)('[data-fancybox="gallery"]')}B(E),S.addEventListener("click",(function(e){var a=e.target;if("BUTTON"!==a.nodeName){if(!a.closest("button"))return;a=a.closest("button")}var r=a.dataset.categoryId;if(r===E)return;k(E,q),k(r,P),E=r,localStorage.setItem(A,E),B(E)})),(0,N.navHandler)(),(0,I.goTopBtnHandler)()}();
//# sourceMappingURL=portfolio.1488201e.js.map
