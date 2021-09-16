import styles from '../styles/Modal.module.scss'

const Modal = ({ modal, setModal }) => {

  const closeModal = () => {
    setModal(undefined)
  }

  return <>
    <div className={styles.modal_container}>
      <div className={styles.modal_background} onClick={closeModal} />
      <div className={styles.modal}>
        <div className={styles.exit_btn} onClick={closeModal}>
          <i className="fas fa-times"></i>
        </div>
        {/* {ModalComponent} */}
      </div>
    </div>
  </>
}

export default Modal
