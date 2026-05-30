import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Augusto Cáceres — Web Developer for Australian Tradies & Small Businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#71717a",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 20,
          }}
        >
          Web Developer · Australia
        </p>

        {/* Headline */}
        <h1
          style={{
            color: "#fafafa",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 24,
          }}
        >
          More Calls. More Jobs.{"\n"}More Revenue.
        </h1>

        {/* Sub */}
        <p style={{ color: "#a1a1aa", fontSize: 26, margin: 0, marginBottom: 56 }}>
          Websites for tradies & small businesses that bring in clients.
        </p>

        {/* Author chip */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              background: "#fafafa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#09090b", fontSize: 22, fontWeight: 700 }}>A</span>
          </div>
          <span style={{ color: "#fafafa", fontSize: 22, fontWeight: 600 }}>
            Augusto Cáceres
          </span>
          <span
            style={{
              marginLeft: 8,
              background: "#27272a",
              border: "1px solid #3f3f46",
              borderRadius: 6,
              padding: "4px 12px",
              color: "#a1a1aa",
              fontSize: 14,
              letterSpacing: 1,
            }}
          >
            Websites that bring you clients
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
