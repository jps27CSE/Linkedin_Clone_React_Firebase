import "./index.scss";
import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import "./index.scss";
import PropTypes from "prop-types";

const ModalComponent = ({
  sendStatus,
  status,
  setStatus,
  modalOpen,
  setModalOpen,
}) => {
  return (
    <>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <input
          className="modal-input"
          placeholder="What do you want to talk about?"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </Modal>
    </>
  );
};

export default ModalComponent;

ModalComponent.propTypes = {
  setStatus: PropTypes.func.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  sendStatus: PropTypes.func.isRequired,
};
