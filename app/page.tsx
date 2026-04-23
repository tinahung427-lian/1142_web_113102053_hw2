"use client";

import { useState, useEffect  } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  
  function addMorning() {
    console.log("被點到了");
    setCounter(counter + 1);
  }

  useEffect(function(){
    console.log("畫面載入完成")
  }, []);

  useEffect(function(){
    console.log("有人說早安")
  }, [counter]);

  return (
    <>

    {
      <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-blue-100 m-auto">
        <div>歡迎畫面</div>
        <div className="bg-black px-6 py-3">開始測驗</div>
      </div>
    }

    {
      <div className="w-[480px] h-screen flex justify-center items-center flex-col bg-blue-100 m-auto">
        <div>題目一</div>
        <div className="bg-black px-6 py-3">下一題</div>
      </div>

    }
    </>
  );
}
