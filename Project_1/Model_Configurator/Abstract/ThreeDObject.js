import * as THREE from 'three';
import { Group } from 'three';
import { CubeCamera, Mesh, ShapeUtils } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene ,manager} from '../main.js'

export class ThreeDObject
{

    constructor(meshname,meshposition,meshrotation,meshscale)
    {
      this.loaded = false;
      this.identifier = '' + Math.floor(Math.random() * 1000);;
      this.handleload(meshname,meshposition,meshrotation,meshscale);
    }
     handleload(meshname,meshposition,meshrotation,meshscale) {
        var mesh;
        var gltfLoader = new GLTFLoader(manager);
        var name = this.identifier;
        if(meshscale == null)
        {
            meshscale = [1,1,1];
        }

        // Load Model and load promise
        if(meshname != ""){
            gltfLoader.load('../../assets/'+meshname+'.gltf', function (gltf){

                mesh = gltf.scene;
                scene.add(mesh);
                mesh.name = name;
                mesh.position.set(meshposition[0],meshposition[1],meshposition[2]);
                mesh.rotation.set(meshrotation[0],meshrotation[1],meshrotation[2]);
                mesh.scale.set(meshscale[0],meshscale[1],meshscale[2]);
                //Car Test render material
                
                const geometry = new THREE.BoxGeometry(0.6,1.3,1.3);
                const material = new THREE.MeshBasicMaterial( { color: 0x011d8c } );
                material.transparent = true;
                material.opacity = 0.2;
                material.depthTest = false;
                const box = new THREE.Mesh( geometry, material );
                box.name = "Socket";
                mesh.add(box);

               
             }); 
            }
            else
            {
                const group = new THREE.Group();
                
                const geometry = new THREE.BoxGeometry(0.6,1.3,1.3);
                const material = new THREE.MeshBasicMaterial( { color: 0x011d8c } );
                material.transparent = true;
                material.opacity = 0.2;
                material.depthTest = false;
                const box = new THREE.Mesh( geometry, material );
                box.name = "Socket";
                group.name = name;
                group.position.set(meshposition[0],meshposition[1],meshposition[2]);
                group.rotation.set(meshrotation[0],meshrotation[1],meshrotation[2]);

                group.add( box );
                scene.add(group);
             
            }
            }
    removeMesh()
    {
        
        var selectedObject = scene.getObjectByName(this.identifier);
        
        scene.remove(selectedObject);
       // selectedObject.geometry.dispose();
       // selectedObject.material.dispose();
        selectedObject = undefined;
    }


}
