import{r as p,g as C,c as n,a as t,F as r,b as _,d as h,t as s,w as y,v as q,h as b,o,i as T}from"./index-BWBh32hI.js";const j=t("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",crossorigin:"anonymous"},null,-1),$={class:"container mt-5"},D={class:"row"},V={class:"col-md-4"},F={class:"list-group"},M=["onClick"],S={class:"d-flex w-100 justify-content-between"},U={class:"mb-1"},W={class:"mb-1"},B={class:"col-md-8"},E={class:"table"},N=t("thead",null,[t("tr",null,[t("th",{scope:"col",width:"50"},"操作"),t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"描述"),t("th",{scope:"col",width:"90"},"數量"),t("th",{scope:"col"},"單價"),t("th",{scope:"col"},"小計")])],-1),Q=["onClick"],R=["onUpdate:modelValue","onChange"],Y=["value"],L={key:0,class:"alert alert-primary text-center",role:"alert"},O={key:1},A={class:"text-end mb-3"},H={class:"text-end"},I=t("hr",null,null,-1),J={class:"row justify-content-center"},K={class:"col-8"},P={key:0,class:"alert alert-secondary text-center",role:"alert"},X={key:1,class:"card mb-3"},Z={class:"card-body"},z={class:"card-title"},G=t("h5",null,"訂單",-1),tt={class:"table"},et=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"數量"),t("th",{scope:"col"},"小計")])],-1),st={class:"text-end"},lt={class:"text-end"},at={__name:"WeekThree",setup(nt){const k=p([{id:1,name:"珍珠奶茶",description:"香濃奶茶搭配QQ珍珠",price:50},{id:2,name:"冬瓜檸檬",description:"清新冬瓜配上新鮮檸檬",price:45},{id:3,name:"翡翠檸檬",description:"綠茶與檸檬的完美結合",price:55},{id:4,name:"四季春茶",description:"香醇四季春茶，回甘無比",price:45},{id:5,name:"阿薩姆奶茶",description:"阿薩姆紅茶搭配香醇鮮奶",price:50},{id:6,name:"檸檬冰茶",description:"檸檬與冰茶的清新組合",price:45},{id:7,name:"芒果綠茶",description:"芒果與綠茶的獨特風味",price:55},{id:8,name:"抹茶拿鐵",description:"抹茶與鮮奶的絕配",price:60}]),a=p([]),u=p(""),d=p({}),v=C(()=>a.value.reduce((l,c)=>l+c.price*c.quantity,0)),f=l=>{a.value.push({...l,id:new Date().getTime(),quantity:1})},g=l=>{a.value=a.value.map(c=>(c.id===l.id&&(c.quantity=parseInt(l.quantity)),c))},w=l=>{a.value=a.value.filter(c=>c.id!==l)},x=()=>{d.value={id:new Date().getTime(),cart:a.value,description:u.value,sum:v.value},a.value=[],u.value=""},m=l=>l.price*l.quantity;return(l,c)=>(o(),n(r,null,[j,t("div",$,[t("div",D,[t("div",V,[t("div",F,[(o(!0),n(r,null,_(k.value,e=>(o(),n("a",{key:e.id,href:"#",class:"list-group-item list-group-item-action",onClick:b(i=>f(e),["prevent"])},[t("div",S,[t("h5",U,s(e.name),1),t("small",null,"$"+s(e.price),1)]),t("p",W,s(e.description),1)],8,M))),128))])]),t("div",B,[t("table",E,[N,t("tbody",null,[(o(!0),n(r,null,_(a.value,e=>(o(),n("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-sm",onClick:i=>w(e.id)}," x ",8,Q)]),t("td",null,s(e.name),1),t("td",null,[t("small",null,s(e.description),1)]),t("td",null,[y(t("select",{class:"form-select","onUpdate:modelValue":i=>e.quantity=i,onChange:i=>g(e)},[(o(),n(r,null,_(10,i=>t("option",{key:i,value:i},s(i),9,Y)),64))],40,R),[[T,e.quantity]])]),t("td",null,s(e.price),1),t("td",null,s(m(e)),1)]))),128))])]),a.value.length===0?(o(),n("div",L," 請選擇商品 ")):(o(),n("div",O,[t("div",A,[t("h5",null,[h("總計: "),t("span",null,"$"+s(v.value),1)])]),y(t("textarea",{class:"form-control mb-3",rows:"3",placeholder:"備註","onUpdate:modelValue":c[0]||(c[0]=e=>u.value=e)},null,512),[[q,u.value]]),t("div",H,[t("button",{class:"btn btn-primary",onClick:b(x,["prevent"])}," 送出 ")])]))])]),I,t("div",J,[t("div",K,[d.value.id?(o(),n("div",X,[t("div",Z,[t("div",z,[G,t("table",tt,[et,t("tbody",null,[(o(!0),n(r,null,_(d.value.cart,e=>(o(),n("tr",{key:e.id},[t("td",null,s(e.name),1),t("td",null,s(e.quantity),1),t("td",null,s(m(e)),1)]))),128))])]),t("div",st,[h(" 備註: "),t("span",null,s(d.value.description),1)]),t("div",lt,[t("h5",null,[h("總計: "),t("span",null,"$"+s(d.value.sum),1)])])])])])):(o(),n("div",P," 尚未建立訂單 "))])])])],64))}};export{at as default};
