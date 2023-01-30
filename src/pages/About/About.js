function About() {
  console.log("about");
  return (
    <div className="md:columns-2 md:mt-20 m-5 h-full">
      <div className="h-full">
        <img
          className="h-[420px]"
          src={process.env.PUBLIC_URL + "/images/Cleve.jpg"}
          alt="Man in purple shirt with tie smiling"
        ></img>
      </div>
      <div>
        <h1 className="text-white text-2xl text-center">About Me</h1>
        <p className="text-white text-xl text-start mt-3">
          As a freshly graduated web developer, I am a highly motivated
          individual with a strong passion for creating innovative and
          user-friendly web applications. I have a solid understanding of web
          development technologies such as HTML, CSS, JavaScript, and various
          frameworks and libraries. I am a quick learner and am constantly
          seeking to improve my skills and stay up to date with the latest
          industry trends. I am also a team player and have experience working
          in a collaborative environment. I am excited to bring my skills and
          enthusiasm to a dynamic company and help build cutting-edge web
          solutions.
        </p>
        <a
          className="text-blue-400"
          href={process.env.PUBLIC_URL + "/file/Resume.pdf"}
          download
        >
          Click here to download my resume
        </a>
      </div>
    </div>
  );
}

export default About;
