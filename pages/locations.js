import LocationsGrid from "@/components/locations/locations-grid";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function LocationsPage() {
    return (
        <div className="w-full">
            <Header name="Locations" />

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsGrid />
                </div>
            </Content>

            <Footer title="Home Page" href="/" />
        </div>
    );
}