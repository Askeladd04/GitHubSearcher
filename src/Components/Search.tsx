import {  FC} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface ISearchProps {
}

const Search: FC<ISearchProps> = () => {
    const navigate = useNavigate()
    const {register,handleSubmit } = useForm<ISearchForm>()

    interface ISearchForm  {
        query: string
    }

  function submit(data: ISearchForm): void {
    navigate(`/search/${data.query}`)
  }


  return (
    <div className="flex flex-column justify-center ">
      <form onSubmit={handleSubmit(submit)} className="relative mt-[40px] ">
        <input
            {...register('query')}
          type="text"
          className="w-[500px] h-[40px] border-[1px]  border-slate-950 rounded-full  p-[20px] "
          placeholder="User search"
          autoFocus
        />
        <button className="border-2 hover:bg-rose-500 bg-teal-500 py-[4px] px-[12px] rounded-full absolute right-[15px] m-[2.5px] border-0 duration-[0.5s] ease">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
