'use client';
import "../globals2.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.webp";
import project4 from "../../../public/project4.webp";
import project5 from "../../../public/project5.jpg";
import project6 from "../../../public/project6.jpg";

export default function ProjectsPage() {
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

      <section id="project" className="project-section">
        <div className="container" id="project-container">
          <div className="project">
            <h2>Project 1</h2>
            <Image src={project1} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>A website using next.js tailwindcss Type/Javascript prisma.</p>
            <table>
              <thead>
                <tr>
                  <th>Html</th>
                  <th>ReactJs</th>
                  <th>NextJs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cool and Basic</td>
                  <td>Well-known front-end libraries</td>
                  <td>User-friendly and Performance</td>
                </tr>
                <tr>
                  <td>Not include build-in SSR</td>
                  <td>Can Enable Server-side Rendering</td>
                  <td>Support Server-side Rendering</td>
                </tr>
                <tr>
                  <td>I love html</td>
                  <td>I love React</td>
                  <td>I love Next</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="project">
            <h2>Project 2</h2>
            <Image src={project2} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>Computer graphics Project using vite + React react-three mui</p>
          </div>

          <div className="project">
            <h2>Project 3</h2>
            <Image src={project3} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>PresentAR Project.</p>
          </div>

          <div className="project">
            <h2>Project 4</h2>
            <Image src={project4} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>Hear Inclusive Project.</p>
          </div>

          <div className="project">
            <h2>Project 5</h2>
            <Image src={project5} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>Attendance system project using html css javascript jquery.</p>
          </div>

          <div className="project">
            <h2>Project 6</h2>
            <Image src={project6} alt="" style={{ maxWidth: "100%", height: "auto" }} />
            <p>Delivery system website using php css javascript pythonAPI.</p>
          </div>
        </div>
      </section>
    </>
  );
}
