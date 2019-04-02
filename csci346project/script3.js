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

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
 
var ambientLight =new THREE.AmbientLight(0xff0000, 0.5);

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


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 20, 10, 10 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add( spotLight );




//var reflection = THREE.ImageUtils.loadTextureCube( [ 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png', 'cubetexture.png' ] );

var reflection = THREE.ImageUtils.loadTextureCube( [ 'sky1.jpg', 'sky1.jpg', 'sky1.jpg', 'sky1.jpg', 'sky1.jpg', 'sky1.jpg' ] );


var geometry1 = new THREE.BoxGeometry( 100, 100, 100 );
var material = new THREE.MeshBasicMaterial( {
    color: 0x00FFFF,
    envMap: reflection,
    //reflectivity:0.9
    //refractionRatio: 0.95 
                                            } );
var cube = new THREE.Mesh( geometry1, material );
scene.add( cube );


var geometry = new THREE.BoxGeometry;//( 5000, 100, 100 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xC0C0C0, side: THREE.DoubleSide} );

var plane = new THREE.Mesh( geometry, material2 );
plane.scale.x=1000;
plane.scale.y=10;
plane.scale.z=1000;
plane.position.y=-80;
scene.add( plane );
/*
var water;
var params = {
			color: '#ffffff',
			scale: 40,
			flowX: 1,
			flowY: 1
		};

var waterGeometry = new THREE.PlaneBufferGeometry( 200, 200 );

			water = new THREE.Water( waterGeometry, {
				color: params.color,
				scale: params.scale,
				flowDirection: new THREE.Vector2( params.flowX, params.flowY ),
				textureWidth: 1024,
				textureHeight: 1024
			} );

			water.position.y =25 ;
			water.rotation.x = Math.PI * - 0.5;
			scene.add( water );

*/

/*
var mtlLoader = new THREE.MTLLoader();


mtlLoader.load('material.mtl', function (materials) {

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


*/

/*
var reflection1=THREE.ImageUtils.loadTextureCube( [ 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png' ] );
var skybox =new THREE.BoxGeometry( 2000, 2000, 2000 );

var material10 = new THREE.MeshBasicMaterial( {
    color: 0x87CEEB,
    envMap: reflection1,
    
                                            } );



var skybox1 = new THREE.Mesh( skybox, material10 );
scene.add(skybox1);

*/
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();