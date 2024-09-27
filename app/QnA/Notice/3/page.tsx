"use client";

import React, { useState } from "react";
import Link from "next/link";

const NoticePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-[80px]">
      <h1 className="text-3xl font-bold mb-8 text-center">공지사항</h1>{" "}
      <div className="bo_hd" style={{ marginTop: 50 }}>
        <div className="subject">[업데이트] 새로운 기능 업데이트</div>
        <div className="date">2024-09-27</div>
      </div>
      <div className="bo_content">
        <p>
          저희 플랫폼에 새로운 기능이 추가되었습니다. 이제 더 많은 도구를
          사용하여 프로젝트를 관리할 수 있습니다.
        </p>
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
