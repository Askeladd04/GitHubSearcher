import { FC } from 'react';
import { favoriteActions, useAppDispatch, useAppSelector, User } from '../redux/store';
import FavoriteIcon from "@mui/icons-material/Favorite";

export interface IUserListProps {
    user: User
}

 const UserList: FC<IUserListProps> = ({user}) => {


    const favoriteUsers = useAppSelector((state) => state.favorite.favoriteUsers);
    const dispatch = useAppDispatch();
    const handleClickFavorite = (user: User) => {
        dispatch(favoriteActions.toggleFavoriteUser(user));
      };
    return (
        <div
          className="w-[35%] h-[80px] hover:bg-cyan-700 border-2 border-cyan-700 rounded-xl flex justify-between items-center px-[10px] duration-[0.3s] ease"
          key={user.id}
        >
          <div className="flex gap items-center gap-[10px]">
            <img
              src={user.avatar_url}
              className="h-[40px] w-[40px] rounded-full"
              alt=""
            />
            <span>{user.login}</span>
          </div>
          <div className="flex gap-[10px] items-center">
            <span style={{ cursor: "pointer" }}>
              <FavoriteIcon
                onClick={() => handleClickFavorite(user)}
                className={`text-[transparent] stroke-[#000] ${
                  favoriteUsers.some((u) => u.id === user.id) &&
                  "text-rose-500 stroke-none"
                }`}
              />
            </span>
            <button className="px-[15px] py-[10px]  bg-teal-500 rounded-full hover:bg-rose-500 duration-[0.3s] ease" >
              <a href={user.html_url}>go to repos</a>
            </button>
          </div>
        </div>
      );
}

export default UserList
