"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "../../store/store";

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const psyData = usePsyStore((state) => state.psyData);
  const setScore = usePsyStore((state) => state.setScore);

  useEffect(() => {
    console.log("目前分數:" + psyData.score);
  }, [psyData.score]);

  function countScore(newAnswers: number[]) {
    const total = newAnswers.reduce((sum, value) => sum + value, 0);
    setScore(total);
  }

  function nextQuestion(optionIndex: number) {
    const optionValue =
      psyData.quizData[questionIndex].options[optionIndex].value;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionValue;
    setAnswers(newAnswers);
    countScore(newAnswers);

    if (questionIndex !== psyData.quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/prepare");
    }
  }

  function prevQuestion() {
    const newAnswers = [...answers];
    newAnswers[questionIndex - 1] = 0;
    setAnswers(newAnswers);
    countScore(newAnswers);
    setQuestionIndex(questionIndex - 1);
  }

  return (
    <div className="relative -m-4 w-[calc(100%+32px)] h-[calc(100%+32px)] overflow-hidden rounded-2xl">
      {/* 播放器背景 */}
      <img
        src="/images/cc.png"
        alt="retro player"
        className="absolute bottom-0 left-0 w-full h-auto max-h-[45%] sm:max-h-none object-contain z-0"
      />

      {/* 霧化背景 */}
      <div className="absolute inset-0 bg-[#b7d8e8]/70 backdrop-blur-[2px] z-10"></div>

      {/* 耳機 */}
      <img
        src="/images/headphone_2.png"
        alt="headphone"
        className="absolute -right-2 -top-2 w-32 sm:w-38 z-20 opacity-90 drop-shadow-md"
      />

      {/* 內容 */}
      <div className="relative z-30 w-full max-w-[420px] px-8 sm:px-6 pt-12 sm:py-10 mx-auto">
        {questionIndex > 0 && (
          <button
            onClick={prevQuestion}
            className="absolute top-5 left-5 sm:left-0 flex items-center justify-center px-3 h-10 rounded-full bg-white/25 text-white text-base font-black hover:bg-white/35 hover:-translate-y-1 transition"
          >
            ←上一題
          </button>
        )}

        <div className="w-full max-w-[320px] mx-auto pt-10 sm:pt-0">
          {/* 題號 */}
          <div className="flex flex-col items-center mb-5 sm:mb-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#c86b4a] flex items-center justify-center text-[#fff8ef] text-xl sm:text-2xl font-bold mb-3">
              Q{questionIndex + 1}
            </div>

            {/* 題目 */}
            <div className="w-fit">
              <div className="text-[#2f2a26] text-lg sm:text-xl font-black leading-snug text-left">
                {psyData.quizData[questionIndex].title}
              </div>
            </div>
          </div>

          {/* 選項 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {psyData.quizData[questionIndex].options.map(
              (option: any, index: number) => {
                return (
                  <button
                    key={index}
                    onClick={() => nextQuestion(index)}
                    className="w-full min-h-[56px] sm:min-h-[60px] bg-[#c86b4a] hover:bg-[#b85c3c] rounded-[20px] px-5 sm:px-6 py-2 text-[#fff8ef] text-[15px] sm:text-base font-bold leading-relaxed hover:-translate-y-1 transition"
                  >
                    {option.text}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}