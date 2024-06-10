"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useRouter } from "next/navigation";
import Image from "next/image";
const _renderLinkItem = (props: any) => {
  const router = useRouter();
  const handleNavigate = (_url: string) => {
    router.push(_url);
  };
  // const [loading, setLoading] = useState<boolean>(true);
  return (
    <li
      onClick={() => handleNavigate(props._url)}
      className={`relative flex items-center py-3 justify-center
         hover:text-[#67ffff] cursor-pointer text-sm rounded-full font-ttfirs ${
           props._url === "/home" && props._url === props.pathname
             ? "bg-gradient-to-r from-red-400 via-yellow-400 to-red-700 text-[#67ffff] border-none px-5"
             : props._url !== "/home" && props.pathname.includes(props._url)
             ? "bg-gradient-to-r from-red-400 via-yellow-400 to-red-700 text-[#67ffff] border-none px-5"
             : "text-[#8aff46] px-5"
         }`}
    >
      <div className="text-lg">{props._name}</div>
    </li>
  );
};
export default _renderLinkItem;
