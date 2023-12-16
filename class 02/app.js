// // let a = 10;
// // var a;

// // a = 20;

// // console.log(a);

// // const a = "faraz";

// // if (false) {
// //   console.log(a);
// // }
// // console.log(a);

// // var a = 10;

// // foo();

// // function foo() {
// //   console.log("hello world..");
// // }

// // tempalte literals

// // let firstName = "Mohammad";

// // let lastName = "faraz";

// // // let fullName = "hello " + firstName + " " + lastName + " .hope you are fine";

// // let fullName = `hello ${firstName} ${lastName}. hope you are fine`;

// // console.log(fullName);

// // new_function();
// // var new_function = function () {
// //   console.log("result");
// // };

// // var function_value = new_function();
// // var new_function = function () {
// //   console.log("result");
// // };

// // name();
// // function name() {
// //   console.log("result");
// // }

// // console.log(new_var);
// // const new_var = "new_val";

// // function mutiply_number(name) {
// //   num = "string";
// //   return num;
// // }

// // let x = 7;
// // let result = mutiply_number(x);

// // console.log(x); // Output: 7 (unchanged)

// // console.log(result); // Output: 14

// // let obj1 = {
// //   name: "your name",
// //   city: "your city",
// // };
// // let new_user = obj1.name;
// // // obj2 now holds a reference to the same object as obj1

// // obj1.name = "user";

// // console.log(new_user); // Output: 20 (modified) console.log(obj2.value); // Output: 20

// // // let arr = [1, "string", true];

// // // let new_arr = arr;

// // // new_arr.push("new_string");

// // // console.log(arr);

// let obj1 = {
//   name: "your name",
//   city: "your city",
// };

// let user = obj1;

// user.name = "user name";
// user.city = "my city";

// const { name: new_var, city } = user;

// // const new_var = name

// // console.log("name: ", new_var);

// // console.log(user);
// // console.log(obj1);

// // const user_object = {
// //   name: "Hassan",
// //   age: 20,
// //   city: "Karachi",
// // };

// // const { name, city } = user_object;

// // console.log("name: ", user_object.name, "city: ", user_object.city);

// // let new_arr = [1, 2, 3, 4, 5];

// // const [first_ind, second_index, third_index] = new_arr;

// // console.log(third_index);

// initializing new variable
const new_obj = {
  name: "your name",
  city: "your city",
};

// assigning reference variable to another one
const user = new_obj;

// changing values of user reference object
user.name = "user 0003";
user.city = "karachi";

// console.log("new_obj", new_obj);
// console.log("user", user);

// Destructuring the obj - user
// const { name, city } = user;

// console.log("name:", name);
// console.log("city:", city);

// assignemt values to new variables while destructuring
let { name: user_name, city: user_city } = user;

// //  name = "available variable";
// user_name = "another user";

// console.log(user_name);
// console.log(user_city);

function greet_user(user_name) {
  return `Hello ${user_name}!`;
}

// console.log(greet_user("Hassan"));

const user_list = document.getElementById("user_data_list");

user_list.innerHTML = `<li>Name: ${user_name}</li>
<li>city: ${user_city}</li>
<li>age</li>`;

const data_obj = {
  title: "Product Title",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  image_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
};
