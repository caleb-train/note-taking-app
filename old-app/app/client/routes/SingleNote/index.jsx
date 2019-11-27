import React from "./node_modules/react";
import { withRouter, Redirect } from "./node_modules/react-router-dom";
import useViewNote from "./node_modules/@client/hooks/useViewNote";
import Loader from "./node_modules/@comp/Loader";
import ColorPicker, { pickColor } from "./node_modules/@comp/ColorPicker";
import { auto_grow } from "./node_modules/@utils";
import "./index.scss";

const SingleNote = ({ match, history }) => {
  const { id } = match.params;

  const { editNote, isLoading, updateNote, message } = useViewNote(id);

  return isLoading ? (
    <Loader />
  ) : message ? (
    <Redirect to="/" />
  ) : (
    (editNote && (
      <div className="w-4/5 md:w-3/5 h-full flex flex-col mx-auto">
        <section className="h-1/4 mt-6 flex flex-col items-center">
          <input
            name="title"
            className="text-2xl border-0 outline-none text-center"
            onChange={updateNote}
            defaultValue={editNote.title}
          />

          <ColorPicker
            pickColor={val => pickColor(val, updateNote)}
            editNote={editNote}
          />
        </section>
        <section className="h-4/5">
          <textarea
            onInput={auto_grow}
            onChange={updateNote}
            name="body"
            value={editNote.body}
            className={`w-full md:p-8 p-6 rumple outline-none min-h-4/5 text-sm font-montserrat ${editNote.color ||
              "wht"}`}
          ></textarea>
          <h5 className="mx-auto my-6 text-center">
            Make edits by simply changing the texts or color
          </h5>
        </section>
      </div>
    )) || <Loader />
  );
};

export default withRouter(SingleNote);
