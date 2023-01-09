import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./theatre.css";
import CloseIcon from '@mui/icons-material/Close';
// import avatars from "./images/slider1.jpg";
import Navbar from "../Component/nav-bar"
const Theatre = () => {
  return (
    <><Navbar />
    <div className="phim-rap-ghe">
      <div className="cont" />

      <button className="exit">
          <CloseIcon/>
      </button>

      <button className="checkout">
        Thanh toán
      </button>

      <h4 className="money">000.000 VND</h4>

      <div className="seat">
        <Form.Check className="seatc5-formcheck" />
        <Form.Check className="seatc4-formcheck" />
        <Form.Check className="seatc3-formcheck" />
        <Form.Check className="seatc2-formcheck" />
        <Form.Check className="seatc1-formcheck" />
        <Form.Check className="seatb5-formcheck" />
        <Form.Check className="seatb4-formcheck" />
        <Form.Check className="seatb3-formcheck" />
        <Form.Check className="seatb2-formcheck" />
        <Form.Check className="seatb1-formcheck" />
        <Form.Check className="seata5-formcheck" />
        <Form.Check className="seata4-formcheck" />
        <Form.Check className="seata3-formcheck" />
        <Form.Check className="seata2-formcheck" />
        <Form.Check className="seata1-formcheck" />
      </div>

      <h5 className="chooseseat">Chọn ghế ngồi</h5>

      <select className="rap">
        <option value="hcm">TP.HCM</option>
      </select>

      <select className="time">
        <option value="16">16h</option>
        <option value="19">19h</option>
        <option value="21">21h</option>
        <option value="22">22h</option>
      </select>

      <select className="city">
        <option value="hcm">TP.HCM</option>
      </select>

      <h3 className="filmname">Avatar (2022)</h3>

      <img className="thumnailfilm-icon" alt="" src="avatar" />
    </div></>
  );
};

export default Theatre;




