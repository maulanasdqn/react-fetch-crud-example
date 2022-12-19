import { FC, Fragment, ReactElement } from "react";
import useFetchAllStudents from "../../hooks/useFetchAllStudents";

const FetchStudents: FC = (): ReactElement => {
  const mahasiswaData = useFetchAllStudents();
  return (
    <Fragment>
      {mahasiswaData.map((mahasiswa, index) => (
        <span key={index}>{mahasiswa.fullname}</span>
      ))}
    </Fragment>
  );
};

export default FetchStudents;
