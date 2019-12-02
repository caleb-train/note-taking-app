import {
  EditNote,
  Reset,
  ListNotesAsync,
  DeleteNoteAsync
} from "@store/actions/noteActions";

export const matchStateToProps = ({
  note: state
}) => {
  return {
    data: state.data,
    isErrored: state.isErrored,
    message: state.message,
    isLoading: state.isLoading
  };
};

export const matchDispatchToProps = {
  DeleteNoteAsync,
  ListNotesAsync,
  EditNote,
  Reset,
}