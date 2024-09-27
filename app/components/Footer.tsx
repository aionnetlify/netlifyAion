"use client"; // 이 파일이 클라이언트 컴포넌트임을 명시 << 현재
// back 단과 연동되는 부분이 없기에 컴포넌트를 서버형식으로 사용하기 위해서는 모든 페이지에 작성을 해주어야 컴포넌트로 사용가능함

import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-12"
      style={{ paddingLeft: 150, paddingRight: 150 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:text-left md:text-left">
          <div className="" style={{ float: "left" }}>
            <img alt="" src="/images/f_logo.png" style={{ width: 200 }} />
          </div>
          <div style={{ float: "left", marginTop: 20 }}>
            <h6 className="uppercase">
              <span style={{ marginRight: 8 }}>
                (06707) 서울 서초구 효령로 176, 02-523-7029
              </span>
            </h6>
            <p className="mt-2">COPYRIGHT 2018 kt ds ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-4 mt-4 ">
              <a href="#" className="text-gray-400 hover:text-white">
                개인정보 처리방침
              </a>
            </div>
          </div>
        </div>
        <div>
          <a className="social_btn_1" target="_blank">
            <img alt="" src="/images/social_btn_3.png" />
          </a>
          <a className="social_btn_1" target="_blank">
            <img alt="" src="/images/social_btn_1.png" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
