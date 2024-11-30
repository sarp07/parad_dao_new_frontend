import React from "react";

const Container = ({ children }) => {
   return (
      <div className="w-full max-w-[1400px] mx-auto h-auto">{children}</div>
   );
};

export default Container;
