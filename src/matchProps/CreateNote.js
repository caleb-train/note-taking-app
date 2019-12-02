import {
  EditNote as EditNoteNow,
  Reset
} from "@store/actions/noteActions";

export const matchStateToProps = ({
  note: state
}) => {
  return {
    data: state.data,
    editNote: state.editNote,
    isErrored: state.isErrored,
    message: state.message,
    isLoading: state.isLoading
  };
};

export const matchDispatchToProps = {
  EditNoteNow,
  Reset,
}