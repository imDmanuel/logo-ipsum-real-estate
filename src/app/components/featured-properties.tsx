import React from "react";
import Image from "next/image";
import image1 from "../../assets/images/Image 1.png";
import image2 from "../../assets/images/Image 2.png";
import image3 from "../../assets/images/Image 3.png";
import image4 from "../../assets/images/Image 4.png";
import image5 from "../../assets/images/Image 5.png";
import { HiArrowRight } from "react-icons/hi";
import { playfair_Display } from "../utilities";

export function FeaturedProperties() {
  return (
    <section className="mb-10">
      <div className="container">
        <h2>Featured Properties</h2>
        <p className="header-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 gap-4 items-stretch">
          <div className="row-span-2 relative rounded overflow-hidden min-h-[31.25rem]">
            <Image
              src={image1}
              alt="Featured image 1"
              placeholder="blur"
              loading="lazy"
              fill
              className="object-cover -z-10"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src={image2}
              alt="Featured image 2"
              placeholder="blur"
              loading="lazy"
              fill
              className="object-cover -z-10"
            />
            {/* Hover Overlay */}
            <div className="hover-overlay grid h-full place-items-center text-white font-extralight text-center">
              <div className="">
                <div
                  className={`${playfair_Display.className} font-medium text-2xl`}
                >
                  New Property
                </div>
                <p className="leading-8 font-extralight text- max-w-[80%] mx-auto">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet
                </p>
                <button className="bg-primary w-10 h-10 rounded-full inline-grid place-items-center">
                  <HiArrowRight fontSize={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src={image3}
              alt="Featured image 3"
              placeholder="blur"
              loading="lazy"
              fill
              className="objecy-cover"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src={image4}
              alt="Featured image 4"
              placeholder="blur"
              loading="lazy"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded overflow-hidden">
            <Image
              src={image5}
              alt="Featured image 5"
              placeholder="blur"
              loading="lazy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
