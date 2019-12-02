import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
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

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    var elem = document.querySelector("main");
    const nextDiv = document.querySelector("body");
    const handleScroll = () => {
      var bounding = elem.getBoundingClientRect();

      const show = bounding.y < 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    nextDiv.addEventListener("scroll", handleScroll);
    return () => {
      nextDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`mainNav px-2 sm:px-8  justify-between ${
        navBackground ? "scroll" : ""
      }`}
    >
      <Link href="/">
        <div
          className={`Logo flex items-center ${navBackground ? "scale" : ""}`}
        >
          <div className="border-0 logo"></div>
          <h3>ScrapBook</h3>
        </div>
      </Link>
      <div
        className={`actions w-32 flex flex-row flex-grow-0 justify-end ${
          navBackground ? "scale" : ""
        }`}
      >
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

const matchDispatchToProps = {
  UpdateNoteAsync: Actions.UpdateNoteAsync,
  CreateNoteAsync: Actions.CreateNoteAsync
};

export default connect(matchStateToProps, matchDispatchToProps)(Nav);
