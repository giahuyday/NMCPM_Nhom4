import React from "react";
import { Link } from "react-router-dom";
import './login.scss'
import logo from "./images/uoalogo.png"
import ava from "./images/slider3.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

function Login(){
    return(      
    <div className="sign-in">
        <div className="login-box">
            <h1>Đăng nhập</h1>
            <p className="signup">Chưa có tài khoản ?
                <Link to="/signu"className="s1">Đăng kí ngay</Link>
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
            <div className="icon">
                 <FacebookIcon/>
                 <GitHubIcon/>
                 <GoogleIcon/>
            </div>
        </div>
        <div className="poster">
            <img src={ava} alt="poster"></img>
        </div>
    </div>);
}

export default Login;
