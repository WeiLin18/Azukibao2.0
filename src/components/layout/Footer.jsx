import React from "react";
// import styled from "styled-components";

// const StyledFooter = styled.footer`
// background: linear-gradient(0deg, #E2E2E2 0%, #FFFDFA 11%, #FFFDFA 86%, $light-gray 100%);
// padding-top: 60px;
// padding-bottom: 60px;
// `;

const Footer = () => {

  return (
    <footer className="footer py-15">
    <div className="container po-re">
      <a href="index.html" className="logo">小豆包子</a>
      <ul className="h5 font-lg-h6 text-primary">
        <li className="d-flex">聯絡電話：<a href="tel:0222222222">02-2222-2222</a></li>
        <li className="d-flex">電子信箱：<a href="mailto:azukibao@gmail.com">azukibao@gmail.com</a></li>
        <li>© 2020 AzukiBao. All Rights Reserved.</li>
      </ul>
    </div>
  </footer>
  );
};

export default Footer;
