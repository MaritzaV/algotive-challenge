import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VideoLanding from './components/VideoLanding'
import VideoTable from './components/VideoTable'
import Layout from './components/Layout';


function App() {
  return (
    <>
     <div className="flex flex-row">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<VideoLanding />} />
            <Route path="video-gallery" element={<VideoTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
