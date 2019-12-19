import * as THREE from 'three';

const three1 = new THREE.Geometry()
three1.vertices.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Vector3(4,0,2), //0
    new THREE.Vector3(3.5,2,2),
    new THREE.Vector3(3.5,5,2),
    new THREE.Vector3(4.5,7.5,2),
    new THREE.Vector3(6.5,8,2),
    new THREE.Vector3(8,6.5,2),
    new THREE.Vector3(8.5,5,2),
    new THREE.Vector3(9.5,4.5,2),
    new THREE.Vector3(11.5,5.5,2),
    new THREE.Vector3(13.5,9,2),
    new THREE.Vector3(13.5,12.5,2),
    new THREE.Vector3(12,15.5,2),
    new THREE.Vector3(10.5,16,2),
    new THREE.Vector3(10.5,17,2),
    new THREE.Vector3(8.5,18.5,2),
    new THREE.Vector3(5,19,2),
    new THREE.Vector3(1.5,18,2),
    new THREE.Vector3(0,15,2),
    new THREE.Vector3(0.5,13.5,2),
    new THREE.Vector3(2,13,2),
    new THREE.Vector3(4,11,2),
    new THREE.Vector3(3.5,9.5,2),
    new THREE.Vector3(2,7,2),
    new THREE.Vector3(0.5,4,2),
    new THREE.Vector3(0,0.5,2),
    new THREE.Vector3(1.5,0,2), //25
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Vector3(4,0,0), //26
    new THREE.Vector3(3.5,2,0),
    new THREE.Vector3(3.5,5,0),
    new THREE.Vector3(4.5,7.5,0),
    new THREE.Vector3(6.5,8,0),
    new THREE.Vector3(8,6.5,0),
    new THREE.Vector3(8.5,5,0),
    new THREE.Vector3(9.5,4.5,0),
    new THREE.Vector3(11.5,5.5,0),
    new THREE.Vector3(13.5,9,0),
    new THREE.Vector3(13.5,12.5,0),
    new THREE.Vector3(12,15.5,0),
    new THREE.Vector3(10.5,16,0),
    new THREE.Vector3(10.5,17,0),
    new THREE.Vector3(8.5,18.5,0),
    new THREE.Vector3(5,19,0),
    new THREE.Vector3(1.5,18,0),
    new THREE.Vector3(0,15,0),
    new THREE.Vector3(0.5,13.5,0),
    new THREE.Vector3(2,13,0),
    new THREE.Vector3(4,11,0),
    new THREE.Vector3(3.5,9.5,0),
    new THREE.Vector3(2,7,0),
    new THREE.Vector3(0.5,4,0),
    new THREE.Vector3(0,0.5,0),
    new THREE.Vector3(1.5,0,0), //51
)
three1.faces.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Face3(0,1,25),
    new THREE.Face3(1,24,25),
    new THREE.Face3(1,23,24),
    new THREE.Face3(1,2,23),
    new THREE.Face3(2,22,23),
    new THREE.Face3(2,3,22),
    new THREE.Face3(3,21,22),
    new THREE.Face3(3,4,21),
    new THREE.Face3(20,21,4),
    new THREE.Face3(17,18,19),
    new THREE.Face3(16,17,19),
    new THREE.Face3(15,16,19),
    new THREE.Face3(15,19,20),
    new THREE.Face3(14,15,20),
    new THREE.Face3(13,14,20),
    new THREE.Face3(12,13,20),
    new THREE.Face3(12,20,4),
    new THREE.Face3(11,12,4),
    new THREE.Face3(10,11,4),
    new THREE.Face3(9,10,4),
    new THREE.Face3(9,4,5),
    new THREE.Face3(8,9,5),
    new THREE.Face3(7,8,5),
    new THREE.Face3(5,6,7),
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Face3(27,26,51),
    new THREE.Face3(50,27,51),
    new THREE.Face3(49,27,50),
    new THREE.Face3(28,27,49),
    new THREE.Face3(48,28,49),
    new THREE.Face3(29,28,48),
    new THREE.Face3(47,29,48),
    new THREE.Face3(30,29,47),
    new THREE.Face3(47,46,30),
    new THREE.Face3(44,43,45),
    new THREE.Face3(43,42,45),
    new THREE.Face3(42,41,45),
    new THREE.Face3(45,41,46),
    new THREE.Face3(41,40,46),
    new THREE.Face3(40,39,46),
    new THREE.Face3(39,38,46),
    new THREE.Face3(46,38,30),
    new THREE.Face3(38,37,30),
    new THREE.Face3(37,36,30),
    new THREE.Face3(36,35,30),
    new THREE.Face3(30,35,31),
    new THREE.Face3(35,34,31),
    new THREE.Face3(34,33,31),
    new THREE.Face3(32,31,33),
    ///////////////////////////////////SIDE///////////////////////////////////
    new THREE.Face3(1,0,26),
    new THREE.Face3(1,26,27),
    new THREE.Face3(1,27,28),
    new THREE.Face3(2,1,28),
    new THREE.Face3(3,2,28),
    new THREE.Face3(28,29,3),
    new THREE.Face3(3,29,30),
    new THREE.Face3(4,3,30),
    new THREE.Face3(5,4,30),
    new THREE.Face3(30,31,5),
    new THREE.Face3(31,32,5),
    new THREE.Face3(6,5,32),
    new THREE.Face3(7,6,32),
    new THREE.Face3(32,33,7),
    new THREE.Face3(33,34,7),
    new THREE.Face3(8,7,34),
    new THREE.Face3(9,8,34),
    new THREE.Face3(34,35,9),
    new THREE.Face3(35,36,9),
    new THREE.Face3(10,9,36),
    new THREE.Face3(11,10,36),
    new THREE.Face3(36,37,11),
    new THREE.Face3(37,38,11),
    new THREE.Face3(12,11,38),
    new THREE.Face3(13,12,38),
    new THREE.Face3(38,39,13),
    new THREE.Face3(39,40,13),
    new THREE.Face3(14,13,40),
    new THREE.Face3(15,14,40),
    new THREE.Face3(40,41,15),
    new THREE.Face3(41,42,15),
    new THREE.Face3(16,15,42),
    new THREE.Face3(17,16,42),
    new THREE.Face3(42,43,17),
    new THREE.Face3(43,44,17),
    new THREE.Face3(18,17,44),
    new THREE.Face3(19,18,44),
    new THREE.Face3(44,45,19),
    new THREE.Face3(45,46,19),
    new THREE.Face3(20,19,46),
    new THREE.Face3(21,20,46),
    new THREE.Face3(46,47,21),
    new THREE.Face3(47,48,21),
    new THREE.Face3(22,21,48),
    new THREE.Face3(23,22,48),
    new THREE.Face3(48,49,23),
    new THREE.Face3(49,50,23),
    new THREE.Face3(24,23,50),
    new THREE.Face3(25,24,50),
    new THREE.Face3(50,51,25),
    new THREE.Face3(51,26,25),
    new THREE.Face3(0,25,26),
)

const three2 = new THREE.Geometry()
three2.vertices.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Vector3(2,1,2), //0
    new THREE.Vector3(1.5,4,2),
    new THREE.Vector3(2,7.5,2),
    new THREE.Vector3(3.5,11.5,2),
    new THREE.Vector3(6,14,2),
    new THREE.Vector3(9.5,15.5,2),
    new THREE.Vector3(11,19,2),
    new THREE.Vector3(10,24,2),
    new THREE.Vector3(5.5,25.5,2),
    new THREE.Vector3(2,24,2),
    new THREE.Vector3(-2,25,2),
    new THREE.Vector3(-5,24,2),
    new THREE.Vector3(-7,21.5,2),
    new THREE.Vector3(-10,20,2),
    new THREE.Vector3(-10,16.5,2),
    new THREE.Vector3(-6.5,14,2),
    new THREE.Vector3(-4,14,2),
    new THREE.Vector3(-2,11,2),
    new THREE.Vector3(-1.5,5,2),
    new THREE.Vector3(-2,1.5,2),
    new THREE.Vector3(0,0.5,2), //20
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Vector3(2,1,0), //21
    new THREE.Vector3(1.5,4,0),
    new THREE.Vector3(2,7.5,0),
    new THREE.Vector3(3.5,11.5,0),
    new THREE.Vector3(6,14,0),
    new THREE.Vector3(9.5,15.5,0),
    new THREE.Vector3(11,19,0),
    new THREE.Vector3(10,24,0),
    new THREE.Vector3(5.5,25.5,0),
    new THREE.Vector3(2,24,0),
    new THREE.Vector3(-2,25,0),
    new THREE.Vector3(-5,24,0),
    new THREE.Vector3(-7,21.5,0),
    new THREE.Vector3(-10,20,0),
    new THREE.Vector3(-10,16.5,0),
    new THREE.Vector3(-6.5,14,0),
    new THREE.Vector3(-4,14,0),
    new THREE.Vector3(-2,11,0),
    new THREE.Vector3(-1.5,5,0),
    new THREE.Vector3(-2,1.5,0),
    new THREE.Vector3(0,0.5,0), //41
)

three2.faces.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Face3(0,1,20),
    new THREE.Face3(20,1,18),
    new THREE.Face3(18,19,20),
    new THREE.Face3(1,2,18),
    new THREE.Face3(17,18,2),
    new THREE.Face3(2,3,17),
    new THREE.Face3(3,16,17),
    new THREE.Face3(3,4,16),
    new THREE.Face3(6,7,8),
    new THREE.Face3(5,6,8),
    new THREE.Face3(4,5,8),
    new THREE.Face3(4,8,9),
    new THREE.Face3(16,4,9),
    new THREE.Face3(16,9,8),
    new THREE.Face3(16,10,11),
    new THREE.Face3(9,10,16),
    new THREE.Face3(16,11,12),
    new THREE.Face3(15,16,12),
    new THREE.Face3(15,12,13),
    new THREE.Face3(13,14,15),
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Face3(22,21,41),
    new THREE.Face3(22,41,39),
    new THREE.Face3(40,39,41),
    new THREE.Face3(23,22,39),
    new THREE.Face3(39,38,23),
    new THREE.Face3(24,23,38),
    new THREE.Face3(37,24,38),
    new THREE.Face3(25,24,37),
    new THREE.Face3(28,27,29),
    new THREE.Face3(27,26,29),
    new THREE.Face3(26,25,29),
    new THREE.Face3(29,25,30),
    new THREE.Face3(25,37,30),
    new THREE.Face3(30,37,29),
    new THREE.Face3(31,37,32),
    new THREE.Face3(31,30,37),
    new THREE.Face3(32,37,33),
    new THREE.Face3(37,36,33),
    new THREE.Face3(33,36,34),
    new THREE.Face3(35,34,36),
    ///////////////////////////////////SIDE///////////////////////////////////
    new THREE.Face3(20,19,40),
    new THREE.Face3(19,18,40),
    new THREE.Face3(18,17,38),
    new THREE.Face3(17,16,38),
    new THREE.Face3(16,15,36),
    new THREE.Face3(15,14,36),
    new THREE.Face3(14,13,34),
    new THREE.Face3(13,12,34),
    new THREE.Face3(12,11,32),
    new THREE.Face3(11,10,32),
    new THREE.Face3(10,9,30),
    new THREE.Face3(9,8,30),
    new THREE.Face3(8,7,28),
    new THREE.Face3(7,6,28),
    new THREE.Face3(6,5,26),
    new THREE.Face3(5,4,26),
    new THREE.Face3(4,3,24),
    new THREE.Face3(3,2,24),
    new THREE.Face3(2,1,22),
    new THREE.Face3(1,0,22),
    new THREE.Face3(0,20,21),
    new THREE.Face3(21,22,0),
    new THREE.Face3(22,23,2),
    new THREE.Face3(23,24,2),
    new THREE.Face3(24,25,4),
    new THREE.Face3(25,26,4),
    new THREE.Face3(26,27,6),
    new THREE.Face3(27,28,6),
    new THREE.Face3(28,29,8),
    new THREE.Face3(29,30,8),
    new THREE.Face3(30,31,10),
    new THREE.Face3(31,32,10),
    new THREE.Face3(32,33,12),
    new THREE.Face3(33,34,12),
    new THREE.Face3(34,35,14),
    new THREE.Face3(35,36,14),
    new THREE.Face3(36,37,16),
    new THREE.Face3(37,38,16),
    new THREE.Face3(38,39,18),
    new THREE.Face3(39,40,18),
    new THREE.Face3(40,41,20),
    new THREE.Face3(41,21,20)
)

const star = new THREE.Geometry()
star.vertices.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Vector3(0,0,1.5), //0
    new THREE.Vector3(3,3.5,1.5),
    new THREE.Vector3(6.5,2,1.5),
    new THREE.Vector3(5,6.5,1.5),
    new THREE.Vector3(7,10,1.5),
    new THREE.Vector3(4,9.5,1.5),
    new THREE.Vector3(3,11.5,1.5),
    new THREE.Vector3(1.5,8.5,1.5),
    new THREE.Vector3(-1.5,6.5,1.5),
    new THREE.Vector3(1,4.5,1.5), //9
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Vector3(0,0,0), //10
    new THREE.Vector3(3,3.5,0),
    new THREE.Vector3(6.5,2,0),
    new THREE.Vector3(5,6.5,0),
    new THREE.Vector3(7,10,0),
    new THREE.Vector3(4,9.5,0),
    new THREE.Vector3(3,11.5,0),
    new THREE.Vector3(1.5,8.5,0),
    new THREE.Vector3(-1.5,6.5,0),
    new THREE.Vector3(1,4.5,0), //19
  )

star.faces.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Face3(0,1,9),
    new THREE.Face3(1,2,3),
    new THREE.Face3(3,4,5),
    new THREE.Face3(5,6,7),
    new THREE.Face3(7,8,9),
    new THREE.Face3(1,3,9),
    new THREE.Face3(3,7,9),
    new THREE.Face3(3,5,7),
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Face3(11,10,19),
    new THREE.Face3(12,11,13),
    new THREE.Face3(14,13,15),
    new THREE.Face3(16,15,17),
    new THREE.Face3(18,17,19),
    new THREE.Face3(13,11,19),
    new THREE.Face3(17,13,19),
    new THREE.Face3(15,13,17),
    ///////////////////////////////////SIDE///////////////////////////////////
    new THREE.Face3(1,0,10),
    new THREE.Face3(2,1,12),
    new THREE.Face3(3,2,12),
    new THREE.Face3(4,3,14),
    new THREE.Face3(5,4,14),
    new THREE.Face3(6,5,16),
    new THREE.Face3(7,6,16),
    new THREE.Face3(8,7,18),
    new THREE.Face3(9,8,18),
    new THREE.Face3(0,9,10),
    new THREE.Face3(10,11,1),
    new THREE.Face3(11,12,1),
    new THREE.Face3(12,13,3),
    new THREE.Face3(13,14,3),
    new THREE.Face3(14,15,5),
    new THREE.Face3(15,16,5),
    new THREE.Face3(16,17,7),
    new THREE.Face3(17,18,7),
    new THREE.Face3(18,19,9),
    new THREE.Face3(19,10,9),
)

const board = new THREE.Geometry()
board.vertices.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Vector3(1.5,0,-1), //0
    new THREE.Vector3(2.5,1.5,1),
    new THREE.Vector3(3,0.5,1),
    new THREE.Vector3(4,0.5,1),
    new THREE.Vector3(12,0.5,1),
    new THREE.Vector3(19.5,0.5,1),
    new THREE.Vector3(22,0.5,1),
    new THREE.Vector3(23,1,1),
    new THREE.Vector3(23,2,1),
    new THREE.Vector3(24,1.5,0),
    new THREE.Vector3(25,0,-2),
    new THREE.Vector3(25.5,0,-2),
    new THREE.Vector3(22.5,6.5,1),
    new THREE.Vector3(22.5,8,1),
    new THREE.Vector3(23.5,10,1),
    new THREE.Vector3(23,11,1),
    new THREE.Vector3(21.5,11.5,1),
    new THREE.Vector3(17,11,1),
    new THREE.Vector3(4,10.5,1),
    new THREE.Vector3(3,10,1),
    new THREE.Vector3(2.5,8.5,1),
    new THREE.Vector3(3,6.5,1),
    new THREE.Vector3(3,5,1),
    new THREE.Vector3(0,0,-2), //23
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Vector3(2,0,-2), //24
    new THREE.Vector3(2.5,1.5,0),
    new THREE.Vector3(3,0.5,0),
    new THREE.Vector3(4,0.5,0),
    new THREE.Vector3(12,0.5,0),
    new THREE.Vector3(19.5,0.5,0),
    new THREE.Vector3(22,0.5,0),
    new THREE.Vector3(23,1,0),
    new THREE.Vector3(23,2,0),
    new THREE.Vector3(24,1.5,-2),
    new THREE.Vector3(25,0,-3),
    new THREE.Vector3(25.5,0,-3),
    new THREE.Vector3(22.5,6.5,0),
    new THREE.Vector3(22.5,8,0),
    new THREE.Vector3(23.5,10,0),
    new THREE.Vector3(23,11,0),
    new THREE.Vector3(21.5,11.5,0),
    new THREE.Vector3(17,11,0),
    new THREE.Vector3(4,10.5,0),
    new THREE.Vector3(3,10,0),
    new THREE.Vector3(2.5,8.5,0),
    new THREE.Vector3(3,6.5,0),
    new THREE.Vector3(3,5,0),
    new THREE.Vector3(0.5,0,-3), //47
  )

board.faces.push(
    ///////////////////////////////////FRONT///////////////////////////////////
    new THREE.Face3(0,1,22),
    new THREE.Face3(1,2,3),
    new THREE.Face3(1,3,22),
    new THREE.Face3(0,22,23),
    new THREE.Face3(3,4,22),
    new THREE.Face3(22,4,17),
    new THREE.Face3(21,22,17),
    new THREE.Face3(20,21,17),
    new THREE.Face3(18,19,20),
    new THREE.Face3(18,20,17),
    new THREE.Face3(4,5,17),
    new THREE.Face3(16,17,5),
    new THREE.Face3(5,12,16),
    new THREE.Face3(12,13,16),
    new THREE.Face3(13,14,16),
    new THREE.Face3(14,15,16),
    new THREE.Face3(5,6,7),
    new THREE.Face3(5,7,8),
    new THREE.Face3(5,8,12),
    new THREE.Face3(8,9,12),
    new THREE.Face3(9,11,12),
    new THREE.Face3(9,10,11),
    ///////////////////////////////////BACK///////////////////////////////////
    new THREE.Face3(25,24,46),
    new THREE.Face3(26,25,27),
    new THREE.Face3(27,25,46),
    new THREE.Face3(46,24,47),
    new THREE.Face3(28,27,46),
    new THREE.Face3(28,46,41),
    new THREE.Face3(46,45,41),
    new THREE.Face3(45,44,41),
    new THREE.Face3(43,42,44),
    new THREE.Face3(44,42,41),
    new THREE.Face3(29,28,41),
    new THREE.Face3(41,40,29),
    new THREE.Face3(36,29,40),
    new THREE.Face3(37,36,40),
    new THREE.Face3(38,37,40),
    new THREE.Face3(39,38,40),
    new THREE.Face3(30,29,31),
    new THREE.Face3(31,29,32),
    new THREE.Face3(32,29,36),
    new THREE.Face3(33,32,36),
    new THREE.Face3(35,33,36),
    new THREE.Face3(34,33,35),
    ///////////////////////////////////SIDE///////////////////////////////////
    new THREE.Face3(1,0,24),
    new THREE.Face3(2,1,26),
    new THREE.Face3(3,2,26),
    new THREE.Face3(4,3,28),
    new THREE.Face3(5,4,28),
    new THREE.Face3(6,5,30),
    new THREE.Face3(7,6,30),
    new THREE.Face3(8,7,32),
    new THREE.Face3(9,8,32),
    new THREE.Face3(10,9,34),
    new THREE.Face3(11,10,34),
    new THREE.Face3(12,11,36),
    new THREE.Face3(13,12,36),
    new THREE.Face3(14,13,38),
    new THREE.Face3(15,14,38),
    new THREE.Face3(16,15,40),
    new THREE.Face3(17,16,40),
    new THREE.Face3(18,17,42),
    new THREE.Face3(19,18,42),
    new THREE.Face3(20,19,44),
    new THREE.Face3(21,20,44),
    new THREE.Face3(22,21,46),
    new THREE.Face3(23,22,46),
    new THREE.Face3(0,23,24),
    new THREE.Face3(24,25,1),
    new THREE.Face3(25,26,1),
    new THREE.Face3(26,27,3),
    new THREE.Face3(27,28,3),
    new THREE.Face3(28,29,5),
    new THREE.Face3(29,30,5),
    new THREE.Face3(30,31,7),
    new THREE.Face3(31,32,7),
    new THREE.Face3(32,33,9),
    new THREE.Face3(33,34,9),
    new THREE.Face3(34,35,11),
    new THREE.Face3(35,36,11),
    new THREE.Face3(36,37,13),
    new THREE.Face3(37,38,13),
    new THREE.Face3(38,39,15),
    new THREE.Face3(39,40,15),
    new THREE.Face3(40,41,17),
    new THREE.Face3(41,42,17),
    new THREE.Face3(42,43,19),
    new THREE.Face3(43,44,19),
    new THREE.Face3(44,45,21),
    new THREE.Face3(45,46,21),
    new THREE.Face3(46,47,23),
    new THREE.Face3(47,24,23),
)

three1.computeFaceNormals();
three1.computeVertexNormals();
three2.computeFaceNormals();
three2.computeVertexNormals();
star.computeFaceNormals();
star.computeVertexNormals();
board.computeFaceNormals();
board.computeVertexNormals();

function createProp(scene, geometry, color, posX=0, posY=0, posZ=0, rotX=0, rotY=0, rotZ=0) {
    const propObject = new THREE.Object3D()

    const material = new THREE.MeshStandardMaterial({color, roughness : 2});

    const mesh = new THREE.Mesh(geometry, material);

    propObject.add(mesh)

    propObject.castShadow = true
    propObject.receiveShadow = true
    propObject.position.x = posX;
    propObject.position.y = posY;
    propObject.position.z = posZ;
    propObject.rotation.x = rotX;
    propObject.rotation.y = rotY;
    propObject.rotation.z = rotZ;

    propObject.scale.set(0.2,0.2,0.2)
    scene.add(propObject);
}

const textureLoader = new THREE.TextureLoader()

function createBoardProp(scene, stampPath, posX=0, posY=0, posZ=0, rotX, rotY, rotZ) {
    const boardObject = new THREE.Object3D()

    const material = new THREE.MeshStandardMaterial({color: 0x8D6B36, roughness : 2});

    const boardMesh = new THREE.Mesh(board, material);

    boardMesh.castShadow = true
    boardMesh.receiveShadow = true
    boardObject.add(boardMesh);

    boardObject.position.x = posX;
    boardObject.position.y = posY;
    boardObject.position.z = posZ;
    boardObject.rotation.y = rotY;
    boardObject.rotation.x = rotX;
    boardObject.rotation.z = rotZ;

    const textureStamp = textureLoader.load(stampPath)
    const stampGeometry = new THREE.CircleBufferGeometry(4.5, 32)
    const stampMaterial = new THREE.MeshStandardMaterial({map: textureStamp, roughness : 2})
    const stamp = new THREE.Mesh(stampGeometry, stampMaterial)
    stamp.castShadow = true
    stamp.receiveShadow = true
    stamp.position.z=1.1
    stamp.position.x=13
    stamp.position.y=6
    boardObject.add(stamp)

    boardObject.scale.set(0.2,0.2,0.2)

    scene.add(boardObject)

    return boardObject
  }

export {three1, three2, star, board, createProp, createBoardProp}