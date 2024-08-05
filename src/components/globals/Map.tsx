"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";

const Mapbox = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoieXV2cmFqc2luZ2gwNTA2IiwiYSI6ImNsNDV2dGl2bTAxc2QzY21vZTgyeGFza3UifQ.qDJ6yYn_BHt804s60DfjJg";

    if (mapRef.current) {
      mapRef.current.remove();
    }

    const style = theme.theme === "light" 
      ? "mapbox://styles/mapbox/light-v11" 
      : "mapbox://styles/mapbox/dark-v11";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      projection: "equirectangular",
      style: style,
      center: [0, 0],
      zoom: 0,
    });

  }, [theme]);

  return <div ref={mapContainerRef} id="map" className="h-full relative"></div>;
};

export default Mapbox;
