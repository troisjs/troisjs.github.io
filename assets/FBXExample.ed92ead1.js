import{al as e,b4 as a,b5 as t,b6 as r,aA as s}from"./OrbitControls.ff4e990f.js";import{A as o,a as i,N as n,Q as d,V as c,d as h,f as l,q as m,S as f}from"./trois.module.45730f49.js";import{r as p,o as g,c as u,w,b}from"./app.9cd399cc.js";const x={components:{AmbientLight:o,Camera:i,DirectionalLight:n,FBXModel:d,HemisphereLight:c,Renderer:h,PhongMaterial:l,Plane:m,Scene:f},data:()=>({target:new e(0,100,0)}),mounted(){this.$refs.scene.scene.fog=new a(10526880,200,1e3);const e=new t(2e3,20,0,0);e.material.opacity=.5,e.material.transparent=!0,this.$refs.scene.add(e)},methods:{onLoad(e){this.mixer=new r(e);this.mixer.clipAction(e.animations[0]).play(),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),this.clock=new s,this.$refs.renderer.onBeforeRender(this.updateMixer)},updateMixer(){this.mixer.update(this.clock.getDelta())}}};x.render=function(e,a,t,r,s,o){const i=p("Camera"),n=p("HemisphereLight"),d=p("DirectionalLight"),c=p("PhongMaterial"),h=p("Plane"),l=p("FBXModel"),m=p("Scene"),f=p("Renderer");return g(),u(f,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0,target:s.target},resize:"",shadow:""},{default:w((()=>[b(i,{position:{x:100,y:200,z:300}}),b(m,{ref:"scene",background:"#a0a0a0"},{default:w((()=>[b(n),b(d,{position:{x:0,y:200,z:100},"cast-shadow":"","shadow-camera":{top:180,bottom:-120,left:-120,right:120}}),b(h,{width:2e3,height:2e3,rotation:{x:-Math.PI/2},"receive-shadow":""},{default:w((()=>[b(c,{color:"#999999","depth-write":!1})])),_:1},8,["rotation"]),b(l,{src:"/assets/models/Samba Dancing.fbx",onLoad:o.onLoad},null,8,["onLoad"])])),_:1},512)])),_:1},8,["orbit-ctrl"])};export default x;
