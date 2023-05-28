import React from "react";
import logo from "../../assets/images/Logo-Footer.png";
import Image from "next/image";
import recent1 from "../../assets/images/recent1.png";
import recent2 from "../../assets/images/recent2.png";

export function Footer() {
  return (
    <section className="my-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            {/* Logo */}
            <Image src={logo} alt="Brand Logo" />
            {/* Text */}
            <p className="tracking-wide text-sm text-black-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Recent Properties */}
          <div>
            <div className="font-bold text-sm">Recent Properties</div>
            <div className="my-5 flex flex-row text-sm max-w-xs">
              <Image src={recent1} alt="Recents" />
              <div className="flex flex-col py-2 pl-4">
                <p className="flex-1 max-w-xs">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486.
                </p>
                <div className="text-primary font-semibold">$ 20,000</div>
              </div>
            </div>
            <div className="my-5 flex flex-row text-sm max-w-xs">
              <Image src={recent2} alt="Recents" />
              <div className="flex flex-col py-2 pl-4">
                <p className="flex-1 max-w-xs">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </p>
                <div className="text-primary font-semibold">$ 28,000</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-bold">Contact Info</div>
            <p className="max-w-xs text-sm my-5">
              2972 Westheimer Rd. Santa Ana, Illinois 85486.
            </p>
            <div className="text-sm flex flex-col gap-y-5">
              <div>
                <span className="text-black-lighter">Phone: </span> (239)
                555-0108
              </div>
              <div>
                <span className="text-black-lighter">Email: </span>{" "}
                abcd@domain.com
              </div>
              <div>
                <span className="text-black-lighter">Website: </span>{" "}
                abcd@domain.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
