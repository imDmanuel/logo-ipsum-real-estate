import Image from "next/image";
import React from "react";

export function Logo() {
  return <Image width={176} height={40} src={"/images/logo.png"} alt="Logo" />;
}
