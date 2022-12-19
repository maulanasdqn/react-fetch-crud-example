import { useRecoilValue } from "recoil";
import { FetchAllStudents } from "../store/Students";

export default ()=> {
  return useRecoilValue(FetchAllStudents);
};
