import { FC } from "react"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from "../redux/store"
import UserList from "./UserList";

type FavoriteType = {}

const Favorite: FC<FavoriteType>  = ({}) => {

    const users = useAppSelector(state => state.favorite.favoriteUsers)
    return (
        <div className="w-[100%] flex  justofy-center flex-col items-center relative ">
            <h2 className="block w-[100%] text-center my-[20px] text-teal-500 text-[36px]">Favorites User</h2>
            {users.length === 0 ? <div className="my-[100px] flex flex-col gap-[15px] justify-center items-center"><EmojiEmotionsIcon style={{width: '60px', height: '60px'}}/> not favorite</div> 
            :
            users.map(user => {
                return (
                    <UserList user={user}/>
                )
            })
            }
        </div>
    )

}

export default Favorite