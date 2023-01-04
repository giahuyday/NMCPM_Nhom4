import React from "react";
import './login.css'

function Login(){
    return(      
    <div className="sign-in">
        <div className="login-box">
            <h1>Đăng nhập</h1>
            <p>Chưa có tài khoản ?
            <i>Đawng ký ngay</i>
            </p>
            <form action="Login" method="post">           
                <input type="text" name="Name" placeholder="Nhập email hoặc tên đăng nhập" />
                <input type= "text" name="Password" placeholder="Mật khẩu"/>
                <input type='checkbox' name="savelogin"></input>
                <label for="savelogin">Giữ đăng nhập
                    <a>Quên mật khẩu</a>
                </label>
                <input type="submit" name="Login"></input>  
                <p>Đăng nhập bằng phương thức khác</p>
            </form>
        </div>
        <div className="poster">
            <img src="" alt="poster"></img>
        </div>
    </div>
    );
}

export default Login;