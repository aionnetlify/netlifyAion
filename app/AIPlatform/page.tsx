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
        {/* 섹션 1 */}
        <section className="relative w-full h-screen">
          <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{delay: 3000, disableOnInteraction: false}} // 자동 슬라이드, 3초마다
              loop={true} // 슬라이드를 무한 루프로 설정
              navigation // 좌우 화살표 추가
              pagination={{clickable: true}} // 페이지네이션 추가
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
            <Introduction/>
            <SlideShow/>
          </div>
        </section>

        {/* 섹션 구분선 */}
        <div className="border-t border-gray-300"></div>

        <div className="relative">
          {/* 섹션 2: 좌우 화살표로 이동 가능한 슬라이드 */}
          <section className="p-8 bg-white">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30} // 섹션 간 간격 설정
                slidesPerView={1} // 한 번에 한 섹션만 보이게 설정
                slidesPerGroup={1} // 한 번에 한 슬라이드만 넘기기
                loop={true} // 무한 루프 설정
                navigation={true} // 좌우 화살표 활성화
                pagination={{clickable: true}} // 하단에 페이지네이션 추가
                allowTouchMove={true} // 터치 슬라이드 가능
            >
              <SwiperSlide>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    시각 콘텐츠 생성: Contents Optimization Platform (COP)
                  </h2>
                  <p className="text-lg mb-8">
                    COP는 생성형 AI를 활용해 다양한 마케팅 콘텐츠를 생성하는 플랫폼으로, 기업의 브랜드 마케팅 담당자 및 광고 대행사 담당자들이 손쉽게 사용할 수 있습니다.
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <Image
                        src="/images/test3.jpg" // 이미지 경로
                        alt="COP Example"
                        width={1190}
                        height={530}
                        className="mx-auto"
                        style={{maxWidth: '100%', height: 'auto'}} // 이미지 비율에 맞게 크기 조정
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-semibold mb-4">AI Coding</h2>
                  <p className="text-lg mb-8">
                    LG CNS의 AI Coding은 자체 확보한 모델 또는 빅테크 기업의 API모델로 서비스를 제공하고 있습니다.
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <Image
                        src="/images/test4.jpg" // 이미지 경로
                        alt="AI Coding Example"
                        width={1190}
                        height={535}
                        className="mx-auto"
                        style={{maxWidth: '100%', height: 'auto'}} // 이미지 비율에 맞게 크기 조정
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-semibold mb-4">
                    사내 지식 기반 답변: The next generation of KM
                  </h2>
                  <p className="text-lg mb-8">
                    사내 임직원들이 업무에 필요한 지식을 찾기 위해 채팅창에 자연어로 질의하면 생성형 AI가 사내 데이터를 분석해 최적의 답변을 제공하는 서비스입니다.
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <Image
                        src="/images/test2.jpg" // 이미지 경로
                        alt="Knowledge Management Example"
                        width={1190}
                        height={923}
                        className="mx-auto"
                        style={{maxWidth: '100%', height: 'auto'}} // 이미지 비율에 맞게 크기 조정
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-semibold mb-4">GenAI Studio</h2>
                  <p className="text-lg mb-8">
                    LG CNS GenAI Studio는 기업 고객이 GenAI를 접목해 DX를 가속화할 수 있도록 개발한 고객 참여형 프로그램입니다. 고객의 GenAI 도입 여정의 첫 걸음부터
                    구체적인 실행에 이르기까지 전 과정을 빠르고 체계적으로 지원할 수 있도록 설계했습니다.
                  </p>
                  <div className="w-full flex items-center justify-center">
                    <Image
                        src="/images/test5.jpg" // 이미지 경로
                        alt="GenAI Studio Example"
                        width={1190}
                        height={1430}
                        className="mx-auto"
                        style={{maxWidth: '100%', height: 'auto'}} // 이미지 비율에 맞게 크기 조정
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>


        {/* 섹션 구분선 */}
        <div className="border-t border-gray-300"></div>

        {/* 섹션 6 */}
        {/* 섹션 6 */}
        <section className="min-h-[500px] flex items-center justify-center bg-gray-100"> {/* 높이와 중앙 정렬 설정 */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-black mb-8">DAP GenAI Knowledge Lake 특장점</h2>

            {/* 특장점 목록을 개별 박스 형태로 */}
            <div className="space-y-8">
              <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl font-bold mr-4">1</span>
                  <p className="text-black">
                    Pre-Built 된 파서와 최적의 LLM, 임베딩 모델을 활용해 쉽고 빠르게 지식데이터를 구축할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl font-bold mr-4">2</span>
                  <p className="text-black">
                    검색 성능 보장을 위한 최적의 설정값을 설계하고, 이를 기반으로 대량의 문서를 지식화하는 RAG 파이프라인을 구축하고 운영할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
                <div className="flex items-start">
                  <span className="text-red-500 text-2xl font-bold mr-4">3</span>
                  <p className="text-black">
                    지식데이터 관리를 위한 보안, 권한관리, 인프라에 대한 Governance 체계를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



  {/* 섹션 구분선 */
  }
  <div className="border-t border-gray-300"></div>

  {/* 섹션 7 */
  }
  <section className="min-h-[500px] flex items-center justify-center bg-white"> {/* 높이와 중앙 정렬 설정 */}
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-black mb-4">자세한 내용은 KT DS 전문가에게</h2>
      <p className="text-2xl font-bold text-black mb-4">직접 문의하세요</p>

      {/* 문의하기 버튼 */}
      <a
          href="/QnA/Contact"  // 문의 페이지의 링크로 변경하세요
          className="inline-block bg-white text-black font-semibold py-3 px-6 border border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-colors"
      >
        문의하기
      </a>
    </div>
  </section>


</div>
)
  ;
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
