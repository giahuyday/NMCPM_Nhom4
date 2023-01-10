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

      <div className="admin-add-film-child" />

      <button className="exit">
        <CloseIcon/>
      </button>

      {imageUrl && <button className="cancel" onClick={handleRemove}>Nhập lại
      </button>}
      
      <button className="summit">Cập nhật
      </button>

      <form className="film-form">
      <input className="film-name" type="text" placeholder="Tên" name="name" required />
      <input className="category" type="text" placeholder="Thể loại" name="category" required />
      <input className="detail" type="text" placeholder="Mô tả" name="detail" required />
      </form>

      { imageUrl && <img className="preview-image" src={imageUrl} alt="uploaded image" /> }
    </div>
  );
};

export default AdminAddFilm;





