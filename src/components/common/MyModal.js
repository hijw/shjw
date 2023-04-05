import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function MyModal({show, onClickCancel}) {
    return (
        <Modal isOpen={show}
        style={customStyles}>
            <h1>모달</h1>
            <button onClick={onClickCancel}>취소</button>
        </Modal>
    );
}

export default MyModal;
