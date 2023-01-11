import React, { Component }  from "react";
import { Link } from "react-router-dom";
import './signup.css'
import poster from "./images/signupImg.jpg"

export default class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { userName, password } = this.state;
        console.log(userName, password);
        fetch("http://localhost:5000/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "Application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                userName,
                password
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "creatUser")
            })
    }

    render() {
    return (
        <div className="container">
            <div className="signup">
                <div className="signup-box">
                    <h1>Đăng ký</h1>
                    <p>Bạn đã có tài khoản?<Link to='/login'> Đăng nhập ngay.</Link></p>
                    <form action="signup" method="post" onSubmit={this.handleSubmit}>
                        <input className="text" type="text" name="EmailAdress" placeholder="Nhập địa chỉ email"
                             onChange={(e) => this.setState({ userName: e.target.value })}></input>
                        <input className="text" type="password" name="password" placeholder="Mật khẩu" onChange={(e) => this.setState({ password: e.target.value })}></input>
                        <input className="text w3lpass" type="password" name="password" placeholder="Nhập lại mật khẩu" required=""></input>
                        <input type="button" value="Đăng ký"></input>
                        {/*<p>Đăng nhập bằng phương thức khác</p>*/}
                    </form>
                </div>
                <div className="poster">
                    <img src={poster} alt="poster" />
                </div>
            </div>
        </div>);
    }
} 