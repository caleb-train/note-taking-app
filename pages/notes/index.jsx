import React from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { format } from "date-fns";
import {
  matchStateToProps,
  matchDispatchToProps
} from "@client/matchProps/ListNotes";
import useListNote from "@client/hooks/useListNote";
import Loader from "@comp/Loader";
import style from "@styles/css";
import { truncateText } from "@utils";
import "@styles/index.scss";

const ListNotes = props => {
  const { isLoading, data, DeleteNote } = useListNote(props);

  return isLoading ? (
    <Loader />
  ) : data && data.length > 0 && data[0] !== null ? (
    data.map(note => (
      <div key={note.id} className="card-hd">
        <div
          className={`card rumple ${note.color} h-full`}
          style={style.rumple}
        >
          <div
            className="card-body"
            onClick={_ => Router.push(`${process.env.URL}note/${note.id}`)}
          >
            <h4 className="card-title text-xl">{note.title}</h4>
            <p
              className="card-text text-sm font-montserrat"
              style={{ marginBottom: "2rem" }}
            >
              {truncateText(note.body, 100)}
            </p>
          </div>
          <div
            className="card-footer flex justify-between items-center"
            style={{ border: "none", padding: "0 1rem", height: "3rem" }}
          >
            <span className="text-sm">
              {format(new Date(note.updatedAt), "dd-MM-yyyy")}
            </span>
            <button
              onClick={_ => DeleteNote(note.id)}
              className="text-sm p-1 border-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="emptyicon-hd">
      <div className="emptyicon" style={style.emptyicon}></div>
      <h3 className="my-4">pen a thought</h3>
    </div>
  );
};

export default connect(matchStateToProps, matchDispatchToProps)(ListNotes);
