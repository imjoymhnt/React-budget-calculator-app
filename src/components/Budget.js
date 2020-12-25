import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Budget({ ele, handleDelete, handleEdit }) {
  return (
    <div>
      <li>
        <div>
          <h4>{ele.title}</h4>
          <h4>{ele.price}</h4>
        </div>
        <div>
          <button
            onClick={() => handleEdit(ele.id)}
            className="btn btn-primary m-1"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(ele.id)}
            className="btn btn-danger m-1"
          >
            <FaTrash />
          </button>
        </div>
      </li>
    </div>
  );
}
