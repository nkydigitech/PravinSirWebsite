import React from "react";
import Ai from "../assets/AI.png"
import Cloud from "../assets/Cloud.png"
import data from "../assets/data.png"
import devops from "../assets/Devops.png"

const CloudDevOpsConsulting = () => {
  const services = [
    {
      title: "AI Strategy & Adoption",
      desc: "Design and integrate AI-powered solutions using AWS & Azure services like SageMaker, Bedrock, and OpenAI APIs.",
      img: Ai,
    },
    {
      title: "Cloud Transformation Strategy",
      desc: "We help you build a scalable and future-proof cloud roadmap aligned with your business vision.",
      img: Cloud,
    },
    {
      title: "DevOps Transformation",
      desc: "Accelerate software delivery by implementing CI/CD, IaC, observability, and DevOps best practices.",
      img: data,
    },
    {
      title: "Data Science Consulting",
      desc: "Unlock actionable insights from your data using modern ML models, data pipelines, and real-time analytics dashboards.",
      img: devops,
    },
  ];

  return (
    <section
      className="w-full py-10 px-6 font-jakarta"
      style={{ backgroundColor: "#F9FAFB" }} // Gray-50
    >
      <h2
        className="text-center text-3xl font-bold mb-14"
        style={{ color: "#232F3E" }} // AWS Dark
      >
        Cloud & DevOps Consulting
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl p-6 rounded-xl flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-2"
            style={{ borderTop: `4px solid #FF9900` }} // AWS Orange top border
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-25 h-20 mx-auto"
            />
            <h3 className="font-semibold text-lg text-[#232F3E] text-center">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudDevOpsConsulting;  