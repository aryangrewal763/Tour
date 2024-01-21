import { useState } from "react"

function Card({id,image,price,name,info,removeTour,showTour}){
    const [readMore,setReadMore]=useState(false)
    const description=(readMore?info:`${info.substring(0,200)}....`);
    function readmoreHandler(){
        setReadMore(!readMore)
    }
    
    return (
        <div className="card flex flex-col gap-3 border-2 border-slate-400 rounded-sm p-2 bg-slate-200 hover:bg-neutral-200 hover:scale-[1.1] hover:border-0 transition-all duration-200 ">
            <img src={image} className="w-[330px] h-[220px]" onClick={()=>showTour(id)}></img>
            <div className="flex flex-col gap-3">
                <div>
                    <h4 className="text-green-600 font-bold">{price}</h4>
                    <h4 className="text-cyan-900 text-2xl font-bold">{name}</h4>
                </div>
                <div className="description text-slate-700">
                    {description}
                    <span onClick={readmoreHandler} className="text-blue-700 cursor-pointer">
                        {readMore?`show less`:`show more`}
                    </span>
                </div>
                <button onClick={()=>removeTour(id)} className="bg-slate-600 p-3 rounded-md text-white font-bold w-fit mx-auto">
                    Not Interested
                </button>
            </div>
        </div>
    )
}
export default Card