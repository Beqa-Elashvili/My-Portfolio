import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "src/assets/portrait.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#e8e5df",
          color: "#191816",
          padding: 72,
          gap: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: "#5f5b54" }}>
            {site.title.toUpperCase()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 48,
              fontSize: 112,
              lineHeight: 0.95,
              letterSpacing: -4,
              fontWeight: 600,
            }}
          >
            <span>Beqa</span>
            <span>Elashvili</span>
          </div>
          <div style={{ display: "flex", marginTop: "auto", fontSize: 32, color: "#3b3935" }}>
            LLM, RAG and voice AI systems · Next.js · Python
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img elements */}
        <img
          src={portraitSrc}
          alt=""
          width={380}
          height={486}
          style={{ objectFit: "cover", objectPosition: "50% 30%", borderRadius: 4 }}
        />
      </div>
    ),
    size,
  );
}
