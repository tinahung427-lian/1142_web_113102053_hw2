"use client";

import { useState, useEffect } from "react";

export default function Emoticons({children}: {children: React.ReactNode}) {

    const emoticons = ["-_-",">_<","^_^"];
    const [currentEmo, setCurrentEmo] = useState(0);

    const face = ["o_o","-_-","^_^"];
    const[currentFace, setCurrentFace] = useState(0);
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log("10s");
        }, 10000);

        setInterval(() => {
            if(counter % 5 == 0){
                setCurrentFace(1);
            }else{
                setCurrentFace(0);
            }
            console.log(counter);


            setCounter(counter + 1);
        }, 10000);
    }, []);



  return (
    <>
      {children}
      {face[currentFace]}
    </>
  );
}