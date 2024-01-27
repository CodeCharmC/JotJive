import { Link } from "react-router-dom";
import {Button, Label, TextInput} from "flowbite-react";

export default function SignUp() {
   return (
      <div className="min-h-screen mt-20">
         <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
            {/*left*/}
            <div className="flex-1">
               <Link
                  to="/"
                  className="font-bold dark:text-white text-4xl"
               >
                  <span
                     className='px-2 py-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 rounded-lg text-white'
                  >
                     <span
                        className='hover:animate-pulse'
                     >
                        JotJive
                     </span>
                  </span>
               </Link>
               <p className="text-sm mt-5">Sign up to dance through the art of storytelling with the rhythm of concise expressions and lively narratives.</p>
            </div>
            {/*right*/}
            <div className="flex-1">
               <form className="flex flex-col gap-4">
                  <div>
                     <Label value="Your username" /> 
                     <TextInput
                        type="text"
                        placeholder="Username"  
                        required
                     />                     
                     <Label value="Your email" /> 
                     <TextInput
                        type="email"
                        placeholder="name@company.com"  
                        required
                     />                     
                     <Label value="Your password" /> 
                     <TextInput
                        type="password"
                        placeholder="Password"  
                        required
                     />                     
                  </div>
                  <Button
                     type="submit"
                     gradientDuoTone="purpleToBlue"                     
                  >
                     <span className="hover:font-bold">
                        Sign Up
                     </span>
                  </Button>
               </form>
               <div className="flex gap-2 text-sm mt-5">
                  <span>Have an account?</span>
                  <Link
                     to="/sign-in"
                     className="text-blue-500 hover:font-semibold"
                  >
                     Sign In
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
