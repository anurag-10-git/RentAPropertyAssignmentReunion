import React from "react";
import ReactDOM from "react-dom";
import classes from "./WishListModal.module.css";


const Backdrop = (props) => {

    return <div className={`${classes.backdrop} ${props.showModal ? classes.backdropMove : "" }`} onClick={props.closeModal} />;
  };
  
  const ModalOverlay = (props) => {
  
    return (
       <div className={`${classes.modal} ${ props.showModal ? classes.overlayMove : "" }`}>
          <h3>Your Whishlist</h3>
          <p>Sorry! function currently unavailable.</p>
      </div>
    );
  };
  
  const WishListModal = (props) => {
  
    const closeModal = () => {
      props.closeModal();
    };
  
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop showModal={props.showModal} closeModal={closeModal} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay showModal={props.showModal} closeModal={closeModal}/>,
          document.getElementById("overlay-root")
        )}
      </React.Fragment>
    );
  };
  
  export default WishListModal;
  