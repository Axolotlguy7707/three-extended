import * as THREE from 'three';
import { ExtendedScene } from './ExtendedScene';

export class App {
    public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();

    public rendererWidth: number;

    public rendererHeight: number;

    private currentScene?: ExtendedScene;

    constructor(width: number, height: number) {
        this.rendererWidth = width;
        this.rendererHeight = height;
    }

    public animate = (time: number): void => {
        this.renderer.render(this.currentScene!, this.currentScene!.camera);

        this.currentScene?.update(time);
    };

    public start(scene: ExtendedScene): void {
        this.renderer.setSize(this.rendererWidth, this.rendererHeight);

        document.body.appendChild(this.renderer.domElement);

        scene.create();

        this.currentScene = scene;

        this.renderer.setAnimationLoop(this.animate);
    }

    public switchScene(scene: ExtendedScene): void {
        this.currentScene = scene;
        scene.create();
    }
}