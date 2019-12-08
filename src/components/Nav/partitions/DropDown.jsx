import React, { useState, useEffect, useRef } from "react";
import image from "@styles/css";
import DropMenu from "@comp/DropMenu";

const DropDown = props => {
  const dropdownIcon = useRef();
  const [toggle, setToggle] = useState(false);
  const handleDropDown = e => {
    if (dropdownIcon.current && dropdownIcon.current.contains(e.target)) {
      console.log(e);
      setToggle(true);
      return;
    }
    setToggle(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDropDown);
    return () => {
      document.removeEventListener("click", handleDropDown);
    };
  }, []);

  return (
    <div>
      <div
        ref={dropdownIcon}
        className={`user-actions`}
        onClick={handleDropDown}
      >
        <div
          className="profile-img"
          style={image.profilePic(props.user.picture)}
        ></div>
        <img className="drop-down-arrow" src={image.dropDownArrow} />
      </div>
      {toggle ? <DropMenu {...props} /> : null}
    </div>
  );
};

export default DropDown;
