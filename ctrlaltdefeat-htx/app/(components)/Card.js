const Card = ({image, title, description, location, date, organizer}) => {
    return (
      <div className="max-w-md bg-white rounded overflow-hidden shadow-lg mx-auto">
        <img className="w-full" src={image} alt="Placeholder" />
        <div className="px-6 py-4 space-y-3">
          <div className="font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-600 text-base">{description}</p>
          <div className="flex justify-between">
            <span className="text-gray-700 text-xs ">{location}</span>
            <span className="text-gray-700 text-xs ">{date}</span>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center gap-8">
          <button className="bg-secondary hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded">
            Бутон
          </button>
          
          <div className="text-gray-800 text-xs">{organizer}</div>
        </div>
      </div>
    );
  };
       
  export default Card;