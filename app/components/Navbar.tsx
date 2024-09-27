"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // 스크롤 다운 시 메뉴바 숨김
        setShowNavbar(false);
      } else {
        // 스크롤 업 시 메뉴바 표시
        setShowNavbar(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤 위치 업데이트
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white p-4 flex items-center justify-between z-50 transition-transform duration-300 ${
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      style={{
        height: 70,
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
      }}
    >
      {/* 왼쪽의 페이지 로고 */}
      <Link href="/" passHref style={{ position: "fixed", left: 30 }}>
        <div className="flex items-center cursor-pointer">
          <Image
            src="/images/logo2.png" // 로고 이미지 경로
            alt="Site Logo"
            width={130} // 로고 이미지 너비
            height={50} // 로고 이미지 높이
          />
        </div>
      </Link>

      {/* 메뉴 항목들 */}
      <div className="flex justify-center w-full space-x-12">
        <Link href="/AIPlatform">
          <div
            className="text-black px-4 py-5 cursor-pointer hover:bg-gray-300"
            style={{ fontWeight: 600, fontSize: 17, borderRadius: 7 }}
          >
            AI Platform
          </div>
        </Link>

        <div
          className="relative text-black px-4 py-5 cursor-pointer hover:bg-gray-300"
          onMouseEnter={() => handleMouseEnter("Technic")}
          onMouseLeave={handleMouseLeave}
          style={{
            fontWeight: 600,
            fontSize: 17,
            borderRadius: 7,
          }}
        >
          Technic
          {hoveredMenu === "Technic" && (
            <div
              className="absolute top-full left-0 bg-white flex flex-col w-max"
              style={{
                left: -126,
                top: 67,
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 1,
                textAlign: "center",
                // marginTop: 30,
              }}
            >
              <Link href="/Technic/LLM">
                <div
                  className="text-black px-4 py-2 cursor-pointer hover:bg-gray-300"
                  style={{ fontWeight: 600, fontSize: 15 }}
                >
                  LLM/RAG/Agent
                </div>
              </Link>
              <Link href="/Technic/chatbot">
                <div
                  className="text-black px-4 py-2 cursor-pointer hover:bg-gray-300"
                  style={{ fontWeight: 600, fontSize: 15 }}
                >
                  챗봇 (지식형-RAG / 분석형-agent / 워크플로우형)
                </div>
              </Link>
            </div>
          )}
        </div>

        <div
          className="relative text-black px-4 py-5 cursor-pointer hover:bg-gray-300"
          onMouseEnter={() => handleMouseEnter("Q&A")}
          onMouseLeave={handleMouseLeave}
          style={{ fontWeight: 600, fontSize: 17, borderRadius: 7 }}
        >
          Q&A
          {hoveredMenu === "Q&A" && (
            <div
              className="absolute top-full left-0 bg-white flex flex-col w-max"
              style={{
                left: -13,
                top: 67,
                borderColor: "black",
                borderStyle: "solid",
                borderWidth: 1,
                textAlign: "center",
              }}
            >
              <Link href="/QnA/Contact">
                <div
                  className="text-black px-4 py-2 cursor-pointer hover:bg-gray-300"
                  style={{ fontWeight: 600, fontSize: 15 }}
                >
                  제품 문의
                </div>
              </Link>
              <Link href="/QnA/Notice">
                <div
                  className="text-black px-4 py-2 cursor-pointer hover:bg-gray-300"
                  style={{ fontWeight: 600, fontSize: 15 }}
                >
                  주요 소식
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
