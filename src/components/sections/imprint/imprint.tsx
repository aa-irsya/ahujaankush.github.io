export default function ImprintSection() {
    return (
        <section className="relative overflow-hidden" id="imprint">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-32">
                <h2 className="text-4xl font-semibold mb-6">Imprint</h2>
                <p className="mb-4">
                    Provider / Owner: <strong>Ankush Ahuja</strong>
                </p>
                <p className="mb-4">
                    Email: <a href="mailto:ankush@ahuja.app" className="underline">ankush@ahuja.app</a>
                </p>
                <p className="mb-4">
                    Phone: <a href="tel:+436705594004" className="underline">+43 670 5594004</a>
                </p>
                <p className="mb-4">
                    Address: Blumengasse 16/1, 1180 Vienna, Austria
                </p>
            </div>
        </section>
    );
}
