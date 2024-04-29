

// const Body = () => {
//   return (
//     <div className="h-screen w-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] z-0 flex justify-center align-middle flex-col p-10">
//         <div className="h-1/2 w-1/2 flex justify-center align-middle flex-col gap-14 ">
//         <h1 className="text-black text-center font-extrabold text-5xl">Let us find your</h1>
//         <h1 className="text-red-900 text-center font-extrabold text-5xl" >Forever Food.</h1>
//         <p className="text-black text-center text-xl " >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
              

//         <div className=" flex gap-10 justify-center">
//         <button className= " h-14 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110">
//   Search Now
// </button>

//           <button className= " h-14 w-40 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110">Know more</button>
//         </div>
//     </div>
//         </div>
       

//   )
// }


// export default Body




const Body = () => {
  return (
    <div className="h-screen w-screen bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] z-0 flex justify-center items-center flex-col p-10">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-black font-extrabold text-3xl lg:text-5xl mb-6">Let us find your</h1>
        <h1 className="text-red-900 font-extrabold text-3xl lg:text-5xl mb-6">Forever Food.</h1>
        <p className="text-black text-lg lg:text-xl mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className="flex flex-col lg:flex-row lg:justify-center gap-6">
          <button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Search Now
          </button>
          <button className="w-full lg:w-auto bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;




