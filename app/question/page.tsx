"use client";

import Link from "next/link";
import { useState, useEffect  } from "react";
import { useRouter } from "next/navigation";

export default function Prepare() {

  const router = useRouter();

  let questionData = [
    {
      title: "Q1:麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },
    {
      title: "Q2:當你被放進烤箱時，溫度突然升高，你的反應是？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },
    {
      title: "Q3:如果你被顧客挑選時被放回去了，你會？",
      options:[
        {
          text: "選項一",
          value: 1
        },
        {
          text: "選項二",
          value: 2
        },
        {
          text: "選項三",
          value: 3
        },
      ]
    },

    
   ];

  
  const [questionIndex, setQuestionIndex] = useState(0);

  function nextQuestion(optionIndex: any) {
    console.log("使用者選擇：" + optionIndex);

    if( questionIndex != questionData.length-1 ) {
      console.log("下一題");
      setQuestionIndex(questionIndex + 1);
    } else {
      console.log("進入準備看結果頁面");
      router.push("/prepare");
    }
  }


  return (
    <>

    <div className="flex flex-col items-center gap-4">
      答題
      <div>
        <div>{ questionData[questionIndex].title }</div>
        <div onClick={ () =>nextQuestion(0) }>{ questionData[questionIndex].options[0].text }</div>
        <div onClick={ () =>nextQuestion(1) }>{ questionData[questionIndex].options[1].text }</div>
        <div onClick={ () =>nextQuestion(2) }>{ questionData[questionIndex].options[2].text }</div>
      </div>
      
      <div>
        {/* <Link className="text-white bg-black px-3 py-2"href="/prepare">準備看結果</Link> */}
      </div>


    </div>
    </>
  );
}
