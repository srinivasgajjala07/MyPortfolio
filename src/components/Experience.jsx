import React from "react";

const Experience = () => {
  return (
    <>
      <style>
        {`
       
        .experience-title {
          text-align: center;
          font-size: 40px;
          font-weight: 500;
          margin-top:1%;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: auto;
          padding-left: 30px;
          border-left: 3px solid #4f46e5;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 30px;
        }

        .timeline-dot {
          position: absolute;
          left: -12px;
          top: 6px;
          width: 20px;
          height: 20px;
          background: #4f46e5;
          border-radius: 50%;
          box-shadow: 0 0 0 6px rgba(79,70,229,0.15);
        }

        .role {
          font-size: 26px;
          font-weight: 700;
        }

        .duration {
          margin-top: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        .points {
          margin-top: 20px;
          padding-left: 15px;
        }

        .points li {
          margin-bottom: 10px;
          line-height: 1.6;
        }

        .tech {
          margin-top: 20px;
        }

        .tech span {
          display: inline-block;
          margin: 8px 10px 0 0;
          padding: 6px 16px;
          border-radius: 30px;
          background: #111827;
          color: white;
          font-size: 12px;
          transition: 0.3s ease;
        }

        .tech span:hover {
          background: #4f46e5;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .experience-title {
            font-size: 28px;
          }

          .role {
            font-size: 20px;
          }
        }
          .cmpny{
          margin:1% 0% 1% 0%;
          }
        `}
      </style>

      <section className="experience-section">
        <h1 className="experience-title">Experience</h1>
        <div className="underline mb-3"></div>

        <div className="timeline mb-5">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="role">Software Engineer</div>
            <div className="cmpny">Soltech Infolabs</div>
            <div className="duration">April 2025 — Present</div>

            <ul className="points">
              <li>Developed scalable REST APIs using Spring Boot.</li>
              <li>Built responsive UI using React.js.</li>
              <li>Optimized MySQL queries for better performance.</li>
              <li>Resolved production issues and improved system stability.</li>
            </ul>

            <div className="tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;