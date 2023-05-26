import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { db } from './firebase';

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} />;
};

const ModelViewer = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const modelsRef = db.collection('models');
      const snapshot = await modelsRef.get();
      const modelsData = snapshot.docs.map(doc => doc.data());
      setModels(modelsData);
      console.log(modelsData);  // added console log
    };
    fetchData();
  }, []);
  

  return (
    <div>
      {models.map((model, index) => (
        <Canvas key={index}>
          <ambientLight />
          <Suspense fallback={null}>
            <Model url={model.url} />
          </Suspense>
        </Canvas>
      ))}
    </div>
  );
};

export default ModelViewer;
