import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Posts.scss";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts, deleteTutorial } from "./actions";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import Modal from "react-modal";
import ModalComponent from "../../components/modal/modal";
import { toggleModal } from "../../components/modal/actions";
Modal.setAppElement("body");
const Posts = (props) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  let posts = globalState.PostsReducer.posts;
  let isLoading = globalState.PostsReducer.isLoading;
  // const [modalIsOpen, setIsOpen] = useState(false);

  const [rowId, setRowId] = useState("");
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
    {
      dataField: "delete",
      text: "Delete",
      editable: false,
      formatter: (cellContent, row) => {
        // this.setState({ rowId: row._id });
        setRowId(row.id);
        return (
          <button
            className="btn btn-danger btn-xs"
            // onClick={() => console.log("deleted", row._id)}
            onClick={() => dispatch(toggleModal(true))}
          >
            Delete
          </button>
        );
      },
    },
  ]);
  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };
  // const openModal = () => {
  //   setIsOpen(true);
  // };
  // const closeModal = () => {
  //   setIsOpen(false);
  // };
  const onDelete = (rowId) => {
    dispatch(deleteTutorial(rowId));
    dispatch(retrievePosts());
    dispatch(toggleModal(false));
  };
  const modalTitle = "Hello Everyone";
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
      <ModalComponent onDelete={onDelete} modalTitle={modalTitle}>
        <span>
          Do you really want to delete this element? This process cannot be
          undone.
        </span>
        <div className="mt-4">
          <input
            type="button"
            variant="secondary"
            value="Cancel"
            className="btn btn-secondary"
            onClick={() => dispatch(toggleModal(false))}
          />
          <input
            type="button"
            variant="danger"
            value="Delete"
            className="btn btn-danger"
            onClick={() => onDelete(rowId)}
          />
        </div>
      </ModalComponent>
      {/* <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <span>
          Do you really want to delete this question? This process cannot be
          undone.
        </span>
        <div>
          <input
            type="button"
            variant="secondary"
            value="Cancel"
            onClick={closeModal}
          />
          <input
            type="button"
            variant="danger"
            value="Delete"
            onClick={() => onDelete(rowId)}
          />
        </div>
      </Modal> */}
    </React.Fragment>
  );
};

export default Posts;
