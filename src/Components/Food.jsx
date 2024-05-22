import Card from "./Card";
import { useEffect, useState } from "react";
import ReastrountData from "./ReastrountData";

const Food = () => {
  const [searchText, setSearchText] = useState("");
  const [number, setNumber] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const newData = ReastrountData.filter(
      (obj) =>
        obj.name.toLowerCase().includes(searchText.toLowerCase()) &&
        obj.rating >= number
    );
    setFilteredData(newData);
  }, [searchText, number]);

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-row justify-around items-center mt-10 mb-10">
        <div className="mr-2">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-xl font-bold border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="minimumRating" className="mr-2 text-xl fon-bold">
            Minimum Rating:
          </label>
          <input
            type="number"
            min={0}
            max={5}
            step={0.5}
            value={number}
            id="minimumRating"
            className="px-3 py-2 text-xl fonde-bold border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={(e) => setNumber(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 p-4 justify-center align-middle">
        {filteredData &&
          filteredData.map((item) => <Card key={item._id.$oid} card={item} />)}
      </div>
    </div>
  );
};

export default Food;
