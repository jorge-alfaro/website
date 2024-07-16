import { useModal } from '../../hooks/useModal.jsx'
import { Modal } from './Modal.jsx'
import { ModalInfo } from './ModalInfo.jsx'

export const Project = (el) => {
  const { title, url } = el;

  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ModalInfo {...el} />
      </Modal>
      <div>
        <div className="card-item" tabIndex={10 + el.id}>
          <div className="card-title-screen">
            <h2>{title.toUpperCase()}</h2>
            <i></i>
          </div>
          <div className="image image--close">
            <div className="main">
              <picture className="main-img ">
                <img src={url} alt={title} />
              </picture>
              <h3
                className="image__title--close read-more"
                onClick={openModal}
                title={title}
              >
                Read more
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// className = " animate__animated animate__pulse";
