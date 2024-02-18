import React, { useEffect, useState } from "react";
import { Navbar_Component } from "../components/Navbar_Component";
import { User_Profile_Section } from "../components/User_Profile_Section";
import { Button } from "@mui/material";

const Home = () => {
  const [count, setCount] = useState(0);
  const [count_02, setCount_02] = useState(0);
  const test_func = () => {
    console.log("function is running!");
  };

  console.log(count);

  //   const var = useEffect()

  //   useEffect(() => {
  //     test_func();
  //   });

  //   useEffect(() => {
  //     test_func();
  //   }, []);

  // useEffect(() => {
  //   test_func();
  // }, [count, count_02]);

  //   useEffect(() => {
  //     console.log("component is mounted");
  //     return (() => {
  //       console.log("Unmounting component...!");
  //     })();
  //   });

  //   useEffect(() => {
  //     const sum = count * 10;
  //     console.log("use effect is running...", sum);
  //   }, []);

  //   useEffect(() => {
  //     const sum = count * 10;
  //     console.log("use effect is running...", sum);
  //   }, [count]);

  return (
    <div className="bg-bg_color h-[100dvh]">
      <Navbar_Component />

      <div className="px-3">
        <div>
          <User_Profile_Section />
        </div>
      </div>

      <Button onClick={() => setCount(count + 1)}>Count 01 Button</Button>
      <Button onClick={() => setCount_02(count_02 + 1)}>Count 02 Button</Button>
    </div>
  );
};

export { Home };
