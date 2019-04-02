
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x9BC7ff);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0x000000, 1.0);
backLight.position.set(100, 0, -100).normalize();
 
var ambientLight =new THREE.AmbientLight(0xffffff, 0.5);

scene.add(ambientLight);
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);


/*

material = new THREE.MeshStandardMaterial( {

    color: 0xffffff,

    roughness: settings.roughness,
    metalness: settings.metalness,

    roughnessMap: roughnessMap,
    metalnessMap: metalnessMap,

    envMap: envMap, // important -- especially for metals!
    envMapIntensity: envMapIntensity

} );


*/



var mtlLoader = new THREE.MTLLoader();


mtlLoader.load('plane1.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('StreetScene2.obj', function (object) {

        object.scale.x = 7;
        object.scale.y= 6;
        object.scale.z= 3.5;
        object.position.y = -70;
        object.position.x =100;
        object.position.z = -10;
        object.rotation.y=55;
        scene.add(object);

    });

});




mtlLoader.load('plane1.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('StreetScene.obj', function (object) {

        object.scale.x = 7;
        object.scale.y= 6;
        object.scale.z= 3.5;
        object.position.y = -70;
        object.position.x =-50;
        object.position.z = 10;
        object.rotation.y=55;
        scene.add(object);

    });

});

var reflection1=THREE.ImageUtils.loadTextureCube( [ 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png' ] );
var skybox =new THREE.BoxGeometry( 2000, 2000, 2000 );

var material10 = new THREE.MeshBasicMaterial( {
    color: 0x87CEEB,
    envMap: reflection1,
    
                                            } );



var skybox1 = new THREE.Mesh( skybox, material10 );
scene.add(skybox1);






var reflection = THREE.ImageUtils.loadTextureCube( [ 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png' ] );

var geometry1 = new THREE.BoxGeometry( 10, 1000, 1000 );
var material = new THREE.MeshBasicMaterial( {
    color: 0xC0C0C0,
    envMap: reflection,
    //reflectivity:0.9
    refractionRatio: 0.95 
                                            } );
var cube = new THREE.Mesh( geometry1, material );
cube.position.x=-550;
cube.position.y=100;
scene.add( cube );

var cube2 = new THREE.Mesh( geometry1, material );
cube2.position.x=500;
cube2.position.y=100;
scene.add( cube2 );

var geometry2 = new THREE.BoxGeometry( 1200, 1000, 10 );

var cube3 = new THREE.Mesh( geometry2, material );
cube3.position.x=-100;
cube3.position.y=100;
cube3.position.z=-420;
//cube3.rotation.y=-217;
scene.add( cube3 );


var cube4 = new THREE.Mesh( geometry2, material );
cube4.position.x=-100;
cube4.position.y=100;
cube4.position.z=420;
//cube3.rotation.y=-217;
scene.add( cube4 );


var geometry = new THREE.BoxGeometry;//( 5000, 100, 100 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );

var plane = new THREE.Mesh( geometry, material );
plane.scale.x=1000;
plane.scale.y=10;
plane.scale.z=1000;
plane.position.y=-80;
scene.add( plane );

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();