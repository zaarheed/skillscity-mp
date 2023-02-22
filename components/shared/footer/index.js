import FooterButton from "./footer-button";

export default function Footer({ href, title }) {
    return (
        <div className="w-full max-w-6xl mx-auto mt-8 flex flex-row space-x-2">
            <FooterButton href={href} title={title} />
            <FooterButton href="/locations" title="Locations" />
        </div>
    )
}