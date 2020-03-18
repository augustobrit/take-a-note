import React, { useContext } from "react";
import NotesContext from "../context";
import Note from "./Note";

const NoteList = () => {
  const { state } = useContext(NotesContext);

  return (
    <div>
      {state.notes.map((note, i) => {
        return <Note note={note} key={i} />;
      })}
    </div>
  );
};

export default NoteList;
