import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetails(props) {
  const [userPost, setUserPost] = useState({});
  const { id } = useParams();

  const singlePostUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    const fetchData = async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      setUserPost(json);
    };

    fetchData(singlePostUrl).catch(console.error);
  }, []);

  const { title, body } = userPost;

  return (
    <div class="container mx-auto">
      <Link to="/">
        <button class="font-bold">{`< Back`}</button>
      </Link>
      <h1 class="text-blue-900 text-2xl font-semibold">{title}</h1>
      <img
        src="/src/image/reading.png"
        alt="reading"
        class="object-scale-down w-3/4 py-8 mx-auto"
      />
      <h2 class="text-sm">{body}</h2>
    </div>
  );
}

export default PostDetails;
