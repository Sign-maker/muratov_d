function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},m={},t=a.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in m){var a=m[e];delete m[e];var t={id:e,exports:{}};return r[e]=t,a.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){m[e]=a},a.parcelRequired7c6=t);var o=t("3CMhY"),n=t("1zGJr");const c=[{categoryId:"0",categoryName:"Wszystko"},{categoryId:"1",categoryName:"Elewacje"},{categoryId:"2",categoryName:"Sklepy, biura"},{categoryId:"3",categoryName:"Litery, szyldy"},{categoryId:"4",categoryName:"Dekor wnętrz"},{categoryId:"5",categoryName:"Witryny"},{categoryId:"6",categoryName:"Pilony"},{categoryId:"7",categoryName:"Auta"},{categoryId:"8",categoryName:"Tablice"},{categoryId:"9",categoryName:"Znaki"}];var u=t("aEBcX"),g=t("6JXw1"),d=t("2uOa8"),b=t("lewhg");const{jpegBigPath:y,webpThumbPath:N,jpegThumbPath:I,webpThumbPath2x:i,jpegThumbPath2x:l,namePrefix:s,jpegBigSufix:p,jpegThumbSufix:f,webpThumbSufix:h,jpegThumbSufix2x:x,webpThumbSufix2x:T}={jpegBigPath:"./images/portfolio/jpeg-big/",jpegThumbPath:"./images/portfolio/jpeg-thumb/",webpThumbPath:"./images/portfolio/webp-thumb/",jpegThumbPath2x:"./images/portfolio/jpeg-thumb2x/",webpThumbPath2x:"./images/portfolio/webp-thumb2x/",namePrefix:"p",jpegBigSufix:".jpg",jpegThumbSufix:"-thumb.jpg",webpThumbSufix:"-thumb.webp",jpegThumbSufix2x:"-thumb@2x.jpg",webpThumbSufix2x:"-thumb@2x.webp"},w=document.querySelector("#filterBtnContainer"),S=document.querySelector(".portfolio-list"),v=c[0].categoryId;var j;let P=null!==(j=localStorage.getItem("currentPortfolioCategotyId"))&&void 0!==j?j:v;const L=new(e(b))({select:"#lang-select",settings:{disabled:!1,alwaysOpen:!1,showSearch:!1,searchPlaceholder:"Search",searchText:"No Results",searchingText:"Searching...",searchHighlight:!1,closeOnSelect:!0,contentLocation:document.body,contentPosition:"absolute",openPosition:"auto",placeholderText:"Select Value",allowDeselect:!1,hideSelected:!1,showOptionTooltips:!1,minSelected:0,maxSelected:1e3,timeoutDelay:200,maxValuesShown:20,maxValuesMessage:"{number} selected"}});!function(e){const a=e.map(((e,a)=>`<li class="portfolio-filter-item">\n              <button\n                type="button"\n                class="btn filter-btn"\n                data-category-id="${e.categoryId}"\n              >\n                <span class="placeholder"\n                data-lang="pg_button${a}">${e.categoryName}</span>\n              </button>\n            </li>`)).join("");w.innerHTML=a}(c),function(){const e=document.querySelectorAll("[data-lang]"),a=document.querySelector(".backdrop"),r=document.querySelector("#lang-select");r.addEventListener("change",(function(e){t.language=e.target.value,t.applyLangToDocument()}));const m=document.body.dataset.pageId;o.LANG_DATA[m]={...o.LANG_DATA[m],...o.LANG_MENU};const t=new(0,n.LanguageHandler)(e,o.LANG_DATA);t.init(),u=r,g=t.language,u.value=g,L.setSelected(g),c=a,c.classList.add("is-hidden");var c;var u,g}(),$(P,"active"),function(e){const a=e.map((e=>`<li class="portfolio-item" data-category-id="${e.categoryId}">\n              <div class="portfolio-image proportion-type2">\n                <a class="porfolio-page-img-link" href="${y+s+e.nameNumber+p}">\n                  <picture>\n                    <source\n                          srcset="${N+s+e.nameNumber+h} 1x,\n                          ${i+s+e.nameNumber+T} 2x"\n                          type="image/webp"\n                    />\n                    <source\n                          srcset="${I+s+e.nameNumber+f} 1x,\n                          ${l+s+e.nameNumber+x} 2x"\n                          type="image/jpeg"\n                    />\n                      \n                    <img\n                      loading="lazy"\n                      src="${I+s+e.nameNumber+f}"\n                      alt="${c.find((({categoryId:a})=>a===e.categoryId)).categoryName}"\n                    />\n                  </picture>\n                </a>\n              </div>\n          </li>`)).join("");S.innerHTML=a}([{nameNumber:"1181",categoryId:"1"},{nameNumber:"1260",categoryId:"3"},{nameNumber:"1182",categoryId:"1"},{nameNumber:"1061",categoryId:"2"},{nameNumber:"1062",categoryId:"2"},{nameNumber:"1063",categoryId:"3"},{nameNumber:"1183",categoryId:"1"},{nameNumber:"1184",categoryId:"1"},{nameNumber:"1186",categoryId:"1"},{nameNumber:"1187",categoryId:"1"},{nameNumber:"1180",categoryId:"1"},{nameNumber:"1148",categoryId:"3"},{nameNumber:"1010",categoryId:"3"},{nameNumber:"1011",categoryId:"3"},{nameNumber:"1153",categoryId:"8"},{nameNumber:"1014",categoryId:"2"},{nameNumber:"1015",categoryId:"8"},{nameNumber:"1017",categoryId:"3"},{nameNumber:"1018",categoryId:"3"},{nameNumber:"1034",categoryId:"3"},{nameNumber:"1020",categoryId:"3"},{nameNumber:"1071",categoryId:"8"},{nameNumber:"1025",categoryId:"3"},{nameNumber:"1027",categoryId:"3"},{nameNumber:"1028",categoryId:"9"},{nameNumber:"1029",categoryId:"3"},{nameNumber:"1030",categoryId:"2"},{nameNumber:"1031",categoryId:"2"},{nameNumber:"1032",categoryId:"9"},{nameNumber:"1033",categoryId:"3"},{nameNumber:"1035",categoryId:"1"},{nameNumber:"1036",categoryId:"2"},{nameNumber:"1037",categoryId:"2"},{nameNumber:"1039",categoryId:"3"},{nameNumber:"1040",categoryId:"3"},{nameNumber:"1041",categoryId:"9"},{nameNumber:"1043",categoryId:"3"},{nameNumber:"1173",categoryId:"2"},{nameNumber:"1045",categoryId:"3"},{nameNumber:"1046",categoryId:"2"},{nameNumber:"1054",categoryId:"3"},{nameNumber:"1055",categoryId:"8"},{nameNumber:"1056",categoryId:"3"},{nameNumber:"1057",categoryId:"8"},{nameNumber:"1058",categoryId:"3"},{nameNumber:"1059",categoryId:"8"},{nameNumber:"1060",categoryId:"3"},{nameNumber:"1064",categoryId:"8"},{nameNumber:"1065",categoryId:"7"},{nameNumber:"1066",categoryId:"3"},{nameNumber:"1067",categoryId:"3"},{nameNumber:"1068",categoryId:"2"},{nameNumber:"1069",categoryId:"3"},{nameNumber:"1070",categoryId:"3"},{nameNumber:"1072",categoryId:"9"},{nameNumber:"1073",categoryId:"2"},{nameNumber:"1074",categoryId:"2"},{nameNumber:"1075",categoryId:"8"},{nameNumber:"1076",categoryId:"2"},{nameNumber:"1077",categoryId:"2"},{nameNumber:"1078",categoryId:"9"},{nameNumber:"1079",categoryId:"3"},{nameNumber:"1080",categoryId:"9"},{nameNumber:"1081",categoryId:"8"},{nameNumber:"1082",categoryId:"1"},{nameNumber:"1083",categoryId:"5"},{nameNumber:"1086",categoryId:"5"},{nameNumber:"1087",categoryId:"9"},{nameNumber:"1088",categoryId:"9"},{nameNumber:"1089",categoryId:"4"},{nameNumber:"1090",categoryId:"8"},{nameNumber:"1091",categoryId:"3"},{nameNumber:"1092",categoryId:"2"},{nameNumber:"1093",categoryId:"1"},{nameNumber:"1094",categoryId:"4"},{nameNumber:"1095",categoryId:"4"},{nameNumber:"1096",categoryId:"4"},{nameNumber:"1097",categoryId:"4"},{nameNumber:"1098",categoryId:"4"},{nameNumber:"1099",categoryId:"2"},{nameNumber:"1100",categoryId:"4"},{nameNumber:"1101",categoryId:"8"},{nameNumber:"1102",categoryId:"4"},{nameNumber:"1103",categoryId:"4"},{nameNumber:"1104",categoryId:"4"},{nameNumber:"1105",categoryId:"4"},{nameNumber:"1106",categoryId:"4"},{nameNumber:"1107",categoryId:"4"},{nameNumber:"1108",categoryId:"3"},{nameNumber:"1109",categoryId:"3"},{nameNumber:"1110",categoryId:"3"},{nameNumber:"1111",categoryId:"3"},{nameNumber:"1112",categoryId:"3"},{nameNumber:"1113",categoryId:"8"},{nameNumber:"1114",categoryId:"8"},{nameNumber:"1115",categoryId:"9"},{nameNumber:"1116",categoryId:"3"},{nameNumber:"1117",categoryId:"3"},{nameNumber:"1118",categoryId:"8"},{nameNumber:"1119",categoryId:"8"},{nameNumber:"1121",categoryId:"2"},{nameNumber:"1122",categoryId:"8"},{nameNumber:"1123",categoryId:"3"},{nameNumber:"1124",categoryId:"5"},{nameNumber:"1125",categoryId:"5"},{nameNumber:"1126",categoryId:"3"},{nameNumber:"1127",categoryId:"3"},{nameNumber:"1128",categoryId:"3"},{nameNumber:"1129",categoryId:"3"},{nameNumber:"1130",categoryId:"8"},{nameNumber:"1131",categoryId:"8"},{nameNumber:"1132",categoryId:"3"},{nameNumber:"1133",categoryId:"5"},{nameNumber:"1134",categoryId:"3"},{nameNumber:"1135",categoryId:"9"},{nameNumber:"1136",categoryId:"8"},{nameNumber:"1137",categoryId:"3"},{nameNumber:"1138",categoryId:"4"},{nameNumber:"1139",categoryId:"2"},{nameNumber:"1249",categoryId:"2"},{nameNumber:"1142",categoryId:"9"},{nameNumber:"1143",categoryId:"2"},{nameNumber:"1144",categoryId:"3"},{nameNumber:"1145",categoryId:"9"},{nameNumber:"1146",categoryId:"2"},{nameNumber:"1147",categoryId:"2"},{nameNumber:"1149",categoryId:"9"},{nameNumber:"1150",categoryId:"3"},{nameNumber:"1151",categoryId:"3"},{nameNumber:"1152",categoryId:"4"},{nameNumber:"1013",categoryId:"8"},{nameNumber:"1154",categoryId:"8"},{nameNumber:"1155",categoryId:"3"},{nameNumber:"1156",categoryId:"8"},{nameNumber:"1157",categoryId:"2"},{nameNumber:"1158",categoryId:"3"},{nameNumber:"1159",categoryId:"8"},{nameNumber:"1160",categoryId:"3"},{nameNumber:"1161",categoryId:"2"},{nameNumber:"1162",categoryId:"3"},{nameNumber:"1163",categoryId:"4"},{nameNumber:"1164",categoryId:"4"},{nameNumber:"1165",categoryId:"4"},{nameNumber:"1166",categoryId:"4"},{nameNumber:"1167",categoryId:"4"},{nameNumber:"1168",categoryId:"2"},{nameNumber:"1169",categoryId:"3"},{nameNumber:"1170",categoryId:"8"},{nameNumber:"1171",categoryId:"3"},{nameNumber:"1172",categoryId:"2"},{nameNumber:"1174",categoryId:"7"},{nameNumber:"1175",categoryId:"7"},{nameNumber:"1176",categoryId:"7"},{nameNumber:"1177",categoryId:"7"},{nameNumber:"1178",categoryId:"4"},{nameNumber:"1179",categoryId:"2"},{nameNumber:"1185",categoryId:"4"},{nameNumber:"1188",categoryId:"1"},{nameNumber:"1189",categoryId:"4"},{nameNumber:"1190",categoryId:"4"},{nameNumber:"1191",categoryId:"4"},{nameNumber:"1192",categoryId:"4"},{nameNumber:"1193",categoryId:"4"},{nameNumber:"1194",categoryId:"4"},{nameNumber:"1195",categoryId:"2"},{nameNumber:"1196",categoryId:"4"},{nameNumber:"1197",categoryId:"2"},{nameNumber:"1198",categoryId:"2"},{nameNumber:"1199",categoryId:"2"},{nameNumber:"1200",categoryId:"2"},{nameNumber:"1201",categoryId:"2"},{nameNumber:"1202",categoryId:"2"},{nameNumber:"1203",categoryId:"1"},{nameNumber:"1204",categoryId:"1"},{nameNumber:"1205",categoryId:"1"},{nameNumber:"1206",categoryId:"7"},{nameNumber:"1207",categoryId:"2"},{nameNumber:"1208",categoryId:"3"},{nameNumber:"1209",categoryId:"3"},{nameNumber:"1210",categoryId:"1"},{nameNumber:"1211",categoryId:"3"},{nameNumber:"1212",categoryId:"3"},{nameNumber:"1213",categoryId:"2"},{nameNumber:"1214",categoryId:"3"},{nameNumber:"1215",categoryId:"3"},{nameNumber:"1216",categoryId:"3"},{nameNumber:"1217",categoryId:"8"},{nameNumber:"1218",categoryId:"8"},{nameNumber:"1219",categoryId:"3"},{nameNumber:"1220",categoryId:"2"},{nameNumber:"1221",categoryId:"2"},{nameNumber:"1222",categoryId:"3"},{nameNumber:"1223",categoryId:"7"},{nameNumber:"1224",categoryId:"6"},{nameNumber:"1225",categoryId:"3"},{nameNumber:"1226",categoryId:"3"},{nameNumber:"1227",categoryId:"8"},{nameNumber:"1228",categoryId:"2"},{nameNumber:"1229",categoryId:"2"},{nameNumber:"1230",categoryId:"3"},{nameNumber:"1231",categoryId:"3"},{nameNumber:"1232",categoryId:"9"},{nameNumber:"1233",categoryId:"6"},{nameNumber:"1234",categoryId:"1"},{nameNumber:"1235",categoryId:"1"},{nameNumber:"1236",categoryId:"1"},{nameNumber:"1237",categoryId:"1"},{nameNumber:"1238",categoryId:"2"},{nameNumber:"1239",categoryId:"1"},{nameNumber:"1254",categoryId:"6"},{nameNumber:"1241",categoryId:"2"},{nameNumber:"1242",categoryId:"3"},{nameNumber:"1243",categoryId:"6"},{nameNumber:"1244",categoryId:"2"},{nameNumber:"1245",categoryId:"3"},{nameNumber:"1246",categoryId:"2"},{nameNumber:"1247",categoryId:"6"},{nameNumber:"1248",categoryId:"2"},{nameNumber:"1250",categoryId:"2"},{nameNumber:"1251",categoryId:"3"},{nameNumber:"1252",categoryId:"3"},{nameNumber:"1253",categoryId:"2"},{nameNumber:"1240",categoryId:"6"},{nameNumber:"1255",categoryId:"4"},{nameNumber:"1256",categoryId:"1"},{nameNumber:"1257",categoryId:"6"},{nameNumber:"1258",categoryId:"9"},{nameNumber:"1259",categoryId:"3"},{nameNumber:"1001",categoryId:"1"},{nameNumber:"1012",categoryId:"1"},{nameNumber:"1044",categoryId:"2"},{nameNumber:"1019",categoryId:"3"},{nameNumber:"1084",categoryId:"4"},{nameNumber:"1085",categoryId:"4"},{nameNumber:"1021",categoryId:"4"},{nameNumber:"1023",categoryId:"3"},{nameNumber:"1042",categoryId:"4"},{nameNumber:"1047",categoryId:"4"},{nameNumber:"1048",categoryId:"4"},{nameNumber:"1049",categoryId:"4"},{nameNumber:"1050",categoryId:"4"},{nameNumber:"1051",categoryId:"4"},{nameNumber:"1052",categoryId:"4"},{nameNumber:"1053",categoryId:"4"},{nameNumber:"1038",categoryId:"1"},{nameNumber:"1024",categoryId:"2"},{nameNumber:"1026",categoryId:"2"},{nameNumber:"1002",categoryId:"6"},{nameNumber:"1006",categoryId:"3"},{nameNumber:"1008",categoryId:"3"},{nameNumber:"1009",categoryId:"5"},{nameNumber:"1000",categoryId:"2"},{nameNumber:"1003",categoryId:"2"},{nameNumber:"1004",categoryId:"2"},{nameNumber:"1005",categoryId:"2"}]);const A=document.querySelectorAll(".portfolio-list .portfolio-item ");function $(e,a){const r=document.querySelector(`button[data-category-id="${e}"]`);r&&("active"===a&&r.classList.add("active"),"non-active"===a&&r.classList.remove("active"))}function q(e){A.forEach((a=>{const r=a.querySelector("a"),{dataset:m,classList:t}=a;e===v||m.categoryId===e?(t.add("show"),r.setAttribute("data-fancybox","gallery")):(t.remove("show"),r.removeAttribute("data-fancybox"))})),(0,u.destroyFancybox)(),(0,u.bindFancybox)('[data-fancybox="gallery"]')}q(P),w.addEventListener("click",(function({target:e}){if("BUTTON"!==e.nodeName){if(!e.closest("button"))return;e=e.closest("button")}const a=e.dataset.categoryId;if(a===P)return;$(P,"non-active"),$(a,"active"),P=a,localStorage.setItem("currentPortfolioCategotyId",P),q(P)})),(0,g.navHandler)(),(0,d.goTopBtnHandler)();
//# sourceMappingURL=portfolio.f66186c6.js.map