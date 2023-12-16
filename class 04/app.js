// ----- array method --- map

// const students_array = [
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//   },
// ];

// const render_student_data = document.getElementById("student-data");
// students_array.map((current_object, curent_index) => {
//   const { name, class: student_class, city } = current_object;

//   return (render_student_data.innerHTML += `<ul>
//     <li>Name: ${name} </li>
//     <li>Class: ${student_class}</li>
//     <li>City: ${city} </li>
//   </ul>`);
// });

// ------- array method --- filter

// const students_array = [
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//     score: 60,
//     status: "pass",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//     score: 40,
//     status: "pass",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//     score: 80,
//     status: "pass",
//   },
//   {
//     name: "student 01",
//     class: "02",
//     city: "karachi",
//     score: 30,
//     status: "fail",
//   },
// ];

// const filtered_array = students_array.filter(
//   (current_object, current_index) => {
//     if (current_object.score >= 60) {
//       return current_object;
//     }
//   }
// );

// const check_passed_students = students_array.filter(
//   (current_object) => current_object.status === "pass"
// );

// console.log(check_passed_students);

// const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const check_even_numbers = numbers_array.filter(
//   (current_number) => current_number % 2 !== 0
// );

// console.log(check_even_numbers);

// ---- lexical scoping & closures

// function parent_function() {
//   const value = "function value";

//   function inner_function() {
//     const inner_function_var = "new value";
//     console.log(value);
//   }

//   function inner_function_two() {
//     console.log(value);
//     const inner_function_two_var = "new value two";
//   }

//   console.log(inner_function_two_var);

//   inner_function();
// }

// parent_function();

// function closures_function() {
//   //   let value = 1;

//   function closure_inner_function() {
//     // value += 1;

//     console.log("value");
//   }
//   return closure_inner_function;
// }

// const new_function = closures_function()

// new_function();
// new_function();

// closures_function()();

// function parent_function() {
//   console.log("parent  function called");
//   function child_function() {
//     console.log("child function value");
//   }

//   function child_two_function() {
//     console.log("child two function value");
//   }

//   return child_function;
//   return child_two_function;

//   console.log("after return ");
// }

// parent_function()();

// --------- Synchronous Javascript
// console.log("first line");
// console.log("second line");
// console.log("Third line");

// Asynchronous Javascript
// console.log("first line");
// setTimeout(() => {
//   console.log("second line");
// }, 2000);
// console.log("Third line");

// --------- *************** --------------

// Difference b/w  map & filter

// const new_array = [
//   {
//     name: "user 01",
//     marks: 70,
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   {
//     name: "user 02",
//     marks: 50,
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   {
//     name: "user 03",
//     marks: 40,
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   {
//     name: "user 04",
//     marks: 50,
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   {
//     name: "user 05",
//     marks: 90,
//     city: "Karachi",
//     country: "Pakistan",
//   },
// ];

// const map_array = new_array.map((user, index) => {
//   return {
//     ...user,
//     new_value: "new value added",
//   };
// });

// console.log(map_array);
// console.log(new_array);

// const filter_filtered_array = new_array.filter((user_data) => {
//   return user_data.marks >= 60 ? true : false;
// });

// const map_filtered_array = new_array.map((user_data) => {
//   return user_data.marks >= 60 ? true : false;
// });

// console.log(filter_filtered_array);
// console.log(map_filtered_array);

// ------- Destructuring -----
// const new_object = {
//   name: "user 01",
//   marks: 70,
//   class: "04",
//   city: "Karachi",
//   country: "Pakistan",
// };

// const {
//   name,
//   marks: user_marks,
//   city,
//   country,
//   class: user_class,
// } = new_object;

// console.log(new_object.class);
// console.log(user_class);

// ----- single line function
// const new_arrow_function = (a, b) => a * b;

// const function_response = new_arrow_function(2, 4);

// console.log(function_response);

// ----- multiline line function
// const new_arrow_function = (a, b) => {
//   return a * b;
// };

// const function_val = new_arrow_function(2, 5);

// console.log(function_val);
