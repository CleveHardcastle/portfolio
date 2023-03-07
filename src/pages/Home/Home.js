function Home() {
  return (
    <main className="mb-auto mt-20 sm:mt-44 flex flex-row flex-wrap justify-between items-stretch gap-4 md:gap-0">
      <div className="h-full flex items-center w-full md:w-1/2 text-center md:text-left">
        <div className="fade-in banner flex flex-1 flex-col px-6 py-10 dark:text-white lg:ml-[100px]">
          <h1 className="text-3xl font-bold text-white lg:mr-8 ">
            Hello, I am Cleve Hardcastle III
          </h1>
          <p class="my-2 text-lg text-white lg:my-4 lg:text-2xl">
            Full Stack Web Developer
          </p>
          <p class="my-2 text-lg text-white lg:my-4 lg:text-2xl">
            See my{" "}
            <span className="bg-cyan-400 text-black hover:bg-cyan-300 hover:text-white">
              <a href="/work">Work</a>
            </span>{" "}
            or read more{" "}
            <span className="bg-cyan-400 text-black hover:bg-cyan-300 hover:text-white">
              <a href="/about">About</a>
            </span>{" "}
            me
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 items-center h-full px-6 py-10 text-center md:text-left">
        <h1 className="text-3xl font-bold text-white lg:mr-8">Skills</h1>
        <div className="mx-auto md:mx-0 flex flex-row flex-wrap w-full justify-center md:justify-start gap-3 max-w-sm mt-4">
          <div className="bg-red-500 p-2 rounded-md w-fit">HTML</div>
          <div className="bg-orange-500 p-2 rounded-md w-fit">CSS</div>
          <div className="bg-amber-500 p-2 rounded-md w-fit">JavaScript</div>
          <div className="bg-yellow-500 p-2 rounded-md w-fit">jQuery</div>
          <div className="bg-lime-500 p-2 rounded-md w-fit">React</div>
          <div className="bg-green-500 p-2 rounded-md w-fit">Node.js</div>
          <div className="bg-emerald-500 p-2 rounded-md w-fit">SQL</div>
          <div className="bg-teal-500 p-2 rounded-md w-fit">NoSQL</div>
          <div className="bg-cyan-500 p-2 rounded-md w-fit">MongoDB</div>
          <div className="bg-sky-500 p-2 rounded-md w-fit">Compass</div>
          <div className="bg-blue-500 p-2 rounded-md w-fit">Figma</div>
          <div className="bg-indigo-500 p-2 rounded-md w-fit">Express</div>
          <div className="bg-violet-500 p-2 rounded-md w-fit">Restful API</div>
          <div className="bg-purple-500 p-2 rounded-md w-fit">GraphQL</div>
          <div className="bg-fuchsia-500 p-2 rounded-md w-fit">
            Handlebars.js
          </div>
          <div className="bg-pink-500 p-2 rounded-md w-fit">Insomnia</div>
          <div className="bg-rose-500 p-2 rounded-md w-fit">Git</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
