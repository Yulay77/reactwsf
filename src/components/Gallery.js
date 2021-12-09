// Lister les différents users du tableau
// Au click sur un élément, mettre un border en red

import { useState } from "react";

// Seulement un élément peut être sélectionné
const users = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Mike",
    age: 23,
  },
  {
    name: "Sarah",
    age: 22,
  },
  {
    name: "Jane",
    age: 24,
  },
];

export default function Gallery() {
  const [value, setValue] = useState("none");
  return (
    <ul>
      {users.map((item) => (
        <li onClick={function () {
          setValue(value === "none" ? "1px solid red" : "none");
        }}
        //DEFINIR LA FONCTION ONCLICK
          style={{ border: value }}> {item.name} {item.age}</li>
      ))
      }
    </ul>
  )
}

