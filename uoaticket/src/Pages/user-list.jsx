import React from "react";

import "./user-list.css";

const ManageUser = () => {
  return (
    <div className="manage-user">
      <div className="danh-sach">Danh sách người dùng</div>
      <div className="manage-user-child">
        <table >
          <tr>
            <th>ID</th>
            <th>Tên đăng nhập</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vai trò</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
