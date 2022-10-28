import { Route, Routes, Link } from "react-router-dom";
import PostPage from "./pages/PostPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import PostDetails from "./components/PostDetails";
import { useState, useEffect } from "react";

export function App() {
  const [postData, setPostData] = useState([]);

  const postUrlApi = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      setPostData(json);
    };

    fetchData(postUrlApi).catch(console.error);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage postData={postData} />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
