"use client"; // 이 파일이 클라이언트 컴포넌트임을 명시

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

import Image from "next/image";
//이미지 슬라이드 될 이미지들
const images = [
  "/images/test.jpg",
  "/images/ai_image.jpg",
  "/images/ai_image3.webp",
  "/images/ai_aigent_image.webp",
];

const AIPlatformPage: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/*/!* 섹션 1 *!/*/}
      <section className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 자동 슬라이드, 3초마다
          loop={true} // 슬라이드를 무한 루프로 설정
          className="h-full"
          ref={swiperRef}
          allowTouchMove={true} // 터치 슬라이드 활성화
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 섹션 구분선 */}
      <div className="border-t border-gray-300"></div>

      {/* 섹션 2 */}
      <section className="p-8 bg-gray-100">
        <div>
          <Introduction />
          <SlideShow />
        </div>
      </section>

      {/* 섹션 구분선 */}
      <div className="border-t border-gray-300"></div>

      {/* 섹션 3 */}
      <section className="p-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            시각 콘텐츠 생성: Contents Optimization Platform (COP)
          </h2>
          <p className="text-base md:text-lg">
            COP는 생성형 AI를 활용해 다양한 마케팅 콘텐츠를 생성하는 플랫폼으로,
            기업의 브랜드 마케팅 담당자 및 광고 대행사 담당자들이 손쉽게 사용할
            수 있습니다.
          </p>
          <Image
            src="/images/test3.jpg" // 이미지 경로
            alt="Example Image"
            width={1190}
            height={530}
            className="mx-auto"
          />
        </div>
      </section>

      {/* 섹션 구분선 */}
      <div className="border-t border-gray-300"></div>

      {/* 섹션 4 */}
      <section className="p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">AI Coding</h2>
          <p className="text-base md:text-lg">
            LG CNS의 AI Coding은 자체 확보한 모델 또는 빅테크 기업의 API모델로
            서비스를 제공하고 있습니다.
          </p>
          <Image
            src="/images/test4.jpg" // 이미지 경로
            alt="Example Image"
            width={1190}
            height={530}
            className="mx-auto"
          />
        </div>
      </section>

      {/* 푸터 */}
      {/* <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                <p>&copy; {new Date().getFullYear()} AI Platform. All rights reserved.</p>
            </footer> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    image: "/images/aionyoutube1.jpg",
    title: "aion 관련 웨비나",
    link: "https://www.youtube.com/watch?v=EvQMupI96Ys&t=1s",
  },
  {
    id: 2,
    image: "/images/aionyoutube2.jpg",
    title: "앤트봇 ",
    link: "https://www.youtube.com/watch?v=wVGoWvTAekQ&t=2s",
  },
  {
    id: 3,
    image: "/images/youtube3.jpg",
    title: "ktds 설명",
    link: "https://www.youtube.com/watch?v=QiNSfxV405E",
  },
  {
    id: 4,
    image: "/images/aionyoutube1.jpg",
    title: " 웨비나",
    link: "https://www.youtube.com/watch?v=EvQMupI96Ys&t=1s",
  },
  {
    id: 5,
    image: "/images/aionyoutube2.jpg",
    title: "앤트봇 ",
    link: "https://www.youtube.com/watch?v=wVGoWvTAekQ&t=2s",
  },
  {
    id: 6,
    image: "/images/youtube3.jpg",
    title: "ktds 설명",
    link: "https://www.youtube.com/watch?v=QiNSfxV405E",
  },
  {
    id: 7,
    image: "/images/aionyoutube1.jpg",
    title: "aion 관련 웨비나",
    link: "https://www.youtube.com/watch?v=EvQMupI96Ys&t=1s",
  },
  {
    id: 8,
    image: "/images/aionyoutube2.jpg",
    title: "앤트봇 ",
    link: "https://www.youtube.com/watch?v=wVGoWvTAekQ&t=2s",
  },
  {
    id: 9,
    image: "/images/youtube3.jpg",
    title: "ktds 설명",
    link: "https://www.youtube.com/watch?v=QiNSfxV405E",
  },
  {
    id: 10,
    image: "/images/aionyoutube1.jpg",
    title: "aion 관련 웨비나",
    link: "https://www.youtube.com/watch?v=EvQMupI96Ys&t=1s",
  },
  {
    id: 11,
    image: "/images/aionyoutube2.jpg",
    title: "앤트봇 ",
    link: "https://www.youtube.com/watch?v=wVGoWvTAekQ&t=2s",
  },
  {
    id: 12,
    image: "/images/youtube3.jpg",
    title: "ktds 설명",
    link: "https://www.youtube.com/watch?v=QiNSfxV405E",
  },
];
const SlideShow = () => {
  return (
    <div className="w-full py-8 overflow-hidden">
      <Swiper
        spaceBetween={5} // 이미지 간 간격을 좁게 설정
        loop={true} // 무한 반복 슬라이드
        speed={6000} // 슬라이드 속도를 천천히 설정
        autoplay={{
          delay: 0, // 슬라이드가 멈추지 않고 계속해서 흐르게 설정
          disableOnInteraction: false, // 상호작용 후에도 다시 슬라이드 작동
          pauseOnMouseEnter: true, // 마우스가 호버할 때 슬라이드 멈춤
        }}
        freeMode={true} // 부드럽게 계속 흐르도록 설정
        breakpoints={{
          // 화면 너비가 640px 이하일 때 (모바일)
          640: {
            slidesPerView: 1, // 한 번에 한 개의 카드
          },
          // 화면 너비가 768px 이하일 때 (태블릿)
          768: {
            slidesPerView: 2, // 한 번에 두 개의 카드
          },
          // 화면 너비가 1024px 이하일 때 (중간 크기 화면)
          1024: {
            slidesPerView: 4, // 한 번에 네 개의 카드
          },
          // 화면 너비가 1280px 이상일 때 (데스크탑)
          1280: {
            slidesPerView: 6, // 한 번에 여섯 개의 카드
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={card.id}>
            <div
              className={`relative w-full h-64 ${
                index % 2 === 0 ? "mt-10" : "mb-10"
              }`}
            >
              {/* 이미지 크기 명시적으로 설정 */}
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              {/* 텍스트 배경 없이 이미지 내부 하단에 텍스트 추가 */}
              <div className="absolute bottom-2 left-2 right-2 text-white text-center p-2">
                <h3 className="text-sm font-bold shadow-lg">{card.title}</h3>
              </div>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              ></a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold">AION-U</h2>
      <p className="text-lg text-gray-600 mt-4">AION-U 유튜브 설명부분.</p>
    </div>
  );
};

export default AIPlatformPage;
