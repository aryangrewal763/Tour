import React, { useState } from 'react'
import './App.css'
import data from './data'
import Tours from './component/Tours'
import Tours2 from './component/Tours2'
function App() {
      const [tours,setTours]=useState(data)
      function removeTour(id) {
        const newTour=tours.filter((tour) => tour.id!==id)
        setTours(newTour)
      }
      function setAll(){
        setTours(data)
      }
      function showTour(id) {
        const newTour1=tours.filter((tour) => tour.id===id)
        setTours(newTour1)
      }

      if(tours.length===1){
        return(
          <div className="w-[100vw] h-[100vh] bg-slate-600">
            <Tours2 tours3={tours} setAll={setAll}></Tours2>
          </div>
        )
      }

      if(tours.length===0){
        return(
          <div>
            <div className='bg-slate-300 w-[100vw] min-h-[100vh] relative maini'>
              <h1 className='text-black font-bold text-center py-7 text-7xl'>TOURS</h1>
                <div className='text-center absolute  bottom-40 left-[49%] bg-slate-800 p-2 text-white rounded-md hover:bg-indigo-500 hover:text-slate-800'>
                  <button onClick={()=>setTours(data)} className=' font-extrabold text-4xl '>Refresh</button>
                </div>
              <div className=' p-5 absolute bottom-4 left-[40%] scale-[3] transition-all duration-500'>
                <h2 className='text-slate-700 font-bold text-4xl animtext '>Thank You For Visiting Us...</h2>
              </div>
            </div>
          </div>
        )
      }

  return (
    <>
      <div className='bg-slate-300 w-[100vw] min-h-[100vh] relative maini'>
          <h1 className='text-black font-bold text-center py-7 text-7xl'>TOURS</h1>
          <div className='w-[1080px] mx-auto pb-40'>
            <Tours tours1={tours} removeTour={removeTour} showTour={showTour}></Tours>
          </div>
          <div className=' p-5 absolute bottom-4'>
          <h2 className='text-slate-700 font-bold text-5xl  '>Thank You For Visiting Us...</h2>
          </div>
      </div>
    </>
  )
}

export default App
