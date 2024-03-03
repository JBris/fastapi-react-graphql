import { useState } from 'react'
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Contents from './components/contents/contents';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app" className="flex-row w-screen h-screen  mx-auto my-auto">
        <div id="header-wrapper" className="flex flex-row w-full mx-auto">
          <Header></Header>
        </div>
        <div id="body-wrapper" className="flex flex-row w-full h-full mx-auto">
          <Sidebar></Sidebar>
          <Contents></Contents>
        </div>
      </div>
    </>
  )
}

export default App
