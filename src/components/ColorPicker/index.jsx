import React from "react";

const ColorPicker = ({ pickColor, editNote }) => {
  return (
    <div className="colorpicker">
      <div
        onClick={_ => pickColor("wht")}
        className={`${
          editNote.color === "wht" || !editNote.color ? "active" : ""
        } picker wht`}
      ></div>
      <div
        onClick={_ => pickColor("red")}
        className={`${editNote.color === "red" ? "active" : ""} picker red`}
      ></div>
      <div
        onClick={_ => pickColor("blu")}
        className={`${editNote.color === "blu" ? "active" : ""} picker blu`}
      ></div>
      <div
        onClick={_ => pickColor("yel")}
        className={`${editNote.color === "yel" ? "active" : ""} picker yel`}
      ></div>
      <div
        onClick={_ => pickColor("gray")}
        className={`${editNote.color === "gray" ? "active" : ""} picker gray`}
      ></div>
    </div>
  );
};

export const pickColor = (value, cb) => {
  const fakeEvt = { persist: _ => {}, target: { value, name: "color" } };
  cb(fakeEvt);
};

export default ColorPicker;
