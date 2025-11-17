import React from "react";
import { FaAmazon, FaYoutube, FaLinkedin, FaInstagram, FaBook } from "react-icons/fa";

const LearnersTrust = () => {
  const data = [
    {
      icon: <FaAmazon size={40} className="text-[#FF9900]" />, // Amazon Orange
      title: "Amazon Author Page",
      subtitle: "View all my published books",
      url: "#",
    },
    {
      icon: <FaYoutube size={40} className="text-red-600" />,
      title: "11K+ YouTube Subscribers",
      subtitle: "Free hands-on cloud lessons weekly",
      url: "#",
    },
    {
      icon: <FaLinkedin size={40} className="text-blue-700" />,
      title: "20K+ LinkedIn Followers",
      subtitle: "Follow me for daily cloud insights",
      url: "#",
    },
    {
      icon: <FaInstagram size={40} className="text-pink-500" />,
      title: "2K+ Instagram Followers",
      subtitle: "Behind the scenes of cloud training",
      url: "#",
    },
    {
      icon: <FaBook size={40} className="text-[#232F3E]" />, // Dark tone
      title: "Author of 3 Books",
      subtitle: "Published on Amazon & Apress",
      url: "#",
    },
  ];

  return (
    <section className="w-full py-20 px-6 font-jakarta" style={{ backgroundColor: "#F9FAFB" }}>
      <h2 className="text-center text-3xl font-bold mb-2" style={{ color: "#232F3E" }}>
        Learners Worldwide Trust Pravin Mishra
      </h2>

      <p className="text-center text-gray-600 mb-14">
        Backed by a strong community, expert content, and real-world cloud training
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            style={{ borderTop: "4px solid #0078D4" }} // Azure Blue
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>

            <h3
              className="font-bold text-lg underline underline-offset-2"
              style={{ color: "#232F3E" }}
            >
              {item.title}
            </h3>

            <a
              href={item.url}
              className="block mt-2 text-sm hover:text-[#FF9900] underline transition"
            >
              {item.subtitle}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnersTrust;
