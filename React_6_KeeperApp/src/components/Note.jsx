import { Delete } from "@material-ui/icons";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.index);
        }}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Note;
