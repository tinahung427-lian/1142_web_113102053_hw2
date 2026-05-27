"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "../../store/store";

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const psyData = usePsyStore((state) => state.psyData);
  const setScore = usePsyStore((state) => state.setScore);

  useEffect(() => {
    console.log("目前分數:" + psyData.score);
  }, [psyData.score]);

  function nextQuestion(optionIndex: number) {
    console.log("使用者選擇：" + optionIndex);

    setScore(
      psyData.score +
        psyData.quizData[questionIndex].options[optionIndex].value
    );

    if (questionIndex != psyData.quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push("/prepare");
    }
  }

  return (
    <>
      <div className="w-full max-w-[420px] px-6 py-10 mx-auto">

        {/* 題目 */}
        <div className="flex flex-col items-center mb-10">

          <div className="w-12 h-12 rounded-full bg-[#c86b4a] flex items-center justify-center text-[#fff8ef] text-2xl font-black mb-3">
            Q{questionIndex + 1}
          </div>

          <div className="w-fit">
            <div className="text-[#2f2a26] text-xl font-black leading-snug text-left">
              {psyData.quizData[questionIndex].title}
            </div>
          </div>

        </div>

        {/* 選項 */}
        <div className="flex flex-col gap-5">
          {psyData.quizData[questionIndex].options.map(
            (option: any, index: number) => {
              return (
                <button
                  key={index}
                  onClick={() => nextQuestion(index)}
                  className="
                    w-full
                    min-h-[60px]
                    bg-[#c86b4a]
                    hover:bg-[#b85c3c]
                    rounded-[20px]
                    border-none
                    outline-none
                    px-6
                    py-2
                    text-[#fff8ef]
                    text-base
                    font-bold
                    leading-relaxed
                    hover:-translate-y-1
                    transition
                  "
                >
                  {option.text}
                </button>
              );
            }
          )}
        </div>

      </div>
    </>
  );
}