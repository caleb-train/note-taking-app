import React from "react";
import Router from "next/router";
import useMakeNote from "@client/hooks/useMakeNote";
import connect from "@store/connect";
import {
  matchStateToProps,
  matchDispatchToProps
} from "@client/matchProps/CreateNote";
import ColorPicker, { pickColor } from "@comp/ColorPicker";
import Loader from "@comp/Loader";
import { auto_grow } from "@utils";
import "./index.scss";

const CreateNote = props => {
  const { editNote, isLoading, updateNote, message, isErrored } = useMakeNote(
    props
  );

  return isLoading ? (
    <Loader />
  ) : (
    (!isErrored && message && Router.push("/")) || (
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

export default connect(matchStateToProps, matchDispatchToProps)(CreateNote);
