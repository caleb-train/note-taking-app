import {
  EditNote,
  Reset,
  ListNotesAsync,
  DeleteNoteAsync
} from "@store/actions/noteActions";

export const matchStateToProps = ({
  note,
  auth
}) => {
  return {
    data: note.data,
    isErrored: note.isErrored,
    message: note.message,
    isLoading: note.isLoading,
    auth
  };
};

export const matchDispatchToProps = {
  DeleteNoteAsync,
  ListNotesAsync,
  EditNote,
  Reset,
}