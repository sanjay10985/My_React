import { collection,query, onSnapshot } from "firebase/firestore";
import React, {useState, useEffect } from "react";
import { db } from "../firebase";
import About from "./About";

function Blog() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "text"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setImages(messages);
    });
    return () => unsubscribe();
  },[]);

  return (
    <div className="blog">
      <h1>Blogs</h1>
      {images.map((image)=>(
        <About key={image.id} img={image}/>
      ))}
    </div>
  );
}

export default Blog;
