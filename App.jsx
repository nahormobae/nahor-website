import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const carouselStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
};

const sectionStyle = {
  background: "#f7fbff",
  borderRadius: "16px",
  padding: "32px",
  margin: "24px 0",
};

function App() {
  return (
    <div style={{ fontFamily: "'Nunito', Arial, sans-serif", background: "#e9f3fc", minHeight: "100vh" }}>
      <header style={{
        background: "linear-gradient(90deg, #47a4e9 60%, #6ee7b7 100%)",
        color: "#fff",
        padding: "36px 0 20px 0",
        textAlign: "center",
        borderRadius: "0 0 40px 40px",
        marginBottom: "32px",
        boxShadow: "0 2px 16px rgba(46, 140, 230, 0.15)"
      }}>
        <h1 style={{ fontWeight: 900, fontSize: "2.7rem" }}>Nahor Mobae Tutoring</h1>
        <p style={{ fontSize: "1.3rem", fontWeight: 600 }}>
          Professional tutoring for kids grades 4<sup>th</sup> to 7<sup>th</sup> <span role="img" aria-label="books">📚</span>
        </p>
      </header>
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 18px" }}>
        {/* Carousel Section */}
        <section style={{ marginBottom: "38px" }}>
          <Carousel style={carouselStyle} interval={5000} indicators={true} variant="dark">
            <Carousel.Item>
              <div style={{
                height: "330px",
                background: "#e8e8e8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "#aaa"
              }}>
                {/* TODO: Replace this blank image with your own photo. */}
                {/* To add your own image:
                      1. Save your photo in the 'public' folder, e.g., 'nahor.jpg'
                      2. Replace the <div> content below with:
                        <img src="/nahor.jpg" alt="Nahor Mobae" style={{ width: "100%", height: "330px", objectFit: "cover" }} />
                */}
                <span>
                  [Your photo goes here. See code comments for how to add it!]
                </span>
              </div>
              <Carousel.Caption>
                <h5>Meet Your Tutor!</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
                alt="Tutoring session"
                style={{ width: "100%", height: "330px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5>One-on-One and Group Tutoring</h5>
                <p>Learning made fun and effective!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* About Section */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#3a8fd9", fontWeight: 800 }}>Hi, I'm Nahor Mobae!</h2>
          <ul style={{ fontSize: "1.16rem", marginTop: 20, marginBottom: 0 }}>
            <li>UNC Charlotte student, Davidson College alum, and East Mecklenburg IB grad</li>
            <li>Passionate about helping kids learn and grow</li>
            <li>
              <span style={{ color: "#1bbb8b", fontWeight: 700 }}>Subjects:</span> Math, English, History, Science, and basic Spanish
            </li>
            <li>
              <span style={{ color: "#47a4e9", fontWeight: 700 }}>Grades:</span> 4<sup>th</sup> to 7<sup>th</sup>
            </li>
          </ul>
        </section>

        {/* Pricing Section */}
        <section style={{ ...sectionStyle, background: "#e4f1fb" }}>
          <h2 style={{ color: "#3a8fd9", fontWeight: 800 }}>Rates & Discounts</h2>
          <ul style={{ fontSize: "1.15rem", marginTop: 18 }}>
            <li><b>First session & consultation:</b> <span style={{ color: "#1bbb8b" }}>FREE!</span></li>
            <li><b>Standard rate:</b> $22/hour</li>
            <li><b>Sibling discount (joint lesson):</b> $17/hour each</li>
            <li><b>Sibling discount (separate lessons):</b> $20/hour each</li>
            <li><b>Group learning:</b>
              <ul style={{ marginTop: 8 }}>
                <li>2 students: $17.50/hour each</li>
                <li>3 students: $15.00/hour each</li>
                <li>4 students: $13.00/hour each</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Availability Section */}
        <section style={sectionStyle}>
          <h2 style={{ color: "#3a8fd9", fontWeight: 800 }}>Availability</h2>
          <ul style={{ fontSize: "1.15rem" }}>
            <li><b>Monday–Thursday:</b> 9:00 AM–1:00 PM</li>
            <li><b>Friday:</b> 9:00 AM–5:00 PM</li>
            <li><b>Weekends:</b> Currently unavailable, but may open in the future</li>
          </ul>
        </section>

        {/* Approach Section */}
        <section style={{ ...sectionStyle, background: "#e8f6e6" }}>
          <h2 style={{ color: "#1bbb8b", fontWeight: 800 }}>My Approach</h2>
          <ul style={{ fontSize: "1.15rem" }}>
            <li>Parents choose the workbook – I adapt to your preferred materials</li>
            <li>Progress is <b>tracked</b> for every student</li>
            <li>After every session, I communicate updates to parents</li>
            <li>Fun, engaging, and supportive learning environment</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section style={{
          ...sectionStyle,
          background: "linear-gradient(90deg, #47a4e9 60%, #6ee7b7 100%)",
          color: "#fff",
          textAlign: "center",
          marginBottom: 50
        }}>
          <h2 style={{ fontWeight: 900, fontSize: "2rem" }}>Contact & Booking</h2>
          <p style={{ fontSize: "1.3rem", margin: "18px 0 10px 0" }}>
            Ready to book your free session or have questions?
          </p>
          <p style={{
            fontSize: "1.1rem",
            background: "rgba(255,255,255,0.14)",
            borderRadius: 8,
            padding: "15px 0",
            display: "inline-block",
            margin: "8px 0",
            fontWeight: 700
          }}>
            <span role="img" aria-label="phone">📞</span> Business Number: <a href="tel:+19804289157" style={{ color: "#fff", textDecoration: "underline" }}>+1 980-428-9157</a>
          </p>
          <div style={{ marginTop: 12, fontSize: "1.05rem" }}>
            <span role="img" aria-label="email">📧</span> Email: <a href="mailto:nahor.mobae@gmail.com" style={{ color: "#fff", textDecoration: "underline" }}>nahor.mobae@gmail.com</a>
          </div>
          <div style={{ marginTop: 18, fontSize: "1.04rem" }}>
            <b>Leave a message or text for quick response!</b>
          </div>
        </section>
      </main>
      <footer style={{
        background: "#3a8fd9",
        color: "#fff",
        borderRadius: "12px 12px 0 0",
        padding: "16px 0",
        textAlign: "center",
        fontSize: "1.03rem"
      }}>
        &copy; {new Date().getFullYear()} Nahor Mobae Tutoring. All rights reserved.
      </footer>
    </div>
  );
}

export default App;