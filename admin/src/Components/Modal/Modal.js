import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ show, handleClose, handleDelete }) => {
    console.log("🚀 ~ file: Modal.js:5 ~ CustomModal ~ handleClose:", handleClose)
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn xóa sản phẩm này?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;