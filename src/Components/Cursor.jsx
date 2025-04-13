import React, { useEffect } from "react";
import gsap from "gsap";
import sparkimg from "../../Assets/spark.png";
const Cursor = () => {
  useEffect(() => {
    const body = document.querySelector("body");

    const createSpark = (x, y) => {
      const spark = document.createElement("div");
      spark.style.position = "fixed";
      spark.style.width = "15px";
      spark.style.height = "15px";
      spark.style.borderRadius = "50%";
      spark.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
      spark.style.top = `${y}px`;
      spark.classList.add("cursor");
      spark.style.left = `${x}px`;
      spark.style.backgroundImage = `url(${sparkimg})`;
      spark.style.boxShadow =
        "0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6)";
      spark.style.pointerEvents = "none"; // Prevent spark from capturing clicks
      spark.style.opacity = 1;

      body.appendChild(spark);

      gsap.to(spark, {
        opacity: 0,
        scale: 0.1,
        duration: 0.8,
        ease: "power1.out",
        onComplete: () => {
          spark.remove(); // Remove the spark after the animation
        },
      });
    };

    const handleMouseMove = (e) => {
      createSpark(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <></>;
};

export default Cursor;
