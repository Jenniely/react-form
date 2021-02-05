import React, {useState} from "react";
import Modal from 'react-bootstrap/esm/Modal';
import Products from "./Products";
import {sampleProducts} from "./sampleStorage";
import "../css/ForHome.css";

function BundleModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
  
    return (
      <>

        <button onClick={handleShow} className="for-home__offers-choose btn">Выбрать кофе</button>
        <Modal className="bundle-modal" centered show={show} onHide={handleClose}>
        <button onClick={handleClose} className="for-home__modal-close btn">Закрыть X</button>
          <Modal.Body className="bundle-modal__main">
          <h2 className="bundle-modal__title">Выберите кофе</h2>
          <div className="bundle-modal__catalog">
          {<Products sampleProducts={sampleProducts}/>}
          </div>
          <div className="bundle-modal__checkout">
          {/* <Checkout /> */}
          </div>
          </Modal.Body>
          <Modal.Footer className="bundle-modal__footer">
            <button className="bundle-modal__submit btn" type="submit">
              Оформить заказ
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  export default BundleModal;