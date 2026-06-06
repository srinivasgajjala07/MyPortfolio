import React from "react";
import novaai from "../images/novaai.png";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaBriefcase,
} from "react-icons/fa";
import { SiMysql, SiSpring } from "react-icons/si";
import Randomuser from "../images/Randomuser.png";
import texttospeechimg from "../images/texttospeech.png";
import custchurnpredictionAppimg from "../images/custchurnpredictionApp.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div className='zoom-in-introd'>
          <h1 className="hero-title animate-title">
          <i>Hi I&apos;M Srinivas</i>
          </h1>
          <div id='desig'>Java FullStack Developer </div>
          <div>
            <div className="social-icons">
                <a href="https://github.com/srinivasgajjala07" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/srinivasgajjala77" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
           </div>
          </div>
          <div>
            <button className='explore' onClick={()=> navigate('./about')}>More About Srinivas</button>
          </div>
      </div> */}
      <div className="port-home">
        {/* TOP SECTION */}
        <div className="port-main">
          {/* LEFT */}
          <div className="port-left">
            <h1 className="port-title">Hi, I'm Srinivas</h1>

            <h2 className="port-subtitle">Java Full Stack Developer</h2>

            <p className="port-desc">
              I build web applications using Java, Spring Boot, React, and
              MySQL.
            </p>

            <p className="port-status">
              Currently seeking opportunities to grow as a Full Stack Developer.
            </p>

            <div className="port-buttons">
              <button className="port-btn port-btn-primary">
                View Projects
              </button>
              <button className="port-btn">Download Resume</button>
              <button className="port-btn port-btn-light">GitHub</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="port-right">
            <div className="port-grid">
              <div className="port-card">
                <FaJava size={40} color="#f89820" />
                <span>Java</span>
              </div>

              <div className="port-card">
                <FaReact size={40} color="#61DBFB" />
                <span>React</span>
              </div>

              <div className="port-card">
                <SiMysql size={40} color="#00758F" />
                <span>MySQL</span>
              </div>

              <div className="port-card">
                <SiSpring size={40} color="#6DB33F" />
                <span>Spring</span>
              </div>

              <div className="port-card">
                <FaDocker size={40} color="#2496ED" />
                <span>Docker</span>
              </div>

              <div className="port-card">
                <FaGitAlt size={40} color="#F1502F" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>

        <div className="port-stats">
          <div className="port-stat-card">
            <FaBriefcase size={30} />

            <div className="port-stat-text">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="port-stat-card">
            <FaBriefcase size={30} />

            <div className="port-stat-text">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="port-stat-card">
            <FaBriefcase size={30} />

            <div className="port-stat-text">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <section>
          <div className="title">
            <h1>Featured Projects</h1>
            <div className="underline"></div>
          </div>

          <div className="projects-grid">
            {/* Project Card */}
            <article className="project-card">
              <div className="image-box">
                <img src={novaai} alt="project" />
                <a
                  className="open-icon"
                  href="https://nova-ultra.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Nova Ai Chat App</h3>

                <div className="tech">
                  <span>Spring Boot</span>
                  <span>React</span>
                  <span>Css</span>
                </div>

                <div className="links">
                  <a href="https://nova-ultra.vercel.app/" target="_blank">
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a
                    href="https://github.com/srinivasgajjala07/chat-ai-fullstack"
                    target="_blank"
                  >
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="image-box">
                <img src={Randomuser} alt="Randomuserproject" />
                <a
                  className="open-icon"
                  href="https://srinivasgajjala07.github.io/Frontend-projects/newuser/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Random User</h3>

                <div className="tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="links">
                  <a
                    href="https://srinivasgajjala07.github.io/Frontend-projects/newuser/index.html"
                    target="_blank"
                  >
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a
                    href="https://github.com/srinivasgajjala07/Frontend-projects/tree/master/newuser"
                    target="_blank"
                  >
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="image-box">
                <img src={texttospeechimg} alt="project" />
                <a
                  className="open-icon"
                  href="https://srinivasgajjala07.github.io/Frontend-projects/text%20to%20speech/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Text to Speech Converter</h3>

                <div className="tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="links">
                  <a
                    href="https://srinivasgajjala07.github.io/Frontend-projects/text%20to%20speech/index.html"
                    target="_blank"
                  >
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a
                    href="https://github.com/srinivasgajjala07/Frontend-projects/tree/master/text%20to%20speech"
                    target="_blank"
                  >
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="image-box">
                <img
                  src={custchurnpredictionAppimg}
                  alt="custchurnpredictionAppimg"
                />
                <a
                  className="open-icon"
                  href="https://telcom-app.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Telcom Customer Churn Prediction App</h3>

                <div className="tech">
                  <span>Python</span>
                  <span>ML</span>
                  <span>Flask</span>
                </div>

                <div className="links">
                  <a href="https://telcom-app.onrender.com" target="_blank">
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a
                    href="https://github.com/srinivasgajjala07/mytelco.git"
                    target="_blank"
                  >
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="image-box">
                <img src={novaai} alt="project" />
                <a
                  className="open-icon"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Project Name</h3>

                <div className="tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="links">
                  <a href="#">
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a href="#">
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <div className="image-box">
                <img src={novaai} alt="project" />
                <a
                  className="open-icon"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                  </svg>
                </a>
              </div>

              <div className="content">
                <h3>Project Name</h3>

                <div className="tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <div className="links">
                  <a href="#">
                    Live
                    <span>
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
                    </span>
                  </a>
                  <a href="#">View</a>
                  <a href="#">
                    Github
                    <span>
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
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="all-projects">
            <button
              onClick={() => navigate("./Projects")}
              style={{ padding: "1% 4% 1% 4%" }}
            >
              All Projects
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
