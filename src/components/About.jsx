import React from "react";
import profile from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import urceimg from "../assets/URCE2.jpg";
import stanns from "../assets/stann's.png";
import ur from "../assets/UR.png";
import Skills from "./skills.jsx";
import Experience from "./Experience.jsx";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="section d-flex">
        <div className="aboutSection">
          <h1 className="gettoknow mb-5">Get to Know Me</h1>
          <div className="d-flex mx-5">
            <img src={profile} alt="portfoliopicture" className="profile_Pic" />
            <div className="social-icons px-5">
              <a
                href="https://github.com/srinivasgajjala07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/srinivasgajjala77"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="mail tada">srinivasgajjala777@gmail.com</div>
          <p className="fs-5 mt-2 text-secondary aboutMepara fade-in">
            I’m Srinivas, a Java Full-Stack Developer who enjoys building clean,
            practical, and user-friendly web applications.
          </p>
          <div className="mt-2 ms-2">
            <button
              onClick={() => navigate("/Projects")}
              style={{ padding: "2% 9% 2% 9%", width: "48%" }}
            >
              Explore More
            </button>
          </div>
        </div>

        <div className="aboutSections col-md-6">
          <p className="aboutMe fs-5 lh-lg text-secondary col-md-10">
            I’m Srinivas, a Java Full-Stack Developer with a love for building
            simple and meaningful web applications. I enjoy solving problems,
            refining details, and shaping ideas into practical solutions.
            Continuous learning and steady improvement guide the way I work and
            grow.
          </p>
        </div>
      </section>
      <div className="aboutedutsection">
      <div className="education text-center my-2 pt-3">
        <h1>Education</h1>
        <div className="underline"></div>
      </div>

      <div className="container p-3 pt-md-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="edu-card">
              <img src={ur} alt="College" className="edu-img" />
              <div className="edu-text">
                <div className="percentage">
                 <span>81.5%</span>
                </div>  
              </div>
              <div className="edu-overlay px-4">
                <img alt="portfoliopicture" className="profile_Pic mb-4" src="/src/assets/Logo.png"/>
                <h4>Usha Rama College of Engineering and Technology</h4>
                <p>2020-2024</p>
                <button className="rounded-1 p-2 mb-3">Percentage : 81.5%</button>
                <h4>Computer Science Engineering</h4>
                <p className="mt-1">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="edu-card">
              <img src={urceimg} alt="Intermediate" className="edu-img" />
              <div className="edu-text">
               <div className="percentage">
                 <span>92.8%</span>
                </div>
              </div>
              <div className="edu-overlay px-5">
                 <img alt="portfoliopicture" className="profile_Pic mb-4" src="/src/assets/Logo.png"/>
                <h4>Sri Krishna Chaitanya Junior College</h4>
                <p>2018-2020</p>
                <button className="rounded-1 p-2 mb-3">Percentage : 92.8%</button>
                <h4>Intermediate - MPC</h4>
                <p className="mt-1">Narasaraopet, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-4">
            <div className="edu-card">
              <img src={stanns} alt="School" className="edu-img" />
              <div className="edu-text">
                <div className="percentage">
                 <span>90%</span>
                </div>
              </div>
              <div className="edu-overlay px-5">
                 <img alt="portfoliopicture" className="profile_Pic mb-4" src="/src/assets/Logo.png"/>
                <h4>Stann's English Medium High School</h4>
                <p>2017-2018</p>
                <button className="rounded-1 p-2 mb-3">Percentage : 90%</button>
                <h4>High School - SSC</h4>
                <p className="mt-1">macherla, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="text-centre">
        <Experience/>
      </div>
      <div>
           <Skills />       
      </div>      
    </div>
  );
}

export default About;
