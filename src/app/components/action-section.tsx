import React from "react";

export function ActionSection() {
  return (
    <section className="bg-primary text-white py-32">
      <div className="container">
        <h1 className="font-bold font-playfair_display text-2xl">
          Don&apos;t Miss A Thing!
        </h1>
        <p className="tracking-wider leading-8 my-3">
          Subscribe with Email and loads of interesting news will be sent to you
          on a daily basis.
        </p>
        <form action="#" className="cs-shadow flex rounded-lg">
          <input
            type="text"
            placeholder="Your email here"
            className="text-input rounded-e-none"
          />
          <button className="py-2 px-6">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
