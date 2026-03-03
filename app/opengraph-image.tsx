import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Turn DMs into confirmed, paid bookings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const geistFont = await fetch(
    new URL("https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOI.woff")
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
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistFont,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
