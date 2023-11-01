import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

//import * as THREE from 'three';
//import './style.css'

// Setup
    
const scene = new THREE.Scene();
        
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.BoxGeometry(10, 10, 10);
        
        //set the color of the basic material in the object parameters `{}`
        
        const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );
        
        const cube = new THREE.Mesh( geometry, material );

        //Added material constant
        //const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});




// Lights
        
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(ambientLight);



const ico = new THREE.IcosahedronGeometry(10);
        const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const icoMesh = new THREE.Mesh(ico, icoMaterial);
        
        scene.add(icoMesh);
        
        icoMesh.position.z= -15;
        icoMesh.position.x= 15;


scene.add( cube );

cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;



renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(50);
        camera.position.setX(-3);

        renderer.render(scene, camera);





function animate() {
  requestAnimationFrame( animate );
// slowly rotate the cube:
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
// rotate the icosahedron a little faster in the opposite direction:
icoMesh.rotation.z += -0.03
icoMesh.rotation.y += -0.03

  renderer.render( scene, camera );
}





animate();