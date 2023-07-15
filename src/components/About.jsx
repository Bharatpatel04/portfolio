import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-20">
          Hello, my name is Bharat Patel, and I am from Udaipur, Rajasthan, India. I am a B.Tech student currently pursuing Computer Science at PIET. With a solid academic background, having secured 87% and 92% in my 12th and 10th exams respectively, I am deeply passionate about web development.

My experience and skills in this field include proficiency in several programming languages and frameworks, including HTML, CSS, JavaScript, and React. I have completed various web development projects, including a responsive website that received recognition at a regional competition.

With a keen interest in technology, I am continuously exploring new avenues to expand my knowledge. Recently, I've been intrigued by the world of cloud infrastructure and its potential applications in the tech industry. As I embark on my journey in computer science, I am excited about the opportunities that lie ahead and the chance to contribute my skills to innovative projects. I pride myself on my ability to adapt quickly to new challenges and technologies. I am a determined problem-solver, always striving to find efficient solutions to complex issues.
          </p>
          <br />
          <p className="text-xl">
            In addition to my technical skills, I am a dedicated team player and
            have excellent communication and problem-solving abilities. Outside
            of my academic pursuits, I enjoy playing cricket and cooking. I am
            excited about the opportunity to apply my skills and experience in a
            dynamic and innovative work environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
