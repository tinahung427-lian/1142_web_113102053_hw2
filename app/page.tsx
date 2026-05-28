"use client";

import Link from "next/link";
import { useState, useEffect  } from "react";
import { Button } from '@heroui/react';
import Emoticons from '@/component/Emoticons';

export default function Home() {

  //階段名稱  路由規劃
  //1.歡迎畫面  /
  //2.測驗題目  /question
  //3.準備看結果  /prepare
  //4.查看結果  /result
  // https://psy-test.com/love/result?id=10

  return (
    <div className="relative -m-4 w-[calc(100%+32px)] h-[calc(100%+32px)] overflow-hidden rounded-2xl">
      {/* 星星 */}
      <div className="absolute left-6 top-32 rotate-[-18deg] text-[#fff4df] text-5xl z-10">
        ✦
      </div>

      <div className="absolute right-10 top-50 rotate-[12.5deg] text-[#fff4df] text-5xl z-10">
        ✦
      </div>

      {/* 耳機 */}
      <img
        src="/images/headphone_2.png"
        alt="headphone"
        className="
          absolute
          -right-2
          -top-2
          w-38
          z-10
          opacity-90
          drop-shadow-md
        "
      />

      {/* 文字內容 */}
      <div className="relative z-10 flex flex-col items-center text-center pt-15 px-8">
        <h1 className="text-[#fff4df] text-3xl font-black leading-[1.3] drop-shadow-[4px_2px_0px_#383838]">
          你的專屬卡帶
        </h1>

        <p className="mt-10 text-[#2e2e2e] text-base font-semibold">
        有些聲音被回憶錄下，有些人被孤獨收藏。 
        <br />
        如果你是一捲卡帶，會演奏出哪段旋律？
        <br />  
        是鄉村音樂，還是獨立搖滾...
        <br />
        按下播放鍵，一探究竟你的專屬卡帶吧！
        </p>

        <Link
          href="/question"
          className="
            mt-10
            bg-[#cf6c49]
            hover:bg-[#b85c3c]
            text-[#fff4df]
            px-6
            py-3
            rounded-[30px]
            text-xl
            font-bold
            shadow-[0_6px_0_#9d4c33]
            active:translate-y-[4px]
            active:shadow-none
            transition
            hover:-translate-y-1
          "
        >
          開始測驗 ▶
        </Link>
      </div>

      {/* 播放器：貼齊 layout 藍框 */}
      <img
        src="/images/cc.png"
        alt="retro player"
        className="absolute bottom-0 left-0 w-full h-auto"
      />
    </div>
  );
}