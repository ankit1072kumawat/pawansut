"use client";

export default function FloatingWhatsApp() {
    return (
        <>
            <a
                href="https://wa.me/917976300874?text=Hi%20Pawansut%20Builders,%20I%20am%20interested%20in%20your%20construction%20services%20in%20Jaipur."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-green-600 shadow-lg hover:scale-110 transition-transform duration-300"
            >
                {/* WhatsApp SVG Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-7 h-7 fill-white"
                >
                    <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.9 5 2.3 7l-1.5 5.6 5.8-1.5c1.9 1 4.1 1.6 6.4 1.6 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm6.9 17.2c-.3.8-1.7 1.6-2.4 1.7-.6.1-1.3.2-2.1 0-1.1-.2-2.5-.8-4.3-2.3-3-2.5-5-5.7-5.1-5.9-.1-.2-1.2-1.6-1.2-3 0-1.4.7-2.1 1-2.4.2-.2.5-.3.8-.3h.6c.2 0 .5 0 .7.5.3.8 1 2.6 1.1 2.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.3.4-.5.6-.2.2-.4.4-.2.8.2.4 1 1.7 2.1 2.8 1.4 1.3 2.6 1.7 3 1.9.4.2.6.1.8-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 2 .9 2.4 1.1.4.2.6.3.7.5.1.2.1 1.1-.2 1.9z" />
                </svg>
            </a>

            {/* Pulse Ring */}
            <div className="fixed bottom-20 right-6 z-40 w-14 h-14 rounded-full bg-green-600 opacity-30 animate-ping"></div>
        </>
    );
}