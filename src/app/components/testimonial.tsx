import React from "react";
import profile1 from "../../assets/images/Profile-1.png";
import profile2 from "../../assets/images/Profile-2.png";
import profile3 from "../../assets/images/Profile-3.png";
import Image from "next/image";
import {} from "react-icons/fi";
import { TestimonialItem } from "./testimonial-item";

export function Testimonial() {
  return (
    <section className="my-20">
      <div className="container">
        <h2>Our clients speak</h2>
        <p className="header-text">
          We have been working with clients around the world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          <TestimonialItem
            profileImg={profile1}
            author="Lorri Warf"
            authorTitle="UX Designer"
            header="Professional Partner"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim."
          />

          <TestimonialItem
            profileImg={profile2}
            author="David Elson"
            authorTitle="Developer"
            header="Incredible Experience"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim."
          />

          <TestimonialItem
            profileImg={profile3}
            author="Ricky Smith"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim."
            authorTitle="Developer"
            header="Dependable & Responsive"
          />
        </div>
      </div>
    </section>
  );
}
