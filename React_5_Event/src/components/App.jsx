import { useState } from "react";
import ListItem from "./ListItem";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [textArray, setTextArray] = useState([]);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      return {
        // fName: name === "fName" ? value : prevValue.fName,
        // lName: name === "lName" ? value : prevValue.lName,
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    const name = fullName.fName + " " + fullName.lName;
    if (name !== " ") {
      setFullName({
        fName: "",
        lName: "",
      });
      setHeadingText("Hello " + name);
      setTextArray((prevValue) => {
        return [...prevValue, name];
      });
    }
    event.preventDefault();
  }

  function makeBackgroundDark(button) {
    // button.target.style.background = "black";
    setMouseOver(true);
  }

  function makeBackgroundNormal(button) {
    // button.target.style.background = "white";
    setMouseOver(false);
  }

  function deleteItem(id) {
    setTextArray((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          type="text"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          type="text"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button
          type="submit"
          style={{ background: isMouseOver ? "black" : "white" }}
          onMouseOver={makeBackgroundDark}
          onMouseOut={makeBackgroundNormal}
        >
          Submit
        </button>
      </form>
      <ul>
        {textArray.map((text, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              text={text}
              onChecked={deleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
