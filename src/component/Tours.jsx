import './Tours.css'
import Card from './Card.jsx'
function Tours({tours1,removeTour,showTour}){
    return(
        <div className='mt-10'>
            <div className='grid grid-cols-3 gap-4 '>
                {
                tours1.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour} showTour={showTour}></Card>
                })
                }
            </div>
        </div>
    )
}
export default Tours
// map() creates a new array from calling a function for every array element.
//The three dots ... in JavaScript is known as the spread syntax, and it is commonly used to make shallow copies of JavaScript objects. It does this by taking in an iterable and expanding it into its individual elements.