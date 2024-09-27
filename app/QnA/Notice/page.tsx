"use client";

import React, { useState } from "react";
import Link from "next/link";
const notices = [
  {
    id: 3,
    title: "[업데이트] 새로운 기능 업데이트",
    regDate: "2024-09-27",
    content:
      "저희 플랫폼에  새로운 기능이 추가되었습니다. 이제 더 많은 도구를 사용하여 프로젝트를 관리할 수 있습니다.",
  },
  {
    id: 2,
    title: "[점검] 시스템 점검 안내",
    regDate: "2024-09-26",
    content:
      "시스템 점검이 진행될 예정입니다. 점검 시간 동안 일부 서비스가 제한될 수 있습니다.",
  },
  {
    id: 1,
    title: "[소식] AION-U 출시",
    regDate: "2024-09-25",
    content: "AION-U 출시가 되었습니다 문의부탁드립니다.",
  },
];

const NoticePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-[80px]">
      <h1 className="text-3xl font-bold mb-8 text-center">공지사항</h1>{" "}
      {/* 텍스트 중앙 정렬 */}
      {/* 공지사항 리스트 */}
      <div className="bo_list" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="thead">
          <span className="th subject">제목</span>
          <span className="th date">등록일</span>
        </div>
        <ul className="list">
          {notices.map((notice, index) => (
            <Link
              href={{
                pathname: `/QnA/Notice/${notice.id}`,
              }}
            >
              <li>
                <div className="td subject">{`${notice.title}`}</div>
                <div className="td date">{`${notice.regDate}`}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoticePage;
