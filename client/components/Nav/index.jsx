import React from "react";
import connect from "@store/connect";
import Link from "next/link";
import * as Actions from "@store/actions/noteActions";
import "./index.scss";

const Nav = props => {
  const {
    saveNote,
    editNote,
    makeNote,
    CreateNoteAsync,
    UpdateNoteAsync
  } = props;

  return (
    <nav className="mainNav px-2 sm:px-8  justify-between">
      <Link href="/">
        <div className="Logo flex items-center flex-grow">
          <div className="border-0 logo"></div>
          <h3>ScrapBook</h3>
        </div>
      </Link>
      <div className="w-32 flex flex-row flex-grow-0 justify-around">
        {makeNote ? (
          <button
            className="btn p-1 px-2 text-white bg-green-600"
            onClick={_ => CreateNoteAsync(editNote)}
          >
            Create
          </button>
        ) : (
          <Link href="/note">
            <button className="btn p-1 px-2">Add</button>
          </Link>
        )}
        {saveNote ? (
          <button
            className="btn p-1 px-2 text-white bg-gray-800"
            onClick={_ => UpdateNoteAsync(editNote)}
          >
            Save
          </button>
        ) : null}
      </div>
    </nav>
  );
};

const matchStateToProps = ({ note: state }) => {
  return {
    saveNote: state.saveNote,
    editNote: state.editNote,
    makeNote: state.makeNote
  };
};

const matchDispatchToProps = dispatch => {
  return {
    UpdateNoteAsync: _ => Actions.UpdateNoteAsync(dispatch, _),
    CreateNoteAsync: _ => Actions.CreateNoteAsync(dispatch, _)
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(Nav);
