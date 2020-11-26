import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Section = styled.section`
  padding: 16px;
  border: 1px solid rgb(232, 232, 232);
  border-radius: 3px;
  width: 100%;
  display: inline-block;
  margin-bottom: 30px;
  .dropzone {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    border-radius: 2px;
    border: 2px dashed #eeeeee;
    background-color: #fafafa;
    color: #dbdbdb;
    outline: none;
    transition: border 0.24s ease-in-out;
    cursor: pointer;
    &:hover {
      border-color: deepskyblue;
    }

    p {
      color: #8391a2;
    }
  }
  aside {
    padding: 20px 0;

    h4 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

const DropZone = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>파일을 올려놓으세요</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </Section>
  );
};

export default DropZone;
