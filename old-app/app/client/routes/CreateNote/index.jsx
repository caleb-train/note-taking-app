import React from "./node_modules/react";
import { Redirect } from "./node_modules/react-router-dom";
import useMakeNote from "./node_modules/@client/hooks/useMakeNote";
import ColorPicker, { pickColor } from "./node_modules/@comp/ColorPicker";
import Loader from "./node_modules/@comp/Loader";
import { auto_grow } from "./node_modules/@utils";
import "./index.scss";

const CreateNote = ({ history }) => {
  const { editNote, isLoading, updateNote, message, isErrored } = useMakeNote();

  return isLoading ? (
    <Loader />
  ) : (
    (!isErrored && message && <Redirect to="/" />) || (
      <div className="w-4/5 md:w-3/5 flex flex-col mx-auto">
        <section className="h-1/4 mt-6 flex flex-col items-center">
          <input
            name="title"
            className="text-2xl border-0 outline-none text-center"
            onChange={updateNote}
            placeholder="Title"
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
            className={`w-full md:p-8 p-6 outline-none min-h-3/5 text-sm overflow-hidden font-montserrat ${editNote.color ||
              "wht"}`}
          ></textarea>
        </section>
      </div>
    )
  );
};

export default CreateNote;
