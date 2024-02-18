import Image from "next/image";
import hero from "../../assets/images/hero.png";
import { Playfair_Display } from "next/font/google";

export const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

export function Header() {
  return (
    <header className="h-3/4 min-h-[40rem] relative">
      {/* Title */}
      {/* Header image */}
      <Image
        fill
        src={hero}
        className="object-cover -z-10"
        alt="Hero image"
        priority
      />
      <div className="absolute top-1/2 -translate-y-1/2">
        <div className="container h-full">
          <div className="text-white max-w-3xl">
            <div className="text-lg flex items-center font-medium leading-[2rem] animate__animated animate__fadeInLeft">
              <hr className="w-12" /> We are offering the
            </div>
            <h1
              className={`capitalize font-bold text-6xl leading-[4.5rem] py-3 font-playfair_display  animate__animated animate__fadeInRight`}
            >
              best real estate deals
            </h1>
            <p className="font-medium leading-[2rem]  animate__animated animate__fadeInLeft">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="btn-primary mt-8  animate__animated animate__zoomIn">
              More Details
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
