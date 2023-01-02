
function signin()
{
    return(
        <div className='sign-in'>
            <div className='login-box'>
                <form action='Login' method='post'>
                    <input type='text' name='EmailAdress' placeholder='Nhập email hoặc tên đăng nhập'></input>
                    <input type='password' name='password' placeholder='Mật khẩu' required=''></input>
                    <input type='checkbox' name='savelogin'></input>
                    <label for='savelogin' style='color: white '>Giữ đăng nhập
                        <a href='#' style='color: #917bf1; text-decoration:none'>Quên mật khẩu</a>
                    </label>
                    <input type='submit' value='Đăng nhập'> </input>
                    <p style='text-align: left'>Đăng nhập bằng phương thức khác</p>  
                </form>
            </div>
        </div>
    )
}
export default signin;