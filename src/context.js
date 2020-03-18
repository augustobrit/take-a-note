import React from "react";

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: "do homeworkd" },
    { id: 2, text: "do homeasd" },
    { id: 3, text: "dASdrkd" }
  ]
});

export default NotesContext;
