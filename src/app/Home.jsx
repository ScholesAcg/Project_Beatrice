'use client';
import "./globals2.css";


// File: page.js (Home page component)
import Image from "next/image";
import Link from "next/link";
import profilePhoto from "../../public/me.jpg"; // Move 'me.jpg' to 'public' directory
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    // Handle popup display after 5 seconds
    const timer = setTimeout(() => {
      const popup = document.getElementById("popup-box");
      if (popup) popup.style.display = "block";
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const hidePopup = () => {
    const popup = document.getElementById("popup-box");
    if (popup) popup.style.display = "none";
  };

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

      <section id="home" className="home-section">
        <div className="container" id="home-container">
          <Image src={profilePhoto} alt="Scholes Ho" className="profile-photo" />
          <h1>Hello, I'm HO Pak Yin Scholes</h1>
          <p>Welcome to my personal website!</p>
          <p style={{ color: "rgb(209, 209, 209)" }}>To prevent darkness popup don't stay here too long</p>
        </div>
      </section>

      {/* Hidden popup box */}
      <div
        id="popup-box"
        style={{
          display: "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          zIndex: 100,
        }}
      >
        <p>The Dark Side</p>
        <Link href="/darkness" onClick={hidePopup}>
          Deep into the darkness
        </Link>
      </div>
    </>
  );
}

// File: about/page.js and projects/page.js
// Create a simple component for the About and Projects page
export function AboutPage() {
  return <h1>About Me</h1>; // Customize content
}

export function ProjectsPage() {
  return <h1>My Projects</h1>; // Customize content
}

// File: darkness/page.js
export function DarknessPage() {
  return <h1>Welcome to the Dark Side</h1>; // Customize content
}

// Note: Update all routes and assets according to Next.js conventions and use Next.js Link, Image, and CSS Modules for a modern, modular approach.
