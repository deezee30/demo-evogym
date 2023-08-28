import { useEffect, useState } from "react"
import NavBar from "@/scenes/navbar"
import { NavPage } from "@/shared/types";
import useTopOfPage from "./hooks/useTopOfPage";

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
    </div>
  )
}

export default App
