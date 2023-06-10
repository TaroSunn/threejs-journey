import * as THREE from "three";

// 创建一个scene
const scene = new THREE.Scene();

// 创建一个宽度为1，高度为1，深度为1的立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  color: 0x00bfa5,
});
// 创建mesh(网格)
const cube = new THREE.Mesh(geometry, material);
// scene 添加 mesh
scene.add(cube);

const sizes = {
  width: 800,
  height: 600,
};

// 创建一个透视camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 2;
scene.add(camera);

// render
const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
