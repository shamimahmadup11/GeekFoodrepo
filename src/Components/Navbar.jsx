

import "../App.css";

const Navbar = () => {

  return (
    <div>
      <nav className="bg-blue-950 min-h-20 h-auto w-screen flex flex-col lg:flex-row lg:justify-between items-center lg:gap-8 px-8">
        <div className="flex items-center">
          <a href="/">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt=""
              className="h-14 w-16"
            />
          </a>
          <h1 className="text-white text-center font-extrabold text-2xl cursor-pointer">
            GeekFood
          </h1>
        </div>

        <div className="flex-grow lg:flex lg:justify-center lg:gap-12">
          <ul className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-12 lg:text-xl font-semibold">
            <li>
              <a href="./Home" className="text-white hover:text-green-600">
               Home
              </a>
          
            </li>
            <li>
              <a href="/" className="text-white hover:text-green-600">
                Quote
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-green-600">
                Restaurant
              </a>
            </li>
            <li>
              <a href="/" className="text-white hover:text-green-600">
                Foods
              </a> 
            </li>
            <li>
              <a href="/" className="text-white hover:text-green-600 ">
                Contact 
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-green-900 h-12 w-32 hover:bg-green-600 text-white rounded-md text-xl font-bold ">
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
