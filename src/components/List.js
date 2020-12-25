import React from "react";
import Budget from "./Budget";

export default function List({ data, handleDelete }) {
  return (
    <div>
      <ul>
        {data.map((ele) => (
          <Budget handleDelete={handleDelete} key={ele.id} ele={ele} />
        ))}
      </ul>
    </div>
  );
}
