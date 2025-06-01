"use client";

import { MinimalTiptapEditor } from "@/components/ui/minimal-tiptap";
import React from "react";
import type { Content } from "@tiptap/react";

export const EditorText = () => {
  const [value, setValue] = React.useState<Content>("");
  return (
    <div>
      <MinimalTiptapEditor
        value={value}
        onChange={setValue}
        className="w-full"
        editorContentClassName="p-5"
        output="html"
        placeholder="Enter your description..."
        autofocus={true}
        editable={true}
        editorClassName="focus:outline-hidden"
      />
    </div>
  );
};
