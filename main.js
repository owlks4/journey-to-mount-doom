import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import 'leaflet'
import "leaflet-providers";
import world_cities from "./public/world_cities.json"
import Graph from 'node-dijkstra';
import { getDistance } from 'geolib';

let SOURCE = world_cities;

var map = L.map('map').setView([52.4862,-1.8904], 10);
L.tileLayer.provider("Esri.WorldGrayCanvas").addTo(map);
map.setMinZoom(6)

let markersLayer = new L.layerGroup().addTo(map)

alert("Get user to draw their route (or load it from file) and put in the total number of metres run. Then zoom to where they currently are and show them cool rolling notifications like 'nearest settlement: X', 'Y km from Paris' etc");