import { FC } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink, useLocation } from "react-router-dom";

export interface IHeaderProps {
  userName: string
}

export const Header: FC<IHeaderProps> = ({userName}) => {
  const btnStyle = "flex items-center border-2 px-[10px] py-[7px] rounded-full gap-[5px]";
  const activeStyle = 'text-rose-500';
  const location =useLocation()
  const active = location.pathname === '/search/' 
  

  return (
    <div className="border-[1px] border-[#6a5e4b] flex justify-center items-center h-[60px]">
      <div className="w-[95%] flex flex justify-between items-center">
        <span
          className="text-teal-500  text-xl"
          style={{ fontFamily: "Poppins", fontWeight: 800 }}
        >
          GitHub Search
        </span>
        <nav className="flex gap-[10px]">
          <NavLink
            to={`/search/${userName  || '1'}`}
            className={({ isActive }) =>
              `${btnStyle} ${isActive || active ?  activeStyle : "text-teal-500"}`
            }
          >
            <HomeIcon /> Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${btnStyle} ${isActive ? activeStyle : "text-teal-500"}`
            }
          >
            <FavoriteIcon /> Fav
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
