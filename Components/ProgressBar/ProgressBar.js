const ProgressBar = ({ progress, gradientFrom, gradientTo }) => {
    return (
      <div className="relative pt-1">
        <div className="flex mb-2 items-center">
          <div className="w-full bg-[#E9ECEF] rounded-full h-1">
            <div
              style={{backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`, width: `${progress}%`}}
              className={`h-2 -translate-y-0.5 rounded-full bg-gray-200`}
            ></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;