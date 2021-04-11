// import { useState } from "react";

// export default function Filters() {
//   const [nameFilter, setNameFilter] = useState();
//   const [statusFilter, setStatusFilter] = useState();

//   function handleOnChangeInput(event) {
//     const inputElement = event.target;
//     setNameFilter(inputElement.value);
//     console.log(event.target.value);
//   }

//   function handleOnClickSelectInput(event) {
//     const inputValue = event.target.value;
//     if (inputValue === "alive") {
//       setStatusFilter("alive");
//     } else if (inputValue === "dead") {
//       setStatusFilter("dead");
//     } else if (inputValue === "unknown") {
//       setStatusFilter("unknown");
//     } else if (inputValue === "all") {
//       setStatusFilter("");
//     }
//     console.log(event.target.value);
//   }

//   return (
//     <form className="filterInputs">
//       <input
//         onChange={handleOnChangeInput}
//         placeholder="Name of the character"
//       ></input>
//       <select onClick={handleOnClickSelectInput}>
//         <option>All</option>
//         <option>Alive</option>
//         <option>Dead</option>
//         <option>Unknown</option>
//       </select>
//     </form>
//   );
// }
