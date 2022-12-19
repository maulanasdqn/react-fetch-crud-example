import { atom, selector } from "recoil";
import StudentService from "../services/students.service";
import { StudentsTypes } from "../utilities/types/Students";

export const StudentsPayload = atom<StudentsTypes>({
  key: "students-payload",
  default: {
    id: "",
    fullname: "",
    student_id: "",
    major: ""

  }
})

export const FetchAllStudents = selector({
  key: "fetch-all-students",
  get: async (): Promise<StudentsTypes[]> => {
    return await StudentService.getStudents()
  }
})

export const CreateStudent = selector({
  key: "create-student",
  get: async ({ get }) => {
    const payload = get(StudentsPayload)
    await StudentService.createStudent(payload)
  }
})
