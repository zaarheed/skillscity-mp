import Details from "@/components/restaurant/details";
import Header from "@/components/restaurant/header";
import restaurant from "@/temp/restaurant.json";

export default function Restaurant() {
    console.log(restaurant);
    return (
        <div className="w-full flex flex-col">
            <Header />

            <Details />
        </div>
    )
}