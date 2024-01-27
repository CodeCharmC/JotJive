import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";

export default function SignUp() {
   const [formData, setFormData] = useState({});
   const [errorMessage, setErrorMessage] = useState(null);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
      console.log(formData);
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.username || !formData.email || !formData.password) {
         return setErrorMessage("All fields are required");
      };
      try {
         setLoading(true);
         setErrorMessage(null);
         const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         const data = await res.json();
         if (data.success === false) {
            return setErrorMessage(data.message);
         }
         setLoading(false);
         if (res.ok) {
            navigate("/sign-in");
         }
      } catch (error) {
         setErrorMessage(error.message);
         setLoading(false);
      }
   };

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
                     className="px-2 py-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 rounded-lg text-white"
                  >
                     JotJive
                  </span>
               </Link>
               <p className="text-sm mt-5">
                  Sign up to dance through the art of storytelling with the rhythm of concise expressions and lively narratives.
               </p>
            </div>
            {/*right*/}
            <div className="flex-1">
               <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
               >
                  <div>
                     <Label value="Your username" /> 
                     <TextInput
                        type="text"
                        placeholder="Username"  
                        required
                        id="username"
                        onChange={handleChange}
                     /> 
                  </div>
                  <div>
                     <Label value="Your email" /> 
                     <TextInput
                        type="email"
                        placeholder="name@company.com"  
                        required
                        id="email"
                        onChange={handleChange}
                     /> 
                  </div>
                  <div>
                     <Label value="Your password" /> 
                     <TextInput
                        type="password"
                        placeholder="Password"  
                        required
                        id="password"
                        onChange={handleChange}
                     />                     
                  </div>
                  <Button
                     type="submit"                       
                     className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500"
                     disabled={loading}
                  >
                     {loading ? (
                        <>
                           <Spinner size="sm" />
                           <span className="pl-3">Loading...</span>                           
                        </>
                     ) : (
                           <span className="hover:font-bold">
                              Sign Up
                           </span> 
                     )}                     
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
               {errorMessage && (
                  <Alert className="mt-5" color="failure">
                     {errorMessage}
                  </Alert>
               )}
            </div>
         </div>
      </div>
   );
}
