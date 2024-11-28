'use client';
import "../globals2.css";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="#home" className="nav-logo">
            Portfolio
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section id="about" className="about-section">
        <div className="container" id="about-container">
          <h1>Scholes HO</h1>
          <p>Full-Stack Developer | iOS Development | Gamer</p>
          <br />
          <p>
            I'm a Higher Diploma graduate in Software Engineering and Computing from the Hong Kong Polytechnic University (PolyU), {/* eslint-disable-line react/no-unescaped-entities */}
            currently diving deeper into the realms of JavaScript, Python, and Artificial Intelligence. My passion lies in harnessing
            the power of technology to create innovative solutions that make a difference. From participating in hackathons like the
            Techathon 2023 to developing projects in React and exploring AI's potential, I'm on a journey to become a skilled developer {/* eslint-disable-line react/no-unescaped-entities */}
            and a visionary in tech. Dive into my portfolio to see the projects I've worked on and the technologies I'm excited about! {/* eslint-disable-line react/no-unescaped-entities */}
          </p>

          <h2>Skills</h2>
          <ul id="skills">
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>React | NextJs</li>
            <li>DiscordJs</li>
          </ul>

          <h2>Education</h2>
          <p>2022-2024: The Hong Kong Polytechnic University (PolyU) Bachelor of Science (Honours) Computing</p> 
          <p>2020-2022: Hong Kong Institute of Vocational Education (Sha Tin) Higher Diploma in Software Engineering</p>

          <h2>Achievements</h2>
          <p>Techathon 2023 (EdTech & ArtTech) Champion</p>
          <p>8th Internet+ College Students Innovation and Entrepreneurship Competition Gold Award</p>
          <p>Maic2022 (Asia) First prize</p>

          <h2>Certifications</h2>
          <p>App Development with Swift – Certified User</p>
          <p>MS-900 Microsoft 365 Fundamentals</p>
          <p>AI-900 Microsoft Azure AI Fundamentals</p>

          <div id="contact-info">
            <h2>Contact</h2>
            <p>Email: pakyin2018@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}