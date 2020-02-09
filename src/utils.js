const axios = require('axios')

const URL = 'https://www.hatchways.io/api/assessment/students'

const getStudents = async () => {
  const res = await axios.get(`${URL}`);
  return res.data;
}

export { getStudents }
