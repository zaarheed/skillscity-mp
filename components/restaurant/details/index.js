import ContactDetails from "./contact-details";

export default function Details({ details }) {
    return (
        <div className="w-full flex flex-col">
            <p>{details.address}</p>
            
            <ContactDetails
                details={details}
                contactDetails={details}
                telephone={details.telephone}
            />
        </div>
    )
}