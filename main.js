import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import 'leaflet'
import "leaflet-providers";
import omnivore from 'leaflet-omnivore';
import world_cities from "./public/world_cities.json"
import overlay from "./public/middle-earth-scaled.jpg"
import Graph from 'node-dijkstra';
import { getDistance } from 'geolib';

let SOURCE = world_cities;

var map = L.map('map').setView([52.4862,-1.8904], 10);
L.tileLayer.provider("Esri.WorldGrayCanvas").addTo(map);
map.setMinZoom(4)

let markersLayer = new L.layerGroup().addTo(map)

let imageBounds = [[59.99225953361199,-17.26564925188753], [29.746180147081933,35.21900591439632]]
L.imageOverlay(overlay, imageBounds).addTo(map);

let pointsList = [[52.47777, -1.89885],[52.463, -1.858],[52.45902,-1.87085]]
let distanceTravelledAlongLine = 8;

function getPolylinePointsListUpToDistance(pointsList, distanceKm){
    let newPoints = [];
    let cumuDist = 0;

    console.log(pointsList.length);
    
    for (let i = 0; i < pointsList.length; i++){

        let distFromPrev= 0;
        
        if (i > 0){
            distFromPrev = getDistance(pointsList[i-1], pointsList[i]) / 1000.0;
        }
        console.log(cumuDist + distFromPrev + ", "+distanceKm)
        if (cumuDist + distFromPrev < distanceKm){
            console.log("Push a regular point")
            newPoints.push(pointsList[i]);
            cumuDist += distFromPrev;
        } else {
            console.log("Pushing partial last leg")
            let lastLegPartialDist = distanceKm - (cumuDist + distFromPrev);
            let proportionOfLastLegComplete = lastLegPartialDist / distFromPrev;
            newPoints.push([pointsList[i][0] + ((pointsList[i][0] - pointsList[i-1][0]) * proportionOfLastLegComplete),
                            pointsList[i][1] + ((pointsList[i][1] - pointsList[i-1][1]) * proportionOfLastLegComplete)]);
            break;
        }
        console.log(cumuDist);
    }
 
    console.log(newPoints);

    return newPoints;
}

var polyline = new L.Polyline(getPolylinePointsListUpToDistance(pointsList,distanceTravelledAlongLine), {
    color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
polyline.addTo(map);

console.log(polyline)

//alert("Get user to draw their route (or load it from file) and put in the total number of metres run. Then zoom to where they currently are and show them cool rolling notifications like 'nearest settlement: X', 'Y km from Paris' etc");