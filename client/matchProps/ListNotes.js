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

export const matchDispatchToProps = dispatch => {
  return {
    DeleteNoteAsync: _ => DeleteNoteAsync(dispatch, _),
    ListNotesAsync: _ => ListNotesAsync(dispatch, _),
    EditNote: _ => dispatch(EditNote(_)),
    Reset: _ => dispatch(Reset(_))
  };
};