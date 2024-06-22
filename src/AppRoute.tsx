import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CreateStudent,
  HomePage,
  StudentOutlet,
  Student,
  UpdateStudent,
} from "./pages";
import MyApp from "./pages/Myapp";
import Test1 from "./pages/Test1";
const AppRoute: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="student" element={<StudentOutlet />}>
          <Route path="" element={<Student />} />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="update-student/:studentID" element={<UpdateStudent />} />
        </Route>
        <Route path="todo" element={<MyApp />} />
        <Route path="test" element={<Test1 />} />
      </Routes>
  </>
  );
};

export default AppRoute;
