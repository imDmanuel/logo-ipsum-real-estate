import Image from "next/image";
import React from "react";
import image6 from "../../assets/images/Image 6.png";
import image7 from "../../assets/images/Image 7.png";
import NextLink from "next/link";

export function RecentProperties() {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-center">Recent Properties</h2>
        <p className="header-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="w-full md:w-1/2 relative min-h-[350px]">
              <Image
                src={image6}
                fill
                alt="Image of Recent"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#F6F3FF] p-6 lg:p-12 flex flex-col">
              <div className="font-playfair_display text-primary lg:text-2xl font-bold">
                Interior Design
              </div>
              <p className="font-montserrat text-xs leading-6 tracking-wider flex-1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit...
                <NextLink href={"#"} className="text-primary">
                  Read more
                </NextLink>
              </p>
              <div className="font-semibold text-xl">
                $ 20,000/<span className="text-sm">month</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row-reverse md:gap-x-5">
            <div className="w-full md:w-1/2 relative min-h-[350px]">
              <Image
                src={image7}
                fill
                alt="Image of Recent"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#F6F3FF] p-6 lg:p-12 flex flex-col">
              <div className="font-playfair_display text-primary lg:text-2xl font-bold">
                Interior Design
              </div>
              <p className="font-montserrat text-xs leading-6 tracking-wider flex-1">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit...
                <NextLink href={"#"} className="text-primary">
                  Read more
                </NextLink>
              </p>

              <div className="font-semibold text-xl">
                $ 20,000/<span className="text-sm">month</span>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-14 mx-auto border transition-colors duration-300 block border-primary hover:bg-primary hover:text-white px-5 py-2 text-sm rounded-md text-primary">
          View more
        </button>
      </div>
    </section>
  );
}
