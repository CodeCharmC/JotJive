import { Button } from 'flowbite-react';
export default function Projects() {
   return (
      <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
         <h1 className='text-3xl font-semibold'>Pojects</h1>
         <p className='text-md text-gray-500'>Creating awesome website is my passion</p>
         <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
               <h2 className='text-2xl'>
                  Want to know more of my projects?
               </h2>
               <p className='text-gray-500 my-2'>
                  Checkout these real estate project
               </p>
               <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                  <a href="https://mern-xyx1.onrender.com/" target='_blank' rel='noopener noreferrer'>
                     ŚuŚāgatom
                  </a>
               </Button>
            </div>
            <div className="p-7 flex-1">
               <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
         </div>
      </div>
   );
}