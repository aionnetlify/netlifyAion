import React from "react";

const ChatbotPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-16 bg-gray-100">

            {/* 지식형 RAG 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">지식형 RAG</h1>
                    <p className="text-lg text-gray-600">AION에서 제공하는 지식형 RAG 챗봇</p>
                </div>
                {/* 지식형 RAG 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%] mb-8"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/EvQMupI96Ys" // 지식형 RAG 유튜브 링크
                        title="지식형 RAG YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                {/* 지식형 RAG 소개 이미지 */}
                <div className="w-full flex justify-center">
                    <img
                        src="/images/ai_image3.webp" // 지식형 RAG 소개 이미지 경로
                        alt="지식형 RAG 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>

            {/* 분석형 Agent 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">분석형 Agent</h1>
                    <p className="text-lg text-gray-600">AION에서 제공하는 분석형 Agent 챗봇</p>
                </div>
                {/* 분석형 Agent 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%] mb-8"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/EvQMupI96Ys" // 분석형 Agent 유튜브 링크
                        title="분석형 Agent YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                {/* 분석형 Agent 소개 이미지 */}
                <div className="w-full flex justify-center">
                    <img
                        src="/images/agent_intro.png" // 분석형 Agent 소개 이미지 경로
                        alt="분석형 Agent 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>

            {/* 워크플로우형 섹션 */}
            <section className="w-full max-w-6xl mb-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">워크플로우형</h1>
                    <p className="text-lg text-gray-600">AION에서 제공하는 워크플로우형 챗봇</p>
                </div>
                {/* 워크플로우형 유튜브 비디오 */}
                <div className="relative w-full h-0 pb-[56.25%] mb-8"> {/* 16:9 비율 유지 */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/EvQMupI96Ys" // 워크플로우형 유튜브 링크
                        title="워크플로우형 YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                {/* 워크플로우형 소개 이미지 */}
                <div className="w-full flex justify-center">
                    <img
                        src="/images/ai_aigent_image.webp" // 워크플로우형 소개 이미지 경로
                        alt="워크플로우형 소개 이미지"
                        className="w-full max-w-4xl object-cover"
                    />
                </div>
            </section>

            {/* 구분 선 */}
            <div className="w-full border-t border-gray-300 my-8"></div>
        </div>
    );
};

export default ChatbotPage;
