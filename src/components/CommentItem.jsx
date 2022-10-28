import { Link } from "react-router-dom";

function CommentItem(props) {
  return (
    <div className="mx-10 py-6">
      <a href={`mailto:${props.email}`} className="font-bold">
        {props.email}
      </a>
      <p className="mt-2 text-sm leading-tight">{props.comment}</p>
    </div>
  );
}

export default CommentItem;
