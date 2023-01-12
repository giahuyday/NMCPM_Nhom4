import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./PhimRapGhe1.css";

const Money= [70, 140];

const PhimRapGhe1 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/phimrapghe");
  }, [navigate]);

  return (
    <div className="phim-rap-ghe-1">
      <div className="group-parent">
        <div className="group-wrapper">
          <img
            className="group-item"
            alt=""
            src="../group-28.svg"
            onClick={onGroupClick}
          />
        </div>
        <img className="v6wsljwbl-icon1" alt="" src="../81v6wsljwbl1@2x.png" />
        <p className="avatar-2022">Avatar (2022)</p>
        <p className="trang-thanh-ton">Trang thanh toán</p>
        <p className="v">Vé</p>
        <p className="x2">x2</p>
        <p className="vnd">{Money[1]}000 VND</p>
        <p className="tng-cng">Tổng cộng</p>
        <p className="vnd1">000.000 VND</p>
        <p className="vnd2">100.000 VND</p>
        <p className="x21">x2</p>
        <Form.Check className="group-inner" label="Bỏng ngô" />
        <p className="vnd3">100.000 VND</p>
        <p className="x22">x2</p>
        <Form.Check className="group-formcheck" label="Nước ngọt" />
        <div className="line-div" />
        <button className="nhn-v-ti-quy-wrapper">
          <b className="nhn-v-ti">Nhận vé tại quầy</b>
        </button>
        <b className="momo-visa-napas">Momo, Visa, Napas</b>
        <p className="p">-10%</p>
        <input
          className="group-child1"
          type="text"
          placeholder="Nhập mã giảm giá"
        />
      </div>
    </div>
  );
};

export default PhimRapGhe1;
