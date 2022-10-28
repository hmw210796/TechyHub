import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import SearchBar from "./SearchBar";

function CommentSection() {
  const [loadedUserData, setLoadedUserData] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const { id } = useParams();

  const singleCommentUrl = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

  useEffect(() => {
    const fetchData = async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      setLoadedUserData(json);
    };

    fetchData(singleCommentUrl).catch(console.error);
  }, []);

  const searchHandler = (e) => {
    setSearchWord(e);
  };

  const filteredComment = loadedUserData.filter(
    (item) =>
      item.email.toLowerCase().includes(searchWord.toLowerCase()) ||
      item.body.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div class="container">
      <h1 class="text-blue-900 text-2xl font-semibold">
        Comments ({filteredComment.length})
      </h1>
      <SearchBar onSearch={searchHandler} searchWord={searchWord} />
      <CommentList user={filteredComment} />
    </div>
  );
}

export default CommentSection;
