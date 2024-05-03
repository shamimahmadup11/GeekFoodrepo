


const Section2 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center m-20 ">
      <div className=" h-1/2 w-1/2 absolute left-3 z-10 ml-10 ">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          
          style={{ marginLeft: "-40px", marginTop: "-20px" }}
        />
      </div>
      <div className=" h-screen w-1/2 absolute right-28 bg-slate-100 text-center mt-24 pl-24 pt-54">
        <h1 className="text-black text-3xl p-10 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
        <h1 className="text-black text-xl p-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et ad
          tempora molestias dolorum non facere ipsum aut quae aliquid, id, ipsam
          quos corrupti! Id.
        </h1>
        <button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Search Now
          </button>
      </div>
    </div>
  );
};

export default Section2;
