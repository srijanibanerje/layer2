import { useState } from "react";
import {
  ArrowDownRight,
  Orbit,
  FileText,
  MessageSquareText,
  Bot,
  GitMerge,
  ChartNoAxesCombined,
  Flame,
  Landmark,
  Activity,
  ShieldCheck,
  ScanLine,
} from "lucide-react";
import logo from "./assets/logo.PNG";
import "./App.css";

function App() {
  const [activeStatus, setActiveStatus] = useState("prompt");

  const nodes = [
    {
      id: "prompt",
      icon: <MessageSquareText size={18} />,
      title: "User Prompt",
      copy: "Describe your intent in natural language.",
      statusTitle: "PROMPT RECEIVED",
      statusCopy:
        "The system interprets your natural-language request and prepares it for the DeFAI agent.",
    },
    {
      id: "agent",
      icon: <Bot size={18} />,
      title: "AI Agent",
      copy: "The DeFAI agent analyzes intent and execution requirements.",
      statusTitle: "AGENT ACTIVE",
      statusCopy:
        "The AI agent evaluates the request and determines the optimal DeFi execution strategy.",
    },
    {
      id: "swap",
      icon: <GitMerge size={18} />,
      title: "DEX Swap",
      copy: "Route trades through decentralized liquidity.",
      statusTitle: "DEX ROUTING",
      statusCopy:
        "The transaction is routed through available decentralized liquidity pools.",
    },
    {
      id: "yield",
      icon: <ChartNoAxesCombined size={18} />,
      title: "Yield",
      copy: "Deploy idle assets into yield opportunities.",
      statusTitle: "YIELD STRATEGY",
      statusCopy:
        "Assets can be directed toward suitable yield-generating strategies.",
    },
    {
      id: "burn",
      icon: <Flame size={18} />,
      title: "Token Burn",
      copy: "Protocol activity contributes to token economics.",
      statusTitle: "BURN MECHANISM",
      statusCopy: "Protocol activity can support the LS2 token burn mechanism.",
    },
    {
      id: "governance",
      icon: <Landmark size={18} />,
      title: "Governance",
      copy: "Token holders participate in protocol decisions.",
      statusTitle: "GOVERNANCE",
      statusCopy:
        "Token holders can participate in important protocol decisions.",
    },
  ];

  return (
    <div className="app-shell">
      {/* ================= HEADER ================= */}

      <header className="topbar">
        <div className="site-frame topbar-inner">
          <a href="#top" className="brand-link">
            <img src={logo} alt="LS2 DEFAI" className="brand-logo" />
          </a>
          <nav className="desktop-nav">
            <a href="#architecture" className="nav-link">
              Architecture
            </a>

            <a href="#utility" className="nav-link">
              Utility
            </a>

            <a href="#whitepaper" className="nav-link">
              Whitepaper
            </a>
          </nav>

          {/* <a href="#whitepaper" className="terminal-button header-cta">
            <span>Explore</span>
            <ArrowDownRight size={15} />
          </a> */}
        </div>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}

        <section className="site-frame hero-section">
          <div className="hero-image-wrap" aria-hidden="true">
            <div className="hero-image"></div>
          </div>

          <div className="orbit-grid" aria-hidden="true"></div>

          <div className="hero-content">
            <div className="reveal eyebrow-row">
              <span className="signal-line"></span>

              <p className="eyebrow">LS2 / DEFAI PROTOCOL</p>
            </div>

            <h1 className="hero-title reveal delay-1">
              Intelligent DeFi.
              <br />
              Executed on-chain.
            </h1>

            <p className="hero-description reveal delay-2">
              LS2 DeFAI combines autonomous AI agents with decentralized
              exchange infrastructure to make complex DeFi strategies easier to
              execute, automate and govern.
            </p>

            <div className="hero-actions reveal delay-3">
              <a href="#architecture" className="terminal-button hero-button">
                <span>Explore Architecture</span>

                <Orbit size={18} />
              </a>

              <a href="#whitepaper" className="terminal-button hero-button">
                <span>Read Whitepaper</span>

                <FileText size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* ================= METRICS ================= */}

        <section className="site-frame metrics-section">
          <div className="metrics-grid">
            <article className="glass-panel metric-card">
              <p className="metric-value">0.10%</p>

              <p className="metric-label">Base trading fee</p>
            </article>

            <article className="glass-panel metric-card">
              <p className="metric-value">25%</p>

              <p className="metric-label">LS2 fee discount</p>
            </article>

            <article className="glass-panel metric-card">
              <p className="metric-value">BURN</p>

              <p className="metric-label">Token burn mechanism</p>
            </article>

            <article className="glass-panel metric-card">
              <p className="metric-value">AI</p>

              <p className="metric-label">Autonomous DeFi agents</p>
            </article>
          </div>
        </section>

        {/* ================= ARCHITECTURE ================= */}

        <section id="architecture" className="site-frame section-rule section">
          <div className="section-intro">
            <p className="eyebrow">01 / ARCHITECTURE</p>

            <h2>From intent to execution.</h2>

            <p>
              LS2 DeFAI turns natural-language financial intent into a
              structured execution flow connecting AI agents, decentralized
              liquidity, yield strategies and governance.
            </p>
          </div>

          <div className="system-panel">
            <div className="system-panel-header">
              <p className="flow-label mono">DEFAI EXECUTION FLOW</p>

              <span className="system-status mono">
                <span className="status-dot"></span>
                SYSTEM ONLINE
              </span>
            </div>

            <div className="node-grid">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className={`node ${
                    activeStatus === node.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveStatus(node.id)}
                  aria-pressed={activeStatus === node.id}
                >
                  <span className="node-icon">{node.icon}</span>

                  <span className="node-title">{node.title}</span>

                  <span className="node-copy">{node.copy}</span>
                </button>
              ))}
            </div>

            <aside className="status-container" aria-live="polite">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`status-panel ${
                    activeStatus === node.id ? "is-visible" : ""
                  }`}
                >
                  <p className="status-title mono">{node.statusTitle}</p>

                  <p className="status-copy">{node.statusCopy}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        {/* ================= CAPABILITIES ================= */}

        <section className="site-frame section-rule section">
          <div className="capabilities-heading">
            <div className="section-intro">
              <p className="eyebrow">02 / CAPABILITIES</p>

              <h2>Infrastructure built for autonomous DeFi.</h2>
            </div>

            <p className="side-copy">
              The protocol connects intelligent agents with transparent,
              programmable on-chain execution.
            </p>
          </div>

          <div className="capabilities-grid">
            <article className="glass-panel capability-card">
              <Activity size={27} className="cyan-icon" />

              <h3>Dynamic Fee Economics</h3>

              <p>
                Create flexible fee structures and token-based discounts
                designed around protocol activity.
              </p>
            </article>

            <article className="glass-panel capability-card">
              <ShieldCheck size={27} className="cyan-icon" />

              <h3>Protected Routing</h3>

              <p>
                Route swaps through decentralized liquidity while keeping
                execution transparent and verifiable on-chain.
              </p>
            </article>

            <article className="glass-panel capability-card">
              <ScanLine size={27} className="cyan-icon" />

              <h3>AI Yield Intelligence</h3>

              <p>
                AI agents can evaluate opportunities and help automate strategy
                execution across DeFi protocols.
              </p>
            </article>
          </div>
        </section>

        {/* ================= UTILITY ================= */}

        <section id="utility" className="site-frame section-rule section">
          <div className="utility-layout">
            <div className="utility-intro">
              <p className="eyebrow">03 / TOKEN UTILITY</p>

              <h2>One token. Multiple protocol functions.</h2>

              <p>
                LS2 is designed to connect protocol participation, access,
                incentives and governance through a unified token economy.
              </p>
            </div>

            <div className="utility-list">
              <article className="glass-panel utility-row">
                <span className="utility-number mono">01</span>

                <div>
                  <h3>Trading Fee Discount</h3>

                  <p>
                    Use LS2 tokens to receive discounts on eligible trading fees
                    across the protocol.
                  </p>
                </div>
              </article>

              <article className="glass-panel utility-row">
                <span className="utility-number mono">02</span>

                <div>
                  <h3>Premium Subscription</h3>

                  <p>
                    LS2 can provide access to advanced DeFAI agent capabilities
                    and premium features.
                  </p>
                </div>
              </article>

              <article className="glass-panel utility-row">
                <span className="utility-number mono">03</span>

                <div>
                  <h3>Token Burn</h3>

                  <p>
                    Protocol activity can contribute to a systematic LS2 token
                    burn mechanism.
                  </p>
                </div>
              </article>

              <article className="glass-panel utility-row">
                <span className="utility-number mono">04</span>

                <div>
                  <h3>Staking</h3>

                  <p>
                    Stake LS2 to participate in protocol incentives and
                    ecosystem rewards.
                  </p>
                </div>
              </article>

              <article className="glass-panel utility-row">
                <span className="utility-number mono">05</span>

                <div>
                  <h3>Governance</h3>

                  <p>
                    LS2 holders can participate in governance and protocol-level
                    decisions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= WHITEPAPER ================= */}

        <section id="whitepaper" className="site-frame section-rule section">
          <p className="eyebrow">04 / WHITEPAPER</p>

          <h2>Protocol documentation.</h2>

          <div className="paper-grid">
            <article className="glass-panel paper-card">
              <p className="paper-index mono">01 / DEX</p>

              <h3>Decentralized Exchange</h3>

              <p>
                Explore the protocol architecture, liquidity routing and
                on-chain execution model.
              </p>

              <button type="button">Read DEX Architecture →</button>
            </article>

            <article className="glass-panel paper-card">
              <p className="paper-index mono">02 / AGENTS</p>

              <h3>AI Agents</h3>

              <p>
                Learn how autonomous agents interpret user intent and coordinate
                DeFi execution.
              </p>

              <button type="button">Explore Agent System →</button>
            </article>

            <article className="glass-panel paper-card">
              <p className="paper-index mono">03 / TOKENOMICS</p>

              <h3>Tokenomics</h3>

              <p>
                Review LS2 utility, incentives, staking, governance and
                token-burn mechanics.
              </p>

              <button type="button">View Tokenomics →</button>
            </article>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="site-frame section-rule footer">
        <a href="#top" className="brand-link">
            <img src={logo} alt="LS2 DEFAI" className="brand-logo" />
          </a>
          

        <p className="footer-disclaimer">
          DeFi involves risk. Protocol information is provided for informational
          purposes only and does not constitute financial advice.
        </p>
      </footer>
    </div>
  );
}

export default App;
