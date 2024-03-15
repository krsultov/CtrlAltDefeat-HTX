import LinkButton from "./LinkButton";

const ReportCard = ({report}) => {
  return (
    <div className="max-w-md bg-white rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full" src={report.image} alt="Placeholder" />
      <div className="px-6 py-4 space-y-3">
        <div className="font-bold text-2xl mb-2">{report.title}</div>
        <p className="text-gray-600 text-base">{report.description}</p>
        <div className="flex justify-between">
          <span className="text-gray-700 text-s ">{report.location}</span>
          <span className="text-gray-700 text-s ">{report.date}</span>
        </div>
      </div>
      
      <div className="px-6 pt-4 pb-2 flex justify-between items-center gap-8">
        <LinkButton
          className="bg-secondary hover:bg-secondaryDark text-white font-bold py-2 px-4 rounded"
          text="Button"
          link={`/events/${report._id}`}
          color="bg-secondary"
          colorHover="hover:bg-secondaryDark"
        />
        


        <div className="text-gray-800 text-xs">{report.reporter}</div>
      </div>
    </div>
  );
};

export default ReportCard;