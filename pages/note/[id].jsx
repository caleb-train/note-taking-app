import React from "react";
import Router, { useRouter } from "next/router";
import { connect } from "react-redux";
import useViewNote from "@client/hooks/useViewNote";
import {
  matchStateToProps,
  matchDispatchToProps
} from "@client/matchProps/ViewNote";
import Loader from "@comp/Loader";
import style from "@styles/css";
import ColorPicker, { pickColor } from "@comp/ColorPicker";
import { auto_grow } from "@utils";
import "@styles/note.scss";

const ViewNote = props => {
  const router = useRouter();
  const { id } = router.query;

  console.log("ssd", id);
  const { editNote, isLoading, updateNote, message } = useViewNote(id, props);

  if (message) Router.push(`${process.env.URL}`);

  return isLoading ? (
    <Loader />
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
          <h5 className="mx-auto mb-6 text-center">
            Change something to make edits
          </h5>
          <textarea
            onInput={auto_grow}
            onChange={updateNote}
            name="body"
            value={editNote.body}
            className={`w-full md:p-8 p-6 rumple outline-none min-h-4/5 text-sm font-montserrat ${editNote.color ||
              "wht"}`}
            style={style.rumple}
          ></textarea>
        </section>
      </div>
    )) || <Loader />
  );
};

export default connect(matchStateToProps, matchDispatchToProps)(ViewNote);
