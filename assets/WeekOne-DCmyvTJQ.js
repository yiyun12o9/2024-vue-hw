import{_ as k,r as f,c as o,a as e,F as p,b as N,o as c,w as b,v as y,t as d,d as E,p as v,e as C}from"./index-BWBh32hI.js";const l=n=>(v("data-v-7cc45226"),n=n(),C(),n),w=l(()=>e("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",crossorigin:"anonymous"},null,-1)),S={class:"fortable"},I=l(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col",width:"20%"},"品項"),e("th",{scope:"col",width:"20%"},"描述"),e("th",{scope:"col",width:"20%"},"價格"),e("th",{scope:"col",width:"20%"},"庫存"),e("th",{scope:"col",width:"20%"},"動作")])],-1)),j={class:"drinkName"},x={key:0},W=["onUpdate:modelValue"],$={key:1},g={class:"drinkDescription"},B={class:"drinkPrice"},T={class:"drinkStock"},V=["onClick","disabled"],Y=["onClick"],F={key:0},O=["onClick"],Q=["onClick"],R={key:1},U=["onClick"],L={__name:"WeekOne",setup(n){const a=f([{id:1,name:"珍珠奶茶",description:"香濃奶茶搭配QQ珍珠",price:50,stock:20,isEdit:!1,tempName:""},{id:2,name:"冬瓜檸檬",description:"清新冬瓜配上新鮮檸檬",price:45,stock:18,isEdit:!1,tempName:""},{id:3,name:"翡翠檸檬",description:"綠茶與檸檬的完美結合",price:55,stock:34,isEdit:!1,tempName:""},{id:4,name:"四季春茶",description:"香醇四季春茶，回甘無比",price:45,stock:10,isEdit:!1,tempName:""},{id:5,name:"阿薩姆奶茶",description:"阿薩姆紅茶搭配香醇鮮奶",price:50,stock:25,isEdit:!1,tempName:""},{id:6,name:"檸檬冰茶",description:"檸檬與冰茶的清新組合",price:45,stock:20,isEdit:!1,tempName:""},{id:7,name:"芒果綠茶",description:"芒果與綠茶的獨特風味",price:55,stock:18,isEdit:!1,tempName:""},{id:8,name:"抹茶拿鐵",description:"抹茶與鮮奶的絕配",price:60,stock:20,isEdit:!1,tempName:""}]);function m(t){t.stock+=1}function _(t){t.stock>0&&(t.stock-=1)}function r(t){t.tempName=t.name,t.isEdit=!0}function h(t){t.name=t.tempName,t.isEdit=!1}function u(t){t.isEdit=!1,t.tempName=""}return(t,M)=>(c(),o(p,null,[w,e("table",S,[I,e("tbody",null,[(c(!0),o(p,null,N(a.value,s=>(c(),o("tr",{key:s.id},[e("td",j,[s.isEdit?(c(),o("span",x,[b(e("input",{"onUpdate:modelValue":i=>s.tempName=i,class:"drinkName"},null,8,W),[[y,s.tempName]])])):(c(),o("span",$,d(s.name),1))]),e("td",g,d(s.description),1),e("td",B,d(s.price),1),e("td",T,[e("button",{type:"button",class:"minusBtn",onClick:i=>_(s),disabled:s.stock===0}," -",8,V),E(" "+d(s.stock)+" ",1),e("button",{type:"button",onClick:i=>m(s)}," + ",8,Y)]),e("td",null,[s.isEdit?(c(),o("span",F,[e("button",{type:"button",onClick:i=>h(s)},"確定",8,O),e("button",{type:"button",onClick:i=>u(s)},"取消",8,Q)])):(c(),o("span",R,[e("button",{type:"button",onClick:i=>r(s)},"修改品項",8,U)]))])]))),128))])])],64))}},A=k(L,[["__scopeId","data-v-7cc45226"]]);export{A as default};
