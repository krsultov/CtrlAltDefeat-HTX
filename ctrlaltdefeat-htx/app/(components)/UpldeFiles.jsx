import { useEffect, useState } from "react";

const UploadFile = ({ onChange, onRemove }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  useEffect(() => {
    if (onChange) {
      onChange(selectedFile);
    }
  }, [selectedFile]);

  return (
    <>
      <label className="flex h-50 w-50 cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-lightGray bg-white px-4 drop-shadow-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-solid hover:border-gray-500 hover:bg-lightGray focus:outline-none focus:drop-shadow-2xl">
        <span className="flex items-center text-3xl text-gray-500">+</span>
        <input
          type="file"
          name="file_upload"
          onChange={(e) => {
            setSelectedFile(e.target.files[0])
            e.target.value = null
          }}
          className="hidden"
        />
      </label>
    </>
  );
};

export default UploadFile;