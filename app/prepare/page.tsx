"use client";

import Link from "next/link";
import { ProgressCircle } from "@heroui/react";

function Indeterminate() {
  return (
    <ProgressCircle
      isIndeterminate
      aria-label="Loading"
      className="w-6 h-6 text-[#cf6b49]"
    >
      <ProgressCircle.Track className="stroke-white/30">
        <ProgressCircle.TrackCircle />
        <ProgressCircle.FillCircle className="stroke-[#cf6b49]" />
      </ProgressCircle.Track>
    </ProgressCircle>
  );
}

export default function Prepare() {
  return (
    <div className="relative -m-4 h-[calc(100%+32px)] overflow-hidden rounded-2xl">

      {/* 閃光背景 */}
      <div className="absolute -inset-10 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.75)_0_1px,transparent_1.5px),radial-gradient(circle_at_75%_65%,rgba(255,255,255,0.45)_0_1px,transparent_1.5px)] bg-[length:18px_18px,26px_26px] opacity-60 animate-pulse" />
        <div className="absolute -inset-20 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.45)_45%,transparent_60%)] animate-[shine_4s_ease-in-out_infinite]" />
      </div>

      {/* 內容 */}
      <div className="relative z-10 flex flex-col items-center pt-[160px] sm:pt-[226px] px-6">

        {/* 標題 */}
        <h1 className="text-[28px] sm:text-3xl font-black text-white text-center leading-tight drop-shadow-[3px_3px_0_#cf6b49]">
          你的專屬卡帶
          <br />
          是哪種風格呢？
        </h1>

        {/* Loading */}
        <div className="mt-6 sm:mt-8 flex items-center gap-3">
          <Indeterminate />

          <p className="text-[#cf6b49] text-xl sm:text-2xl font-black tracking-wide">
            LOADING...
          </p>
        </div>

        {/* 按鈕 */}
        <Link
          href="/result"
          className="
            mt-8 sm:mt-10
            bg-[#cf6b49]
            text-white
            font-bold
            px-5 sm:px-6
            py-3
            rounded-3xl
            hover:scale-105
            transition
          "
        >
          查看結果
        </Link>

      </div>
    </div>
  );
}