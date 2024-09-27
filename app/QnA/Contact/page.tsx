"use client"

import React, { useState } from 'react';

const faqs = [
    {
        category: "LLM",
        question: "LLM이 무엇인지요?",
        answer: "대규모 언어 모델(LLM)은 텍스트를 인식하고 생성하는 등의 작업을 수행할 수 있는 일종의 인공 지능(AI) 프로그램입니다.",
    },
    {
        category: "chatbot",
        question: "챗봇은 어떻게 쓰나요?",
        answer: "사용 용도에 맞추어 학습을 시켜 사용합니다.",
    },
    {
        category: "technic",
        question: "어떤 기술들에 사용이 가능한가요?",
        answer: "다양한 기술 분야에서 활용이 가능합니다.",
    },
];

const FAQPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('전체');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // 선택된 카테고리에 따라 FAQ 필터링
    const filteredFaqs = selectedCategory === '전체'
        ? faqs
        : faqs.filter(faq => faq.category === selectedCategory);

    // 질문 클릭 시 해당 답변을 열거나 닫음
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto mt-[80px]">
            <h1 className="text-3xl font-bold mb-8 text-center">제품문의</h1> {/* 텍스트 중앙 정렬 */}
            <table className="w-full table-fixed border-collapse border border-gray-300 mb-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('전체')}>전체</th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('LLM')}>LLM</th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('chatbot')}>챗봇</th>
                    <th className="border border-gray-300 p-2 cursor-pointer" onClick={() => setSelectedCategory('technic')}>기술</th>
                </tr>
                </thead>
            </table>

            {/* 선택된 카테고리에 따른 FAQ 항목 렌더링 */}
            {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <div
                            className="cursor-pointer p-4 border-b border-gray-300 flex justify-between items-center"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span className="text-black font-bold">Q) {faq.question}</span>
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="p-4 bg-gray-50 border-b border-gray-300">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-center">해당 카테고리에 대한 질문이 없습니다.</p>
            )}
        </div>
    );
};

export default FAQPage;
