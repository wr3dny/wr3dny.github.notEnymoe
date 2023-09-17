import React, { useEffect } from "react";

const saveFileToLocalStorage = (fileName: string, fileContent: string) => {
  localStorage.setItem(fileName, fileContent);
};

// Usage
const fileContent = "This is the content of the file.";
saveFileToLocalStorage("example.txt", fileContent);

const readAllFilesFromLocalStorage = () => {
  const files: { [key: string]: string } = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      const value = localStorage.getItem(key);
      if (value) {
        files[key] = value;
      }
    }
  }

  return files;
};

// Usage
const allFiles = readAllFilesFromLocalStorage();
console.log(allFiles);

// const deleteFileFromLocalStorage = (fileName: string) => {
//     localStorage.removeItem(fileName);
//     };

// const deleteAllFilesFromLocalStorage = () => {
//     localStorage.clear();
//     };

const fileLister = () => {
  const allFiles = readAllFilesFromLocalStorage();
  console.log("my listner", allFiles.color);
};

const FileList: React.FC<{ files: { [key: string]: string } }> = ({
  files,
}) => {
  return (
    <div>
      <h2>List of Files:</h2>
      <ul>
        {Object.keys(files).map((fileName) => (
          <li key={fileName}>{fileName}</li>
        ))}
      </ul>
      <ol>
        {Object.values(files).map((fileContent) => (
          <li key={fileContent}>{fileContent}</li>
        ))}
      </ol>
    </div>
  );
};

export const JSONhandler = () => {
  const allFiles = readAllFilesFromLocalStorage();
  console.log(allFiles);
  useEffect(() => {
    fileLister();
  }, []);
  return (
    <div>
      <FileList files={allFiles} />
    </div>
  );
};
