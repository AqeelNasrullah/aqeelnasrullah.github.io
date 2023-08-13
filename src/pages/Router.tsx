import { Route, Routes } from "react-router-dom";
import { pages } from "../utils/pages";
import { PageType } from "../utils/types";

const Router = () => {
  return (
    <Routes>
      {pages.map((page: PageType, index: number) => (
        <Route path={page.path} element={<page.component />} key={`${index}`} />
      ))}
    </Routes>
  );
};

export default Router;
