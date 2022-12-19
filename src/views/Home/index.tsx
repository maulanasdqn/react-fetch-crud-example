import { ReactElement, FC, Suspense, lazy } from "react";

const FetchStudents = lazy(() => import("../../modules/Students/FetchStudents"));

const Home: FC = (): ReactElement => {
  return (
    <Suspense fallback={"Memuat Data..."}>
      <FetchStudents />
    </Suspense>
  );
};

export default Home;
