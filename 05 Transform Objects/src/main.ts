import * as THREE from "three";

// 创建一个scene
const scene = new THREE.Scene();

const grop = new THREE.Group();
grop.position.y = 1;
grop.scale.y = 2;
grop.rotation.y = 1;
scene.add(grop);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
grop.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
grop.add(cube2);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
grop.add(cube3);

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
camera.position.z = 3;
scene.add(camera);

// render
const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

const axseHelper = new THREE.AxesHelper(2);
scene.add(axseHelper);

function animate() {
  // requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();
