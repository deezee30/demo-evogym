import { useState } from "react"
import NavBar from "@/scenes/navbar"
import { NavPage } from "@/shared/types";
import useTopOfPage from "./hooks/useTopOfPage";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState(NavPage.Home);
  const isTopOfPage = useTopOfPage((isTopOfPage) => {
    if (isTopOfPage) setSelectedPage(NavPage.Home);
  });

  return (
    <div className="app bg-gray-20">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      <Home
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
