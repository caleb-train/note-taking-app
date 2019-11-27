import React from "react";
import Loader from "@comp/Loader";
import Router from "next/router";
import connect from "@store/connect";
import {
  matchStateToProps,
  matchDispatchToProps
} from "@client/matchProps/ListNotes";
import useListNote from "@client/hooks/useListNote";
import { truncateText } from "@utils";
import "./index.scss";

const ListNotes = props => {
  console.log(props);
  const { isLoading, data, DeleteNote } = useListNote(props);

  return isLoading ? (
    <Loader />
  ) : data.length > 0 && data[0] !== null ? (
    data.map(note => (
      <div key={note.id} className="card-hd">
        <div className={`card rumple ${note.color} h-full`}>
          <div
            className="card-body"
            onClick={_ => Router.push(`/note/${note.id}`)}
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
            <span className="text-sm">2-4-18</span>
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
      <div className="emptyicon"></div>
      <h3 className="my-4">pen a thought</h3>
    </div>
  );
};

export default connect(matchStateToProps, matchDispatchToProps)(ListNotes);
