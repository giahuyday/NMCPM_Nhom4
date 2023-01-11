
import React, { Component } from "react";
import CloseIcon from '@mui/icons-material/Close';
import "./add-film.css";



export default class AdminAddFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filmname: "",
        images: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { filmname, images, description } = this.state;
    console.log(filmname, images, description);
    fetch("http://localhost:5000/createfilm", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "Application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            filmname,
            images
        }),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data, "createfilm")
        })
  }
  render(){
  return (
    <div className="admin-add-film">
      <div className="admin-add-film-child" />
      <h2>Thêm phim mới:</h2>
      <input className="namefilm" type="text" placeholder="Tên film" required  onChange={(e) => this.setState({ filmname: e.target.value })} />
      <input className="detail" type="text" placeholder="Mô tả" required  onChange={(e) => this.setState({ description: e.target.value })}/>
      <input className="uploadpic" type="text" required onChange={(e) => this.setState({ images: e.target.value })}>
      </input>
      <input type="button" value="Submit  " />
    </div>
  );
}
};

// import React, { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
// import "./add-film.css";

// const AdminAddFilm = () => {

//   const [imageUrl, setImageUrl] = useState("");

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     const objectUrl = URL.createObjectURL(file);
//     setImageUrl(objectUrl);
//   }

//   const handleRemove = () => {
//     setImageUrl("");
//     document.querySelector(".uploadpic").value = "";
//   }

//   return (
//     <div className="admin-add-film">

//       <div className="box" />

//       <button className="exit" />

//       {imageUrl && <button className="cancel"onClick={handleRemove}> Nhập lại
//       </button>}

//       <button className="summit">Cập nhật
//       </button>

//       <form className="form">
//         <input className="detail" type="text" placeholder="Mô tả" />
//         <input className="category" type="text" placeholder="Thể loại" />
//         <input className="name" type="text" placeholder="Tên film" />
//         <input className="uploadpic" type="file" required onChange={handleChange} />
//         {imageUrl && <img className="preview-image" src={imageUrl} alt="uploaded image" />}
//       </form>

//     </div>
//   );
// };

