// const num  = 4
// const score = 55
// let grade


// ------ if statement
// if(num < 2) {
//     console.log('Grater than 4')
// }

// ------ Ternary Operator
// num < 5 ? console.log('less than 4') : console.log('Grater than 4')


// ------ if else statement
// if (score >= 80) {
//     grade = 'A'
// }
// else if (score >= 70) {
//     grade = 'B'
// }
// else {
//     grade = 'C'
// }


// ------ Ternary Operator
// score >= 80 ? mergegrade = "A" : score >= 70 ?  grade = "B" : grade = "C" 


// score >= 80 ? grade = "A" : score >= 70 ?  grade = "B" : grade = "C" 



// score >= 90 && score <= 100 ? grade = "A+" : score >= 80 && score < 90 ? grade = "A" : score >= 70 && score < 80 ? grade = "B" :  score >= 60 && score < 70  ? grade = "C" :  grade = "Fail"

// console.log("Grade:", grade)


// ------ Spread Operators  - array

// const first_arr = [1,2,3,4,5]
// const second_arr = [6, 7,8,9,10]

// const merged_arrays = [...first_arr, 'new_value_01', 'new_value_02', 'new_value_03' , ...second_arr]

// // console.log(second_arr)
// console.log("merged_arrays",merged_arrays)



// ------ Spread Operators  - object

// const first_obj = {
//     name:'user 01',
//     city:"karachi"
// }

// const second_obj = {
//     postal_code:'362534',
//     country:"Pakistan"
// }


// const third_obj ={
//     ...first_obj,
//     new_key:'new value',
//     ...second_obj
// }

// // console.log(first_obj)
// console.log(third_obj)




// const student_info ={
//     name:"Anas",
//     class:'03',
//     city:"Karachi"
// }

// const student_marks ={
//     score:60,
//     grade:'',
// }

// const student_data = {
//     ...student_info,
//     ...student_marks
// }

// const {score} = student_data

// student_data.grade = score >= 90 && score <= 100 ? "A+" : score >= 80 && score < 90 ? "A" : score >= 70 && score < 80 ? "B" :  score >= 60 && score < 70  ? "C" :  "Fail"


// console.log(student_data);

// const score = 70


// const check_condition = score > 80 ? "A" : "B"
// console.log(check_condition);


// function rest_parameters(a, b, c, ...other_vales) {

//     console.log(a, b, c, other_vales);
//     // console.log();
// }


// rest_parameters(1, 2,3, 4,5,6,7,8,3,43,43,435,343)



// function sum(a, b) {
//     return  a + b
// }
// const sum_of_numbers = sum(1,4)


// const arrow_function_sum = (score) => {

//    return score >= 90 && score <= 100 ? "A+" : score >= 80 && score < 90 ? "A" : score >= 70 && score < 80 ? "B" :  score >= 60 && score < 70  ? "C" :  "Fail"
// } 


// student_data.grade = arrow_function_sum(student_data.score)

// console.log(student_data);


// student_data.grade = score >= 90 && score <= 100 ? "A+" : score >= 80 && score < 90 ? "A" : score >= 70 && score < 80 ? "B" :  score >= 60 && score < 70  ? "C" :  "Fail"


//  const student_data = {
//         ...student_info,
//         ...student_marks,
//         status:''
//     }

// const check_passing_status = (score)=> {
//     return score >= 60 ? 'Pass' : 'Fail' 
// }


// student_data.status =  check_passing_status(student_data.score)
// console.log(student_data);


// ------ Array Method 

// const array_of_students = [
//     {
//         name: "student 01",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 02",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 03",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 04",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 05",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 05",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 05",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 05",
//         class: '03',
//         city: "Karachi"
//     },
//     {
//         name: "student 05",
//         class: '03',
//         city: "Karachi"
//     },
// ]


// console.log(array_of_objects);


// const students_element = document.getElementById('students')

// ------ Array Method  -  forEach

// array_of_students.forEach((student,index)=>{

//     const {name,class:student_class, city} = student

//     console.log(student,index);
//    return students_element.innerHTML += `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Class : ${student_class}</li>
//         <li>City : ${city}</li>
//     </ul>
//     `
// })


// ------ Array Method - map

// array_of_students.map((student,index)=>students_element.innerHTML += `
// <ul>
//     <li>Name: ${student.name}</li>
//     <li>Class : ${student.class}</li>
//     <li>City : ${student.city}</li>
// </ul>

//     // const {name,class:student_class, city} = student

// //     console.log(student,index);
// //    return 
//     `
// )


// ------ for loop

// for (let index = 0; index < array_of_students.length; index++) {
//     const element = array_of_students[index];

//     const {name,class:student_class, city} = element
    
// }

// ------ Array Method - forEach

//  array_of_students.forEach((student,index)=>{

//         const {name,class:student_class, city} = student
    
//         console.log(student,index);
//        return students_element.innerHTML += `
//         <ul>
//             <li>Name: ${name}</li>
//             <li>Class : ${student_class}</li>
//             <li>City : ${city}</li>
//         </ul>
//         `
//     })



// console.log(array_of_students);

