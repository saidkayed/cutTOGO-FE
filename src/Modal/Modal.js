import React from 'react'
import './Modal.css'

const Modal = (props) => {
    return (
        <div>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    );
}

export default Modal