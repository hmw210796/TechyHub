import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div class="container mx-auto">
      <h1 class="text-5xl font-bold ">404 Page Not Found</h1>

      <Link to="/">
        <button class="pt-5 text-lg text-blue-900 underline font-semibold">
          Back Home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
