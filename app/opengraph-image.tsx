import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "instabrbr — Turn DMs into confirmed, paid bookings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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

        {/* Scissors emoji as icon — no SVG rendering issues */}
        <div style={{ fontSize: 96, display: "flex" }}>✂️</div>

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
    { ...size }
  );
}
