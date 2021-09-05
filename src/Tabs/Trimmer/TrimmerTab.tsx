import React, { useState}  from "react";
import { ValidateCollectionFile } from "./TrimmerUtils";

function TrimmerTab() {
  const [collectionFile, setCollectionFile] = useState<File>();
  const [fileInfo, setFileInfo] = useState("");

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0)
    {
      setCollectionFile(event.target.files[0]);
    }
    else
    {
      alert("Error uploading file")
    }
  }

  const onGenerateClicked = async () => {
    let error = ValidateCollectionFile(collectionFile);
    if (error.length > 0) {
      setFileInfo(error);
    }
    else {
      var fileContents = await collectionFile?.text() || "";
      setFileInfo(fileContents);
    }
  }

  return (
    <div>
      <h1>Trimmer stuff go here</h1>
      <input type="file" onChange={onFileChange} />
      <button 
        type="button"
        onClick={onGenerateClicked}
        disabled={collectionFile === undefined}>
          Remove Duplicates
      </button>
      <p>{fileInfo}</p>
    </div>
  )
}

export { TrimmerTab }