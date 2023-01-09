import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./add-film.css";

const AdminAddFilm = () => {
  return (
    <div className="admin-add-film">
      <div className="admin-add-film-child" />
      <button className="exit">
        <CloseIcon/>
      </button>
      <button className="cancel">Nhập lại
      </button>
      <button className="summit">Cập nhật
      </button>
      <input className="namefilm" type="text" placeholder="Tên film" required />
      <input className="detail" type="text" placeholder="Mô tả" required />
      <input className="uploadpic" type="file" required />
    </div>
  );
};

export default AdminAddFilm;

