import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    // Load the logos
    const logoBlueData = await fetch(new URL('/logo-blue.png', 'https://struktx.vercel.app')).then(
      (res) => res.arrayBuffer(),
    );
    
    const logoWhiteData = await fetch(new URL('/nobg-both-white.png', 'https://struktx.vercel.app')).then(
      (res) => res.arrayBuffer(),
    );

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
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #60a5fa 75%, #93c5fd 100%)',
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
            }}
          />

          {/* Floating particles */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '15%',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '20%',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '30%',
              left: '25%',
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
          />

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '60px 40px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
              }}
            >
              <img
                src={logoWhiteData as any}
                alt="StruktX"
                width="120"
                height="120"
                style={{
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              StruktX
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                lineHeight: 1.4,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              A lean core with swappable pieces
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '20px',
                fontStyle: 'italic',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              A lean core with swappable pieces
            </div>
          </div>

          {/* Bottom accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
            }}
          />
        </div>
      ),
      {
        ...size,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`${e.message}`, {
      status: 500,
    });
  }
}
