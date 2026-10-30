import { ImageResponse } from "next/og"

export const alt = "iAugustoDev — Websites & digital solutions for Australian small businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 60%, #DCEBFF 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2563EB, #38BDF8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            iA
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#0F172A" }}>
            <span>iAugusto</span>
            <span style={{ color: "#2563EB", marginLeft: -4 }}>Dev</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#0F172A",
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Websites &amp; Digital Solutions That Help Your Business Grow
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#475569", maxWidth: 900 }}>
            Professional websites, local SEO and smart automation for Australian small businesses.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#2563EB", fontWeight: 600 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: "#2563EB" }} />
          Based in Hobart, Tasmania · Serving businesses across Australia
        </div>
      </div>
    ),
    size
  )
}
