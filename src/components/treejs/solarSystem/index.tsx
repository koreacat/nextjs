import {WEBGL} from "../../../lib/webgl";
import {useEffect} from "react";
import * as THREE from 'three';
import classnames from "classnames/bind";
import styles from "./solarSystem.module.scss";

const cx = classnames.bind(styles);

const SolarSystem = () => {

  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const render = (renderer, camera, scene) => {
    const objects = [];

    const radius = 1;
    const widthSegments = 10;
    const heightSegments = 6;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const solarSystem = new THREE.Object3D();
    scene.add(solarSystem);
    objects.push(solarSystem);

    const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(5, 5, 5);  // 태양의 크기를 키움
    solarSystem.add(sunMesh);
    objects.push(sunMesh);


    const earthOrbit = new THREE.Object3D();
    earthOrbit.position.x = 10;
    solarSystem.add(earthOrbit);
    objects.push(earthOrbit);

    const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.add(earthMesh);
    objects.push(earthMesh);


    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;
    earthOrbit.add(moonOrbit);

    const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(.5, .5, .5);
    moonOrbit.add(moonMesh);
    objects.push(moonMesh);

    const renderFrame = (time) => {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      objects.forEach((obj) => {
        // const axes = new THREE.AxesHelper();
        // axes.material.depthTest = false;
        // axes.renderOrder = 1; // z-index
        // obj.add(axes);
        obj.rotation.y = time;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(renderFrame);
    }
    requestAnimationFrame(renderFrame);
  }

  const scenegraphMain = (canvas) => {
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000);
    camera.position.set(0, 20, 50);
    camera.up.set(0, 0, 1);
    camera.lookAt(0, 0, 0);
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    const scene = new THREE.Scene();

    const light = new THREE.PointLight(0xFFFFFF, 3);
    scene.add(light);

    render(renderer, camera, scene);
  }

  useEffect(() => {
    if(WEBGL.isWebGLAvailable()) {
      const canvas = document.querySelector('#c');
      scenegraphMain(canvas);
    }
  }, [])

  return (
    <div className={cx('wrap')}>
      <canvas id="c" className={cx('c')}/>
    </div>
  )
}

export default SolarSystem;