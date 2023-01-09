import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import './login.scss'
import logo from "./images/uoalogo.png"
import ava from "./images/slider3.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import userReducer from "../redux/reducers/users";
import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../redux/actions"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {userName, password} = this.state
        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Controll-Allow-Origin": "*",
            },
            body: JSON.stringify(
                {
                    userName,
                    password,
                }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "getUser")
            })  
    }
    render() {
        return (
            <div className="sign-in">
                <div className="login-box">
                    <h1>Đăng nhập</h1>
                    <p>Chưa có tài khoản ?
                        <Link to="/signup" className="s1">Đăng kí ngay</Link>
                    </p>
                    <form action="login" method="post" onSubmit={this.handleSubmit}>
                            <input className="text" onChange={(event) => this.setState({ userName: event.target.value })
                            } type="text" name="EmailAdress" placeholder="Nhập địa chỉ email"
                                required=""></input>
                            <input className="text" onChange={(event) => this.setState({ password: event.target.value })
                            } type="password" name="password" placeholder="Mật khẩu" required=""></input>
                            {/* <input className="text w3lpass" type="password" name="password" placeholder="Nhập lại mật khẩu" required=""></input> */}
                            <button type="submit" value="Đăng ký" className="btn btn-primary">Đăng ký</button>
                            {/*<p>Đăng nhập bằng phương thức khác</p>*/}
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
            </div>);
    }
}
