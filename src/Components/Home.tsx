import { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../api/getUser";
import GetSvgSelector from "../common/getSvgSelector";
import { Pagination } from "@mui/material";
import UserList from "./UserList";

export interface IUserProps {
  setSearchUserName: (name: string) => void
}
const Home: FC<IUserProps> = ({setSearchUserName}) => {
  const { name } = useParams<{ name: string }>();
  if(name) setSearchUserName(name)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, isLoading } = useGetUsersQuery({
    user: name || "",
    currentPage,
  });
  const totalPages = data?.total_count ? Math.ceil(data.total_count / 10) : 0;




  useEffect(() => {
    setCurrentPage(1)
  } , [name])

  const handleChange = (_event: ChangeEvent<unknown>, val: number) => {
    setCurrentPage(val);
  };

 

  return (
    <div className="w-[100%] h-[100%] flex flex-wrap justify-center gap-5 mt-[30px]">
      {isLoading && <div>Loading...</div>}
      {data?.total_count === 0 ? (
        <div className="mx-auto my-[15%] flex flex-col justify-center items-center gap-[10px]">
          <GetSvgSelector id="emoji" />
          <span>Not found</span>
        </div>
      ) : (
        data?.items.map((user) => {
          return (
          <UserList user={user}/>
          )
        })
      )}
     { totalPages > 0 && <div className="w-[100%] p-[20px]  flex justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          color="primary"
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>}
    </div>
  );
};

export default Home;
