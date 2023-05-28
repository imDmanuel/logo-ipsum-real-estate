import Image from "next/image";
import React from "react";
import avatar1 from "../../assets/images/Avatar 1.png";
import avatar2 from "../../assets/images/Avatar 2.png";
import avatar3 from "../../assets/images/Avatar 3.png";
import avatar4 from "../../assets/images/Avatar 4.png";
import { FiFacebook, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Link from "next/link";

export function Team() {
  return (
    <section className="my-10">
      <div className="container">
        <h2>Meet Our Team</h2>
        <p className="header-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          <div className="team-member">
            <Image src={avatar1} alt="Team member" />
            <h4 className="">Kathryn Murphy</h4>
            <span className="">Co-Founder</span>
            <div className="socials">
              <Link href={"#"}>
                <FiInstagram />
              </Link>
              <Link href={"#"}>
                <FiLinkedin />
              </Link>
              <Link href={"#"}>
                <FiFacebook />
              </Link>
              <Link href={"#"}>
                <FiTwitter />
              </Link>
            </div>
          </div>
          <div className="team-member">
            <Image src={avatar2} alt="Team member" />
            <h4 className="">Brooklyn Simmons</h4>
            <span className="">Founder</span>
            <div className="socials">
              <Link href={"#"}>
                <FiInstagram />
              </Link>
              <Link href={"#"}>
                <FiLinkedin />
              </Link>
              <Link href={"#"}>
                <FiFacebook />
              </Link>
              <Link href={"#"}>
                <FiTwitter />
              </Link>
            </div>
          </div>
          <div className="team-member">
            <Image src={avatar3} alt="Team member" />
            <h4 className="">Floyd Miles</h4>
            <span className="">Co-Founder</span>
            <div className="socials">
              <Link href={"#"}>
                <FiInstagram />
              </Link>
              <Link href={"#"}>
                <FiLinkedin />
              </Link>
              <Link href={"#"}>
                <FiFacebook />
              </Link>
              <Link href={"#"}>
                <FiTwitter />
              </Link>
            </div>
          </div>
          <div className="team-member">
            <Image src={avatar4} alt="Team member" />
            <h4 className="">Ronald Richards</h4>
            <span className="">Founder</span>
            <div className="socials">
              <Link href={"#"}>
                <FiInstagram />
              </Link>
              <Link href={"#"}>
                <FiLinkedin />
              </Link>
              <Link href={"#"}>
                <FiFacebook />
              </Link>
              <Link href={"#"}>
                <FiTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
