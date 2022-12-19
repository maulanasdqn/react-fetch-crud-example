import { FC, lazy, ReactElement } from "react";

const Home = lazy(() => import("../views/Home"));

const App: FC = (): ReactElement => {
  return <Home />;
};

export default App;
