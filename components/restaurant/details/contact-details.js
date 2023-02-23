import Telephone from "./telephone";

export default function ContactDetails({ details, contactDetails, telephone }) {
    console.log("details", details);
    console.log("contactDetails", contactDetails);
    console.log("tekephone", telephone);

    return (
        <div className="w-full">
            <Telephone
                value={telephone}
            />
        </div>
    )
}