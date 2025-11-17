import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaTwitter, FaBlog } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: <FaYoutube size={40} className="text-red-600" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <FaFacebook size={40} className="text-blue-600" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <FaLinkedin size={40} className="text-blue-700" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <FaTwitter size={40} className="text-blue-500" />,
    },
    {
      name: "Blogs",
      url: "#blogs",
      icon: <FaBlog size={40} className="text-gray-600" />,
    },
  ];

  return (
    <section
      className="w-full py-10 font-jakarta text-center"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <h2 className="text-3xl font-bold tracking-wide mb-4" style={{ color: "#232F3E" }}>
        Connect with Pravin Online
      </h2>
      <p className="text-gray-600 mb-12">
        Join the cloud journey — follow for insights, updates, and tutorials
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {links.map(({ name, url, icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            style={{ borderTop: "4px solid #0078D4" }}
          >
            <div className="mb-3 transition-transform group-hover:scale-110">
              {icon}
            </div>
            <span className="font-semibold text-[#232F3E] transition-colors group-hover:text-[#FF9900]">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
