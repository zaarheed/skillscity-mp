import LocationsTable from "@/components/locations/locations-table";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function LocationsTablePage() {
    return (
        <div className="w-full">
            <Header name="Locations Table" />

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsTable />
                </div>
            </Content>

            <Footer
                buttons={[
                    { title: "Homepage", href: "/" }
                ]}
            />
        </div>
    );
}