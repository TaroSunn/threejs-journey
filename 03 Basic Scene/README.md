# Basic Scene

这节课中我们将要简单认识一下[three.js](https://threejs.org/)

实现一个正方体

## 创建 html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>03 Basic Scene</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
    <script src="./three.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

这里我们需要 创建一个`canvas`画布展示绘制的内容

同时引入`three.main.js`和编码文件`script.js`

## 创建正方体

使用 threejs 显示任何物体，需要三个部分 `scene`、 `camera`、`renderer`，这样就可以通过 camera render 出一个 scene 了

### scene

scene 就像一个容器，例如可以把 camera 放到这个容器中

### geometry

首先需要创建一个立方体

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
```

通过 BoxGeometry 创建一个矩形长方体，这里面的参数表示，宽度、高度、深度。那么这里就创建了一个边长为 1 的立方体

```js
const material = new THREE.MeshBasicMaterial({
  color: 0x00bfa5,
});
```

接下来需要给这个立方体一个材质，MeshBasicMaterial 是一种基本的材质类型，为几何体提供单一颜色，不受光照的影响，这意味着不会有阴影或者反射等光照效果

```js
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

通过[Mesh(网格)](https://threejs.org/docs/index.html?q=Mesh#api/zh/objects/Mesh)将物体放到 scene 上

调用`scene.add()` 方法时，物体会被添加到(0,0,0)坐标上，此时 camera 在立方体的内部，那么就需要调整 camera 视角

### camera

```js
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
```

这里我们创建了一个透视 camera
这里有四个参数

1. FOV(field of view)，视野角度，通常以度数表示。表示 camera 视锥体的垂直视野范围。视野角度越大，相机看到的范围越广，但物体可能会显得更小。相反，视野角度越小，相机看到的范围越小，物体会显得越大
2. 长宽比
3. 近剪切面，定义了 camera 能够看到的最近距离
4. 远剪切面，定义了 camera 能够看到的最远距离

前面有提到过 `scene.add()`物体会被添加到(0,0,0)坐标上，调整 camera

```js
camera.position.z = 2;
```

### render

```js
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
```

这里选择 canvas 元素，调用`WebGlRenderer`方法，设置渲染的大小，添加`scene`和`camera`

### animate

```js
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
```

通过`requestAnimationFrame`将正方体旋转起来

## Demo

[Demo](https://threejs-journey-eta.vercel.app/)

## 参考资料

[Creating a scene](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)
