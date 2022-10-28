import { Link } from "react-router-dom";

function NewsItem(props) {
  return (
    <div className="m-2 w-full shadow-lg rounded-md">
      <div className="relative container">
        <img
          src="/src/image/reading.png"
          alt="reading"
          className="object-fill"
        />
        <div className="absolute bottom-3 right-4  bg-blue-900/80 rounded-2xl w-16 p-1 ">
          <div className="font-bold text-center text-xs text-white">News</div>
        </div>
      </div>

      <div className="p-5">
        <h1 className="font-bold text-xl line-clamp-2">{props.title}</h1>
        <h2 className="font-thin text-gray-400 text-xs pt-2 line-clamp-2">
          {props.body}
        </h2>
        <div className="pt-2">
          <Link to={{ pathname: `post/${props.id}` }}>
            {" "}
            <p className="text-blue-900 font-bold">Read more</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
