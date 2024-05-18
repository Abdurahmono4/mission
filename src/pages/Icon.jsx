import React, { useState } from "react";

function Icon() {
  const [marks, setMarks] = useState(
    JSON.parse(localStorage.getItem("marks")) || []
  );

  console.log(marks);

  return (
    <div>
      {marks.map((el, index) => (
        <h1 key={el.id}>{el.name}</h1>
      ))}
    </div>
  );
}

export default Icon;
