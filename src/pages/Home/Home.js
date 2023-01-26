function Home() {
  return (
    <main className="mb-auto h-3/4 ">
      <div className="h-full bg-gray-700 flex items-center">
        <div className="fade-in banner flex flex-1 flex-col px-6 py-10 dark:text-white lg:ml-[100px]">
          <h1 className="text-3xl font-bold text-white lg:mr-8 ">
            Hi, I am Cleve
          </h1>
          <p class="my-2 text-lg text-white lg:my-4 lg:text-2xl">
            Junior Web Developer
          </p>
          <p class="my-2 text-lg text-white lg:my-4 lg:text-2xl">
            See my{" "}
            <span className="bg-cyan-400 text-black hover:bg-cyan-300 hover:text-white">
              <a href="/work">Work</a>
            </span>{" "}
            or read more{" "}
            <span className="bg-cyan-400 text-black hover:bg-cyan-300 hover:text-white">
              <a href="/work">About</a>
            </span>{" "}
            me
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
