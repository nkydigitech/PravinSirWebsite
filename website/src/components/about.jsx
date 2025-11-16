import React from 'react'
import './About.css'; // Importing CSS for styling

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <img src="/profile.jpg" alt="Profile" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Pravin Mishra, a Cloud, DevOps, Data and AI Consultant. I Help companies accelerate cloud, data, and AI adoption, automate CI/CD, and optimize AWS/Azure costs. I am an author of 3 books and mentor a learners land real jobs
          </p>
          <p>
            I specialize in helping companies with cloud computing, leveraging my expertise in AWS and Azure to deliver scalable, secure, and efficient solutions.
            I founded The CloudAdvisory, where I help organizations streamline their cloud development and optimization processes.  
          </p>
          <p>
            At The CloudAdvisory, I focus on:

            ✅ Cloud Migration & Modernization: Securely move and improve your infrastructure to the cloud.
            ✅ Cloud Development & Automation: Building and deploying cloud-native applications and automating cloud operations to enhance business agility and performance.
            ✅ Cost Optimization: Implementing strategies to reduce cloud expenses while maximizing resource utilization.
            ✅ Customized Cloud Training: As an AWS Authorized Trainer, I can deliver all AWS classroom training, 
                including:

                ✍️ Architecting on AWS

                ✍️ AWS Cloud Practitioner Essentials

                ✍️ AWS Migration Essentials

                ✍️ AWS Security Essentials

                ✍️ AWS Technical Essentials       
          </p>
          <p>
            I am an author of three books—"Cloud Computing with AWS," "Mastering AWS DevOps," and "Git and GitHub for Modern Software Development"—and an AWS Community Builder.
            I share my knowledge through books, online courses, and live training sessions. 
          </p>
        </div>
      </div>
      <div className="about-footer">
        About
      </div>
    </section>
  )
}

export default About
