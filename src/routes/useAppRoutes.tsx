import { Route } from "react-router-dom";
import { Home } from "../components/pages/home/home";
import { Initial } from "../components/pages/initial/initial";
import { Wellcome } from "../components/pages/wellcome/wellcome";
import { UserDefinition } from "../components/pages/userDefinition/userDefinition";

export const useAppRoutes = () => {
  return (
    <>
      <Route path="/" element={<Initial />} />
      <Route path="/login" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/wellcome" element={<Wellcome />} />
      <Route path="/user-definition" element={<UserDefinition />} />
    </>
  );
};
