"use client"

import React, { useState } from 'react';

const notices = [
    {
        title: "새로운 기능 업데이트",
        content: "저희 플랫폼에  새로운 기능이 추가되었습니다. 이제 더 많은 도구를 사용하여 프로젝트를 관리할 수 있습니다.",
    },
    {
        title: "시스템 점검 안내",
        content: "시스템 점검이 진행될 예정입니다. 점검 시간 동안 일부 서비스가 제한될 수 있습니다.",
    },
    {
        title: "AION-U 출시",
        content: "AION-U 출시가 되었습니다 문의부탁드립니다.",
    },
];

const NoticePage = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto mt-[80px]">
            <h1 className="text-3xl font-bold mb-8 text-center">공지사항</h1> {/* 텍스트 중앙 정렬 */}
            {/* 공지사항 리스트 */}
            {notices.map((notice, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="cursor-pointer p-4 bg-gray-100 border-b border-gray-300 flex justify-between items-center"
                        onClick={() => toggleNotice(index)}
                    >
                        <h2 className="font-bold text-lg text-black">{`${notice.title}`}</h2>
                        <span>{openIndex === index ? '-' : '+'}</span>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 bg-gray-50 border-b border-gray-300">
                            <p className="text-black">{notice.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NoticePage;
