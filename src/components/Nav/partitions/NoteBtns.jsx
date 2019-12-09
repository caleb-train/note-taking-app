import React from "react";
import Link from "next/link";

const NoteBtns = ({
  makeNote,
  saveNote,
  CreateNoteAsync,
  UpdateNoteAsync,
  editNote
}) => (
  <div className={`note-actions`}>
    {makeNote ? (
      <button
        className="btn text-white create"
        onClick={_ => CreateNoteAsync(editNote)}
      >
        Create
      </button>
    ) : (
      <Link href={`${process.env.URL}note`}>
        <button className="btn">Add</button>
      </Link>
    )}
    {saveNote ? (
      <button
        className="btn text-white bg-gray-800"
        onClick={_ => UpdateNoteAsync(editNote)}
      >
        Save
      </button>
    ) : null}
  </div>
);

export default NoteBtns;
