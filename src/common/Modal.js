import ReactModal from "react-modal";
import { ModalWrapper } from "../styles";

ReactModal.setAppElement('#root')

const Modal = ({ state, setState, dialog, cancelBtn, confirmBtn, onSubmit }) => {
    //const handleOpen = () => setState(true)
    const handleClose = () => setState(false)

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
                <button className="btn-confirm" onClick={onSubmit}>
                    {confirmBtn ? confirmBtn : 'Yes'}
                </button>
            </div>
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