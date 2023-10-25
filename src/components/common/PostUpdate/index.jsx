import "./index.scss";
import ModalComponent from "../Modal";
import { useState } from "react";
import { postStatus } from "../../../api/FireStoreAPI";
const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [postImage, setPostImage] = useState("");
  const sendStatus = async () => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  };
  return (
    <div className="post-status-main">
      <div className="post-status">
        <button onClick={() => setModalOpen(true)} className="open-post-modal">
          Start a Post
        </button>
      </div>
      <ModalComponent
        status={status}
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
      />
    </div>
  );
};

export default PostStatus;
