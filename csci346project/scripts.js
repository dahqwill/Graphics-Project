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

var backLight = new THREE.DirectionalLight(0xC0C0C0, 1.0);
backLight.position.set(100, 0, -100).normalize();
 
var ambientLight =new THREE.AmbientLight(0xC0C0C0, 0.5);

scene.add(ambientLight);
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);



var mtlLoader = new THREE.MTLLoader();


mtlLoader.load('City.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('City.obj', function (object) {

        object.scale.x = 0.03;
        object.scale.y= 0.03;
        object.scale.z= 0.03;
        object.position.y = -80;
        object.position.x = -800;
        object.position.z = -100;
        object.rotation.y=55;
        scene.add(object);

    });

});




//mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
//mtlLoader.setPath('/examples/3d-obj-loader/assets/');

mtlLoader.load('plane1.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('futureRobot.obj', function (object) {

        object.scale.x = 0.9;
        object.scale.y= 0.9;
        object.scale.z= 1.0;
        object.position.y = -80;
        object.position.x = -300;
        object.position.z = -100;
        object.rotation.y=29;
        scene.add(object);

    });

});

var mtlLoader = new THREE.MTLLoader();

//mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
//mtlLoader.setPath('/examples/3d-obj-loader/assets/');
mtlLoader.load('futureRobot.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('tower1.obj', function (object) {

        object.scale.x = 0.9;
        object.scale.y= 0.9;
        object.scale.z= 1.0;
        object.position.y = -80;
        object.position.x = -205;
        object.position.z = -100;
        object.rotation.y=21;
        scene.add(object);

    });

});


//plane on ground
mtlLoader.load('s.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('s.obj', function (object) {

        object.scale.x =10;
        object.scale.y= 10;
        object.scale.z= 10;
        object.position.y = 300;
        object.position.x= -70;
        object.position.z= 300;
        object.rotation.y=270;
        scene.add(object);

    });

});

//jet woth  round orbit
mtlLoader.load('plane1.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('planefree.obj', function (object) {

        object.scale.x =.5;
        object.scale.y= .5;
        object.scale.z= .5;
        object.position.y = 210;
        object.position.x= 300;
        object.position.z= 200;
        object.rotation.y=270;
        scene.add(object);

    });

});

//2 robots with serface ground 
mtlLoader.load('R.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('R.obj', function (object) {

        object.scale.x = 5;
        object.scale.y= 5;
        object.scale.z= 5;
        object.position.y = 24;
        object.position.x= 200;
        object.position.z= -400;
        object.rotation.y=270;
        scene.add(object);

    });

});


/*

//motocycle
mtlLoader.load('City2.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('motorcycle.obj', function (object) {

        object.scale.x =.2;
        object.scale.y= .2;
        object.scale.z= .2;
        object.position.y = -70;
        object.position.x= 20;
        object.position.z= -200;
        object.rotation.y=270;
        scene.add(object);

    });

});

*/

//Transformer robot
//try to remove background
mtlLoader.load('futureRobot.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('futureRobot.obj', function (object) {

        object.scale.x = 50;
        object.scale.y= 50;
        object.scale.z= 50;
        object.position.y = -70;
        object.position.x= -275;
        object.position.z= 207;
        object.rotation.y=270;
        scene.add(object);

    });

});


//Transformer robot
//try to remove background
mtlLoader.load('futureRobot.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('futureRobot.obj', function (object) {

        object.scale.x = 50;
        object.scale.y= 50;
        object.scale.z= 50;
        object.position.y = -70;
        object.position.x= 100;
        object.position.z= -100;
        object.rotation.y=270;
        scene.add(object);

    });

});

//flying car
mtlLoader.load('FlyingCar.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('FlyingCar.obj', function (object) {

        object.scale.x = .3;
        object.scale.y= .3;
        object.scale.z= .3;
        object.position.y = 70;
        object.position.x= 50;
        object.position.z= 235;
        object.rotation.y=270;
        scene.add(object);

    });

});


//flying car
mtlLoader.load('FlyingCar.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
  //  objLoader.setPath('/examples/3d-obj-loader/assets/');
      objLoader.load('FlyingCar.obj', function (object) {

        object.scale.x = .3;
        object.scale.y= .3;
        object.scale.z= .3;
        object.position.y = 80;
        object.position.x = -340;
        object.position.z = -170;
        object.rotation.y=270;
        scene.add(object);

    });

});


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