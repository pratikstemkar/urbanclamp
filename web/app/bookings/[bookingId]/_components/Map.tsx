"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";

const DEFAULT_POSITION: LatLngExpression = [18.555909, 73.87779];

const LocationMarker = () => {
    const [position, setPosition] = useState<LatLngExpression | null>(null);
    const map = useMap();

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords;
                    setPosition([latitude, longitude]);
                    map.setView([latitude, longitude], 11);
                },
                () => {
                    setPosition(DEFAULT_POSITION);
                    map.setView(DEFAULT_POSITION, 11);
                }
            );
        }
    }, [map]);

    return position ? (
        <Marker position={position}>
            <Popup>Your Location</Popup>
        </Marker>
    ) : null;
};

const Map = () => {
    return (
        <MapContainer
            preferCanvas={true}
            center={[18.555909, 73.87779]}
            zoom={11}
            scrollWheelZoom={true}
            className="w-96 h-96 lg:w-full lg:h-full dark:invert sticky top-0 -z-60"
        >
            <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default Map;
