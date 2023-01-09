import React from "react";
import { Link } from "react-router-dom";
import './career_ver2.css'
import banner from "./images/banner.png"
import logo from "./images/uoalogo.png"
import tuyendung from "./images/tuyendung.png"
function News() {
    return (
        <>
        <body>
            <div id="banner">
                <img src={tuyendung} ></img>
            </div>
            <div id="main">
                <div id="left">
                    <h3>Tuyển dụng</h3>
                    <div id="left_2">
                        
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                            <a href="https://www.cgv.vn/default/careers/operation-supervisor/">
                            <h2>Giám Sát Vận Hành Rạp</h2></a>
                            Giám sát hoạt động vận hành hàng ngày của rạp chiếu phim. Thực hiện kiểm tra checklist và báo cáo về tiêu chuẩn dịch vụ tại rạp.     
                        </li>
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                            <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                            <h2>Call Center Agent (Tổng Đài viên bán thời gian)</h2></a>
                            Trả lời tất cả các thắc mắc của khách hàng về các vấn đề liên quan. Trả lời câu hỏi của khách hàng qua Call center.
                        </li>
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                            <a href="https://www.cgv.vn/default/careers/parttime-staff/">
                            <h2>Nhân Viên Bán Thời Gian</h2></a>
                            Làm việc tại các quầy bán vé, quầy đồ ăn, soát vé và hướng dẫn khách hàng các quy trình tại rạp. Mức lương hấp dẫn.
                            </li>
                        {/* <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                            <a href="https://vnexpress.net/phim-chi-chi-em-em-2-xoay-vao-moi-thu-ba-tra-tu-nhi-4557269.https://www.cgv.vn/default/careers/call-center-staff/">
                            <h2>Call Center Agent (Tổng Đài viên bán thời gian)</h2></a>
                            Trả lời tất cả các thắc mắc của khách hàng về các vấn đề liên quan
                        </li>
                        <li>
                            <img src="https://i1-giaitri.vnecdn.net/2023/01/07/minhhangtop1-1673058606-9849-1673058842.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=Ls6bLN1lp6tUepCCH9caTg" alt="news-movie"/>
                            <a href="https://www.cgv.vn/default/careers/parttime-staff/">
                            <h2>Nhân Viên Bán Thời Gian</h2></a>
                            Làm việc tại các quầy bán vé, quầy đồ ăn, soát vé và hướng dẫn khách                         
                        </li> */}
                    
                    </div>
                </div>
                <div id="right">
                    <ul>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                                <a href="https://www.cgv.vn/default/careers/maintenance-operations/">
                                <h2>Nhân Viên Kỹ Thuật Bảo Trì</h2></a>
                                Kiểm tra, theo dõi và kiểm soát tình hình hoạt động của hệ thống điện, AHU, hệ thống thông gió, hệ thống nước sinh hoạt, thiết bị máy tính và kết cấu xây dựng của rạp để ngăn chặn, giảm bớt hư hỏng duy trì khả năng hoạt động tối đa của các hệ thống và thiết bị.                            
                            </li>
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/07/319342235693208732202523874733-8827-7827-1673104309.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=7gZtH4Fl9szywKplBe78Mg" alt="news-movie"/>
                                <a href="https://www.cgv.vn/default/careers/film-marketing-freelancer/">
                                <h2>Film Marketing Freelancer</h2></a>
                                Hỗ trợ team Marketing lên kế hoạch về POSM cho phim tại các rạp. Kết nối và cộng tác với các rạp để đảm bảo tài liệu Marketing được đến rạp đúng giờ.
                                {/* Kiểm tra, theo dõi và kiểm soát tình hình hoạt động của hệ thống điện, AHU, hệ thống thông gió, hệ thống nước sinh hoạt, thiết bị máy tính và kết cấu xây dựng của rạp để ngăn chặn, giảm bớt hư hỏng duy trì khả năng hoạt động tối đa của các hệ thống và thiết bị.                             */}
                                </li>
                            {/* <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/07/minhhangtop1-1673058606-9849-1673058842.jpg?w=240&h=144&q=100&dpr=1&fit=crop&s=Ls6bLN1lp6tUepCCH9caTg" alt="news-movie"/>
                                <a href="https://www.cgv.vn/default/careers/film-marketing-freelancer/">
                                <h2>Film Marketing Freelancer</h2></a>
                                Hỗ trợ team Marketing lên kế hoạch về POSM cho phim tại các rạp.
                            </li> */}
                            <li>
                                <img src="https://i1-giaitri.vnecdn.net/2023/01/04/james-cameron-13123-1672799561-8260-1672799650.png?w=240&h=144&q=100&dpr=1&fit=crop&s=NsosLVWqVOnQDpQgGJsi5A" alt="news-movie"/>
                                <a href="https://www.cgv.vn/default/careers/film-pr-freelancer/">
                                <h2>Film PR Freelancer</h2></a>
                                Thực hiện & theo dõi các hợp đồng, chứng từ, thủ tục thanh toán cho những dự án phim đảm bảo đúng tiến độ.
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