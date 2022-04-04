import React from "react";
import "../styles/MainPage.css";
import Note from "./Note";

import notes from "../data/notes.js";

function createNote(note) {
  return <Note id={note.id} title={note.title} detail={note.detail} />;
}

function MainPage() {
  return (
    <div className="mainPage">
      <div className="wrapper">{notes.map(createNote)}</div>
    </div>
  );
}

export default MainPage;
