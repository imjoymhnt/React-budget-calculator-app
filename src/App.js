import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

function App() {
  const expenses = [
    {
      id: uuid(),
      title: "Room Rent",
      price: 2500,
    },
    {
      id: uuid(),
      title: "Course Expense",
      price: 1000,
    },
    {
      id: uuid(),
      title: "Web Hosting Expense",
      price: 1200,
    },
  ];

  const [data, setData] = useState(expenses);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && price > 0) {
      if (edit) {
        let tempData = data.map((item) => {
          return item.id === id ? { ...item, title, price } : item;
        });
        setData(tempData);
        setEdit(false);
      } else {
        const singleData = { id: uuid(), title, price };
        setData([...expenses, singleData]);
      }
    }
    setTitle("");
    setPrice("");
  };
  const clearList = () => {
    setData([]);
  };
  const handleDelete = (id) => {
    let tempExpenses = data.filter((item) => item.id !== id);
    setData(tempExpenses);
    console.log(tempExpenses);
  };
  const handleEdit = (id) => {
    const editData = data.find((item) => item.id === id);
    setTitle(editData.title);
    setPrice(editData.price);
    setEdit(true);
    setId(id);
  };
  return (
    <div className="App text-center">
      <h1>Budget Calculator</h1>
      <Form
        handlePrice={handlePrice}
        handleTitle={handleTitle}
        handleSubmit={handleSubmit}
        title={title}
        price={price}
      />
      <List data={data} handleEdit={handleEdit} handleDelete={handleDelete} />
      {data.length > 0 ? (
        <button onClick={clearList} className="btn btn-danger">
          Clear List
        </button>
      ) : null}
    </div>
  );
}

export default App;
