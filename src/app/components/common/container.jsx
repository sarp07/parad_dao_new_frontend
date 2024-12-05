import React from "react";

const Container = ({ children }) => {
   return (
      <div className="w-full relative max-w-[1400px] mx-auto h-auto lg:px-0 px-4">
         {children}
      </div>
   );
};

export default Container;
