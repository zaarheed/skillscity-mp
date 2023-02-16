import Input from "@/components/forms/input";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Search() {
    return (
        <div className="w-full">
            <Header name="Search" />

            <Content>
                <div className="w-full md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
                    <Input />
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-md"
                        type="button"
                    >
                        S
                    </button>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    <div className="w-full h-40 bg-red-100">

                    </div>
                    <div className="w-full h-40 bg-red-100">

                    </div>
                    <div className="w-full h-40 bg-red-100">

                    </div>
                    <div className="w-full h-40 bg-red-100">

                    </div>
                </div>
            </Content>

            <Footer title="Home" href="/" />
        </div>
    )
}