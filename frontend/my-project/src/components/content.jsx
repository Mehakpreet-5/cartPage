
import React from 'react'
import Food from '../assets/ss.food.png'
import FoodItems from '../pages/fooditems'
import Footer from './footer'
import Quote from '../assets/Screenshot_6.png'
// import Loginn from '../pages/loginn'
function Content() {
  return (
    <>
    <div className=' m-9 mt-20'>

      {/* image */}
      <div 
        className="flex justify-center items-center bg-center  " 
        style={{ 
          backgroundImage: `url(${Food})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: '',
          left: '',
          height: '600px',
          width: '1350px',
          display: 'flex', 
          margin: '100px 20px 40px 50px',
          // margin : '20px',
          borderRadius: '30px',
        }}>

          
        {/* Add any content you want centered on top of the background here */}
      </div>
      <div className='ml-5'>
        <h1 className='font-bold text-2xl'>Explore with us!!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo velit laborum voluptates eligendi magni corporis <br /> ratione,
           quaerat itaque consectetur asperiores veritatis at ipsum alias porro 
           numquam ipsa rerum quod.  aa</p>
        </div> <br /><br /> <br />
        <div> <FoodItems/> </div> <br />



   {/* Quote box */}

        <div>

      <div 
        className="relative flex justify-center items-center bg-center bg-transparent  " 
        style={{ 
          backgroundImage: `url(${Quote})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: '',
          left: '',
          height: '260px',
          width: '740px',
          display: 'flex',  
          margin: '70px 20px 60px 400px',
          // margin : '20px',
          mixblendmode: 'multiply',
          borderRadius: '30px',
          
          
        }}>


       
          <div className="absolute inset-0 flex items-center justify-center">
    {/* <h1 className="text-orange-300 text-xl "> */}
    <h1 className="text-orange-300 font-custom text-xl font-bold "
    style={{ 
      fontFamily: ' Times New Roman Times, serif', 
      fontStyle: 'italic',
      display:'flex' ,
      justifyContent:'center'
      
    }}>
     " Your Textt Here"
    </h1>
  </div>
        </div>
        </div>
   <div>
    {/* <Loginn/> */}
   </div>
        <div><Footer/></div>
          </div>
    </>
  )
}

export default Content
