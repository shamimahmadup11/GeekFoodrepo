import PropTypes from 'prop-types';

const Card = ({ card }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mb-8">
      <div className="bg-white border border-gray-300 rounded-md shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{card.name} {card.rating}</h2>
          <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-b-md">
          <p className="text-lg text-gray-600 mb-2">{card.outcode} {card.postcode}</p>
          <p className="text-sm text-gray-600 mb-2">{card.address}</p>
          <p className="text-lg text-gray-600 mb-2">{card.type_of_food}</p>
        </div>
        <div className="p-4">
          <a
            href={card.URL}
            className="block w-full py-2 text-center text-white bg-blue-900 rounded-md hover:bg-blue-800"
          >
            link
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
