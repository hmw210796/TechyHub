import CommentSection from "../components/CommentSection";
import PageLayout from "../components/layouts/PageLayout";
import PostDetails from "../components/PostDetails";
import Line from "../components/ui/Line";

function PostPage(props) {
  return (
    <PageLayout>
      <PostDetails />
      <Line />
      <CommentSection />
      <Line />
    </PageLayout>
  );
}

export default PostPage;
