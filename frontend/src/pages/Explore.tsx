import React, { useState, useEffect } from "react";
import "../styles/Explore.css"; // Make sure this file includes the fade + layout styles

export default function Explore() {
  // Hero slideshow images
  const images = [
    { url: "/assets/images/image1.jpeg", description: "Empowering coastal communities through sustainable projects." },
    { url: "/assets/images/image2.jpeg", description: "Women leading community initiatives in Kenya's coast." },
    { url: "/assets/images/image3.jpeg", description: "Youth engagement and mentorship programs in action." },
    { url: "/assets/images/image4.jpeg", description: "Celebrating local achievements and community progress." },
    { url: "/assets/images/image5.jpeg", description: "Education and skill-building initiatives for women and youth." },
    { url: "/assets/images/image6.jpeg", description: "Promoting equality, rights, and social cohesion." },
    { url: "/assets/images/image7.jpeg", description: "Environmental conservation and community-led sustainability projects." },
    { url: "/assets/images/image8.jpeg", description: "Mentorship sessions with local and international partners." },
    { url: "/assets/images/image9.jpeg", description: "Cultural events celebrating women and youth empowerment." },
    { url: "/assets/images/image10.jpeg", description: "Fostering positive change along Kenya's coastal region." }
  ];

  const sectors = [
    {
      title: "Community Empowerment",
      desc: "Initiatives focused on building skills, leadership, and capacity in local communities.",
      bullets: ["Women empowerment programs", "Youth leadership and mentorship", "Capacity building workshops"]
    },
    {
      title: "SDG Projects",
      desc: "Implementing UN Sustainable Development Goals through local projects in health, education, and livelihoods.",
      bullets: ["Sustainable livelihoods support", "Climate-resilient initiatives", "Health and education programs"]
    },
    {
      title: "Mentorship & Partnerships",
      desc: "Collaborations with organizations like Equity Bank to mentor and support women and youth.",
      bullets: ["Mentorship programs", "Partnership-driven projects", "Community engagement events"]
    },
    {
      title: "Advocacy & Rights",
      desc: "Promoting equality, social justice, and human rights in coastal communities.",
      bullets: ["Gender equality campaigns", "Rights awareness sessions", "Community advocacy programs"]
    }
  ];

  const coverage = [
    "Coastal Counties: Kilifi, Mombasa, Kwale, Lamu, Taita-Taveta",
    "Community outreach: Local villages and coastal towns",
    "Partner network: Schools, NGOs, and private sector collaborators"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (i) => setCurrentImageIndex(i);

  return (
    <div className="explore-page">
      {/* Hero slideshow */}
      <div className="explore-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`explore-image ${index === currentImageIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.url})`,
              opacity: index === currentImageIndex ? 1 : 0
            }}
            aria-hidden={index !== currentImageIndex}
          ></div>
        ))}

        <div className="explore-content">
          <h1>Explore Sombeza Pwani</h1>
          <p>{images[currentImageIndex].description}</p>
        </div>

        {images.length > 1 && (
          <>
            <button className="nav-button left" onClick={prevImage} aria-label="Previous image">
              &#10094;
            </button>
            <button className="nav-button right" onClick={nextImage} aria-label="Next image">
              &#10095;
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="dots-container">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentImageIndex ? "active" : ""}`}
                onClick={() => goToImage(i)}
              ></span>
            ))}
          </div>
        )}

        <div className="explore-pattern"></div>
      </div>

      {/* About & Coverage */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <section className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">What we do</h2>
            <p className="text-gray-700 mb-4">
              Sombeza Pwani implements sustainable development initiatives along Kenya’s coast. We focus on empowering communities, supporting women and youth, and promoting equality and resilience through mentorship, SDG-aligned projects, and local partnerships.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Women and youth empowerment programs</li>
              <li>Community-led SDG projects in health, education, and livelihoods</li>
              <li>Mentorship and partnership initiatives with organizations like Equity Bank</li>
              <li>Advocacy for gender equality and community rights</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Coverage</h2>
            <p className="text-gray-700 mb-4">
              Our work spans key coastal counties in Kenya, engaging with local communities, schools, and partner organizations to foster sustainable development and social progress.
            </p>
            <ul className="list-inside space-y-2 text-gray-700">
              {coverage.map((c, i) => (
                <li key={i}> {c}</li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="font-medium">Quick contacts</h3>
              <p className="text-sm text-gray-600">Phone (Kenya): +254 722 303 366</p>
              <p className="text-sm text-gray-600">Email: info@sombezapwani.org</p>
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Sectors</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <article key={s.title} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <ul className="mt-3 list-disc pl-5 text-gray-600 text-sm">
                  {s.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Get involved */}
        <section className="mb-10 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-3">Get Involved</h2>
          <p className="text-gray-700">
            Join us in empowering coastal communities. Support our projects, volunteer your time, or partner with us to help advance sustainable development along Kenya’s coast.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a className="px-4 py-2 bg-green-600 text-white rounded" href="#volunteer">
              Volunteer
            </a>
            <a className="px-4 py-2 border rounded" href="#partner">
              Partner with us
            </a>
            <a className="px-4 py-2 border rounded" href="#donate">
              Donate / CSR
            </a>
          </div>
        </section>

        {/* Photos + Map */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-3">Latest photos</h2>
            <div className="grid grid-cols-2 gap-2">
              {images.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={`photo ${i + 1}`}
                  className="w-full h-40 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-3">Map & Presence</h2>
            
            <div className="h-56 bg-gray-200 rounded flex items-center justify-center text-gray-500">
              Location
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t mt-8 text-center text-gray-600">
          <p className="mb-2">
            Sombeza Pwani Advancing sustainable development & community empowerment along Kenya’s coast. 
          </p>
          <p>Follow us: @SombezaPwani @SombezaPwaniNGO</p>
        </footer>
      </div>
    </div>
  );
}
