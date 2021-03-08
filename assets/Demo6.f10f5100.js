import{s as t}from"./OrbitControls.97338009.js";import{s as e}from"./simplex-noise.e5e6b1a1.js";import{x as s,r as i,o,c as r,w as n,b as l,F as h,l as a,y as d}from"./app.2c1af13e.js";import{A as u,a as m,c,d as y,S as g,e as b,l as p}from"./trois.module.26df7405.js";const f=new e,C={components:{AmbientLight:u,Camera:m,PointLight:c,Renderer:y,Scene:g,StandardMaterial:b,Tube:p},data:()=>({tubes:[],light1Color:"#b307b5",light2Color:"#8132aa",light3Color:"#5737d0",light4Color:"#0d25bb"}),mounted(){this.renderer=this.$refs.renderer,this.mouse=this.renderer.three.mouse,this.size=this.renderer.three.size,this.initTubes(),this.renderer.onBeforeRender((()=>{const t=2e-4*Date.now();let e,s,i,o,r,n,l,h;for(let a=0;a<15;a++){e=this.tubes[a],s=e.points;for(let e=0;e<40;e++)i=this.x0+e*this.dx,r=.25*i,o=this.y0+a*this.dy,n=.25*o,l=.3*f.noise2D(r-t+.3*this.mouse.x,n-t+.3*this.mouse.y),h=.3*f.noise2D(n+t,r+t),s[e].x=i,s[e].y=o+l,s[e].z=h;this.$refs[e.key].updateCurve()}}))},methods:{initTubes(){this.tubes.splice(0),this.dx=this.size.wWidth/39,this.dy=this.size.wHeight/14,this.x0=-this.size.wWidth/2,this.y0=-this.size.wHeight/2;for(let e=0;e<15;e++){const s=[];for(let i=0;i<40;i++)s.push(new t(this.x0+i*this.dx,this.y0+e*this.dy,0));this.tubes.push({key:`tube-${e}`,points:s,radius:.1,tubularSegments:40,radialSegments:16})}},randomColors(){this.light1Color=s.random().hex(),this.light2Color=s.random().hex(),this.light3Color=s.random().hex(),this.light4Color=s.random().hex()}}};C.render=function(t,e,s,u,m,c){const y=i("Camera"),g=i("PointLight"),b=i("StandardMaterial"),p=i("Tube"),f=i("Scene"),C=i("Renderer");return o(),r(C,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0},"mouse-move":"",resize:"window",onClick:c.randomColors},{default:n((()=>[l(y,{position:{z:5}}),l(f,{background:"#000000"},{default:n((()=>[l(g,{color:m.light1Color,position:{x:-2,y:-2,z:2},intensity:.5},null,8,["color","intensity"]),l(g,{color:m.light2Color,position:{x:-2,y:2,z:2},intensity:.5},null,8,["color","intensity"]),l(g,{color:m.light3Color,position:{x:2,y:2,z:2},intensity:.5},null,8,["color","intensity"]),l(g,{color:m.light4Color,position:{x:2,y:-2,z:2},intensity:.5},null,8,["color","intensity"]),(o(!0),r(h,null,a(m.tubes,(t=>(o(),r(p,d({ref:t.key},t),{default:n((()=>[l(b,{roughness:.4,metalness:1},null,8,["roughness"])])),_:2},1040)))),256))])),_:1})])),_:1},8,["onClick"])};export default C;
