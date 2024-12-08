import { useState } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {

  const [searchUserName , setSearchUserName] = useState(" ")

  return (
    <>
      <Header userName={searchUserName}/>
      <Main setSearchUserName={setSearchUserName}/>
    </>
  );
}

export default App;
 