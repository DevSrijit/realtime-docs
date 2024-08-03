import { Editor } from "@/components/editor/Editor";
import React from "react";
import Header from "@/components/Header";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Document Title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
