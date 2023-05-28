import { playfair_Display } from "./header";
import Cover from "../../assets/images/Cover.png";
import Image from "next/image";
import { montserrat } from "../utilities";

export function OurFeatures() {
  return (
    <section className={"my-20"}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-items-stretch items-center gap-10">
        <div className="w-full">
          <h2 className={`${playfair_Display.className} text-left`}>
            Our Features
          </h2>

          <div className="featured-card">
            <h3 className={`${playfair_Display.className}`}>
              Living Inside a Nature
            </h3>

            <p className={`${montserrat.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam
              habitant massa in.
            </p>
          </div>

          <div className="featured-card">
            <h3 className={`${playfair_Display.className} text-lg font-bold`}>
              Royal Touch Paint
            </h3>
            <p className={`text-sm ${montserrat.className} text-opacity-50`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam
              habitant massa in.
            </p>
          </div>

          <div className="featured-card">
            <h3 className={`${playfair_Display.className} text-lg font-bold`}>
              Luxurious Fittings
            </h3>
            <p className={`text-sm ${montserrat.className} text-opacity-50`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam
              habitant massa in.
            </p>
          </div>
        </div>
        <div className="">
          <Image src={Cover} alt="Featured image" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
