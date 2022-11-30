//uploading pictures here
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXCI7-Qg7g0yEOMdlWRdrlV_fkweAH204",
  authDomain: "united-backk.firebaseapp.com",
  projectId: "united-backk",
  storageBucket: "united-backk.appspot.com",
  messagingSenderId: "196638236647",
  appId: "1:196638236647:web:e1fe7366d29e268ba02742",
};

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [url, setUrl] = useState();
  console.log({ selectedFile });
  const handleUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to Upload!");
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);

    // connect to our storage bucket
    const storage = getStorage(app);

    // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef = ref(storage, "photos/" + filename);

    // upload file to bucket
    uploadBytes(imageRef, selectedFile).then(() => {
    // create the url from reference
      setUrl(
        `https://firebasestorage.googleapis.com/v0/b/united-backk.appspot.com/o/photos%2F${filename}?alt=media`
      );
    // add an await or .then and then update our database with url
      alert("successfuly uploaded img to " + url);
    });
  };
  return (
    <form onSubmit={handleUpload}>
      {url && <img src={url} alt="" width={300} />}
      <input
        type="file"
        name="photo"
        onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}