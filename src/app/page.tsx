import Image from "next/image";
import { Header } from "./components/header";
import { FiSearch } from "react-icons/fi";
import { FeaturedProperties } from "./components/featured-properties";
import { OurFeatures } from "./components/our-features";
import { RecentProperties } from "./components/recent-properties";
import { Team } from "./components/team";
import { Testimonial } from "./components/testimonial";
import { ActionSection } from "./components/action-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className={"font-montserrat"}>
      <Header />

      {/* Search section */}
      <section className="container fadeinup">
        <div className="p-8 drop-shadow bg-white rounded-lg -translate-y-1/2 mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <h3 className="capitalize">Find your Home</h3>
            {/* Icon */}
            <FiSearch />
          </div>

          <form className="grid items-center grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <input
                type="text"
                name="location"
                id="location"
                className="text-input"
                placeholder="Location"
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                id="category"
                className="text-input"
                placeholder="Category"
              />
            </div>
            <div>
              <input
                type="text"
                name="property-type"
                id="property-type"
                className="text-input"
                placeholder="Property Type"
              />
            </div>

            <input type="submit" value="Search" className="btn-primary" />
          </form>
        </div>
      </section>

      <FeaturedProperties />

      <OurFeatures />

      <RecentProperties />

      <Team />

      <Testimonial />

      <ActionSection />

      <Footer />
    </main>
  );
}
