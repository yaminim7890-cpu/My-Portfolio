
import { useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML", icon: "🌐", level: "Frontend" },
  { name: "CSS", icon: "🎨", level: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: "Programming" },
  { name: "React", icon: "⚛️", level: "Frontend" },
  { name: "Bootstrap", icon: "🅱️", level: "Framework" },
  { name: "Python", icon: "🐍", level: "Programming" },
  { name: "MySQL", icon: "🗄️", level: "Database" },
  { name: "AI & ML", icon: "🤖", level: "Specialization" },
];

const projects = [
  {
    title: "Country Explorer",
    category: "React Application",
    description:
      "An interactive country explorer that allows users to search countries and explore information such as flags, population, capital, region and more.",
    tech: ["React", "JavaScript", "REST API", "CSS"],
    icon: "🌍",
    number: "01",
    color: "country",
    link: "#",
  },
  {
    title: "QuickCart",
    category: "E-Commerce Website",
    description:
      "An online flower and bouquet shopping website with product listings, shopping cart interface, navigation and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: "🛍️",
    number: "02",
    color: "quickcart",
    link: "#",
  },
  {
    title: "React Bits",
    category: "React UI Components",
    description:
      "A React project exploring modern UI components, creative animations, interactive elements and visually engaging web design.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "⚛️",
    number: "03",
    color: "reactbits",
    link: "#",
  },
  {
    title: "Grand Palace Hotel",
    category: "Hotel Website",
    description:
      "A hotel website with a home page, menu, hotel information and elegant presentation of food items and hospitality services.",
    tech: ["HTML", "CSS", "JavaScript", "Express.js"],
    icon: "🏨",
    number: "04",
    color: "hotel",
    link: "#",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications",
    specialization: "AI & ML Specialization",
    college: "Aditya Institute of Management Studies",
    year: "2024 – Present",
    score: "Currently Pursuing",
  },
  {
    degree: "Pre-University Course (PUC)",
    specialization: "Science",
    college: "Pragathi Composite PU College",
    year: "2022 – 2024",
    score: "80.16%",
  },
  {
    degree: "SSLC",
    specialization: "Secondary Education",
    college: "Morarji Desai Residential School",
    year: "2021 – 2022",
    score: "95.52%",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Yamini<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
<a href="#about" onClick={closeMenu}>About</a>
<a href="#skills" onClick={closeMenu}>Skills</a>
<a href="#projects" onClick={closeMenu}>Projects</a>
<a href="#certificates" onClick={closeMenu}>Certificates</a>
<a href="#languages" onClick={closeMenu}>Languages</a>
<a href="#education" onClick={closeMenu}>Education</a>
<a href="#contact" onClick={closeMenu} className="nav-contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-label">
            <span className="status-dot"></span>
            Welcome to my portfolio
          </div>

          <h1>
            Hi, I'm <span>Yamini</span>
          </h1>

          <h2>
            Aspiring <span>Web Developer</span>
          </h2>

          <p className="hero-description">
            A passionate BCA student specializing in AI & ML,
            interested in web development, creative designs and
            building interactive digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/yaminim7890-cpu" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/yamini-m-280036439" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="my photo.jpeg"
              alt="Yamini"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            <div className="profile-fallback">
              <span>Y</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span>✨</span>
            Creative Developer
          </div>

          <div className="floating-card floating-card-bottom">
            <span>💻</span>
            Building & Learning
          </div>

          <div className="hero-circle"></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-content">
          <span>WEB DEVELOPMENT</span>
          <span>✦</span>
          <span>CREATIVE DESIGN</span>
          <span>✦</span>
          <span>AI & MACHINE LEARNING</span>
          <span>✦</span>
          <span>WEB DEVELOPMENT</span>
          <span>✦</span>
          <span>CREATIVE DESIGN</span>
          <span>✦</span>
          <span>REACT</span>
          <span>✦</span>
          <span>AI & MACHINE LEARNING</span>
          <span>✦</span>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section about" id="about">
        <div className="section-heading">
          <span className="section-tag">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about who I am.</p>
        </div>

        <div className="about-container">
          <div className="about-decoration">
            <div className="about-letter">Y</div>
            <div className="about-caption">Curious mind. Creative soul.</div>
          </div>

          <div className="about-text">
            <h3>Hello! I'm Yamini 👋</h3>

            <p>
              I am currently pursuing my Bachelor of Computer Applications
              with an AI & ML specialization. I enjoy exploring web
              technologies and creating websites that are simple,
              attractive and user-friendly.
            </p>

            <p>
              I am continuously learning new technologies, improving
              my programming skills and turning creative ideas into
              practical projects.
            </p>

            <div className="about-highlights">
              <div>
                <span>🎓</span>
                <p>BCA Student</p>
              </div>

              <div>
                <span>💻</span>
                <p>Web Development</p>
              </div>

              <div>
                <span>🌱</span>
                <p>Always Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills" id="skills">
        <div className="section-heading">
          <span className="section-tag">WHAT I KNOW</span>
          <h2>My <span>Skills</span></h2>
          <p>Technologies and tools I am learning and working with.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <span>✦</span> Currently exploring new technologies and improving my skills.
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects" id="projects">
        <div className="section-heading">
          <span className="section-tag">MY RECENT WORK</span>
          <h2>Featured <span>Projects</span></h2>
          <p>A collection of projects I've built while learning and exploring.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual ${project.color}`}>
                <div className="project-visual-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-art">
                  <div className="project-art-circle"></div>
                  <span className="project-main-icon">{project.icon}</span>
                </div>

                <div className="project-visual-bottom">
                  <span></span>
                  <span>✦</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-arrow">↗</span>
                </div>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* EDUCATION */}
      <section className="section education" id="education">
        <div className="section-heading">
          <span className="section-tag">MY JOURNEY</span>
          <h2>Education</h2>
          <p>My academic background.</p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={item.degree}>
              <div className="timeline-marker">{index + 1}</div>

              <div className="education-card">
                <span className="education-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4>{item.specialization}</h4>
                <p>{item.college}</p>
                <span className="education-score">{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact" id="contact">
        <div className="contact-box">
          <div className="section-heading">
            <span className="section-tag">LET'S CONNECT</span>
            <h2>Get In <span>Touch</span></h2>
            <p>
              I'm always open to learning opportunities, collaborations
              and connecting with people.
            </p>
          </div>

          <a href="yaminim7890@gmail.com" className="primary-btn">
            Send Me an Email ↗
          </a>

          <div className="contact-links">
            <a href="https://github.com/yaminim7890-cpu" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/yamini-m-280036439" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Yamini<span>.</span>
        </a>

        <p>Designed & built with ♡ by Yamini</p>

        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
