import{o,a as r,L as e,c as t,d as a,S as i}from"./trois.module.0417385f.js";import{r as n,o as l,c as s,w as c,b as f}from"./app.20352acf.js";import"./OrbitControls.6cc836dc.js";const b={components:{Box:o,Camera:r,LambertMaterial:e,PointLight:t,Renderer:a,Scene:i},data:()=>({boxColor:"#ffffff"}),methods:{boxHover({over:o}){this.boxColor=o?"#ff0000":"#ffffff"},boxClick(o){alert("Click"),console.log(o)}}};b.render=function(o,r,e,t,a,i){const b=n("Camera"),m=n("PointLight"),d=n("LambertMaterial"),p=n("Box"),u=n("Scene"),x=n("Renderer");return l(),s(x,{ref:"renderer",antialias:"",resize:"","mouse-over":"",click:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,dampingFactor:.05}},{default:c((()=>[f(b,{position:{z:10}}),f(u,null,{default:c((()=>[f(m,{position:{y:50,z:50}}),f(p,{ref:"box",onHover:i.boxHover,onClick:i.boxClick,rotation:{y:Math.PI/4,z:Math.PI/4}},{default:c((()=>[f(d,{color:a.boxColor},null,8,["color"])])),_:1},8,["onHover","onClick","rotation"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default b;
