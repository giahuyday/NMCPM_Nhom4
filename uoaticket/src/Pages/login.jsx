import React from "react";
import { Link } from "react-router-dom";
import './login.css'
import logo from "./images/uoalogo.png"

function Login(){
    return(      
    <login>
    <div className="sign-in">
        <div className="login-box">
            <h1>Đăng nhập</h1>
            <p>Chưa có tài khoản ?
            <Link to='/signup'> Đăng ký ngay.</Link>
            </p>
            
            <form action="Login" method="post">           
                <input type="text" name="Name" placeholder="Nhập email hoặc tên đăng nhập" />
                <input type= "text" name="Password" placeholder="Mật khẩu"/>
                <input type='checkbox' name="savelogin"></input>
                <label for="savelogin">Giữ đăng nhập
                <br></br>
                    <a>Quên mật khẩu</a>
                </label>
                <input type="submit" name="Login"></input>  
                <p>Đăng nhập bằng phương thức khác</p>
            </form>
        </div>
        <div className="poster">
            <img src={logo} alt="poster"></img>
        </div>
    </div>
    </login>);
}

export default Login;
