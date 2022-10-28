import NewsItem from "./NewsItem";
import Grid from "./ui/Grid";

function NewsList(props) {
  return (
    <Grid>
      {props.userPost.map((post) => (
        <NewsItem
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </Grid>
  );
}

export default NewsList;
