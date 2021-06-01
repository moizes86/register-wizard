import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image';
import './DisplayData.css';

const DisplayData = () => {
  const data = [
    {
      name: "Moshe Mantsur",
      email: "moshe.mn86@gmail.com",
      birthday: "1986-12-15",
      city: "Rehovot",
      street: "Kineret",
      number: 12,
      img: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/38328/38328.png",
      hobbies: ["Workout", "Dog", "Dancing", "Guitar"],
    },
    {
      name: "Moshe Mantsur",
      email: "moshe.mn86@gmail.com",
      birthday: "1986-12-15",
      city: "Rehovot",
      street: "Kineret",
      number: 12,
      img: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/38328/38328.png",
      hobbies: ["Workout", "Dog", "Dancing", "Guitar"],
    },
  ];

  return (
    <div className="display-data">
        <h1>Details</h1>
      {data.map((el, i) => {
        return (
          <ListGroup horizontal={"lg"} className="my-4" key={`${el.name}- ${i}`}>
            <ListGroup.Item>
              <Image src={el.img} className='display-data-img' rounded />
            </ListGroup.Item>
            <ListGroup.Item>{el.name}</ListGroup.Item>
            <ListGroup.Item>{el.email}</ListGroup.Item>
            <ListGroup.Item>{el.birthday}</ListGroup.Item>
            <ListGroup.Item>{el.city}</ListGroup.Item>
            <ListGroup.Item>{el.street}</ListGroup.Item>
            <ListGroup.Item>{el.number}</ListGroup.Item>
            <ListGroup.Item>{el.hobbies.join(", ")}</ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};

export default DisplayData;
