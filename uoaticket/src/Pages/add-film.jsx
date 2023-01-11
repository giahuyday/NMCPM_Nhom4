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
      <button className="exit">
        <CloseIcon/>
      </button>
      <button className="cancel">Nhập lại
      </button>
      <button className="summit" onClick={this.handleSubmit}>Cập nhật
      </button>
      <input className="namefilm" type="text" placeholder="Tên film" required  onChange={(e) => this.setState({ filmname: e.target.value })} />
      <input className="detail" type="text" placeholder="Mô tả" required  onChange={(e) => this.setState({ description: e.target.value })}/>
      <input className="uploadpic" type="file" required onChange={(e) => this.setState({ images: e.target.value })}>
      </input>
    </div>
  );
}
};