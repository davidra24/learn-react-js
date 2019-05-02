import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
      <div className="DeletebadgeModal">
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>
        <div onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
          Delete
        </div>
        <div onClick={props.onCloseModal} className="btn btn-primary">
          Cancel
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
