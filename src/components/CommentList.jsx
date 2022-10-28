import CommentItem from "./CommentItem.jsx";

function CommentList(props) {
  return (
    <div class="container divide-y-2 ">
      {props.user.map((user) => (
        <CommentItem key={user.id} email={user.email} comment={user.body} />
      ))}
    </div>
  );
}

export default CommentList;
