import React, { useState } from "react";

const skills = [
  { title: "Programming", items: ["Java"] },
  { title: "Backend", items: ["Spring", "Spring Boot"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Database", items: ["SQL", "MySQL", "Oracle"] },
  { title: "ORM", items: ["Hibernate", "JPA"] },
  { title: "Web Services", items: ["REST API", "JSON"] },
  { title: "Build & Version Control", items: ["Maven", "Git"] },
  { title: "Server", items: ["Tomcat"] },
  { title: "Testing", items: ["JUnit"] },
];

export default function Skills() {
  const [orbitMode, setOrbitMode] = useState(false);

  return (
    <div className="skills-wrapper mb-5">

      {/* TOGGLE BUTTON */}
      <button
        className="toggle-btn"
        onClick={() => setOrbitMode(!orbitMode)}
      >
        {orbitMode ? "Structured View" : "Orbit View"}
      </button>

      {/* CARD VIEW (Your Existing UI) */}
      {!orbitMode && (
        <section className="skills-section">
          <div className="skills-header pt-4">
            <h2>Technologies</h2>
            <div className="underline"></div>
            <p>Technologies I use to build scalable applications</p>
          </div>

          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill-card card p-4" key={skill.title}>
                <span className="skill-title">{skill.title}</span>

                <div className="skill-list">
                  {skill.items.map(item => (
                    <span className="skill-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ORBIT VIEW */}
      {orbitMode && (
        <div className="orbit-view mt-3">
          <div className="scene">

            <div className="center">
              <h1>TECH STACK</h1>
              <p>Building scalable full-stack systems</p>
            </div>

            <div className="orbit orbit1">
              <div className="skill" style={{ top: "0%", left: "50%" }}>Spring Boot</div>
              <div className="skill" style={{ top: "50%", left: "100%" }}>React</div>
              <div className="skill" style={{ top: "100%", left: "50%" }}>MySQL</div>
              <div className="skill" style={{ top: "50%", left: "0%" }}>Java</div>
            </div>

            <div className="orbit orbit2">
              <div className="skill" style={{ top: "0%", left: "50%" }}>Hibernate</div>
              <div className="skill" style={{ top: "50%", left: "100%" }}>REST APIs</div>
              <div className="skill" style={{ top: "100%", left: "50%" }}>Oracle</div>
              <div className="skill" style={{ top: "50%", left: "0%" }}>Git</div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}