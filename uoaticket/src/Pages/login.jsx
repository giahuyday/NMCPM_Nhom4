import React, { Component } from "react";
import { Link, redirect } from "react-router-dom";
import './login.css'
import logo from "./images/uoalogo.png"
import ava from "./images/signupImg.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Home from "./home";

export default class Login extends Component {
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
        const { userName, password } = this.state
        console.log(userName, password);
        fetch("http://localhost:5000/login", {
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
                alert("Login success")
                console.log(data, "Login")
            })
            alert("Login Fail")
    }

    render() {
        return (
            <>
            <div className="container">
                <div className="sign-in">
                    <div className="login-box">
                        <h1>Đăng nhập</h1>
                        <p >Chưa có tài khoản?
                            <Link to="/signup" className="s1"> Đăng kí ngay</Link>
                        </p>
                        <form action="login" method="post">
                            <input type="text" name="Name" placeholder="Nhập email hoặc tên đăng nhập" onChange={(e) => this.setState({ userName: e.target.value })} />
                            <input type="text" name="Password" placeholder="Mật khẩu" onChange={(e) => this.setState({ password: e.target.value })} />
                            <input type='checkbox' name="savelogin"></input>
                            <label for="savelogin"> Giữ đăng nhập
                                <br></br>

                            </label>
                            <br></br>
                            <a>Quên mật khẩu</a>
                            <input type="button" value="Đăng nhập"  onClick={this.handleSubmit} ></input>

                            <p>Đăng nhập bằng phương thức khác  </p>

                        </form>
                            <div className="icon">
                                <FacebookIcon />
                                <GitHubIcon />
                                <GoogleIcon />
                            </div>
                        
                    </div>
                    <div className="poster">
                            <img src={ava} alt="poster"></img>
                        </div>
                </div>
                </div>
            </>);
    }
}