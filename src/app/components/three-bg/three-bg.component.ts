import { Component, ElementRef, OnInit, ViewChild, OnDestroy, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-bg',
  standalone: true,
  template: `<canvas #canvas class="fixed top-0 left-0 w-full h-full -z-10"></canvas>`,
  styles: [`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      pointer-events: none;
    }
  `]
})
export class ThreeBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;
  private mesh!: THREE.Group;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initThree();
    }
  }

  private initThree(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mesh = new THREE.Group();
    this.scene.add(this.mesh);

    // Create some volumetric-looking shapes
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6, // Primary violet
      emissive: 0x1e3a8a, // Secondary blue
      specular: 0xffffff,
      shininess: 100,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    this.mesh.add(torusKnot);

    // Add some lights
    const pointLight = new THREE.PointLight(0xffffff, 100);
    pointLight.position.set(20, 20, 20);
    this.scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    this.camera.position.z = 30;

    this.animate();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const renderLoop = () => {
        this.mesh.rotation.y += 0.005;
        this.mesh.rotation.x += 0.002;
        this.renderer.render(this.scene, this.camera);
        this.animationId = requestAnimationFrame(renderLoop);
      };
      renderLoop();
    });
  }

  private onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize);
    }
  }
}
