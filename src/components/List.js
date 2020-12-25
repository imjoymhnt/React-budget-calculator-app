import React from "react";
import Budget from "./Budget";

export default function List({ data, handleDelete, handleEdit }) {
  return (
    <div>
      <ul>
        {data.map((ele) => (
          <Budget
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={ele.id}
            ele={ele}
          />
        ))}
      </ul>
    </div>
  );
}
