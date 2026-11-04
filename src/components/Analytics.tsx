import Script from "next/script";

// Umami de Dream Makers (sitio "Martin Gainza CV"). Valores públicos: el script los expone en el HTML.
const UMAMI_SRC = "https://analytics.dreammakers.tech/script.js";
const UMAMI_WEBSITE_ID = "8e90e747-c0b8-4348-82dc-a0442d81ae78";

export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <Script
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains="martin-gk.com,www.martin-gk.com"
      strategy="afterInteractive"
    />
  );
}
