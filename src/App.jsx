import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Images from "./components/Images";

const App = () => {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);

  //写真のデータを取得する関数
  const fetchPhotos = async () => {
    if (!word) return;

    const url = `https://api.unsplash.com/search/photos?query=${word}&per_page=30&client_id=${accessKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    setPhotos(results);
    console.log(results);
  };

  //フォームの送信を処理する関数
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  return (
    <div>
      <Title />
      <Form setWord={setWord} onSubmit={handleSubmit} />
      <Images photos={photos} />
    </div>
  );
};

export default App;
