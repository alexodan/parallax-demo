// import styles from "./index.module.scss";
import Navbar from "./navbar";
import Section1 from "./sections/one";
import Section2 from "./sections/two";
import Section3 from "./sections/three";

export default function Parallax4() {
  return (
    <>
      <Navbar />
      {/* 1st section */}
      <Section1 />

      {/* 2nd section */}
      <Section2 />

      {/* 3rd section and last */}
      <Section3 />
    </>
  );
}
