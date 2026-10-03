import React, { useState } from "react"
import EtchedAccretion from "@/components/ui/etched-accretion"
import ContributionSkyline from "@/components/ui/contribution-skyline"
import {
  Mail,
  ExternalLink,
  Code2,
  Smartphone,
  Cpu,
  Layers,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  Database,
  Globe,
  Terminal,
  Activity,
  Workflow,
  Radio,
  Eye,
  Sliders,
  Maximize2,
  Minimize2,
  Zap,
  ShieldCheck,
  Server,
  Network,
} from "lucide-react"

const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const TwitterIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cinematicMode, setCinematicMode] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  // Engineering Projects from Soumyadip's GitHub README
  const projects = [
    {
      title: "ble-ring-app",
      category: "Hardware & IoT Telemetry",
      description:
        "Companion mobile platform for Smart Rings. Implements low-latency Bluetooth Low Energy (BLE) GATT protocols, real-time sensor telemetry parsing, and background synchronization.",
      tags: ["Kotlin", "BLE GATT", "Coroutines", "Android SDK", "Telemetry"],
      image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad/ble-ring-app",
    },
    {
      title: "ClearScanOCR",
      category: "On-Device Computer Vision",
      description:
        "High-performance document digitization engine utilizing CameraX and Google ML Kit. Features automated edge detection, perspective warp, and high-accuracy on-device OCR.",
      tags: ["CameraX", "ML Kit", "Computer Vision", "Kotlin", "Room DB"],
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad/ClearScanOCR",
    },
    {
      title: "QuizForge",
      category: "Generative AI Application",
      description:
        "Adaptive AI-driven assessment system interfacing with LLM APIs to generate dynamic, context-aware evaluations with real-time scoring and performance tracking.",
      tags: ["Generative AI", "LLM Prompting", "Jetpack Compose", "FastAPI"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad/QuizForge",
    },
    {
      title: "PocketLedger",
      category: "Offline-First Data Storage",
      description:
        "Privacy-centric personal accounting platform built on an offline-first architecture with reactive Room DB persistence, asynchronous Coroutine queries, and MVI pattern.",
      tags: ["Room DB", "Coroutines", "MVI Pattern", "SQLite", "Material 3"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad/PocketLedger",
    },
    {
      title: "AM-Portfolio Ecosystem",
      category: "Enterprise AI & Streaming",
      description:
        "Multi-agent orchestration platform with dynamic tool routing, Server-Sent Events (SSE) streaming gateway, token budget management, and standardized MCP bridges.",
      tags: ["Multi-Agent", "MCP Protocol", "SSE Streaming", "Python", "FastAPI"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad",
    },
    {
      title: "WeatherApp Android",
      category: "Live Reactive Streaming",
      description:
        "Real-time forecast streaming client with location tracking, reactive StateFlow updates, and clean modular architecture.",
      tags: ["Kotlin", "Retrofit", "RESTful API", "StateFlow", "Clean Arch"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/soumya07ad/WeatherApp_Android",
    },
  ]

  // Specialized AI Engineering Core Competencies
  const architecturePillars = [
    {
      title: "Multi-Agent Orchestration",
      icon: <Workflow className="h-6 w-6 text-amber-400" />,
      description:
        "Engineering autonomous agent pipelines with dynamic tool calling, per-turn LLM token budget management, and RAM session fallbacks.",
      metrics: "Dynamic Routing • Token Guardrails • Autonomous Loop",
    },
    {
      title: "AI Edge Streaming Gateways",
      icon: <Radio className="h-6 w-6 text-orange-400" />,
      description:
        "Unified edge streaming proxy platforms with low-latency Server-Sent Events (SSE), Human-in-the-Loop (HITL) verification, and OpenAPI contracts.",
      metrics: "< 50ms TTFT • SSE Chunk Streaming • HITL Audit",
    },
    {
      title: "Model Context Protocol (MCP)",
      icon: <Network className="h-6 w-6 text-yellow-400" />,
      description:
        "Architecting standardized MCP server bridges that expose enterprise databases, filesystems, and APIs as structured LLM tool capabilities.",
      metrics: "MCP Tool Calling • Secure Isolation • Structured Schemas",
    },
    {
      title: "On-Device Edge ML & IoT",
      icon: <Cpu className="h-6 w-6 text-emerald-400" />,
      description:
        "Deploying optimized machine learning models with Google ML Kit, CameraX pipelines, and low-latency Bluetooth Low Energy (BLE) GATT state sync.",
      metrics: "Zero-Latency On-Device ML • BLE Telemetry",
    },
  ]

  const technicalArsenal = [
    {
      group: "AI Systems & Backend",
      icon: <Server className="h-5 w-5 text-amber-400" />,
      skills: ["Python", "FastAPI", "Node.js", "Express", "OpenAI / Anthropic APIs", "PostgreSQL", "SQLite"],
    },
    {
      group: "Mobile & Cross-Platform",
      icon: <Smartphone className="h-5 w-5 text-orange-400" />,
      skills: ["Kotlin", "Flutter", "Dart", "Android SDK", "Jetpack Compose", "Coroutines & Flow", "Room DB"],
    },
    {
      group: "DevOps & Cloud Systems",
      icon: <Layers className="h-5 w-5 text-yellow-400" />,
      skills: ["Docker", "Kubernetes Manifests", "Git & GitHub Actions", "Linux", "Postman", "CI/CD Pipelines"],
    },
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus("error")
      setStatusMessage("Please fill in all mandatory fields.")
      return
    }

    setFormStatus("loading")
    try {
      const response = await fetch("https://soumya2025.pythonanywhere.com/api/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus("success")
        setStatusMessage("Transmission confirmed! Your message has been received.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setFormStatus("error")
        setStatusMessage("Server busy. Please email directly at adhikarisoumya7@gmail.com")
      }
    } catch {
      setFormStatus("error")
      setStatusMessage("Network error. Please reach out to adhikarisoumya7@gmail.com")
    }
  }

  return (
    <div className="relative min-h-screen bg-[#030307] text-neutral-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      {/* FIXED TOP NAVIGATION BAR - PERSISTS GLOBALLY ON SCROLL */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl px-4 py-3.5 sm:px-6 transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 font-mono font-bold shadow-lg shadow-red-500/10 transition-transform group-hover:scale-105">
              SDA
            </div>
            <div>
              <span className="font-display font-bold tracking-tight text-white block text-sm sm:text-base leading-none">
                Soumyadip DasAdhikari
              </span>
              <span className="text-[11px] text-neutral-400 font-mono tracking-wider block mt-1 uppercase">
                AI Systems &amp; Mobile Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300 font-body">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-red-400 transition-colors">Projects</a>
            <a href="#contributions" className="hover:text-red-400 transition-colors">Skyline</a>
            <a href="#arsenal" className="hover:text-red-400 transition-colors">Arsenal</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Cinematic Mode Toggle Button */}
            <button
              onClick={() => setCinematicMode(!cinematicMode)}
              className="rounded-full border border-red-500/30 bg-red-950/40 hover:bg-red-900/50 text-red-300 px-3.5 py-1.5 text-xs font-mono transition-all flex items-center gap-1.5 shadow-md shadow-red-500/10 cursor-pointer"
              title="Toggle Black Hole Cinematic View"
            >
              {cinematicMode ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
              <span>{cinematicMode ? "Exit Horizon" : "Cinematic"}</span>
            </button>

            <a
              href="#contact"
              className="rounded-full bg-white hover:bg-neutral-200 text-black px-5 py-1.5 text-xs font-bold transition-all shadow-lg shadow-white/10 cursor-pointer font-body"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-red-400" /> : <Menu className="h-6 w-6 text-red-400" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#09090e]/95 px-5 py-5 space-y-3 mt-3 rounded-2xl font-body">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-red-400"
            >
              About Systems
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-red-400"
            >
              Projects
            </a>
            <a
              href="#contributions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-red-400"
            >
              Skyline Activity
            </a>
            <a
              href="#arsenal"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-red-400"
            >
              Technical Arsenal
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-neutral-300 hover:text-red-400"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* 1. HERO / LANDING PAGE WITH ETCHED ACCRETION BLACK HOLE */}
      <EtchedAccretion
        height="100vh"
        preset="crimson"
        interactive={true}
        className="w-full relative flex flex-col justify-between"
      >
        <div className="relative flex flex-col justify-between h-full w-full pointer-events-none pt-20">
          {/* Spacer for fixed top navbar */}
          <div className="h-4 w-full" />

          {/* CENTER HERO CONTENT: SOPHISTICATED OPEN CINEMATIC SHOWCASE */}
          <div className="relative flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto my-auto py-6 z-20">
            <div
              className={`w-full max-w-4xl flex flex-col items-center transition-all duration-500 ${
                cinematicMode ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Status pill badge with pulsing beacon */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-red-500/30 bg-black/60 px-4 py-1.5 text-xs font-mono text-red-300 mb-5 backdrop-blur-md shadow-lg shadow-red-950/40">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                <span className="tracking-widest uppercase font-medium">AI SYSTEMS &amp; ANDROID ARCHITECT</span>
              </div>

              {/* Master Headline: Prominent Soumyadip DasAdhikari */}
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] text-white leading-[1.08] drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
                <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                  Soumyadip DasAdhikari
                </span>
              </h1>

              {/* Core Tagline with warm gradient emphasis */}
              <p className="mt-4 font-body text-xl sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
                Building <span className="text-white font-medium underline decoration-red-500/60 underline-offset-8">Future-Ready AI Systems</span> &amp; <span className="text-white font-medium underline decoration-red-500/60 underline-offset-8">Kotlin Architectures</span>
              </p>

              {/* Concise, impactful bio */}
              <p className="mt-5 max-w-xl mx-auto font-body text-sm sm:text-base text-neutral-300 leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
                Crafting scalable autonomous agent pipelines, low-latency edge streaming gateways, and high-performance reactive Android experiences.
              </p>

              {/* Architecture tags as translucent floating pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-300">
                <span className="px-3 py-1 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-md">Jetpack Compose</span>
                <span className="px-3 py-1 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-md">Multi-Agent</span>
                <span className="px-3 py-1 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-md">SSE Streaming</span>
                <span className="px-3 py-1 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-md">Google ML Kit</span>
                <span className="px-3 py-1 rounded-full bg-black/65 border border-white/15 backdrop-blur-md shadow-md">Coroutines &amp; Flow</span>
              </div>

              {/* CTA action buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
                <a
                  href="#projects"
                  className="rounded-full bg-white hover:bg-neutral-200 text-black px-8 py-3.5 font-bold text-sm transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-105 cursor-pointer"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 bg-black/70 hover:bg-white/10 px-8 py-3.5 font-medium text-sm text-white backdrop-blur-md transition-all duration-300 hover:border-red-400/50 hover:scale-105 cursor-pointer"
                >
                  Get In Touch
                </a>
                <a
                  href="#contributions"
                  className="rounded-full border border-white/15 bg-black/70 hover:bg-white/10 px-6 py-3.5 text-xs font-mono text-neutral-300 backdrop-blur-md transition-all hover:text-white hover:border-white/30"
                >
                  3D Activity Skyline →
                </a>
              </div>

              {/* Quick social links in sleek pill dock */}
              <div className="mt-8 inline-flex items-center gap-4 bg-black/70 border border-white/15 backdrop-blur-md rounded-full px-5 py-2 text-neutral-300 pointer-events-auto shadow-lg shadow-black/50">
                <a
                  href="https://github.com/soumya07ad"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors p-1"
                  title="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <span className="h-3 w-px bg-white/20" />
                <a
                  href="https://www.linkedin.com/in/soumyadip-dasadhikari-117b10228/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors p-1"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <span className="h-3 w-px bg-white/20" />
                <a
                  href="https://x.com/adhikari_s16171"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors p-1"
                  title="X (Twitter)"
                >
                  <TwitterIcon className="h-4 w-4" />
                </a>
                <span className="h-3 w-px bg-white/20" />
                <a
                  href="mailto:adhikarisoumya7@gmail.com"
                  className="hover:text-white transition-colors p-1"
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM HORIZON STATUS & INTERACTION HINT (Image 2 style) */}
          <div className="w-full px-6 py-5 flex items-end justify-between z-20">
            {/* Bottom-left: Exact "Nothing escapes the horizon" tagline from Image 2 */}
            <div className="pointer-events-none select-none text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                Nothing <span className="font-serif italic text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]">escapes</span> the horizon.
              </h2>
              <p className="mt-1 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                MOVE TO DRIFT &middot; HOLD TO FEED IT
              </p>
            </div>

            {/* Bottom-right: Scroll indicator to jump into systems */}
            <div className="hidden sm:flex pointer-events-auto">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-mono text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 backdrop-blur-md transition-all"
              >
                <span>Scroll down</span>
                <span className="animate-bounce">↓</span>
              </a>
            </div>
          </div>
        </div>
      </EtchedAccretion>

      {/* 4. AI ARCHITECTURE & SYSTEM TELEMETRY HUD (Replacing personal photo) */}
      <section id="about" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
          {/* Section header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">System Architecture</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                AI Engineering &amp; Autonomous Workflows
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Edge Proxy: Active</span>
            </div>
          </div>

          {/* Interactive HUD Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {architecturePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-amber-500/50 hover:bg-neutral-900/90 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-amber-400/90">
                  {pillar.metrics}
                </div>
              </div>
            ))}
          </div>

          {/* Telemetry Console Card */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-neutral-400 space-y-1.5">
            <div className="text-amber-400 font-semibold flex items-center gap-2">
              <Terminal className="h-4 w-4" /> root@soumya-ai-gateway:~# status
            </div>
            <div className="text-neutral-300">
              &gt; Multi-Agent Platform: Active | Session RAM Fallbacks: Ready | MCP Protocol Bridges: Bound
            </div>
            <div className="text-neutral-400">
              &gt; SSE Stream Latency: 28ms | Human-in-the-Loop Verification: Enabled | BLE GATT State: Listening
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED ENGINEERING REPOSITORIES */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Repository Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-2 tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto text-sm sm:text-base font-body">
            Verified production platforms, BLE IoT firmware companions, and dynamic LLM assessment systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-neutral-950/75 p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-neutral-900 mb-4">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute top-2.5 right-2.5 rounded-full bg-black/80 border border-white/10 px-2.5 py-0.5 text-[11px] font-mono text-amber-300 backdrop-blur-md">
                    {proj.category}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 my-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] text-neutral-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" /> View Source
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:text-amber-300 p-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GITHUB CONTRIBUTIONS & 3D SKYLINE COMPONENT */}
      <section id="contributions" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Open Source Pulse</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Contributions &amp; Engineering Consistency
          </h2>
          <p className="text-neutral-400 mt-2 max-w-lg mx-auto text-sm font-body">
            Live 3D isometric skyline rendering 1,800+ commits across open-source agent ecosystems and mobile architectures.
          </p>
        </div>

        {/* 3D Skyline Component with GitHub Palette */}
        <ContributionSkyline palette="github" defaultView="3d" orbit={true} />
      </section>

      {/* 7. TECHNICAL ARSENAL */}
      <section id="arsenal" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalArsenal.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-neutral-950/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base">{category.group}</h3>
              </div>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CONTACT SECTION (Connected to live Django API) */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-neutral-950/85 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">Direct Connection</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2 tracking-tight">
              Initiate System Collaboration
            </h2>
            <p className="text-neutral-400 mt-2 text-sm font-body">
              Inquire regarding AI Agent deployment, mobile systems, or enterprise platform collaboration.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-neutral-300 mb-1.5">
                Full Name / Organization
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono text-neutral-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@organization.com"
                className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-neutral-300 mb-1.5">
                Transmission Payload (Message)
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Project specifications, agent requirements, or engineering inquiries..."
                className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {formStatus === "success" && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-400 font-mono">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            {formStatus === "error" && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400 font-mono">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === "loading"}
              className="w-full rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black py-3.5 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              {formStatus === "loading" ? (
                "Encrypting & Transmitting..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Transmission
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="border-t border-white/10 bg-black/90 py-10 px-4 text-center text-xs text-neutral-500 font-mono">
        <p>© {new Date().getFullYear()} Soumyadip DasAdhikari. AI Systems & Edge Streaming Engineer.</p>
        <p className="mt-1 text-neutral-600">Built with React, TypeScript & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
