import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          content="Cool bro"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 2:45 PM"
          content="Amazing"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 2:15 PM"
          content="Nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
