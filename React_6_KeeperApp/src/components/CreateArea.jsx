import { useState } from "react";
import { Add } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  console.log("here");

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleExpanded() {
    setExpanded(true);
  }

  function handleSubmit(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          hidden={!expanded}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onFocus={handleExpanded}
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        <Zoom in={expanded}>
          <Fab type="submit">
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
