import React from "react";

const About = () => {
  return (
    <section
      className="w-full py-15 px-4 font-jakarta flex justify-center"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div
        className="max-w-5xl bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t-4"
        style={{ borderTopColor: "#0078D4" }}
      >
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Pravin Mishra"
            className="w-72 h-72 object-cover rounded-xl shadow-md border-4"
            style={{ borderColor: "#FF9900" }} 
          />
        </div>

        <div className="text-left text-[#111827]">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#232F3E" }}>
            About Me
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Hi, I'm <span className="font-bold text-[#FF9900]">Pravin Mishra</span>, a
            Cloud, DevOps, Data, and AI Consultant with expertise in{" "}
            <span className="text-[#0078D4]">Azure</span> and{" "}
            <span className="text-[#FF9900]">AWS</span>. I'm passionate about helping
            companies modernize and secure their cloud infrastructure.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Founder of <strong>The CloudAdvisory</strong>, I lead cloud transformations,
            build scalable DevOps pipelines, and train tech professionals globally.
          </p>

          <ul className="space-y-2 mb-6">
            <li>🟧 Cloud Migration & Modernization</li>
            <li>🟦 DevOps & Automation (CI/CD, IaC)</li>
            <li>🟧 Cost Optimization & Security</li>
            <li>🟦 AWS Classroom Training & Mentorship</li>
          </ul>

          <button
            className="mt-4 inline-block bg-[#FF9900] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#cc7a00] transition"
            onClick={() => window.open("https://www.linkedin.com/in/pravin-mishra-aws-trainer/", "_blank")}
          >
            Connect on LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
