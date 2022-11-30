//uploading pictures here
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, StorageReference, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXCI7-Qg7g0yEOMdlWRdrlV_fkweAH204",
    authDomain: "united-backk.firebaseapp.com",
    projectId: "united-backk",
    storageBucket: "united-backk.appspot.com",
    messagingSenderId: "196638236647",
    appId: "1:196638236647:web:e1fe7366d29e268ba02742"
  };

  export default function Upload() {
    const [selectedFile, setSelectedFile] = useState<File | undefined>();
    console.log({selectedFile});
    const handleUpload = (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      if(!selectedFile) {
        alert("Please select a file first!")
          
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
   
    // connect to our storage bucket
    const storage = getStorage(app);
   
    // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef: StorageReference = ref(storage, 'photos/' + filename);
    
    // (Todd's quick cheat) create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-c8.appspot.com/o/photos%2F${filename}?alt=media`
   
    // upload file to bucket
    uploadBytes(imageRef, selectedFile);
    // add an await or .then and then update our database with url
  }
  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="photo"
        onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.currentTarget.files[0])}
        // value={selectedFile.name}
        />
      <button type="submit">Upload</button>
    </form>
  )
}