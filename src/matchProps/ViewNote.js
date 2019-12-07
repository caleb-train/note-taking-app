import {
  GetNoteAsync,
  EditNote,
  Reset
} from "@store/actions/noteActions";

export const matchStateToProps = ({
  note,
  auth
}) => {
  return {
    data: note.data,
    editNote: note.editNote,
    isErrored: note.isErrored,
    message: note.message,
    isLoading: note.isLoading,
    auth
  };
};

export const matchDispatchToProps = {
  GetNoteAsync,
  EditNote,
  Reset,
}