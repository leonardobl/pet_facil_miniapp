import { useEffect, useState } from "react";
import { MainLoad } from "../../atoms/mainLoad/mainLoad";
import { Layout } from "../../template/layout/layout";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const Initial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();
  const user = getItem("user");

  useEffect(() => {
    setTimeout(() => {
      let route = "";

      if (!user) {
        route = "/wellcome";
      } else {
        route = "/login";
      }

      navigate(route);
      setIsLoading(false);
    }, 4000);
  }, []);

  return <Layout isLoading={isLoading} fallbackLoading={<MainLoad />} />;
};
