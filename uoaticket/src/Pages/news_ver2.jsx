import React from "react";
import { Link } from "react-router-dom";
import './news_ver2.css'
import banner from "./images/banner.png"
import logo from "./images/uoalogo.png"
function News() {
    return (
        <>
        <body>
            <div id="banner">
                <img src={banner} ></img>
            </div>
            <div id="main">
                <div id="left">
                    <div id="left_1">
                          
                        <img src="https://i1-giaitri.vnecdn.net/2023/01/09/m3gan-1673234906-7732-1673235371.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=2wVLsoqzWq885bb_lzKfiQ" alt="news-movie"/>
                        <a href="https://vnexpress.net/phim-kinh-di-m3gan-gay-chu-y-phong-ve-4557811.html">
                        <h2>Phim kinh dị 'M3GAN' gây chú ý phòng vé</h2></a>
                        <p>Phim kinh dị "M3GAN" gây chú ý với doanh thu 30,2 triệu USD tuần qua trong bối cảnh bom tấn "Avatar 2" tiếp tục dẫn đầu phòng vé. </p>
                         
                    </div>
                    <div id="left_2">
                        
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                            <a href="https://vnexpress.net/james-cameron-doanh-thu-avatar-2-du-de-lam-cac-phan-tiep-theo-4557439.html">
                            <h2>James Cameron: 'Doanh thu Avatar 2 đủ để làm các phần tiếp theo</h2></a>
                            Đạo diễn James Cameron khẳng định sẽ làm thêm các phần tiếp theo của loạt phim "Avatar" nhờ lợi nhuận từ phần hai
                        </li>
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/minhhangtop1-1673058606-9849-1673058842.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=Ls6bLN1lp6tUepCCH9caTg" alt="news-movie"/>
                            <a href="https://vnexpress.net/phim-chi-chi-em-em-2-xoay-vao-moi-thu-ba-tra-tu-nhi-4557269.html">
                            <h2>Phim 'Chị chị em em 2' xoáy vào mối thù Ba Trà, Tư Nhị</h2></a>
                            "Chị chị em em 2" - phim Minh Hằng, Ngọc Trinh đóng - xoáy sâu chuyện tranh quyền đoạt vị của mỹ nhân Ba Trà, Tư Nhị. 
                        </li>
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/minhhangtop1-1673058606-9849-1673058842.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=Ls6bLN1lp6tUepCCH9caTg" alt="news-movie"/>
                            <a href="https://vnexpress.net/phim-chi-chi-em-em-2-xoay-vao-moi-thu-ba-tra-tu-nhi-4557269.html">
                            <h2>Phim 'Chị chị em em 2' xoáy vào mối thù Ba Trà, Tư Nhị</h2></a>
                            "Chị chị em em 2" - phim Minh Hằng, Ngọc Trinh đóng - xoáy sâu chuyện tranh quyền đoạt vị của mỹ nhân Ba Trà, Tư Nhị. 
                        </li>
                    
                    </div>
                </div>
                <div id="right">
                    <ul>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                                <a href="https://vnexpress.net/james-cameron-doanh-thu-avatar-2-du-de-lam-cac-phan-tiep-theo-4557439.html">
                                <h2>James Cameron: 'Doanh thu Avatar 2 đủ để làm các phần tiếp theo</h2></a>
                                Đạo diễn James Cameron khẳng định sẽ làm thêm các phần tiếp theo của loạt phim "Avatar" nhờ lợi nhuận từ phần hai
                            </li>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/07/minhhangtop1-1673058606-9849-1673058842.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=Ls6bLN1lp6tUepCCH9caTg" alt="news-movie"/>
                                <a href="https://vnexpress.net/phim-chi-chi-em-em-2-xoay-vao-moi-thu-ba-tra-tu-nhi-4557269.html">
                                <h2>Phim 'Chị chị em em 2' xoáy vào mối thù Ba Trà, Tư Nhị</h2></a>
                                "Chị chị em em 2" - phim Minh Hằng, Ngọc Trinh đóng - xoáy sâu chuyện tranh quyền đoạt vị của mỹ nhân Ba Trà, Tư Nhị. 
                            </li>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/04/james-cameron-13123-1672799561-8260-1672799650.png?w=240&h=144&q=100&dpr=1&fit=crop&s=NsosLVWqVOnQDpQgGJsi5A" alt="news-movie"/>
                                <a href="https://vnexpress.net/avatar-3-se-gioi-thieu-toc-na-vi-lua-4556002.html">
                                <h2>'Avatar 3' sẽ giới thiệu tộc Na'vi lửa</h2></a>
                                Đạo diễn James Cameron tiết lộ phần ba "Avatar" sẽ xoay quanh bộ tộc tôn thờ lửa ở Pandora, hé lộ những mặt tối của người Na'vi. 
                            </li>
                    
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2022/12/16/toc-tien-1-1671174763-6575-1671174878.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=NN0XUcK8bv61hGFa0xIG7A" alt="news-movie"/>
                                <a href="https://vnexpress.net/toc-tien-hat-ca-khuc-chu-de-phim-thanh-soi-4548965.html">
                                <h2>Tóc Tiên hát ca khúc chủ đề phim 'Thanh Sói'</h2></a>
                                Ca sĩ Tóc Tiên tung MV "Hoa cúc dại" trong "Thanh Sói" - phim hành động do Ngô Thanh Vân đạo diễn và sản xuất. 
                            </li>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2022/12/08/datrung-1670500391-6458-1670500512.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=5jECruyjZzfnowWgafGWZQ" alt="news-movie"/>
                                <a href="https://vnexpress.net/phim-dien-anh-dat-rung-phuong-nam-khoi-dong-4545914.html">
                                <h2>Phim điện ảnh 'Đất rừng phương Nam' khởi động</h2></a>
                                "Đất rừng phương Nam" - phim điện ảnh do Nguyễn Quang Dũng đạo diễn - khai máy, có diễn viên Trấn Thành, Tuấn Trần... tham gia. 
                            </li>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2022/12/01/trotanrucrotop-1669885626-3376-1669899787.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=DvxaWwvU8_V7HeHZvhVFaQ" alt="news-movie"/>
                                <a href="https://vnexpress.net/giai-tri/phim/thu-vien-phim/tro-tan-ruc-ro-522">
                                <h2>'Tro tàn rực rỡ' - bi kịch những người vợ bị chồng ghẻ lạnh</h2></a>
                                "Tro tàn rực rỡ" - phim chuyển thể truyện Nguyễn Ngọc Tư - khắc họa nỗi đau của nữ chính khi bị chồng ruồng rẫy, yêu người khác. 
                            </li>
                    </ul>
                </div>

            </div>
            <div id="footer">
             
                    <img src={logo} ></img>
                    <br/>
                    Trường Đại học Khoa học tự nhiên - ĐHQGTPHCM
                    <br/>
                Nhóm 4 - Nhập môn Công nghệ phần mềm
            </div>
        </body>
        
        
        </>
        
    );
}

export default News;