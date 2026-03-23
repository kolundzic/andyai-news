# AndyAI News

**AndyAI News** is a public AI and technology news platform built for calmer reading, cleaner public surfaces, and structured movement across stories, daily editions, archive routes, newsletter delivery, and audio-linked publishing.

It is part of the wider **AndyAI ecosystem** and represents the public media layer of a larger operational vision: turning AI news, signals, summaries, and delivery flows into a disciplined, brand-ready publishing system.

---

## 🌐 Live

- **Primary URL:** `https://andyai.news`
- **Secondary URL:** `https://www.andyai.news`
- **Production Host:** `https://andyai-news.vercel.app`

---

## 🧭 System map

```mermaid
flowchart TD
    A["🌍 Visitor / Reader"] --> B["🏠 Home"]
    B --> C["📰 Story"]
    B --> D["📅 Edition"]
    B --> E["🗂 Archive"]

    D --> C
    E --> D
    E --> C

    F["✉️ Newsletter Delivery"] -. future / linked flow .-> B
    G["🎙 Voice Delivery"] -. future / linked flow .-> B
    H["🔊 Audio Layer"] -. future / linked flow .-> C

    I["⚙️ Admin / Operations"] --> J["Publish"]
    I --> K["Newsletter"]
    I --> L["Voice"]
    I --> M["Audio Queue"]
    I --> N["Transcript / Approval"]

    J -. powers .-> B
    J -. powers .-> C
    J -. powers .-> D
    J -. powers .-> E

    classDef public fill:#0f172a,stroke:#60a5fa,color:#ffffff,stroke-width:2px;
    classDef future fill:#1f2937,stroke:#34d399,color:#ffffff,stroke-width:2px;
    classDef admin fill:#3f1d2e,stroke:#f472b6,color:#ffffff,stroke-width:2px;

    class A,B,C,D,E public;
    class F,G,H future;
    class I,J,K,L,M,N admin;
