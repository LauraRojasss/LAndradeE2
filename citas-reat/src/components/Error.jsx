import React from "react";

const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white p-3 uppercase text-center font-bold rounded-md">
        {children}
    </div>
  );
};

export default Error;
