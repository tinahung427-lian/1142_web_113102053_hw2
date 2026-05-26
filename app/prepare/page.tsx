"use client";

import Link from "next/link";
import { useState, useEffect  } from "react";
import { ProgressBar, Label } from '@heroui/react';

export default function Question() {

  return (
    <>
      {/* 加入progress bar結果頁面的跳轉可以跑出來*/}
    <div className="flex flex-col items-center gap-4">
      答題
      <Link className="text-white bg-black px-3 py-2"href="/result">看結果</Link>

    </div>
    </>
  );
}
