import React from "react";
import './signup.css'

function Signup(){
    return(      
        <div className="signup">
            <div className="signup-box">
                <h1>Đăng ký</h1>
                <p>Bạn đã có tài khoản?<a href=""> Đăng nhập ngay.</a></p>
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
            <img src="../icon/signupImg.jpg" alt="poster"/>
        </div>
    </div>);
}

export default Signup;