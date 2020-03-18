import React, { useContext } from "react";
import NotesContext from "../context";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <div>
      <p>{note.text}</p>
      <div>
        <button
          onClick={() => dispatch({ type: "SET_CURRENT_NOTE", payload: note })}
        >
          Edit
        </button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Note;
