import React from "react";

function PageLayout(props) {
  return <div className="p-10 xl:px-40">{props.children}</div>;
}

export default PageLayout;
