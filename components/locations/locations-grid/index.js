import LocationItem from "./location-item";
import { useEffect, useState } from "react";
import LikesProvider from "@/context/likes";

export default function LocationsGrid() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        const response = await fetch(`/api/locations`);
        const data = await response.json();
        console.log(data);
        setLocations(data);
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {locations.map((location, index) => (
                <LikesProvider>
                    <LocationItem key={index} location={location} />
                </LikesProvider>
            ))}
        </div>
    )
}