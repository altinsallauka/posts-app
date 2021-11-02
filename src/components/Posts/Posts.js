import React, { useState } from "react";
import axios from "axios";
import "./Posts.scss";
import PostsDataService from "../../services/posts.service";

const Posts = (props) => {
  console.log(PostsDataService.getAll());
  return (
    <React.Fragment>
      <div className="row">
        <h4>Posts Component</h4>
      </div>
    </React.Fragment>
  );
};

export default Posts;
