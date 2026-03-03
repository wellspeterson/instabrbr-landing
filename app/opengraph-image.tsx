import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "instabrbr — Turn DMs into confirmed, paid bookings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geistFont = fetch(
    new URL("./geist-latin.woff2", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0F14",
          fontFamily: "Geist",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#34C1D9",
          }}
        />

        {/* Teal scissor icon — using path elements for Satori compatibility */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
        >
          {/* Two crossing blades */}
          <path
            d="M30 5 L70 95"
            stroke="#34C1D9"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 5 L30 95"
            stroke="#34C1D9"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left finger hole */}
          <path
            d="M25 69 a13 13 0 1 0 0 26 a13 13 0 1 0 0-26"
            stroke="#34C1D9"
            strokeWidth="7"
            fill="none"
          />
          {/* Right finger hole */}
          <path
            d="M75 69 a13 13 0 1 0 0 26 a13 13 0 1 0 0-26"
            stroke="#34C1D9"
            strokeWidth="7"
            fill="none"
          />
        </svg>

        {/* Brand */}
        <div
          style={{
            marginTop: 24,
            fontSize: 52,
            fontWeight: 700,
            color: "#34C1D9",
            display: "flex",
          }}
        >
          instabrbr
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            fontWeight: 400,
            color: "#ffffffcc",
            textAlign: "center",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Turn DMs into confirmed, paid bookings
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: await geistFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
