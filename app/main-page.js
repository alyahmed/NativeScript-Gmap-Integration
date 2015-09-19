var vmModule = require("./main-view-model");
var http = require("./tns_modules/http");
function pageLoaded(args) {
    var page = args.object;
	getMarkers();
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;

var camera;
var mapView;
var marker;

var didos = [];

function createMapView(args) {
	console.log('Providing GoogleMap API key...');

	// NOTE: Just do not use my API key in production!
	GMSServices.provideAPIKey("AIzaSyC0UH2UEjaDlYRuIzkYUykbucSyqT3PEQg");

	console.log("Creating map view...");
	camera = GMSCameraPosition.cameraWithLatitudeLongitudeZoom(-33.86, 151.20, 6);
	mapView = GMSMapView.mapWithFrameCamera(CGRectZero, camera);


	console.log("Setting a marker...");

	//for(var i = 0; i < didos.size; i++){
	//	marker = GMSMarker.alloc().init();
		// Note that inline functions such as CLLocationCoordinate2DMake are not exported.
		console.log(didos[0]);
		console.log(didos[0]);
		console.log(didos[0]);
		console.log(didos[0]);
		console.log(didos[0]);
		console.log(didos[0]);
		//marker.position = { latitude: didos[0].location.lat, longitude: didos[0].location.lon };
		//marker.title = didos[0].creator;
		//marker.snippet = didos[0].creator;
		marker.map = mapView;
	//}


	console.log("Displaying map...");
	args.view = mapView;
}

function getMarkers(){
	console.log("FETCHING MARKERS!!!!!");
	console.log("FETCHING MARKERS!!!!!");
	console.log("FETCHING MARKERS!!!!!");
	console.log("FETCHING MARKERS!!!!!");
	console.log("FETCHING MARKERS!!!!!");
	http.request({
		url: "http://107.21.110.128:8080/app_x/pub/didos",
		method: "GET",
		headers: { "Content-Type": "application/json" }
	}).then(function (response) {
		didos = response.content.toJSON();
		console.log("DIDOS = " + didos);
		console.log("DIDOS = " + didos);
		console.log("DIDOS = " + didos);
		console.log("DIDOS = " + didos);
		console.log("DIDOS = " + didos);
	}, function (e) {
		console.log("Error occurred " + e);
	});
}

exports.createMapView = createMapView;