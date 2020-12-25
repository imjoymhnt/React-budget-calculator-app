import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Form({
  handlePrice,
  handleTitle,
  handleSubmit,
  title,
  price,
}) {
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          value={title}
          className="m-2"
          onChange={handleTitle}
        />
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          id="price"
          value={price}
          className="m-2"
          onChange={handlePrice}
        />
        <br />
        <button className="btn btn-success" onClick={handleSubmit}>
          Add Budget <FaRegArrowAltCircleRight />
        </button>
      </form>
    </div>
  );
}
