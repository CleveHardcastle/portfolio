function Cert() {
  return (
    <div className="flex items-center flex-col lg:flex-row">
      <div className="flex justify-center w-1/2">
        <a href="https://www.parchment.com/u/award/79ddc6f871c6ce82ca1a01ade0d73a30">
          <img
            className="h-[150px] md:h-[300px] w-[150px] md:w-[500px] m-2"
            src={process.env.PUBLIC_URL + "/images/certificate.png"}
          />
        </a>
      </div>
      <div className="flex flex-wrap w-1/2 justify-between">
        <img
          className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] m-2"
          alt="html css badge"
          src={process.env.PUBLIC_URL + "/images/html-css.png"}
        />

        <img
          className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] m-2"
          alt="react badge"
          src={process.env.PUBLIC_URL + "/images/react-js.png"}
        />

        <img
          className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] m-2"
          alt="node.js express.js badge"
          src={process.env.PUBLIC_URL + "/images/node-express.png"}
        />
        <img
          className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] m-2"
          alt="javascript jquery badge"
          src={process.env.PUBLIC_URL + "/images/javascript-jquery.png"}
        />
        <img
          className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] m-2"
          alt="sql nosql badge"
          src={process.env.PUBLIC_URL + "/images/sql-nosql.png"}
        />
      </div>
    </div>
  );
}

export default Cert;
