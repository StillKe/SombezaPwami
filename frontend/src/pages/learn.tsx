import React from "react";
import styles from "./learn.css";

const impactStats = [
  { label: "People Reached through Community Programs", value: "Thousands" },
  { label: "Households Supported in Livelihoods & Skills", value: "Hundreds" },
  { label: "Water & Sanitation Facilities Constructed", value: "18 boreholes (10 non-functional)" },
  { label: "Volunteers Mobilized", value: "50+" },
  { label: "Coastal Counties Covered", value: "Kilifi, Mombasa, Kwale, Lamu, Taita-Taveta" },
  { label: "Training & Mentorship Sessions Delivered", value: "15+" },
];

const timelineEvents = [
  {
    date: "March 2025",
    title: "Women's Mentorship Program Launch",
    description:
      "Started mentorship sessions in collaboration with Equity Bank to empower women entrepreneurs along Kenya's coast.",
    icon: "👩‍💼",
  },
  {
    date: "April 2025",
    title: "Community Clean Water Initiative – Kilifi",
    description:
      "Installed water points and conducted hygiene awareness sessions benefiting local households.",
    icon: "💧",
  },
  {
    date: "May 2025",
    title: "Youth Skills Training Workshops",
    description:
      "Delivered vocational and leadership training sessions for coastal youth to enhance employability and entrepreneurship.",
    icon: "🛠️",
  },
  {
    date: "June 2025",
    title: "SDG Community Projects Rollout",
    description:
      "Implemented small-scale projects addressing health, education, and sustainable livelihoods aligned with UN SDGs.",
    icon: "🌱",
  },
  {
    date: "July 2025",
    title: "Women’s Day Celebration & Advocacy",
    description:
      "Hosted events highlighting women’s achievements and promoting gender equality across the coastal communities.",
    icon: "🎉",
  },
];

const featuredStories = [
  {
    title: "Mentorship Empowers Women Entrepreneurs",
    narrative:
      "Through guided mentorship, women in Kilifi and Kwale gained business skills, financial literacy, and access to support networks that strengthened their economic resilience.",
    quote: "“Sombeza Pwani helped me turn my small business into a sustainable venture.” — Coastal Woman Entrepreneur",
    photoAlt: "Women mentorship session",
    photoUrl: "/assets/images/mentorship_session.jpeg",
  },
  {
    title: "Clean Water Initiative Transforms Communities",
    narrative:
      "Installation of water points and hygiene promotion in rural areas significantly improved health outcomes and reduced waterborne diseases.",
    quote: "“Having clean water nearby changed our lives and kept our children healthy.” — Community Member",
    photoAlt: "Community water point",
    photoUrl: "/assets/images/water_point.jpeg",
  },
];

const LearningImpactPage = () => {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      {/* Intro Statement */}
      <section>
        <h1>Learning & Impact at Sombeza Pwani</h1>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
          At Sombeza Pwani, every initiative is an opportunity to empower coastal communities. 
          We measure success not only in numbers but by the transformed lives, strengthened 
          capacities, and improved opportunities for women, youth, and families. Our commitment 
          to sustainable development, mentorship, and community-led programs ensures we adapt 
          and improve continuously.
        </p>
      </section>

      {/* Impact Stats */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Impact at a Glance</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          {impactStats.map(({ label, value }) => (
            <div
              key={label}
              style={{
                padding: "1rem",
                background: "#f0f8ff",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{value}</h3>
              <p style={{ margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Impact Timeline</h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {timelineEvents.map(({ date, title, description, icon }) => (
            <li
              key={title}
              style={{
                marginBottom: "1.5rem",
                borderLeft: "3px solid #0077b6",
                paddingLeft: "1rem",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "-28px",
                  top: 0,
                  backgroundColor: "#0077b6",
                  color: "white",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
                aria-label="Timeline icon"
              >
                {icon}
              </span>
              <time
                style={{ fontWeight: "600", color: "#023e8a", display: "block" }}
                dateTime={date}
              >
                {date}
              </time>
              <h3 style={{ margin: "0.25rem 0" }}>{title}</h3>
              <p style={{ marginTop: 0 }}>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Stories */}
      <section style={{ marginTop: "3rem" }}>
        <h2>Featured Stories</h2>
        {featuredStories.map(({ title, narrative, quote, photoAlt, photoUrl }) => (
          <article
            key={title}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <img
              src={photoUrl}
              alt={photoAlt}
              style={{ width: 300, borderRadius: 8, objectFit: "cover", flexShrink: 0 }}
            />
            <div style={{ flex: "1 1 300px" }}>
              <h3>{title}</h3>
              <p>{narrative}</p>
              <blockquote
                style={{
                  fontStyle: "italic",
                  background: "#e0f7fa",
                  padding: "0.5rem 1rem",
                  borderLeft: "4px solid #0077b6",
                  margin: "1rem 0 0 0",
                }}
              >
                {quote}
              </blockquote>
            </div>
          </article>
        ))}
      </section>

      {/* Call to Action */}
      <section
        style={{
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "#0077b6",
          color: "white",
          textAlign: "center",
          borderRadius: 8,
        }}
      >
        <h2>Support Our Work</h2>
        <p>
          Help us empower women, youth, and communities along Kenya’s coast. Your contribution supports clean water, health, mentorship, and SDG-aligned community projects.
        </p>
        <a
          href="/donate"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            backgroundColor: "white",
            color: "#0077b6",
            padding: "0.75rem 1.5rem",
            borderRadius: 4,
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Donate Now
        </a>
      </section>
    </main>
  );
};

export default LearningImpactPage;
