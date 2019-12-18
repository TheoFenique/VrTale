import * as THREE from 'three';
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';
// import { WEBVR } from 'three/examples/jsm/vr/WebVR.js';

export let PlaceObjects = (data) => {
    //Add Steve Carell <3
    let carellGeometry = new THREE.Geometry()
    data.cloud.map((v, i, a) => {
        var carell = new THREE.Vector3();
        carell.x = v[0] - 250
        carell.z = v[1] - 100

        carell.material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('carell.png'),
        })

        carellGeometry.vertices.push(carell)
    })

    var carellField = new THREE.Points(carellGeometry);

    scene.add(carellField)
}


const mtlLoader = new MTLLoader()
const objLoader = new OBJLoader()
const textureLoader = new THREE.TextureLoader()
const scene = new THREE.Scene()

// document.body.appendChild(WEBVR.createButton(renderer));
// renderer.vr.enabled = true;

//Variables
let velocity = 0

let controlsListeners = {
    z: 0,
    shift: 0,
    s: 0
}


//Set the Skybox
const skyBox = {}
skyBox.geometry = new THREE.SphereBufferGeometry(8000, 20, 20)
skyBox.material = new THREE.MeshStandardMaterial({
    map: textureLoader.load('background.jpg'),
    side: THREE.DoubleSide,
})
// skyBox.position = (0, 0, 4000)
skyBox.mesh = new THREE.Mesh(skyBox.geometry, skyBox.material)
scene.add(skyBox.mesh)

// Sizes
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})


// Cursor
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) => {
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})


//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 9000)
scene.add(camera)

var light = new THREE.AmbientLight(0xffffff, 1.7);
scene.add(light);

//Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)



camera.position.y = 20


// Loop
let witness = 0;
export const launch = function(treedata){
    console.log(treedata)
    const loop = () => {
        window.requestAnimationFrame(loop)
    
        //Update velocity
        if (controlsListeners.z === 1 && controlsListeners.shift === 0) {
            if (velocity < 6) {
                velocity += 0.016
            }
        }
    
        if (controlsListeners.shift === 1 && controlsListeners.z === 1) {
            velocity += 0.40
            if (velocity > 40) {
                velocity = 40
            }
        }
    
        if (controlsListeners.s === 1) {
            velocity -= 0.50
            if (velocity < -4) {
                velocity = -4
            }
        }
    
        if (velocity < 0 && controlsListeners.z === 0 && controlsListeners.shift === 0 && controlsListeners.s === 0) {
            velocity += 0.50
        }
    
        // Update Skybox
        skyBox.mesh.position.x = camera.position.x
        skyBox.mesh.position.y = camera.position.y
        skyBox.mesh.position.z = camera.position.z
    
    
        //Rotation
        camera.rotation.x -= cursor.y * 0.1
        camera.rotation.order = 'YXZ'
        camera.rotation.y -= cursor.x * 0.1
    
        if (controlsListeners.z == 1) {
            camera.position.x -= (Math.sin(camera.rotation.y) / 360) * 30
            camera.position.z -= (Math.cos(camera.rotation.y) / 360) * 30
            // camera.position.y += (Math.tan(camera.rotation.x) / 360) *30
        }
        if (controlsListeners.q == 1) {
            camera.position.x += (Math.sin(-camera.rotation.y - Math.PI / 2) / 360) * 30
            camera.position.z += (-Math.cos(-camera.rotation.y - Math.PI / 2) / 360) * 30
        }
        if (controlsListeners.s == 1) {
            camera.position.x += (Math.sin(camera.rotation.y) / 360) * 30
            camera.position.z += (Math.cos(camera.rotation.y) / 360) * 30
            // camera.position.y -= (Math.tan(camera.rotation.x) / 360) *30
        }
        if (controlsListeners.d == 1) {
            camera.position.x += (Math.sin(-camera.rotation.y + Math.PI / 2) / 360) * 30
            camera.position.z += (-Math.cos(-camera.rotation.y + Math.PI / 2) / 360) * 30
        }
    
        // Renderer
        renderer.render(scene, camera)

        if (Object.keys(treedata.line).length >= witness) {
            camera.position.x = (treedata.line[witness][0] - 250)/3
            camera.position.z = (treedata.line[witness][1] - 100)/3
        }
    
        witness += 1;
    }
    setTimeout(() => {
        console.log('ouiiiii')
        loop()
    }, 1000);
} 
