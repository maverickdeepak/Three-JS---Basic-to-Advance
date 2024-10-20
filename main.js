import * as THREE from "three";

// clock
let clock = new THREE.Clock();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

const cubGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
const cubeMesh = new THREE.Mesh(cubGeometry, cubeMaterial);

scene.add(cubeMesh);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    window.requestAnimationFrame(animate);
    cubeMesh.rotation.y = clock.getElapsedTime() * 2;
    renderer.render(scene, camera);
}
animate();
