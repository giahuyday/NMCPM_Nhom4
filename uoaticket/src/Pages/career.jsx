import React from "react";
import { Link } from "react-router-dom";
import './career.css'
import Navbar  from "../Component/nav-bar"
function Career() {
    return (
        <>
        <div className="nav-bar"><Navbar/></div>
        
        <div className="container2">
            <h1>Tin tức tuyển dụng</h1>
            <div className="cv1">
                <div className="image">
                    <img src="https://png.pngtree.com/png-vector/20191024/ourmid/pngtree-phone-icon-isolated-on-abstract-background-png-image_1862613.jpg"/>
                    <img src="https://hoangphucthanh.vn/vnt_upload/service/08_2020/maintenance-icon-400x394.jpg"/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv8bI0GlaI0dru7alXn7Sss62ChDz-a1yBg&usqp=CAU"/>
                    <img src="https://banner2.cleanpng.com/20180620/aiw/kisspng-logo-surveillance-vdeovigilancia-ip-security-clo-vigilancia-5b29e871e9c931.3071293615294731379576.jpg"/>
                </div>
                <div className="infor2">
                    <h4>1. Call Center Agent (Tổng Đài viên bán thời gian)</h4>
                    <p>Số lượng: 02</p>
                    <p>Mức lương: Thương lượng</p>
                    <p>Loại việc làm: Part time</p>
                    {/* <a href="https://www.cgv.vn/default/careers/call-center-staff/">


                    </a> */}
    
                    
                    <br/>
                    <br/>

                    <h4>2. Nhân Viên Kỹ Thuật Bảo Trì</h4>
                    <p>Số lượng: 01</p>
                    <p>Mức lương: Thương lượng</p>
                    <p>Loại việc làm: Full time</p>
                    
                   
                    
                    
                    <br/>

                    <h4>3. Nhân Viên Bán Thời Gian</h4>
                    <p>Số lượng: 15-20</p>
                    <p>Mức lương: Thương lượng</p>
                    <p>Loại việc làm: Part time</p>

                   
                    <br/>
                    <br/>
                    

                    <h4>4. Giám Sát Vận Hành Rạp</h4>
                    <p>Số lượng: 01</p>
                    <p>Mức lương: Thương lượng</p>
                    <p>Loại việc làm: Full time</p>
                </div>
                <div className="btn">
                    <button name="button" type="button">
                        <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                        Chi tiết
                        </a>
                    </button>
                </div>
                <div className="btn">
                    <button name="button" type="button">
                        <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                        Chi tiết
                        </a>
                    </button>
                </div>
                <div className="btn">
                    <button name="button" type="button">
                        <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                        Chi tiết
                        </a>
                    </button>
                </div>
                <div className="btn">
                    <button name="button" type="button">
                        <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                        Chi tiết
                        </a>
                    </button>
                </div>
                <div className="btn">
                    <button name="button" type="button">
                        <a href="https://www.cgv.vn/default/careers/call-center-staff/">
                        Chi tiết
                        </a>
                    </button>
                </div>
            </div>
            
           
            
        </div>  
        </>
        );
}

export default Career;