import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./theatre.css";

const Theatre = () => {
  return (
    <div className="phim-rap-ghe">
      <div className="cont" />
      <button className="exit">
        <img className="ellipse-icon" alt="" src="../ellipse.svg" />
        <img className="icon-metro-cross" alt="" src="../icon-metrocross.svg" />
      </button>
      <button className="checkout">
        <b className="checkout1">Thanh toán</b>
      </button>
      <h4 className="vnd">000.000 VND</h4>
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
      <div className="rap">
        <div className="rap-child" />
        <b className="rap1">Rạp</b>
      </div>
      <div className="time">
        <div className="rap-child" />
        <b className="rap1">Giờ chiếu</b>
      </div>
      <div className="city">
        <div className="rap-child" />
        <b className="rap1">Tỉnh/Thành Phố</b>
      </div>
      <h3 className="filmname">Avatar (2022)</h3>
      <img className="thumnailfilm-icon" alt="" src="../thumnailfilm@2x.png" />
    </div>
  );
};

export default Theatre;
