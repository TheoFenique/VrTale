import * as THREE from 'three';
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
// import { WEBVR } from 'three/examples/jsm/vr/WebVR.js';
import * as PROPS from './assets/propsBuilder.js'

export let PlaceObjects = (data) => {

    // data.cloud.map((v, i, a) => {

    //     let lineIndex = Math.floor(i/3)
    //     if(i%2==0){
    //         PROPS.createProp(scene, PROPS.three2, 0x4CA132, v[0]-250, 13, v[1]-100, 0, Math.atan((data.line[lineIndex+1][0]-data.line[lineIndex][0])/(data.line[lineIndex+1][1]-data.line[lineIndex][1])), 0)
    //     }
    //     else{
    //         PROPS.createProp(scene, PROPS.three1, 0x4CA132, v[0]-250, 13, v[1]-100, 0, Math.atan((data.line[lineIndex+1][0]-data.line[lineIndex][0])/(data.line[lineIndex+1][1]-data.line[lineIndex][1])), 0)
    //     }
    // })
}


const mtlLoader = new MTLLoader()
const objLoader = new OBJLoader()
const textureLoader = new THREE.TextureLoader()
const scene = new THREE.Scene()


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

//Set the floor
const floor = {}
floor.geometry = new THREE.PlaneGeometry(2000, 2000)
floor.material = new THREE.MeshStandardMaterial({
    color: 0x4A2B10, metalness: 0.3, roughness: 0.8
})
floor.mesh = new THREE.Mesh(floor.geometry, floor.material)
floor.mesh.rotation.x = - Math.PI * 0.5
floor.mesh.castShadow = false
floor.mesh.receiveShadow = true
floor.mesh.position.y = 10
scene.add(floor.mesh)

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

//Lights
var light = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(light)

const sunLight = new THREE.DirectionalLight(0xffffff, 1)
sunLight.position.x = 0
sunLight.position.y = 50
sunLight.position.z = 0
sunLight.castShadow = true
sunLight.shadow.camera.right = 2000
sunLight.shadow.camera.left = -2000
sunLight.shadow.camera.top = 2000
sunLight.shadow.camera.bottom = -2000
sunLight.shadow.camera.near = 50
sunLight.shadow.camera.far = 60
scene.add(sunLight)

var helper = new THREE.CameraHelper(sunLight.shadow.camera);
scene.add(helper)


//Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)



camera.position.y = 20

document.body.appendChild(VRButton.createButton(renderer));

renderer.vr.enabled = true;

// Loop
let j = 0
let camCount = 0
let lineIndex = 0
let witness = 0
export const launch = function(treedata){
    console.log(treedata)
    const loop = () => {
        if(j==0 && witness ==0){
            camera.position.x = (treedata.line[witness][0] - 250)
            camera.position.z = (treedata.line[witness][1] - 100)
        }
        renderer.setAnimationLoop(loop)
    
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

        if(witness<treedata.line.length)
        {
            camCount++
            camera.position.x += (((treedata.line[witness+10][0] - 250) - (treedata.line[witness][0] - 250))/100)
            camera.position.z += (((treedata.line[witness+10][1] - 100) - (treedata.line[witness][1] - 100))/100)
            if(camCount==10){
                witness += 1
                camCount = 0
            }

            if(j<treedata.cloud.length)
            {
                while((treedata.cloud[j][0]-250)<(camera.position.x+150)){
                    console.log('pop')
                    lineIndex = Math.floor(j/3)
                    if(j%2==0){
                        PROPS.createProp(scene, PROPS.three1, 0x4CA132, treedata.cloud[j][0]-250, 13, treedata.cloud[j][1]-100, 0, Math.atan((treedata.line[lineIndex+1][0]-treedata.line[lineIndex][0])/(treedata.line[lineIndex+1][1]-treedata.line[lineIndex][1])), 0)
                    }
                    else{
                        PROPS.createProp(scene, PROPS.three2, 0x4CA132, treedata.cloud[j][0]-250, 13, treedata.cloud[j][1]-100, 0, Math.atan((treedata.line[lineIndex+1][0]-treedata.line[lineIndex][0])/(treedata.line[lineIndex+1][1]-treedata.line[lineIndex][1])), 0)
                    }
                j++
                }
            }
            console.log(camera.position.x)
            console.log(camera.position.z)
        }
    }
    setTimeout(() => {
        console.log('ouiiiii')
        loop()
    }, 1000);
} 
