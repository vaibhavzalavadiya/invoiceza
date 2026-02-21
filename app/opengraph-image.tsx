import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Invoiceza - Free Invoice, Receipt, Quotation & Estimate Maker';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background decorative elements */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-80px',
                        right: '-80px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-120px',
                        left: '-100px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '800px',
                        height: '800px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        display: 'flex',
                    }}
                />

                {/* Document icon */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        marginBottom: '24px',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                    }}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                </div>

                {/* Brand name */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        color: 'white',
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        display: 'flex',
                    }}
                >
                    Invoiceza
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 28,
                        color: 'rgba(255, 255, 255, 0.85)',
                        marginTop: '16px',
                        fontWeight: 500,
                        display: 'flex',
                    }}
                >
                    Free Invoice, Receipt, Quotation & Estimate Maker
                </div>

                {/* Feature pills */}
                <div
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginTop: '40px',
                    }}
                >
                    {['No Signup', 'PDF Download', '100% Free'].map((text) => (
                        <div
                            key={text}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '50px',
                                background: 'rgba(255, 255, 255, 0.15)',
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 600,
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                display: 'flex',
                            }}
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {/* URL */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        fontSize: 20,
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        display: 'flex',
                    }}
                >
                    invoiceza.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
