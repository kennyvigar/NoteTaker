import React from "react";
import "../styles/Note.css";

function Note(props) {
  return (
    <div className="Note">
      <div className="noteText">
        <p>#{props.id}</p>
        <p className="title">Title:{props.title}</p>
        <p className="details">Details:{props.detail}</p>
      </div>
    </div>
  );
}

export default Note;
