import FooterButton from "./footer-button";

export default function Footer({ buttons = [] }) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8 flex flex-row space-x-2">
            {buttons.map((button, index) => (
                <FooterButton href={button.href} title={button.title} key={index} />
            ))}
        </div>
    )
}