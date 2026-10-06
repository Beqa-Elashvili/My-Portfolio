import type { ArchiveProject, FeaturedProject } from "./types";
import veliImage from "@/assets/projects/veli.png";
import messengerImage from "@/assets/projects/messenger.png";
import bogImage from "@/assets/projects/bog.png";
import inventoryImage from "@/assets/projects/inventory.png";

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "ai-knowledge-base",
    name: "AI Knowledge Base",
    summary:
      "Upload a PDF and ask questions about it. Answers come only from the document and cite the pages they are based on.",
    problem:
      "General chatbots answer from training data and cannot show where an answer came from. This one answers from your document, or says the document does not contain the answer.",
    role: "Solo: architecture, backend, frontend, deployment",
    year: "2026",
    pipeline: [
      "PDF upload",
      "Page-aware chunking",
      "Gemini embeddings",
      "pgvector · HNSW",
      "Grounded answer",
      "SSE + page citations",
    ],
    highlights: [
      "FastAPI ingestion: PyMuPDF text extraction, overlapping chunks that keep page boundaries, batched embeddings with retries on 429/5xx.",
      "Retrieval scoped to one document through a Postgres function on an HNSW index. Follow-up questions are rewritten into standalone search queries.",
      "Sources are checked on the server: a page is cited only if the answer references it and a retrieved chunk covers it, so a hallucinated page number never appears as a source.",
      "Map-reduce summaries for long documents, suggested questions in JSON mode, and Row Level Security on every table.",
      "pytest, Vitest and a Playwright end-to-end flow, run in GitHub Actions CI.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Supabase",
      "pgvector",
      "Gemini",
      "Next.js 16",
      "React 19",
      "TypeScript",
    ],
    links: [
      { label: "Live demo", href: "https://ai-knowledge-base-gamma-wine.vercel.app" },
      { label: "Code", href: "https://github.com/Beqa-Elashvili/Ai-Knowledge-Base" },
    ],
  },
  {
    slug: "proxycall",
    name: "Proxycall: Georgian Voice Agent",
    summary:
      "AI phone receptionist that answers business calls in Georgian, books appointments and transfers to a human when needed.",
    problem:
      "Small businesses miss calls when staff are busy or after hours, and mainstream voice-AI products do not support Georgian well.",
    role: "Engineer at Perk",
    year: "2026",
    visibility: "Private · built at Perk",
    pipeline: [
      "Telnyx call",
      "WebSocket audio",
      "Groq Whisper STT",
      "Claude + tools",
      "ElevenLabs TTS",
      "Caller",
    ],
    highlights: [
      "Real-time Pipecat pipeline over a Telnyx media WebSocket, with Silero VAD for turn detection.",
      "Claude tool calls for availability checks, booking, transfer to a human and ending the call. Every tool is scoped to the active business.",
      "Multi-tenant: the dialed number resolves the business, its persona, hours and data before the pipeline starts.",
      "Georgian-specific work: Whisper large-v3 through Groq (OpenAI's API rejects Georgian), vocabulary-biasing prompts, sentence-level streaming into TTS.",
      "Caller profiles, appointments and call logs in Supabase. Prompt caching on the system prompt.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Pipecat",
      "Claude",
      "Groq Whisper",
      "ElevenLabs",
      "Telnyx",
      "Supabase",
      "WebSockets",
    ],
    links: [],
  },
  {
    slug: "ai-cruter",
    name: "AI-Cruter",
    summary:
      "Voice interview platform: recruiters generate role-specific questions, an AI voice agent interviews the candidate, and the transcript becomes structured feedback.",
    problem:
      "First-round screening interviews take recruiter time and are hard to compare across candidates.",
    role: "Solo build, later extended at Perk",
    year: "2025–2026",
    pipeline: [
      "Job description",
      "LLM question set",
      "Voice interview",
      "Transcript",
      "LLM feedback",
      "Recruiter dashboard",
    ],
    highlights: [
      "Next.js App Router app with Supabase for Google sign-in and interview data. Each interview gets a shareable link with a timer and completion flow.",
      "Original version: Vapi web SDK for the live voice call. Question generation and feedback through OpenRouter using the OpenAI SDK.",
      "At Perk: moved the prompts and AI routes into a FastAPI service using Gemini Live for Georgian voice turns, audio transcription and feedback normalization.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vapi",
      "OpenRouter",
      "Python",
      "FastAPI",
      "Gemini Live",
    ],
    links: [
      { label: "Live demo", href: "https://aicruter-black.vercel.app" },
      { label: "Code", href: "https://github.com/Beqa-Elashvili/aicruter" },
    ],
  },
  {
    slug: "northstar-hr-assistant",
    name: "Northstar HR Assistant",
    summary:
      "Georgian-language HR assistant that answers policy questions with citations and files leave requests through an MCP server.",
    problem:
      "Employees need policy answers and leave actions in one place, without trusting an LLM with permissions, balances or rule checks.",
    role: "Solo technical assignment",
    year: "2026",
    visibility: "Private · technical assignment",
    pipeline: [
      "Georgian message",
      "Gemini intent routing",
      "Policy RAG / MCP tools",
      "Deterministic rules",
      "Postgres",
      "Confirmed action",
    ],
    highlights: [
      "The MCP server is the only path for leave actions. It resolves the caller's identity and role, so an employee cannot approve requests or read other employees' data.",
      "The LLM handles language only: intent, leave type, dates. Balances, day counts and policy rules are deterministic Python services.",
      "Hybrid retrieval over 7 Georgian policy documents (DOCX/PDF): pgvector, Georgian full-text and exact article matches merged with reciprocal-rank fusion, with article-level citations and outdated sources flagged.",
      "Requests are created only after explicit confirmation and are idempotent. Retrieval quality has its own evaluation script.",
    ],
    stack: ["Python", "MCP", "Gemini", "SQLAlchemy", "Supabase", "pgvector", "pytest"],
    links: [],
  },
  {
    slug: "dataops-best-sellers",
    name: "DataOps: Best Sellers Extraction",
    summary:
      "Extraction template that returns the complete, validated top-100 Best Sellers list for any Amazon category through the Nimble Web API.",
    problem:
      "Scraped data fails quietly: lazy-loaded items go missing and geo-routing changes the currency. Bad data gets delivered unless something checks it.",
    role: "Solo DataOps exercise",
    year: "2026",
    pipeline: [
      "Category id",
      "Render + parse",
      "Paginate & merge",
      "Clean & dedupe",
      "Quality rules",
      "PASS / WARN / FAIL",
    ],
    highlights: [
      "Extraction runs inside the API request through a declarative parser. Python handles pagination, merging, numeric conversion and ASIN dedupe.",
      "Infinite-scroll render flow, plus page retries when fewer items load than the page's own ranking list.",
      "Configurable quality thresholds (null rates, ASIN format, rating range, USD only) write stats and exit non-zero, so CI or a scheduler can block bad data.",
      "Each design decision is backed by recorded evidence: breakage logs, negative tests and a written report.",
    ],
    stack: ["Python", "Nimble Web API", "Data validation", "Web extraction"],
    links: [
      {
        label: "Code",
        href: "https://github.com/Beqa-Elashvili/dataOps_Nimble_Exercise",
      },
    ],
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    name: "E-commerce platform",
    summary:
      "Veli.store replica: product variants by size and color, cart, wishlist, orders and shipping addresses on a Prisma/PostgreSQL schema.",
    image: veliImage,
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redux Toolkit", "NextAuth"],
    live: "https://veli-clone.vercel.app",
    code: "https://github.com/Beqa-Elashvili/E-comerce_veli_clone",
  },
  {
    name: "Real-time messenger",
    summary:
      "One-to-one and group chat with live delivery and seen receipts through Pusher, with NextAuth sign-in.",
    image: messengerImage,
    stack: ["Next.js", "MongoDB", "Prisma", "Pusher", "Zustand"],
    live: "https://messenger-clone-eight-neon.vercel.app",
    code: "https://github.com/Beqa-Elashvili/messenger-clone",
  },
  {
    name: "Mobile banking app",
    summary:
      "BOG-style banking UI with accounts, transfers and transaction history, backed by an Express and Prisma API.",
    image: bogImage,
    stack: ["Next.js", "Redux Toolkit", "Express", "Prisma", "MongoDB"],
    live: "https://bog-app-zeta.vercel.app",
    code: "https://github.com/Beqa-Elashvili/BOG-clone",
  },
  {
    name: "Inventory management",
    summary:
      "Dashboard for products, sales, purchases and expenses, on an Express, Prisma and PostgreSQL API.",
    image: inventoryImage,
    stack: ["Next.js", "Express", "Prisma", "PostgreSQL", "Recharts"],
    live: "https://inventorymanagement-liard.vercel.app",
    code: "https://github.com/Beqa-Elashvili/inventory-management",
  },
];
