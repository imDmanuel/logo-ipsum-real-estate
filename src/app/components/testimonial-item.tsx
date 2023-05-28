import Image from "next/image";
import React from "react";
import { PropsFrom } from "../types";

type TestimonialItemProps = {
  profileImg: PropsFrom<typeof Image>["src"];
  content: React.ReactNode;
  header: React.ReactNode;
  author: React.ReactNode;
  authorTitle: React.ReactNode;
};

export function TestimonialItem({
  profileImg,
  content,
  header,
  author,
  authorTitle,
}: TestimonialItemProps) {
  return (
    <div className="text-center">
      <div className="shadow-lg text-black px-7 py-6 rounded-lg relative after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-[10px] after:border-solid after:border-[white_transparent_transparent_transparent]">
        <div className="font-medium text-sm tracking-wide py-2 text-black-light">
          {header}
        </div>
        <p className="text-xs tracking-wide text-black-lighter">{content}</p>
      </div>

      {/* Person */}
      <div className="text-center mt-8">
        <Image src={profileImg} alt="testimonial client" className="mx-auto" />
        <div className="text-sm font-bold">{author}</div>
        <div className="text-xs text-black-lighter">{authorTitle}</div>
      </div>
    </div>
  );
}
