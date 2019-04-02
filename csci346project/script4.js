/*var water;
var params = {
			color: '#ffffff',
			scale: 40,
			flowX: 1,
			flowY: 1
		};

var waterGeometry = new THREE.PlaneBufferGeometry( 200, 200 );

			water = new THREE.Water( waterGeometry, renderer, camera, scene, {
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




var reflection1=THREE.ImageUtils.loadTextureCube( [ 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png', 'sky1.png' ] );
var skybox =new THREE.BoxGeometry( 2000, 2000, 2000 );

var material10 = new THREE.MeshBasicMaterial( {
    color: 0x87CEEB,
    envMap: reflection1,
    
                                            } );



var skybox1 = new THREE.Mesh( skybox, material10 );
scene.add(skybox1);
