import { axios_instance } from "../config/axios_instance";

const get_data = async (end_point) => {
  // const res = await axios_instance.get(end_point);

  const response = await axios_instance.get(end_point);

  return response.data;
};

export { get_data };

// const sum_numbers = (a, b) =>{
//   return a + b
// }

// sum_numbers(2, 3)
// sum_numbers(2, 3)
// const sum = 3 + 4
// const sum_1 = 2 + 5
// const sum_2 = 2 + 7
