"use client";

import React, { useState } from "react";
import Link from "next/link";

const NoticePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-[80px]">
      <h1 className="text-3xl font-bold mb-8 text-center">공지사항</h1>{" "}
      <div className="bo_hd" style={{ marginTop: 50 }}>
        <div className="subject">[소식] AION-U 출시</div>
        <div className="date">2024-09-25</div>
      </div>
      <div className="bo_content">
        <p>AION-U 출시가 되었습니다 문의부탁드립니다.</p>
      </div>
      <div className="bo_tail">
        <div className="button_a">
          <a href="/QnA/Notice" className="btn">
            목록
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
