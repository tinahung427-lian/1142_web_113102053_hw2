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
      <div className="absolute left-10 top-44 text-[#fff4df] text-5xl z-10">
        ✦
      </div>

      <div className="absolute right-10 top-44 text-[#fff4df] text-5xl z-10">
        ✦
      </div>

      {/* 文字內容 */}
      <div className="relative z-10 flex flex-col items-center text-center pt-36 px-8">
        <h1 className="text-[#fff4df] text-4xl font-black leading-[1.3] drop-shadow-[4px_2px_0px_#383838]">
          你的專屬卡帶
        </h1>

        <p className="mt-10 text-[#2e2e2e] text-2xl font-semibold">
          一起探索你的聲音與風格
        </p>

        <Link
          href="/question"
          className="
            mt-14
            bg-[#cf6c49]
            hover:bg-[#b85c3c]
            text-[#fff4df]
            px-6
            py-3
            rounded-[30px]
            text-2xl
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
        src="/images/cc.PNG"
        alt="retro player"
        className="absolute bottom-0 left-0 w-full h-auto"
      />
    </div>
  );
}