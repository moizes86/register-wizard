import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./display-data.css";

const DisplayData = () => {
  const dataFromStorage = JSON.parse(localStorage.getItem("data"));
  console.log("DATA FROM STORAGE ", dataFromStorage);

  function getDataFromLocalStorage() {
    const phase1 = JSON.parse(localStorage.getItem("user"));
    const phase2 = JSON.parse(localStorage.getItem("user2"));
    const phase3 = JSON.parse(localStorage.getItem("user3"));
    const newUser = { ...phase1, ...phase2, ...phase3 };
    if (dataFromStorage) {
      localStorage.setItem("data", JSON.stringify([...dataFromStorage, newUser]));
    } else {
      localStorage.setItem("data", JSON.stringify([newUser]));
    }
    localStorage.removeItem("user");
    localStorage.removeItem("user2");
    localStorage.removeItem("user3");
  }
  if (localStorage.getItem("user")) {
    getDataFromLocalStorage();
    console.log("!!!!!", localStorage.getItem("data"));
  }

  console.log(localStorage.getItem("data"));

  return (
    <div className="display-data">
      <h1>Details</h1>
      <ListGroup horizontal={"xl"} className="mt-4 font-weight-bold">
        <ListGroup.Item className="col-1">Image</ListGroup.Item>
        <ListGroup.Item className="col">Username</ListGroup.Item>
        <ListGroup.Item className="col">Email</ListGroup.Item>
        <ListGroup.Item className="col">Birthday</ListGroup.Item>
        <ListGroup.Item className="col">City</ListGroup.Item>
        <ListGroup.Item className="col">Address</ListGroup.Item>
        <ListGroup.Item className="col">Number</ListGroup.Item>
        <ListGroup.Item className="col">Hobbies</ListGroup.Item>
      </ListGroup>
      {dataFromStorage &&
        dataFromStorage.map((el, i) => {
          return (
            <ListGroup horizontal={"xl"} className="my-4" key={`${el.name}- ${i}`}>
              <ListGroup.Item className="col-1">
                <Image src={el.image} className="display-data-img" rounded />
              </ListGroup.Item>
              <ListGroup.Item className="col">{el.name}</ListGroup.Item>
              <ListGroup.Item className="col">{el.email}</ListGroup.Item>
              <ListGroup.Item className="col">{el.birthday}</ListGroup.Item>
              <ListGroup.Item className="col">{el.city}</ListGroup.Item>
              <ListGroup.Item className="col">{el.street}</ListGroup.Item>
              <ListGroup.Item className="col">{el.number}</ListGroup.Item>
              <ListGroup.Item className="col">{el.hobbies}</ListGroup.Item>
            </ListGroup>
          );
        })}

      <Link to="/">
        <Button>Add New</Button>
      </Link>
    </div>
  );
};

export default DisplayData;
