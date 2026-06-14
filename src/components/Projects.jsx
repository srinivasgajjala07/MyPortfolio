import React, { useState } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";

export const TECH_COLORS = {
  React: { text: "#1d4ed8", border: "#93c5fd" },
  "Spring Boot": { text: "#854d0e", border: "#fde047" },
  SpringBoot: { text: "#854d0e", border: "#fde047" },
  CSS: { text: "#6d28d9", border: "#c4b5fd" },
  HTML: { text: "#b91c1c", border: "#fca5a5" },
  JavaScript: { text: "#92400e", border: "#fcd34d" },
  Java: { text: "#c2410c", border: "#fdba74" },
  Python: { text: "#166534", border: "#86efac" },
  Flask: { text: "#7e22ce", border: "#e879f9" },
  ML: { text: "#c2410c", border: "#fb923c" },
  "Node.js": { text: "#15803d", border: "#4ade80" },
  TypeScript: { text: "#1e40af", border: "#60a5fa" },
  MongoDB: { text: "#9d174d", border: "#f9a8d4" },
  "Next.js": { text: "#1e293b", border: "#94a3b8" },
  "Tailwind CSS": { text: "#0e7490", border: "#67e8f9" },
  Tailwind: { text: "#0e7490", border: "#67e8f9" },
  "Chart.js": { text: "#7e22ce", border: "#d8b4fe" },
  "Socket.io": { text: "#166534", border: "#86efac" },
};

const DEFAULT_COLOR = { bg: "#f3f4f6", text: "#374151", border: "#d1d5db" };
const ALL_TECHS = [
  "All",
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "Python",
  "Flask",
  "ML",
];

export function TechBadge({ item, size = "sm" }) {
  return (
    <span
      className="tech-badge"
      style={{
        padding: size === "lg" ? "6px 12px" : "4px 10px",
        borderRadius: "6px",
        fontSize: size === "lg" ? "16px" : "14px",
        fontWeight: 600,
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {item}
    </span>
  );
}

/* ── Scoped styles — all under .proj-page so they beat global body.light/dark rules ── */
const css = `
  .proj-page {
  background: #f6f5ff;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    min-height: 100vh;
  }
    body.dark .proj-page{
    background:#1d1c1cc7;
    }

  /* Beat global button overrides */
  .proj-page .proj-btn,
  .proj-page .proj-btn:hover,
  body.light .proj-page .proj-btn,
  body.dark  .proj-page .proj-btn,
  body.light .proj-page .proj-btn:hover,
  body.dark  .proj-page .proj-btn:hover {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
    font-weight: 700;
    white-space: nowrap;
    transition: filter 0.18s, transform 0.15s;
    box-sizing: border-box;
  }

  .proj-page .proj-btn:hover { filter: brightness(0.92); transform: translateY(-1px); }

  .proj-pages{
    padding: 11px 22px;
    border-radius: 12px;
    font-size: 14px;
    text-decoration: none;
    
  }
  .projectview{
   text-decoration: none;
   padding:5px;
   border-radius:5px;
  }
    .proj-pages a{
    color:#000 !important;
    }

  .proj-page .btn-ghost {
    background: #fff !important;
    color: #374151 !important;
    border: 1.5px solid #e2e8f0 !important;
    padding: 10px 18px;
    border-radius: 12px;
    font-size: 14px;
    text-decoration: none;
  }
  .proj-page .btn-ghost:hover {
    border-color: #a78bfa !important;
    background: #faf5ff !important;
    color: #6c47ff !important;
  }

  /* Filter chip buttons — override global */
  body.light .proj-page .proj-chip,
  body.dark  .proj-page .proj-chip,
  .proj-page .proj-chip {
    all: unset;
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    font-size: 13px;
    padding: 8px 16px;
    border-radius: 10px;
    transition: filter 0.15s;
    box-sizing: border-box;
    border: 1.5px solid transparent;
    display: inline-block;
  }
  .proj-page .proj-chip:hover { filter: brightness(0.94); }

  /* Search input — override global */
  body.light .proj-page .proj-search-input,
  body.dark  .proj-page .proj-search-input,
  .proj-page .proj-search-input {
    all: unset;
    flex: 1;
    font-size: 14px;
    color: #0f172a !important;
    font-family: inherit;
  }
  .proj-page .proj-search-input::placeholder { color: #9ca3af; }
.search-box{
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 9px 14px;
  flex: 1;
  min-width: 200px;
  background: #fafaff;
  transition: all 0.2s ease;
}

.search-box:focus-within{
  border-color: #6c47ff;
  box-shadow: 0 0 0 3px rgba(108,71,255,0.15);
}

.proj-search-input{
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #0f172a;
  font-size: 14px;
  caret-color: #6c47ff;
}

.proj-search-input::placeholder{
  color: #9ca3af;
}

body.dark .search-box{
  background: #1f2933;
  border-color: #495057;
}

body.dark .search-box:focus-within{
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139,92,246,0.25);
}

body.dark .proj-page .proj-search-input{
  color: white !important;
  caret-color: white;
}

body.dark .proj-page .proj-search-input::placeholder{
  color: #94a3b8;
}
   
  /* Top match card */
  .proj-top-card {
    border: 2px solid #a78bfa;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(108,71,255,0.10);
    margin-bottom: 44px;
  }
    body.dark .proj-top-card{
    background:#1f2933;
     border:none;
     box-shadow:0 15px 40px rgba(0, 0, 0, 0.4)
    }
     .searchbar{
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 12px 16px;
  box-shadow: 0 2px 16px rgba(108,71,255,0.06);
}
     body.dark .searchbar{
     background:#1f2933;
     border:none;
     }
  .proj-top-strip {
    background: linear-gradient(90deg, #6c47ff 0%, #a78bfa 100%);
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .proj-top-body {
    display: flex;
    gap: 32px;
    padding: 28px;
    align-items: stretch;
  }
  .proj-top-img {
    width: 420px;
    flex-shrink: 0;
    border-radius: 16px;
    overflow: hidden;
    background: #0f172a;
    min-height: 220px;
  }
  .proj-top-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s;
  }
  .proj-top-img img:hover { transform: scale(1.04); }

  /* Project grid */
  .proj-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .proj-page .hero-h1   { font-size: 34px !important; }
    .proj-top-body        { flex-direction: column !important; }
    .proj-top-img         { width: 100% !important; min-height: 180px !important; }
    .proj-top-title       { font-size: 22px !important; }
    .proj-grid            { grid-template-columns: 1fr !important; }
    .proj-filter-row      { gap: 7px !important; }
    .proj-sec-hdr         { flex-direction: column !important; align-items: flex-start !important; gap: 8px; }
  }
  @media (min-width: 769px) and (max-width: 1100px) {
    .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .proj-top-img { width: 300px !important; }
  }

  .proj-chip{
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #475569;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease;
}

.proj-chip:hover{
  background: #f8fafc;
  border-color: #cbd5e1;
}
  
  body.dark .proj-chip{
  background: #1f2937;
  color: #e5e7eb;
  border-color: #374151;
}

body.dark .proj-chip:hover{
  background: #273449;
}

body.dark .proj-chip.active{
  background: #6c47ff;
  color: white;
  border-color: #6c47ff;
}
  body.dark .tech-badge{
  background:hsl(0deg 0.03% 32.85%);
  color:#e5e7eb;
  border:1px solid #3f4b5c;
}
  .tech-badge{
  background:hsl(238.05deg 100% 95.89%);
  color:#475569;
  border:1px solid #e2e8f0;
}

  .proj-chip.active{
  background: hsl(237 95% 86% / 1) !important;
  color: white;
  border-color: hsl(237 95% 86% / 1) !important;
}
 
`;

export default function Projects() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filtered = projects.filter((p) => {
    const matchFilter = active === "All" || p.tech.includes(active);
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  const topMatch = filtered[0];

  return (
    <div className="proj-page">
      <style>{css}</style>
      <div
        style={{ maxWidth: 1300, margin: "0 auto", padding: "40px 20px 60px" }}
      >
        {/* ── Hero ── */}
        <section style={{ marginBottom: 32 }}>
          <p
            style={{
              color: "#6c47ff",
              fontWeight: 700,
              letterSpacing: "3px",
              fontSize: 11,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            MY WORK
          </p>
          <h1
            className="hero-h1"
            style={{
              fontSize: 50,
              fontWeight: 800,
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Projects
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              maxWidth: 520,
              lineHeight: 1.85,
              marginBottom: 28,
            }}
          >
            Explore my projects and filter them by technology to quickly find
            the work you're interested in.
          </p>

          {/* Search + filter bar */}
          <div
             className="searchbar"
          >
            <div
              className="proj-filter-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
              }}
            >
              {/* Search */}
              <div
                 className="search-box"
              >
                <Search size={17} style={{ flexShrink: 0 }} />
                <input
                  className="proj-search-input"
                  type="text"
                  placeholder="Search by technology..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Tech filter chips */}
             {ALL_TECHS.map((tech) => {
  const isActive = active === tech;

  return (
    <button
      key={tech}
      className={`proj-chip ${isActive ? "active" : ""}`}
      onClick={() => setActive(tech)}
    >
      {tech}
    </button>
  );
})}
              <button
                className="proj-chip d-flex"
                
              >
                <SlidersHorizontal size={14} /> More
              </button>
            </div>
          </div>
        </section>

        {/* ── Top Matched Project ── */}
        {topMatch && (
          <div className="proj-top-card">
            <div className="proj-top-strip">
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>
                Top Matched Project
              </span>
            </div>

            <div className="proj-top-body">
              <div className="proj-top-img">
                <img src={topMatch.image} alt={topMatch.title} />
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    background: "#ede9fe",
                    color: "#6c47ff",
                    padding: "5px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 14,
                    alignSelf: "flex-start",
                  }}
                >
                  Best Match
                </span>

                <h2
                  className="proj-top-title"
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    marginBottom: 10,
                    lineHeight: 1.2,
                  }}
                >
                  {topMatch.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: 15,
                    marginBottom: 18,
                  }}
                >
                  {topMatch.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 24,
                  }}
                >
                 {topMatch.tech.slice(0,3).map((item, i) => (
                    <TechBadge key={i} item={item} size="lg" />
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="proj-pages p-2 rounded">
                    <a
                      href={topMatch.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex projectview"
                    >
                      View Project{" "}
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>

                        <polyline points="15 3 21 3 21 9"></polyline>

                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </button>
                  <a
                    href={topMatch.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn btn-ghost rounded-3 p-2"
                  >
                    GitHub{" "}
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>

                      <polyline points="15 3 21 3 21 9"></polyline>

                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── All Projects ── */}
        <div>
          <div
            className="proj-sec-hdr"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
            }}
          >
            <h2 style={{ fontSize: 26, fontWeight: 800 }}>
              All Projects
            </h2>
            <span
              style={{
                background: "#ede9fe",
                color: "#6c47ff",
                padding: "5px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {filtered.length} Projects
            </span>
          </div>

          <div className="proj-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "70px 0" }}>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 6,
                  color: "#64748b",
                }}
              >
                No projects found
              </p>
              <p style={{ fontSize: 14, color: "#94a3b8" }}>
                Try a different technology or clear your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
