import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs'

export default function FooterPart() {
   return (
      <Footer container className="border border-t-8 border-teal-500">
         <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
               <div className="mt-5">
                  <Link
                     to="/"
                     className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
                  >
                     <span
                        className='px-2 py-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 rounded-lg text-white'
                     >
                        JotJive
                     </span>
                  </Link>
               </div>
               <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                     <Footer.Title title="About" />
                     <Footer.LinkGroup col>
                        <Footer.Link
                           href="https://mern-xyx1.onrender.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           ŚuŚāgatom
                        </Footer.Link>
                        <Footer.Link>
                           <Footer.Link
                              href="/about"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                           JotJive Blog
                           </Footer.Link>
                        </Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Follow us" />
                     <Footer.LinkGroup col>
                        <Footer.Link
                           href="https://github.com/CodeCharmC"                           
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Github
                        </Footer.Link>
                        <Footer.Link href="https://discord.gg/CodeCharmC">Discord</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
                  <div>
                     <Footer.Title title="Legal" />
                     <Footer.LinkGroup col>
                        <Footer.Link href="#">
                           Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">Terms & Conditions</Footer.Link>
                     </Footer.LinkGroup>
                  </div>
               </div>
            </div>
            <Footer.Divider />
            <div>
               <Footer.Copyright
                  href="#"
                  by="JotJive"
                  year={new Date().getFullYear()}
               />
               <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="https://github.com/CodeCharmC" icon={BsGithub} />
                  <Footer.Icon href="#" icon={BsDribbble} />
               </div>
            </div>
         </div>
      </Footer>
   );
};
