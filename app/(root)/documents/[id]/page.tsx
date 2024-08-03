import React from "react";
import CollaborativeRoom from "@/components/CollaborativeRoom";

const Document = () => {
  return (
    <main className="w-full flex flex-col items-center"> 
    {/* items-center was also in className but eh */}
      <CollaborativeRoom />
    </main>
  );
};

export default Document;
