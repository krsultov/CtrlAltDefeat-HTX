const UploadFile = ({ onChange }) => { 

  return (
      <label className="flex h-50 w-50 cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-lightGray bg-white px-4 drop-shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-solid hover:border-gray-500 hover:bg-lightGray focus:outline-none focus:drop-shadow-2xl">
        <span className="flex items-center text-3xl text-gray-500">+</span>
        <input
          type="file"
          name="file_upload"
          onChange={(e) => onChange(e)}
          className="hidden"
        />
      </label>
  );
};

export default UploadFile;