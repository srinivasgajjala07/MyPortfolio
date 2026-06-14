import React from "react";
import { TechBadge } from "./Projects";

/* All card styles scoped under .proj-card-wrap so global body.light/dark button
   and span rules can't override them */
const css = `
  .proj-card-wrap {
    background: #fff;
    border-radius: 20px;
    border: 1.5px solid #e8e4ff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    box-shadow:0 1px 8px rgba(0,0,0,0.35);
  }
  .proj-card-wrap:hover {
    // transform: translateY(-6px);
    box-shadow: 0 20px 48px rgba(108, 71, 255, 0.13);
    border-color: #a78bfa;
  }
  .proj-card-wrap .card-img-box {
    height: 200px;
    overflow: hidden;
    background: #0f172a;
    flex-shrink: 0;
  }
  .proj-card-wrap .card-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
 
     body.dark  .proj-card-wrap{
       background:#1f2933;
       border:none; 
       box-shadow:0 15px 40px rgba(0, 0, 0, 0.4)

     }

     body.dark .proj-card-wrap:hover{
         transform: translateY(-8px);
        box-shadow: oklab(72.564% 0.0368 -0.13683 / 0.45) 4px 2px 8px -2px, oklab(72.564% 0.0368 -0.13683 / 0.85) -4px -2px 8px -2px;
     }

  /* Beat body.light button and body.dark button overrides */
  body.light .proj-card-wrap .card-btn,
  body.dark  .proj-card-wrap .card-btn,
  .proj-card-wrap .card-btn {
    all: unset;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
    font-weight: 700;
    font-size: 13px;
    border-radius: 11px;
    white-space: nowrap;
    text-decoration: none;
    transition: filter 0.18s, transform 0.15s;
    box-sizing: border-box;
  }
  .proj-card-wrap .card-btn:hover {
    filter: brightness(0.92);
    transform: translateY(-1px);
  }

  body.light .proj-card-wrap .card-btn-live,
  body.dark  .proj-card-wrap .card-btn-live,
  .proj-card-wrap .card-btn-live {
    padding: 10px 18px;
    background:hsl(237 95% 86% / 1);
    color:black;
  }

   body.light .proj-card-wrap .card-btn-live{
   background:oklab(72.564% 0.0368 -0.13683);
   }
   body.light .proj-card-wrap .card-btn-live:hover{
   color:white;
   }
    body.dark .proj-card-wrap .card-btn-live:hover{
   color:white;
   }
   .projectview:hover{
   color:white !important;
   }
  body.light .proj-card-wrap .card-btn-gh,
  body.dark  .proj-card-wrap .card-btn-gh,
  .proj-card-wrap .card-btn-gh {
    background: #fff !important;
    color: #374151 !important;
    border: 1.5px solid #e2e8f0 !important;
    padding: 9px 16px;
  }
  body.light .proj-card-wrap .card-btn-gh:hover,
  body.dark  .proj-card-wrap .card-btn-gh:hover,
  .proj-card-wrap .card-btn-gh:hover {
    border-color: #a78bfa !important;
    background: #faf5ff !important;
    color: #6c47ff !important;
  }

  body.light .proj-card-wrap .card-desc,
  body.dark  .proj-card-wrap .card-desc {
    color: #64748b !important;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <>
      <style>{css}</style>
      <div className="proj-card-wrap">

        {/* Image */}
        <div className="card-img-box">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Body */}
        <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>

          <h2 className="card-title" style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, lineHeight: 1.3 }}>
            {project.title}
          </h2>

          <p className="card-desc" style={{ lineHeight: 1.75, fontSize: 13, marginBottom: 16, flex: 1 }}>
            {project.description}
          </p>

          {/* Colored tech tags — inline styles beat global span rules */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 15, marginBottom: 30 }} className="justify-evenly">
            {project.tech.slice(0, 3).map((item, index) => (
  <TechBadge key={index} item={item} />
))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }} className="justify-between px-3 py-1">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="card-btn card-btn-live"
            >
              Live  <svg
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
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="card-btn card-btn-gh"
            >
              GitHub  <svg
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
    </>
  );
}