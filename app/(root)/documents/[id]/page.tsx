import { Editor } from "@/components/editor/Editor";
import React from "react";
import Header from "@/components/Header";
import { SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Document Title</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
