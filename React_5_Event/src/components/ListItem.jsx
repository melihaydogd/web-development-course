// import { useState } from "react";

// function ListItem(props) {
//   const [isClicked, setClicked] = useState(false);

//   function handleClick() {
//     setClicked((prevValue) => {
//       return !isClicked;
//     });
//   }
//   return (
//     <li
//       style={{ textDecoration: isClicked ? "line-through" : null }}
//       onClick={handleClick}
//     >
//       {props.text}
//     </li>
//   );
// }

import { useState } from "react";

function ListItem(props) {
  return (
    <div>
      <li
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ListItem;
