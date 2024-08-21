import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={`container ${inter.className}`}>
      <h1 className="heading">About DevHunter</h1>
      <p className="intro">
        Welcome to <strong>DevHunter</strong>, where passion meets technology.
        Our platform is dedicated to providing developers and tech enthusiasts
        with the tools, resources, and inspiration they need to excel in the
        fast-paced world of web development.
      </p>

      <h2 className="subheading">Our Mission</h2>
      <p className="paragraph">
        At DevHunter, we believe in the power of knowledge sharing. Our mission
        is to:
      </p>
      <ul className="list">
        <li>Provide in-depth tutorials and coding tips</li>
        <li>Offer industry insights and best practices</li>
        <li>Support developers in their growth and success</li>
      </ul>

      <h2 className="subheading">What We Offer</h2>
      <p className="paragraph">
        Our content is designed to help developers at all levels, from beginners
        to seasoned professionals. We cover:
      </p>
      <ul className="list">
        <li>JavaScript frameworks and libraries</li>
        <li>Modern development practices</li>
        <li>Emerging technologies in web development</li>
      </ul>

      <h2 className="subheading">Join Our Community</h2>
      <p className="paragraph">
        DevHunter is more than just a blog—it's a community. We encourage our
        readers to:
      </p>
      <ul className="list">
        <li>Engage with our content</li>
        <li>Share their experiences</li>
        <li>Contribute to the collective knowledge of the tech community</li>
      </ul>

      <p className="closing">
        Thank you for being a part of DevHunter. We’re excited to have you on
        this journey with us. Happy coding!
      </p>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 30px;
          border-radius: 10px;
        }
        .heading {
          font-size: 1.7rem;
          margin-bottom: 20px;
          text-align: center;
          font-weight: bold;
        }
        .subheading {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .intro,
        .closing {
          font-size: 1.1rem;
          margin-bottom: 20px;
          text-align: justify;
        }
        .paragraph {
          font-size: 1.1rem;
          margin-bottom: 15px;
          text-align: justify;
        }
        .list {
          font-size: 1.1rem;
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .list li {
          margin-bottom: 10px;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }
          .heading {
            font-size: 1.5rem;
          }
          .subheading {
            font-size: 1.3rem;
          }
          .intro,
          .closing,
          .paragraph,
          .list {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 15px;
          }
          .heading {
            font-size: 1.3rem;
          }
          .subheading {
            font-size: 1.2rem;
          }
          .intro,
          .closing,
          .paragraph,
          .list {
            font-size: 0.9rem;
          }
          .list {
            padding-left: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
