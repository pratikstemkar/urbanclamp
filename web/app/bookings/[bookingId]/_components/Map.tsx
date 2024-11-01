"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
    return (
        <MapContainer
            preferCanvas={true}
            center={[18.55, 73.77]}
            zoom={11}
            scrollWheelZoom={true}
            className="w-96 h-96 lg:w-full lg:h-full dark:invert sticky top-0 -z-60"
        >
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[18.55, 73.77]}>
                <Popup>
                    This Marker icon is displayed correctly with{" "}
                    <i>leaflet-defaulticon-compatibility</i>.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
