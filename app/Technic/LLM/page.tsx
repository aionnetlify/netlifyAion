import React from "react";

const LLMPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 bg-gray-100">
            {/* LLM 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">LLM이란</h1>
                    <p className="text-lg text-gray-600">LLM 설명이 들어갈 영역입니다.</p>
                </div>
                {/* LLM 소개 이미지 */}
                <div className="w-full flex justify-center mb-8">
                    <img
                        src="/images/aion8.png" // LLM 소개 이미지 경로
                        alt="LLM 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
                {/* LLM 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/3dEzMRL5VMk" // LLM 유튜브 링크
                        title="LLM YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>

            {/* RAG 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">RAG란</h1>
                    <p className="text-lg text-gray-600">RAG 설명이 들어갈 영역입니다.</p>
                </div>
                {/* RAG 소개 이미지 */}
                <div className="w-full flex justify-center mb-8">
                    <img
                        src="/images/aion5.png" // RAG 소개 이미지 경로
                        alt="RAG 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
                {/* RAG 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/6m_bntSp21I" // RAG 유튜브 링크
                        title="RAG YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>

            {/* AI-Agent 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">AI-Agent란</h1>
                    <p className="text-lg text-gray-600">AI-Agent 관련 설명이 들어갈 영역입니다.</p>
                </div>
                {/* AI-Agent 소개 이미지 */}
                <div className="w-full flex justify-center mb-8">
                    <img
                        src="/images/ai_aigent_image.webp" // AI-Agent 소개 이미지 경로
                        alt="AI-Agent 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
                {/* AI-Agent 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/gehr_zCvivo" // AI-Agent 유튜브 링크
                        title="AI-Agent YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>
        </div>
    );
};

export default LLMPage;
