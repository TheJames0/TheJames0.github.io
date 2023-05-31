import './style.css'
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Car } from './Abstract/Car';
import { CarA,CarB,CarC,CarD,CarE,CarF } from './NonAbstractClasses/Cars.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js';
import { ACESFilmicToneMapping, BasicShadowMap, CineonToneMapping, PCFShadowMap, PCFSoftShadowMap, RGB_PVRTC_2BPPV1_Format, Scene, Vector3, VSMShadowMap } from 'three';
import { ThreeDObject } from './Abstract/ThreeDObject';
import {BlendFunction, RenderPass, EffectComposer, EffectPass, BloomEffect, ChromaticAberrationEffect} from "postprocessing"

import { RoofRailB,RoofRailA, WheelA,WheelB,WheelC,WheelD,WheelE, Empty } from './NonAbstractClasses/Parts';


console.log("JS Loaded")
export const scene = new THREE.Scene();
export var manager = new THREE.LoadingManager();
manager.onLoad = function ( ) {

  setMaterials();
  console.log("f")
};
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 2, 10);

 const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#container'),
  antialias : true
});
//setup
const textureLoader = new THREE.TextureLoader();
//
renderer.setPixelRatio(1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0xffffff, 0);
renderer.shadowMap.enabled = true;
renderer.depthBuffer = true;
renderer.depthTexture = new THREE.DepthTexture();
renderer.toneMappingExposure = 1.5;
renderer.anisotropy = 3;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping  = ACESFilmicToneMapping;
const controls = new OrbitControls(camera, renderer.domElement);
//3D Enviroment Load

const blend_loader = new GLTFLoader();
var meshid;

blend_loader.load('../../assets/3denv1.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.name = '3denv';

}, undefined, function ( error ) {

  console.error( error );
  
} );


//HDR Enviroment
/*
new RGBELoader()
					.setPath( 'assets/' )
					.load( 'alps_field_4k.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						scene.background = texture;
						scene.environment = texture;
          });


				//
*/
scene.background = new THREE.Color( 0x000000  );

      
//Carpaint normal texture
const normalMap3 = new THREE.CanvasTexture( new FlakesTexture() );
							normalMap3.wrapS = THREE.RepeatWrapping;
							normalMap3.wrapT = THREE.RepeatWrapping;
							normalMap3.repeat.x = 50;
							normalMap3.repeat.y = 50;
							normalMap3.anisotropy = 16;
//Car AO
var aotexture;

//Define carmaterials
var material = new THREE.MeshPhysicalMaterial();
material.color.setHex(0xff1100)
material.normalMap = normalMap3;
material.normalScale =  new THREE.Vector2( 0.05, 0.05 )
aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car1/ao_bake4k.jpg' );
aotexture.flipY = false;
material.aoMap = aotexture;


material.aoMapIntensity = 7;
var glassmaterial = new THREE.MeshStandardMaterial();
glassmaterial.color.setHex(0x262626);
var tyrematerial = new THREE.MeshStandardMaterial();
var tyretexturenormal =  new THREE.TextureLoader().load( '../../assets/tireNormalMap.png' );
tyrematerial.normalMap = tyretexturenormal;

tyrematerial.color.setHex(0x030303)
var metalmaterial = new THREE.MeshStandardMaterial();
metalmaterial.metalness = 1;
metalmaterial.roughness = 0.32;

material.metalness = 1;
                material.roughness = 0.3;
                material.envMapIntensity = 5;
                
                glassmaterial.metalness = 1;
                glassmaterial.roughness = 0.01;
                glassmaterial.envMapIntensity = 1;
                
                glassmaterial.opacity = 0.996;
                glassmaterial.transparent = true;
function setClearance(clearance)
{
  scene.traverse(obj => {
    if (obj.type == 'Mesh')
    {
      
      obj.position.set(0, clearance,0);
    }
  });
}


var testcar = null;
//Button click
  

document.getElementById("click").onclick = function(){testcar.applyWheel();setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click1").onclick = function(){testcar.applyWheelA();setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click2").onclick = function(){testcar.applyWheelB();setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click3").onclick = function(){testcar.applyWheelC();setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click4").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarB();
aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car1/ao_bake4k.jpg' );
material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click5").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarA();
  aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car2/ao_bake4k.jpg' );
  material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click6").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarC();
  aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car3/ao_bake4k.jpg' );
  material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click7").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarD();
  aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car4/ao_bake4k.jpg' );
  material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click8").onclick = function(){material.color.setHex(0xff1100)}
document.getElementById("click9").onclick = function(){material.color.setHex(0x197bd1)}
document.getElementById("click10").onclick = function(){material.color.setHex(0x2ed119)}
document.getElementById("click11").onclick = function(){material.color.setHex(0xcfcfcf)}
document.getElementById("click12").onclick = function(){material.color.setHex(0x363636)}
document.getElementById("click13").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarE();
aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car5/ao_bake.001.png' );
  material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
document.getElementById("click14").onclick = function(){if(testcar != null){testcar.delete();}testcar = new CarF();
aotexture =  new THREE.TextureLoader().load( '../../assets/obj/Car6/ao_bake.jpg' );
  material.aoMap = aotexture;aotexture.flipY = false;setClearance(testcar.sockets[0].part.groundclearance);}
  //Selected socket vars
  var final;
//Add Click Listener
document.addEventListener( 'mousedown', onDocumentMouseDown );

function onDocumentMouseDown( event ) {    
    event.preventDefault();
    var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   
                            -( event.clientY / window.innerHeight ) * 2 + 1,  
                            0.5 );     
                            var raycaster =  new THREE.Raycaster();                                        
                            raycaster.setFromCamera( mouse3D, camera );
    var intersects = raycaster.intersectObjects( scene.children );
    var match = false;
    if ( intersects.length > 0 ) {
      
        for (let index = intersects.length -1; index > 0; index = index - 1) {
          
          
          if(intersects[index].object.name == 'Socket' )
          {
            
            console.log(scene)
            match = true;
            if(final != null)
            final.material.color.setHex(0x011d8c);
            
            final = intersects[index].object;
            console.log(final)
            final.material.color.setHex(0xff0000);
            //load part list on successful click
            loadpartlist();
          }
        }
    }
    else
    {
      final.material.color.setHex(0x011d8c);
    }
    if (match == false)
    {
    final.material.color.setHex(0x011d8c);
    }
    
}
//Add Parts list definitions
const classesMapping = new Map([
  ['Empty', Empty],
  ['WheelA', WheelA],
  ['WheelB', WheelB],
  ['WheelC', WheelC],
  ['WheelD', WheelD],
  ['WheelE', WheelE],
  ['RoofRailA', RoofRailA],
  ['RoofRailB', RoofRailB]
]);
//Parts type definition
const TypeMapping = new Map([
  ['Empty', 'Any'],
  ['WheelA','Wheel'],
  ['WheelB','Wheel'],
  ['WheelC','Wheel'],
  ['WheelD','Wheel'],
  ['WheelE','Wheel'],
  ['RoofRailA','RoofRail'],
  ['RoofRailB', 'RoofRail']
]);
//Add parts list to html list items
function loadpartlist(){
  let list = document.getElementById("myList");
  list.innerText = ''
var data = [];
//add parts to list and check if type is correct for socket
classesMapping.forEach((value,key) => {
  
  
  if( TypeMapping.get(key) == 'Any' || TypeMapping.get(key) == testcar.sockets[testcar.retrievePart(final.parent.name)].parttype){
  data.push(key);
  }
})
  

  //create list elements
data.forEach((item)=>{
  let li = document.createElement("li");
  li.className = 'part';
  li.innerText = item;
  list.appendChild(li);
});
//Adds button event handlers to list items to swap parts
const parts = document.querySelectorAll('.part');
parts.forEach(item => {
  item.addEventListener("click", function() {
    var socketindex = testcar.retrievePart(final.parent.name);
    let a = new (classesMapping.get(item.innerText))(testcar,socketindex);
    testcar.sockets[socketindex].swapPart(a);
  });
});
setMaterials();
}
//Add pointlights
const pointLight = new THREE.SpotLight(0xffffff, 5, 20); //Points Light
pointLight.castShadow = true;
pointLight.position.set(10, 15, 0);

pointLight.shadow.mapSize.width = 4096;
pointLight.shadow.mapSize.height = 4096;
pointLight.shadow.radius = 40;
const pointLightb = new THREE.SpotLight(0xffffff, 5, 20); //Points Light
pointLightb.castShadow = true;
pointLightb.position.set(-10, 15, 0);

pointLightb.shadow.mapSize.width = 4096;
pointLightb.shadow.mapSize.height = 4096;
pointLightb.shadow.radius = 40;
const pointLightc = new THREE.SpotLight(0xffffff, 5, 12); //Points Light
pointLightc.castShadow = true;
pointLightc.position.set(0, 15, 10);

pointLightc.shadow.mapSize.width = 4096;
pointLightc.shadow.mapSize.height = 4096;
pointLightc.shadow.radius = 40;
const pointLightd = new THREE.SpotLight(0xffffff, 5, 12); //Points Light
pointLightd.castShadow = true;
pointLightd.position.set(-10, 2, 0);

pointLightd.shadow.mapSize.width = 4096;
pointLightd.shadow.mapSize.height = 4096;
pointLightd.shadow.radius = 40;
const pointLighte = new THREE.SpotLight(0xffffff, 5, 12); //Points Light
pointLighte.castShadow = true;
pointLighte.position.set(10, 2, 0);

pointLighte.shadow.mapSize.width = 4096;
pointLighte.shadow.mapSize.height = 4096;
pointLighte.shadow.radius = 40;
scene.add(pointLight,pointLightb,pointLightc,pointLightd,pointLighte);
//Enviroment reflections
 var cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 1024 ,);
				cubeRenderTarget.texture.type = THREE.HalfFloatType;
var cubeCamera = new THREE.CubeCamera( 1, 2000, cubeRenderTarget );
cubeCamera.position.set(0, 5, 0);
//Material ENV's
material.envMap = cubeCamera.renderTarget.texture;
glassmaterial.envMap = cubeCamera.renderTarget.texture;
//SETUP POSTPROCESSING
let composer = new EffectComposer(renderer);
//ADD UNPROCESSED PASS
composer.addPass(new RenderPass(scene,camera));
//BLOOM
composer.addPass(new EffectPass(camera, new BloomEffect(BlendFunction.ADD,0.4,0,0.4)));
composer.addPass(new EffectPass(camera, new ChromaticAberrationEffect(BlendFunction.Add,0.01,0.01)));
//traversetosetmaterials
function setMaterials()
{
  try {
  scene.getObjectByName("Body").children[0].material = material;
  scene.getObjectByName("Body").children[1].material = glassmaterial;
  scene.getObjectByName("Body").children[2].material = glassmaterial;
  } catch (error) {
    
  }
  scene.traverse(function(obj){
    //obj.geometry.attributes.uv2 = obj.geometry.attributes.uv;
    if(obj.type == 'Mesh') {obj.receiveShadow=true;obj.castShadow = true;obj.geometry.attributes.uv2 = obj.geometry.attributes.uv;}
    if(obj.type == 'Group') {obj.castShadow = true;
      if(obj.name != '3denv' && obj.children[0].name != 'Socket')
      obj.children[0].material = material;
      if(obj.name == 'Wheel_F' ||obj.name == 'Wheel_C'||obj.name == 'Wheel_E'||obj.name == 'Wheel_H'||obj.name == 'Wheel_A'){
        
        obj.children[0].material = tyrematerial;
        obj.children[1].material = metalmaterial;
      }
    }});
}
//Dynamic display stretching
window.addEventListener('resize', function()

{
  onWindowResize();
});
function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

function animate() {
  requestAnimationFrame( animate );
  cubeCamera.update(renderer,scene);
  controls.update();
  camera.aspect = window.innerWidth / window.innerHeight;
  composer.render()

}

animate()