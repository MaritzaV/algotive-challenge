import './App.css'
import VideoTable from './components/VideoTable'


function App() {
  return (
    <>
      <div className="flex flex-row">
        <nav className="basis-4/12">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Video Gallery</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <div className='basis-8/12'>
         <VideoTable />
        </div>
    </div>
    </>
  )
}

export default App
