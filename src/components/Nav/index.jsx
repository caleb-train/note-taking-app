import React, { useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Actions from "@store/actions/noteActions";
import style from "@styles/css";
import useNav from "./useNav";
import DropDown from "./partitions/DropDown";
import NoteBtns from "./partitions/NoteBtns";
import AuthBtns from "./partitions/AuthBtns";
import "./index.scss";

const Nav = props => {
  const router = useRouter();

  const showNoteActions = /(notes|note|note\/*)/.test(router.pathname);

  const [navBackground, setNavBackground] = useState(false);

  useNav({ navBackground, setNavBackground });

  return (
    <nav
      className={`mainNav px-2 sm:px-8  justify-between ${
        navBackground ? "scroll" : ""
      } ${navBackground ? "scale" : ""}`}
    >
      <Link
        href={`${process.env.URL}${props.auth.isAuthenticated ? "notes" : ""}`}
      >
        <div className={`Logo flex items-center`}>
          <div className="border-0 logo" style={style.logo}></div>
          <h3>ScrapBook</h3>
        </div>
      </Link>
      <div className="actions">
        {showNoteActions && <NoteBtns {...props} />}
        {props.auth.isAuthenticated ? (
          <DropDown user={props.auth.user} logout={props.authActions.logout} />
        ) : (
          <AuthBtns auth={props.authActions} />
        )}
      </div>
    </nav>
  );
};

const matchStateToProps = ({ note, auth }) => {
  return {
    saveNote: note.saveNote,
    editNote: note.editNote,
    makeNote: note.makeNote,
    auth
  };
};

const matchDispatchToProps = {
  UpdateNoteAsync: Actions.UpdateNoteAsync,
  CreateNoteAsync: Actions.CreateNoteAsync
};

export default connect(matchStateToProps, matchDispatchToProps)(Nav);
