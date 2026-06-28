# Abdul Hadi Khan — About Me

> **Purpose of this file:** Single source of truth for resume generation, cover letter drafting, portfolio copy, interview prep, and AI-assisted career tooling. Keep this updated as new skills, projects, and experiences are added.

---

## Contact & Links

| | |
|---|---|
| **Email** | <ahkn63@gmail.com> |
| **LinkedIn** | [in/abdul-hadi-khan](https://www.linkedin.com/in/abdul-hadi-khan) |
| **Location** | Mississauga, Ontario, Canada |
| **YouTube** | [@learningexpressway](https://www.youtube.com/@learningexpressway/) |
| **GitHub** | [AbdulDevHub](https://github.com/AbdulDevHub/) |
| **Portfolio** | [AbdulHadiKhan](https://abdulhadikhan.vercel.app/) |

---

## Career Target

- **Role type:** Full-stack software engineer, TypeScript/Node.js focused — open to backend-leaning or AI-focused roles
- **Timeline:** Graduating April 2027, actively targeting full-time roles
- **Preferred companies:** Tech or AI-focused, companies where TypeScript and cloud-native stacks are standard
- **Location preference:** Remote or hybrid in Canada
- **Roles/directions to avoid:** Embedded/automotive (Kotlin, Java, C#, QNX), data analytics (Power BI, Tableau), short-term internships below InsideDesk's scope

---

## Education

### University of Toronto — HBSc Computer Science

*August 2021 – April 2027 (expected)*

- Relevant coursework includes: CSC343 (Databases — SQL, schemas, ERDs, relational theory, currently in progress)
- *(Add other relevant courses, projects, or grades here)*

### Scrimba — Programming & Web Development

*December 2020*

---

## Certifications

- **AWS Certified Cloud Practitioner (CLF-C02)** — passed May 24, 2025
- **The AI Engineer Path** — Scrimba
- **The Frontend Developer Career Path** — Scrimba
- **AWS Cloud Practitioner Essentials** — LinkedIn Learning
- **Career Ready Student — Digital Technologies, Summer 2024**

---

## Work Experience

### InsideDesk — Junior Software Engineer

*May 2024 – April 2025 (1 year) | Canada*

**Impact metrics (use these in every relevant story):**

- Reduced insurance claim processing from 2–3 minutes per claim to seconds
- Built 7 scrapers responsible for ~20% of total daily volume (42,500+ claims/day)
- Total platform processes 220,000+ insurance claims daily
- Designed API-driven systems cutting run time from 2 hours to 10 minutes
- Reduced error rates from 20% to 1.5%
- Reviewed 80%+ of all PRs with detailed, actionable feedback
- Team size: 7–9 engineers, Agile/Scrum with daily standups and bi-weekly sprint planning

**Key contributions:**

- Automated the extraction of millions of insurance claims from web portals using TypeScript, AWS, and Node.js
- Developed and maintained 80+ automated web scrapers processing 220,000+ insurance claims daily
- Designed cloud-native infrastructure using AWS Lambda, Fargate, CloudWatch, IAM, and S3 with event-driven pipelines
- Co-developed a secure MFA tooling system using SES, Lambda, Redis, and SNS to parse and forward MFA codes
- Built Python CLI tools to streamline repetitive engineering tasks and improve developer productivity
- Participated in UI development using React, MUI, and Vite; experimented with AI tools (Claude, a Bedrock wrapper library) to auto-generate code templates
- Ensured HIPAA compliance in managing sensitive patient data
- Improved onboarding by auditing, updating, and creating documentation in Confluence
- Collaborated cross-functionally via Slack, Jira, and daily standups

**Quote from Team Lead:** *"He didn't wait to be assigned tasks — he actively sought out challenges and developed creative, effective solutions."*

---

### Studica — Robotics Programmer

*February 2020 – March 2020 (2 months) | Mississauga, ON*

- Collaborated in a team to build robots for assembly and customer use
- Tested functionality of robotic products to ensure customer satisfaction
- Documented product abilities and specifications for manufacture reference
- Assembled and operated a 3D printer for product creation and custom builds

---

## Technical Skills

### Languages

- **TypeScript** — primary language, production experience at scale
- **JavaScript** — strong foundation
- **Python** — CLI tooling, scripting; some rust since InsideDesk
- **SQL** — PostgreSQL; strong via formal coursework (CSC343) + self-study

### Frontend

- **Next.js** — production-familiar; some rust, actively refreshing
- **React** — component design, hooks; some rust, actively refreshing
- **MUI** — used in production at InsideDesk
- **Vite** — used in production at InsideDesk
- **Tailwind CSS** *(add proficiency level if applicable)*

### Backend

- **Node.js** — deep production experience
- **Hono** — REST API design, routing, middleware, error handling
- **Express** — familiar (Hono-transferable)
- **Prisma ORM** — schema design, migrations, relations, transactions

### Databases

- **PostgreSQL** — schema design, joins, aggregations, indexing, ERDs
- **Redis** — caching (TTL, cache invalidation), rate limiting (INCR/EXPIRE), session storage, pub/sub; direct usage via ioredis/node-redis

### Cloud & DevOps

- **AWS Lambda** — production (event-driven pipelines, scraper orchestration)
- **AWS Fargate** — production (containerized workloads)
- **AWS CloudWatch** — production (observability, logging)
- **AWS IAM** — production (roles, policies)
- **AWS S3** — production (file storage)
- **AWS SES / SNS** — production (MFA code delivery, notifications)
- **Docker** — Dockerfile authoring, docker-compose, multi-service local environments
- **GitHub Actions** — CI/CD pipelines (type-check, test, lint, Docker build on push)

### Testing

- **Vitest** — unit tests, integration tests, mocking, spies, test coverage
- **Jest** — familiar (near-identical to Vitest)

### AI / LLM Integration

- **Anthropic SDK** — direct API calls, messages format, streaming with async iterators
- **Vercel AI SDK** — useChat, streaming UI, tool/function calling
- **Tool calling / function calling** — understand the pattern deeply; how agents invoke real code
- **RAG (Retrieval-Augmented Generation)** — embeddings, pgvector in Postgres, similarity search, chunking
- **Ollama** — local model setup and inference (2 models configured)
- **OpenRouter** — multi-model API access
- **Cline** — AI coding assistant in VSCode
- **OpenCode** — agentic coding CLI
- **Prompt engineering** — system prompts, structured output, tool definitions *(deepen this)*

### Auth & Security

- **JWT** — manual implementation (sign, verify, refresh tokens) using jsonwebtoken
- **bcrypt** — password hashing and comparison
- **Auth.js / NextAuth v5** — OAuth (GitHub, Google), session management, route protection
- **CORS** — proper origin allowlist configuration
- **Helmet** — HTTP security headers (CSP, X-Frame-Options, etc.)
- **Webhooks** — receiving and verifying HMAC-SHA256 signatures (Stripe pattern)
- **Environment validation** — Zod-based process.env parsing at startup

### Background Jobs

- **BullMQ** — job queues, workers, retries, concurrency, failure handling (built on Redis)
- *Maps directly to production Lambda + SQS experience from InsideDesk*

### Validation & API Patterns

- **Zod** — schema validation, input parsing, env config validation
- **REST design** — status codes, versioning, error handling, pagination (cursor-based and offset)
- **Pagination** — cursor-based vs offset; understands tradeoffs

### Logging & Observability

- **pino** — structured JSON logging, log levels (info, warn, error)
- **AWS CloudWatch** — production logging experience

### Developer Tooling & Workflow

- **VSCode** — primary IDE with Cline + Google Antigravity
- **Git** — daily use, PR reviews, branching
- **Jira / Confluence** — production Agile workflow
- **Slack** — async team collaboration
- **pnpm / npm** — package management
- **Agile / Scrum** — daily standups, bi-weekly sprint planning, peer programming

### Awareness (know what it is, not yet hands-on)

- **tRPC** — end-to-end typesafe API layer for Next.js; on deck
- **OpenTelemetry** — distributed tracing standard; recognise from CloudWatch parallels
- **Structured vibe coding** — context files, agent skills (architect, remember, review, recover, imprint), MCP integration
- **Stagehand / Browserbase** — browser automation for AI agents
- **PostHog** — product analytics and session tracking

---

## DSA Progress (NeetCode Roadmap — LeetCode)

**Pace:** 1–2 problems/day consistently since starting  
**Problems completed:** ~40+ (as of end of week 5)

| Topic | Status |
|---|---|
| Arrays & Hashing | ✅ Complete |
| Two Pointers | ✅ Complete |
| Sliding Window | ✅ Complete |
| Stack | *(check your NeetCode progress)* |
| Binary Search | *(check your NeetCode progress)* |
| Linked List | Upcoming |
| Trees (BFS, DFS) | 🔄 In progress |
| Tries | Upcoming |
| Heap / Priority Queue | Upcoming |
| Graphs (BFS, DFS) | Upcoming |
| Dynamic Programming | Upcoming |

**Language used:** TypeScript

---

## Personal Projects

*(Add your own projects here — include: what it does, tech stack, link, anything notable about scale or design decisions)*

---

## YouTube Channel

*(Add: channel name, handle/URL, content focus, approximate subscriber count, number of videos, any notable videos or series)*

---

## Other Notable Info

*(Add anything else relevant: hackathons, open source contributions, awards, volunteering, extracurriculars, etc.)*

---

## Interview Prep — STAR Story Bank

> These are raw ingredients. Each one needs to be shaped into a full STAR story. The metrics below should appear in every relevant answer.

**Core metrics to embed:**

- 2–3 min/claim → seconds (processing time)
- 2 hours → 10 minutes (run time)
- 20% → 1.5% (error rate)
- 220,000+ claims processed daily
- 42,500+ daily claims from my 7 scrapers alone (~20% of total volume)
- 80%+ PR review rate
- Team of 7–9, Agile, daily standups

**Story topics to prepare (8–10 STAR stories needed):**

1. Biggest technical challenge (scraper architecture, API-driven pipeline redesign)
2. Measurable business impact (run time and error rate improvements)
3. Cross-functional collaboration (Agile team, Slack, Jira, standups)
4. Taking initiative without being asked (sought out challenges per team lead quote)
5. Failure + learning (something that broke in production or didn't work first try)
6. System design decision you owned (event-driven pipeline, MFA system, or infrastructure choices)
7. Onboarding / knowledge transfer (Confluence documentation work)
8. Handling tight deadlines (sprint planning, production pressure)
9. Code quality / PR culture (80%+ review rate, detailed feedback)
10. Working with sensitive data / compliance (HIPAA)

---

## Learning Roadmap — Completed & Upcoming

### Completed (as of June 2025)

- SQL fundamentals — two FCC courses + W3Schools + CSC343
- PostgreSQL — setup, queries, schema design, ERDs
- Docker — Dockerfile, layers, docker-compose, multi-service environments
- Vitest — unit tests, integration tests, mocking, coverage
- GitHub Actions — CI/CD pipelines wired with type-check, tests, lint, Docker build
- Hono REST API — routing, middleware, status codes, error handling
- Prisma ORM — schema, migrations, relations, Hono + PostgreSQL integration
- JWT + bcrypt — manual auth implementation
- Auth.js / NextAuth v5 — OAuth, session management, protected routes
- Redis (direct) — ioredis, caching, rate limiting, session storage
- API security — CORS, Helmet, env validation, pagination patterns
- Local AI dev environment — Ollama, OpenRouter, Cline, OpenCode, Claude.ai
- Anthropic SDK — direct API, streaming, messages format
- Vercel AI SDK — useChat, streaming UI, tool calling
- RAG basics — embeddings, pgvector, similarity search
- BullMQ — queues, workers, retries, concurrency
- pino — structured logging
- Webhooks — HMAC-SHA256 signature verification
- DSA: Arrays & Hashing, Two Pointers, Sliding Window, Trees (in progress)

### Upcoming (next)

- tRPC
- Prompt engineering (formalized)
- System design fundamentals (ByteByteGo)
- DSA: Linked Lists, Tries, Heaps, Graphs, DP
- STAR story polish + mock interviews
- AWS Developer Associate cert *(optional but high-value)*
