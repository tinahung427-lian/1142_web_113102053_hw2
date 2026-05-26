"use client";

import Link from "next/link";
import { useState, useEffect  } from "react";
import { useRouter } from "next/navigation";
import { usePsyStore } from "../../store/store";

export default function Question() {
  const router = useRouter();
  const [questionIndex, setQuestionIndex] = useState(0);

  const psyData = usePsyStore( (state) => state.psyData);
  const setScore = usePsyStore((state) => state.setScore);

  console.log(psyData);
  console.log(psyData.quizData);


  useEffect( () => {
    console.log("目前分數:" + psyData.score);
  }, [psyData.score]);
  

  function nextQuestion(optionIndex: any) {
    console.log("使用者選擇：" + optionIndex);

    setScore( psyData.score + psyData.quizData[questionIndex].options[optionIndex].value );
    console.log( psyData.score );


    if( questionIndex != psyData.quizData.length-1 ) {
      console.log("下一題");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("進入準備看結果頁面");
      router.push("/prepare");
    }
  }

 
  return (
    <>

<div className="w-full max-w-[420px] px-6 py-10 mx-auto">

{/* 題目 */}
<div className="flex items-center gap-4 mb-10">

  <div className="w-16 h-16 rounded-full bg-[#2f2bb0] border-2 border-white flex items-center justify-center text-white text-2xl font-black rotate-[-8deg]">
    Q{questionIndex + 1}
  </div>

  <div className="text-black text-2xl font-black leading-snug">
    {psyData.quizData[questionIndex].title}
  </div>

</div>

{/* 選項 */}
<div className="flex flex-col gap-5">
  {
    psyData.quizData[questionIndex].options.map(
      (option: any, index: number) => {
        return (
          <button
            key={index}
            onClick={() => nextQuestion(index)}
            className="
              w-full
              min-h-[90px]
              bg-[#2f2bb0]
              border-2
              rounded-[20px]
              px-6
              py-4
              text-white
              text-lg
              font-bold
              leading-relaxed
              hover:translate-y-[-3px]
              transition
            "
          >
            {option.text}
          </button>
        )
      }
    )
  }
</div>

</div>
    </>
  );
}
