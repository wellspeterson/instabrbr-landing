import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "instabrbr – Turn DMs into confirmed, paid bookings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          fontFamily: "sans-serif",
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

        {/* Scissor icon */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          fill="none"
        >
          <line
            x1="30"
            y1="5"
            x2="70"
            y2="95"
            stroke="#34C1D9"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <line
            x1="70"
            y1="5"
            x2="30"
            y2="95"
            stroke="#34C1D9"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle
            cx="25"
            cy="82"
            r="13"
            stroke="#34C1D9"
            strokeWidth="7"
            fill="none"
          />
          <circle
            cx="75"
            cy="82"
            r="13"
            stroke="#34C1D9"
            strokeWidth="7"
            fill="none"
          />
        </svg>

        {/* Tagline */}
        <div
          style={{
            marginTop: 40,
            fontSize: 42,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Turn DMs into confirmed, paid bookings
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            color: "#34C1D9",
            letterSpacing: 1,
          }}
        >
          instabrbr.com
        </div>
      </div>
    ),
    { ...size }
  );
}
