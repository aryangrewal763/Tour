import './tour2.css'
function Tours2({tours3,setAll}) {
    console.log(tours3[0].image);
    let imagex=tours3[0].image;
    let pricex=tours3[0].price;
    let infox=tours3[0].info;
    let idx=tours3[0].id;
    let namex=tours3[0].name;
    const icon=`<`;
    return(
        <div className=" relative">
            <div className="w-[100vw] h-[100vh] relative">
                <img src={imagex}></img>
            </div>
            <div className=' backdrop-blur-md z-10 w-[30vw] h-[96vh] rounded-md absolute right-[-500px] top-3 bottom-3 corn'>
                <div className=' z-10 w-[30vw] h-[96vh] absolute  right-[-500px] top-3 bottom-3 corn hover:bg-gradient-to-bl from-cyan-300 to hover:bg-fuchsia-300  transition-all duration-300 rounded-md group'>
                    <h2 className='text-5xl font-extrabold bg-slate-900 rounded-tl-xl text-white p-5'>{namex}</h2>
                    <h2 className=' p-3 font-bold text-3xl text-green-500'>{pricex}</h2>
                    <p className='p-5 text-slate-900 text-xl font-semibold hover:text-emerald-900 group-hover:text-emerald-950'>{infox}</p>
                </div>
            </div>
            <button onClick={setAll}className='absolute font-extrabold px-3 align-middle py-2 bg-black text-white rounded-full top-4 left-4'>{icon}</button> 
            
        </div>
    )
}
export default Tours2;
