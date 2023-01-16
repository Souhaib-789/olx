import React from "react";
import Card from 'react-bootstrap/Card';
import { IoHeart } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';


const ProductCard = (props) => {
    return (
      <Card key={props?.key} style={{ width: '18rem' , margin: '1%' }}>
        <Card.Img variant="top" src={props?.image} style={{display: 'flex' , objectFit: 'contain', width: '70%', height: '80%', alignSelf: 'center', marginTop: 5}}/>
        <Card.Body>
        <Card.Text>{props?.name}</Card.Text>
        <div style={{display: "flex" , flexDirection: "row", justifyContent: "space-between"}}>
          <Card.Title>Rs {props?.price}</Card.Title>
          <IoHeartOutline size={22} />
          {/* <IoHeart size={22} /> */}
          </div>
        </Card.Body>
      </Card>
    );
  }

  export default ProductCard;