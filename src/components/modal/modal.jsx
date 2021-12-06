import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./actions";
const ModalComponent = (props) => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  let modalIsOpen = globalState.ModalReducer.modalIsOpen;
  // const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    //   setIsOpen(true);
    dispatch(toggleModal(true));
  };
  const closeModal = () => {
    // setIsOpen(false);
    dispatch(toggleModal(false));
  };
  useEffect(() => {
    console.log(props, "PROPS");
  }, []);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={closeModal}>close</button>
        <div className="body">{props.children}</div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
