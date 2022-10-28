import { Fragment, useEffect, useState } from "react";
import MainPageLayout from "../components/layouts/MainPageLayout";
import NewsList from "../components/NewList";
import HeaderBar from "../components/HeaderBar";
import PostPage from "./PostPage";

function MainPage(props) {
  const [headerIsOpen, setHeaderIsOpen] = useState(true);

  function closeHeaderHandler() {
    setHeaderIsOpen(false);
  }

  return (
    <Fragment>
      {headerIsOpen && <HeaderBar onClose={closeHeaderHandler} />}
      <MainPageLayout>
        {/* <PostPage /> */}
        <div className="text-center pt-10">
          <h1 className="font-bold text-3xl text-blue-900">Latest News</h1>
          <p className="pt-5 pb-5 lg:px-40">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliq.
          </p>
        </div>
        <NewsList userPost={props.postData} />
      </MainPageLayout>
    </Fragment>
  );
}

export default MainPage;
