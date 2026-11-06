import * as THREE from 'three';

export class ExtendedScene extends THREE.Scene {

    public camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight, 0.1, 1000);

    constructor() {
        super();

        this.camera.position.z = 5;

        this.create();
    }

    public create(): void {}

    public update(time: number): void {}
}