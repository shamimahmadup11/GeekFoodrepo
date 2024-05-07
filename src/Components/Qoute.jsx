
import data from "./Data";

const Quote = () => {
  return (
    <div className="  py-8 px-4  flex justify-center align-middle gap-20 m-10 ">
      {data.map((item, index) => (
        <div key={index} className=" mb-8 gap-16">
          <h3 className="text-xl font-bold mb-4">{item.topic}</h3>
          <ul className=" flex-col gap-32 ">
            {item.quotes.map((quote, idx) => (
              <li key={idx} className="mb-2 border bg-slate-800 rounded-md p-11 text-2xl font-serif font-bold ">
                <blockquote className="text-gray-300">
                  {quote.quote} - {quote.author}
                </blockquote>
              </li>
            ))} 
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quote;
