// src/pages/donate.tsx
import React from 'react';
import '../styles/donate.css';

const Donations: React.FC = () => {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1>Donations & Partnerships</h1>

      <section style={{ marginTop: '2rem' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          At Sombeza Pwani, we rely on the generosity of donors and the collaboration of partners to make a lasting impact along Kenya’s coast. Your support enables us to empower women, youth, and communities, deliver essential services, and drive progress toward the UN Sustainable Development Goals (SDGs).
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>How You Can Support Us</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Monetary Donations:</strong> Fund community projects, clean water initiatives, mentorship programs, and emergency response.</li>
          <li><strong>In-kind Donations:</strong> Supplies, educational materials, or equipment that support coastal communities.</li>
          <li><strong>Volunteer Partnerships:</strong> Join us in mentorship, training, and outreach programs for women and youth.</li>
          <li><strong>Corporate Sponsorships:</strong> Partner for social impact, sustainable development, and community growth.</li>
          <li><strong>Technical Collaboration:</strong> Share expertise, tools, or innovations to strengthen our programs.</li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Our Current Partners</h2>
        <ul>
          <li>Equity Bank – Women Mentorship & Entrepreneurship Program</li>
          <li>Local County Governments – Kilifi, Mombasa, Kwale, Lamu, Taita-Taveta</li>
          <li>Community-Based Organizations</li>
          <li>Volunteer Networks & Youth Groups</li>
          <li>International Development Agencies supporting SDGs</li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem', backgroundColor: '#f0f8ff', padding: '1.5rem', borderRadius: 8 }}>
        <h2>Make a Donation</h2>
        <p>Your generous donation empowers women, youth, and communities. Choose one of the following methods to contribute:</p>
        <ul>
          <li><strong>Bank Transfer:</strong> Account Name: Sombeza Pwani | Account Number: 123456789 | Bank: XYZ Bank</li>
          <li><strong>Mobile Money:</strong> Paybill Number: 123456 | Account: Sombeza Pwani</li>
          <li>
            <strong>Online Payment:</strong> <a href="/donate" style={{ color: '#0077b6', textDecoration: 'underline' }}>Donate via our secure portal</a>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a
          href="/contact"
          style={{
            backgroundColor: '#0077b6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 4,
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Contact Us for Partnership Opportunities
        </a>
      </section>
    </main>
  );
};

export default Donations;
