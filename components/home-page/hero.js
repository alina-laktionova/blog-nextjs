import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="profile picture"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Jane Doe</h1>
      <p>This is my blog about about web development</p>
    </section>
  );
};

export default Hero;
