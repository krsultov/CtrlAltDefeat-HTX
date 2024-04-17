import LinkButton from "./LinkButton";

const Card = ({event}) => {
    const truncateDescription = (description, maxLength = 50) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + "...";
    };


    return (
        <div className="w-[320px] bg-white rounded overflow-hidden shadow-lg mx-auto">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <img className="w-full" src={event.beforeImage} alt="Placeholder"/>

                    <div className="px-6 py-4 space-y-3  w-full">
                        <div className="font-bold text-2xl mb-2">{event.title}</div>
                        <p className="text-gray-600 ">{truncateDescription(event.description)}</p>
                        <div className="flex gap-8 justify-between">
                            <span className="text-gray-700 text-sm ">{event.location}</span>
                            <span className="text-gray-700 text-sm ">{event.date}</span>
                        </div>
                    </div>
                </div>


                <div className="px-6 py-6 flex justify-between items-center gap-8">
                    <LinkButton
                        className="bg-secondary hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded"
                        text="View More"
                        link={`/events/${event._id}`}
                        color="bg-secondary"
                        colorHover="hover:bg-secondaryDark"
                    />
                    <div className="text-gray-800 text-xs">{event.organizer}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
