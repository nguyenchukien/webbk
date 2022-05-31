import React from 'react'

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>
        <img src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" alt="" />
    </div>
    <div  className='name'>
        <h2>ĐẠI HỌC BÁCH KHOA HÀ NỘI</h2>
        <h2>TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</h2>
    </div>
    <div className='find'>
        <ul>
            <li><img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" alt="" /></li>
            <li><img src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" alt="" /></li>
        </ul>
        <input type="text"  />
    </div>
    </div>
  )
}

export default Header