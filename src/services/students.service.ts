import { StudentsTypes } from "../utilities/types/Students";
import ApiService from "./api.services"

const StudentService = {
  getStudents: async () => {
    const requestData = {
      config: {
        methods: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      },
      url: "/mahasiswa"
    }

    try {
       const res = await ApiService.customRequest(requestData);
      return res
    } catch(e){
      console.log(e)
    }
  },

  createStudent: async (props: StudentsTypes) => {
    const requestData = {
      config: {
        methods: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(props)
      },
      url: "/mahasiswa"
    }

    try {
       const res = await ApiService.customRequest(requestData);
      return res
    } catch(e){
      console.log(e)
    }
  }
}

export default StudentService
