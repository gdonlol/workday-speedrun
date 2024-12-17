import './css/App.css'
import { Routes, Route } from 'react-router'
import { Menu } from './Menu'
import { Joblist } from './Joblist'
import { GameControl } from './GameControl'
import { useEffect, useState } from 'react'

function App() {

  const [pageColor, setPageColor] = useState("#000000");
  const [icon, setIcon] = useState("");
  const [banner, setBanner] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  useEffect(() => {
    const fetchJson = async () => {
      const response = await fetch("/json/5.json");
      const jsonData = await response.json();
      setPageColor(jsonData.color);
      setIcon(jsonData.icon);
      setBanner(jsonData.banner);
      setJobTitle(jsonData.jobTitle);
      setJobDesc(jsonData.jobDesc);
      console.log(jsonData.jobTitle)
    }
    fetchJson();
  }, [])

  return (
    <>
      <Routes>

        <Route index element={<Menu />} />
        <Route path="game" element={<GameControl />}>
          <Route path="joblist" element={
            <Joblist
              pageColor={pageColor}
              icon={icon}
              banner={banner}
              jobTitle={jobTitle}
              jobDesc={jobDesc}
            />
          } />

        </Route>

      </Routes>
    </>
  )
}

export default App
