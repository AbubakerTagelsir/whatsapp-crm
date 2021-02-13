import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import ClientContent from "./ClientContent";
import AddClient from "./AddClient";

function Clients(props) {
  const {
    selectClients,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    setPosts,
    clients,
  } = props;
  const [isAddPostPaperOpen, setIsAddPostPaperOpen] = useState(false);

  const openAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(true);
  }, [setIsAddPostPaperOpen]);

  const closeAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(false);
  }, [setIsAddPostPaperOpen]);

  useEffect(() => {
    selectClients();
  }, [selectClients]);

  if (isAddPostPaperOpen) {
    return <AddClient
      onClose={closeAddPostModal}
      EmojiTextArea={EmojiTextArea}
      ImageCropper={ImageCropper}
      Dropzone={Dropzone}
      DateTimePicker={DateTimePicker}
      pushMessageToSnackbar={pushMessageToSnackbar}
    />
  }
  return <ClientContent
    openAddPostModal={openAddPostModal}
    posts={posts}
    clients={clients}
    setPosts={setPosts}
    pushMessageToSnackbar={pushMessageToSnackbar}
  />
}

Clients.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  clients: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectClients: PropTypes.func.isRequired,
};

export default Clients;
