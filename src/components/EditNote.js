import React, { useState, useContext, useRef, useEffect } from "react";
import NotesContext from "../context";

export default function EditNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === "") {
      alert("cannot add a blank note");
    } else {
      dispatch({ type: "UPDATE_NOTE", payload: value });
      setValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <button>Update Note</button>
        </div>
      </form>
    </div>
  );
}
