import ReactQuill from "react-quill";
import "./editor.component.scss";
import "react-quill/dist/quill.bubble.css";
import { useEffect, useState } from "react";

const Editor = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [value, setValue] = useState(".");

  useEffect(() => {
    console.log({ value });
  }, [value]);
  return (
    <ReactQuill
      className="quill-editor"
      value={value}
      onChange={(content) => setValue(content)}
      modules={modules}
      placeholder="Content goes here..."
      theme="bubble"
      formats={formats}
    />
  );
};

export default Editor;
