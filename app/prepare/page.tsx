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
    <div className="flex flex-col items-center pt-[210px]">

      {/* 標題 */}
      <h1 className="text-3xl font-black text-white text-center leading-tight drop-shadow-[3px_3px_0_#cf6b49]">
        你的專屬卡帶
        <br />
        是哪種風格呢？
      </h1>

      {/* loading */}
      <div className="mt-8 flex items-center gap-3">

        <Indeterminate />

        <p className="text-[#cf6b49] text-2xl font-black tracking-wide">
          LOADING...
        </p>

      </div>

      {/* 按鈕 */}
      <Link
        href="/result"
        className="mt-10 bg-[#cf6b49] text-white font-bold px-6 py-3 rounded-3xl hover:scale-105 transition"
      >
        查看結果
      </Link>

    </div>
  );
}