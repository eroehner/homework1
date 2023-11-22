import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//VARIABLES
let width = window.innerWidth
let height = window.innerHeight

console.log(width,height);

//CREATE A SCENE AND CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 100);
camera.position.set(0, 0, 20);


//CREATE A GEOMETRY
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xbcc8ec } );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(1,5,0)
scene.add( cube );


// RESPONSIVE
function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.render(scene, camera);
}
window.addEventListener('resize', handleResize);


//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const container = document.querySelector('#threejs-container')
container.append(renderer.domElement)

//Create Mouse Control
const controls = new OrbitControls( camera, renderer.domElement );

//RENDER - WITHOUT ANIMATION
renderer.render(scene, camera)


//ANIMATE AND RENDER
function animate() {
  requestAnimationFrame( animate );

  controls.update();


  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;


  renderer.render( scene, camera );
}


animate();

window.addEventListener('resize', () => {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  renderer.render(scene, camera)
})