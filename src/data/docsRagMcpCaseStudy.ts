export const DOCS_RAG_MCP_META = {
  title: "Docs RAG MCP",
  subtitle: "Document-grounded Q&A with agent tools and MCP integration",
  oneLiner:
    "Built a production-oriented Agentic RAG platform: NestJS backend with LangChain.js, Next.js upload and chat UI, Ollama embeddings, Qdrant vector storage, and an MCP server layer so Cursor and Claude can call business tools alongside private document search.",
  role: "Agentic AI Engineer",
  timeline: "2025 to 2026",
  stack: [
    "NestJS",
    "Next.js 15",
    "LangChain.js",
    "Ollama",
    "Qdrant",
    "TypeScript",
    "MCP SDK",
    "Docker",
  ],
  team: "Solo developer",
  githubUrl: "https://github.com/rifatcse09/agentic-rag-system-nestjs",
  tags: [
    "RAG",
    "MCP",
    "LangChain",
    "NestJS",
    "Next.js",
    "Ollama",
    "Qdrant",
    "AI Agents",
  ],
} as const;

export const DOCS_RAG_MCP_PROBLEM = [
  "Teams store answers in PDFs, invoices, and SOPs but keyword search misses intent and context",
  "Generic chatbots hallucinate because they are not grounded in private company documents",
  "AI assistants in Cursor and Claude Desktop need a standard way to reach internal APIs and databases, not just chat",
  "Vector search, document ingestion, and tool calling require separate stacks that are hard to wire together",
  "Local or self-hosted LLM options were needed to avoid sending sensitive docs to external APIs during development",
] as const;

export const DOCS_RAG_MCP_SOLUTION = [
  "NestJS ChatModule: PDF upload, text splitting, Ollama embeddings, and Qdrant persistence with in-memory fallback",
  "RAG ask endpoint returns answers with source file attribution and context chunk count to reduce hallucinations",
  "Next.js 15 frontend: drag-and-drop upload page and conversational chat UI grounded in indexed content",
  "AgentModule scaffold for orchestrating RAG retrieval with business tools in a ReAct-style loop",
  "MCP server layer (tools, resources, prompts) wrapping APIs and SQLite so AI clients invoke actions safely via stdio",
  "Docker Compose stack for Ollama, Qdrant, API, and frontend in a reproducible local dev environment",
] as const;

export const DOCS_RAG_MCP_FEATURES = [
  {
    title: "PDF ingestion pipeline",
    description:
      "Upload invoices, policies, or SOPs via the web UI or API. PDFs are parsed, chunked with overlap, embedded, and stored in Qdrant.",
  },
  {
    title: "Source-attributed answers",
    description:
      "Chat responses cite the exact PDF files used, so users can verify invoice numbers, customer names, and policy details.",
  },
  {
    title: "Local LLM stack",
    description:
      "Ollama runs mxbai-embed-large for embeddings and llama3.2 for chat, keeping sensitive documents off third-party LLM APIs during dev.",
  },
  {
    title: "Persistent vector store",
    description:
      "Qdrant stores embeddings across restarts. MemoryVectorStore fallback keeps development unblocked when Docker is not running.",
  },
  {
    title: "MCP tool bridge",
    description:
      "Model Context Protocol server exposes tools (API calls, DB queries), read-only resources, and prompts for Cursor and Claude Desktop.",
  },
  {
    title: "Agent-ready architecture",
    description:
      "Separate Chat and Agent modules so RAG retrieval and tool orchestration can evolve into a full LangGraph agent loop.",
  },
] as const;

export const DOCS_RAG_MCP_BEFORE_AFTER = [
  {
    before: "Invoice details buried in PDF folders; staff search filenames manually",
    after: "Natural-language queries return structured invoice lists with cited PDF sources",
  },
  {
    before: "ChatGPT-style answers with no proof of where information came from",
    after: "Every answer lists source documents and context chunk count",
  },
  {
    before: "AI IDE assistants cannot call your APIs or database",
    after: "MCP tools wrap headless APIs and SQLite with Zod-validated inputs",
  },
  {
    before: "RAG prototype tied to one cloud LLM vendor",
    after: "Ollama + Qdrant local stack with optional OpenAI path for production",
  },
] as const;

export const DOCS_RAG_MCP_RESULTS = [
  "Working MVP: upload invoice PDFs, ask questions like show invoice lists or give me details of 36259, get grounded answers with sources",
  "Monorepo with NestJS API on port 3000 and Next.js UI on port 3001, runnable via pnpm dev:all",
  "LangChain.js RAG chain with context-only prompt: if nothing relevant is found, the model says so instead of guessing",
  "MCP learning server documents the thin-wrapper pattern: services hold logic, tools expose it to AI clients over stdio",
  "Architecture ready for agent tools (inventory, support, calendar) and LangGraph orchestration in the next phase",
] as const;

export const DOCS_RAG_MCP_TECH_HIGHLIGHTS = [
  "NestJS ChatService: init Ollama models, connect Qdrant, ingest PDFs, run createStuffDocumentsChain RAG",
  "POST /chat/upload, /chat/ingest, /chat/ask REST endpoints with multer file handling",
  "Next.js App Router: / upload page and /chat conversational interface with Tailwind CSS v4",
  "LangChain RecursiveCharacterTextSplitter, QdrantVectorStore, MemoryVectorStore fallback",
  "MCP SDK: server.tool(), resources (shop:// URIs), prompts (analyze-sales templates), stdio transport for Cursor",
  "pnpm workspace monorepo with shared TypeScript config and docker-compose for Ollama + Qdrant",
] as const;

export const DOCS_RAG_MCP_ARCHITECTURE = `Next.js UI (upload + chat)
              |
              v
    NestJS API (ChatModule + AgentModule)
              |
     +--------+---------+
     |                  |
     v                  v
LangChain RAG       MCP Server (stdio)
(Ollama + Qdrant)        |
                         v
              Tools / Resources / Prompts
                         |
              +----------+----------+
              |                     |
              v                     v
        Headless REST API         SQLite DB` as const;

export const DOCS_RAG_MCP_WHY_HIRE = [
  "End-to-end RAG: ingestion, embeddings, vector search, and grounded chat UI",
  "MCP integration so AI assistants in Cursor can call your real APIs and databases",
  "NestJS + LangChain.js architecture designed for production agent workflows",
  "Local-first LLM option (Ollama) plus vector persistence (Qdrant) for sensitive docs",
  "Clear separation between service logic and MCP tool wrappers for safe AI access",
] as const;
