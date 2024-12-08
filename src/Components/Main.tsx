import { FC } from "react";
import Search from "./Search";

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Favorite from "./Favorite";

export interface IMainProps {
  setSearchUserName: (name: string) => void;
}

export const Main: FC<IMainProps> = ({ setSearchUserName }) => {
  return (
    <div
      className="m-auto px-[80px] bg-clay-500 "
      style={{ fontFamily: "Inter" }}
    >
      <Routes>
        <Route
          path="/search/:name?"
          element={
            <>
              <Search />
              <Home setSearchUserName={setSearchUserName} />
            </>
          }
        />
        <Route path="/favorites" element={<Favorite/>}/>
        <Route path="/" element={<Navigate to='/search/' />}/>
      </Routes>
    </div>
  );
};
