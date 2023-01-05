import React from "react";
import { Link } from "react-router-dom";
import './signup.css'
import poster from "./images/slider2.jpg"
function Signup() {
    return (
        <div className="container">
            <div className="signup">
                <div className="signup-box">
                    <h1>Đăng ký</h1>
                    <p>Bạn đã có tài khoản?<Link to='/login'> Đăng nhập ngay.</Link></p>
                    <form action="Signup" method="post">
                        <input className="text" type="text" name="EmailAdress" placeholder="Nhập địa chỉ email"
                            required=""></input>
                        <input className="text" type="password" name="password" placeholder="Mật khẩu" required=""></input>
                        <input className="text w3lpass" type="password" name="password" placeholder="Nhập lại mật khẩu" required=""></input>
                        <input type="submit" value="Đăng ký"></input>
                        <p>Đăng nhập bằng phương thức khác</p>
                    </form>
                </div>
                <div className="poster">
                    <img src={poster} alt="poster" />
                </div>
            </div>
        </div>);
}

export default Signup;