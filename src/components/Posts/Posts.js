import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Posts.scss";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts } from "./actions";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
const Posts = (props) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  let posts = globalState.PostsReducer.posts;
  let isLoading = globalState.PostsReducer.isLoading;
  const [columns, setColumns] = useState([
    {
      dataField: "id",
      text: "Post ID",
      sort: true,
    },
    {
      dataField: "title",
      text: "Post title",
      sort: true,
      filter: textFilter(),
    },
  ]);

  useEffect(() => {
    dispatch(retrievePosts());
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <h4>Posts Component</h4>
        {isLoading ? (
          <div className="mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <span className="text-primary ml-3">Loading questions...</span>
          </div>
        ) : (
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={posts}
            columns={columns}
            pagination={paginationFactory()}
            filter={filterFactory()}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Posts;
