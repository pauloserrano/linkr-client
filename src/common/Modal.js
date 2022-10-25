import { useState } from "react";
import ReactModal from "react-modal";
import { ModalWrapper } from "../styles";
import LoadingSpinner from "./LoadingSpinner";

ReactModal.setAppElement('#root')

const Modal = ({ state, setState, dialog, cancelBtn, confirmBtn, onSubmit }) => {
    const [isLoading, setIsLoading] = useState(false)
    const handleClose = () => setState(false)
    //const handleOpen = () => setState(true)

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(onSubmit, 3000)
    }

  return (
    <ReactModal
        isOpen={state}
        onRequestClose={handleClose}
        style={customStyles}
    >
        <ModalWrapper>
            <h2>{ dialog ? dialog : 'Are you sure?' }</h2>
            <div>
                <button className="btn-cancel" onClick={handleClose}>
                    {cancelBtn ? cancelBtn : 'No'}
                </button>
                <button className="btn-confirm" onClick={handleSubmit}>
                    {confirmBtn ? confirmBtn : 'Yes'}
                </button>
            </div>
            {isLoading && <LoadingSpinner />}
        </ModalWrapper>
    </ReactModal>
  )
}


const customStyles = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
}

export default Modal