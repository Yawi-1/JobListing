import React from "react";

const Spinner = () => {
  return (
    <div className="md:w-[70%] w-full flex flex-col gap-4 items-center justify-center h-screen ">
      <div className="w-8 h-8 rounded-full border-4 border-dashed p-4 animate-spin"></div>
      <p className="animate-bounce">Loading...</p>
    </div>
  );
};

export default Spinner;
