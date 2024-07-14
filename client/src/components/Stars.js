import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "../styles/small-components/stars.css";

function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xffffff, 1); // Set background color to white

    // Create star material and geometry
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: "#3d3d3d" }); // Set star color to #bbbbbb

    // Function to add stars to the scene
    const addStars = () => {
      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = Math.random() * 2000 - 1000;
        const y = Math.random() * 2000 - 1000;
        const z = Math.random() * 2000 - 1000;
        starVertices.push(x, y, z);
      }
      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    };

    addStars();

    // Set camera initial position
    let angle = 0;
    const radius = 200; // Increased radius for a wider orbit

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update the camera's position to move in a varied pattern
      angle += 0.005; // Slower speed
      camera.position.x = radius * Math.sin(angle) * Math.cos(angle / 2);
      camera.position.y = radius * Math.sin(angle / 2);
      camera.position.z = radius * Math.cos(angle);
      camera.lookAt(0, 0, 0); // Ensure the camera is always looking at the center

      // Rotate the star field slightly
      scene.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);
  return (
    <div className="stars-container">
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        data-engine="three.js r164"
      />
    </div>
  );
}

export default Stars;
