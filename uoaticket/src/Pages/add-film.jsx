import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./add-film.css";

const AdminAddFilm = () => {

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setImageUrl(objectUrl);
  }

  const handleRemove = () => {
    setImageUrl("");
    document.querySelector(".uploadpic").value = "";
  }

  return (
    <div className="admin-add-film">

      <div className="box" />

      <button className="exit" />

      {imageUrl && <button className="cancel"onClick={handleRemove}> Nhập lại
      </button>}

      <button className="summit">Cập nhật
      </button>

      <form className="form">
        <input className="detail" type="text" placeholder="Mô tả" />
        <input className="category" type="text" placeholder="Thể loại" />
        <input className="name" type="text" placeholder="Tên film" />
        <input className="uploadpic" type="file" required onChange={handleChange} />
        {imageUrl && <img className="preview-image" src={imageUrl} alt="uploaded image" />}
      </form>

    </div>
  );
};

export default AdminAddFilm;
