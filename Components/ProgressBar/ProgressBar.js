const ProgressBar = ({ progress }) => {
    return (
      <div className="relative pt-1">
        <div className="flex mb-2 items-center">
          <div className="w-full bg-[#E9ECEF] rounded-full h-1">
            <div
              className="bg-gray-200 h-2 -translate-y-0.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;