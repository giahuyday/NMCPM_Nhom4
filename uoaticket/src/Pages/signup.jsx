import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import poster from "./images/signupImg.jpg"
export default class Signup extends Component {
    // const [userName,setMail] = useState('')
    // const [password,setPassword] = useState('')
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // let regis = {userName,password};
        // console.log(regis);
        const { userName, password } = this.state;
        console.log(userName, password)
        fetch("http://localhost:5000/signup", {
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
                console.log(data, "createUser")
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
                            <input className="text" onChange={(event) => this.setState({ userName: event.target.value })
                            } type="text" name="EmailAdress" placeholder="Nhập địa chỉ email"
                                required=""></input>
                            <input className="text" onChange={(event) => this.setState({ password: event.target.value })
                            } type="password" name="password" placeholder="Mật khẩu" required=""></input>
                            {/* <input className="text w3lpass" type="password" name="password" placeholder="Nhập lại mật khẩu" required=""></input> */}
                            <button type="submit" value="Đăng ký" className="btn btn-primary">Đăng ký</button>
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