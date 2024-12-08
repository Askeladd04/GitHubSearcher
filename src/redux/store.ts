import {
  combineReducers,
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { userSlice } from "../api/getUser";
import { useDispatch, useSelector } from "react-redux";

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const initialState = {
  favoriteUsers: JSON.parse(
    sessionStorage.getItem("users") || "[]"
  ) as Array<User>,
};

type initialStateType = typeof initialState;

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavoriteUser(state: initialStateType, action: PayloadAction<User>) {
      const favorites = state.favoriteUsers;
      if (favorites.some((user) => user.id === action.payload.id)) {
        state.favoriteUsers = favorites.filter((user) => action.payload.id !== user.id);
      } else favorites.push(action.payload);
      sessionStorage.setItem("users", JSON.stringify(state.favoriteUsers));
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export type dataType = {
  incomplete_results: boolean;
  items: Array<User>;
  total_count: number;
};

const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [favoriteSlice.name]: favoriteSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<AppStateType>();
export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
