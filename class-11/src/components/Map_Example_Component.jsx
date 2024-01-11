import React from "react";

const Map_Example_Component = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   const run_map = () => {
  //   const new_arr = arr.map((e, index) => {
  //     console.log("e", e);
  //     return e + "10";
  //   });
  //   };

  //   console.log(new_arr);
  //   run_map();

  //   return <div>Map_Example_Component</div>;
  return (
    <>
      {/* <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1> */}
      {arr.map((e, index) => {
        return <h1>{e}</h1>;
      })}
      {/* {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
      } */}
    </>
  );
};

export { Map_Example_Component };
