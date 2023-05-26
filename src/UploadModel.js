import React, { useState } from 'react';
import { db, storage, auth } from './firebase';
import { serverTimestamp } from "firebase/firestore";

const UploadModel = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['model/gltf-binary', 'model/gltf+json']; // Add the MIME type for .glb files
 // Only allow .glb files for simplicity

  const handleChange = (e) => {
    let selected = e.target.files[0];
  
    if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select a valid 3D model file (GLB).');
      }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      try {
        await fileRef.put(file);
        console.log('File uploaded');  // added console log
  
        // Get download URL for model and save to Firestore
        const downloadURL = await fileRef.getDownloadURL();
        const modelsRef = db.collection('models');
        modelsRef.add({
          url: downloadURL,
          uploadedBy: auth.currentUser.uid,
          timestamp: serverTimestamp()
        });
      } catch (error) {
        console.error(error);  // added console error
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {error && <div>{error}</div>}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadModel;
