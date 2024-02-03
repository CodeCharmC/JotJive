import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
export default function CreatePost() {
   return (
      <div className='p-3 max-w-3xl mx-auto min-h-screen'>
         <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
         <form className='flex flex-col gap-4' >
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
               <TextInput
                  type='text'
                  placeholder='Title'
                  required
                  id='title'
                  className='flex-1'               
               />
               <Select
               >
                  <option value='uncategorized'>Select a category</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='reactjs'>React.js</option>
                  <option value='nextjs'>Next.js</option>
               </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
               <FileInput
                  type='file'
                  accept='image/*'
               />
               <Button
                  type='button'
                  gradientDuoTone='purpleToBlue'
                  size='sm'
                  outline
               >
                  upload image
               </Button>
            </div>
               <img
                  alt='upload'
                  className='w-full h-72 object-cover'
               />           
            <Button type='submit' gradientDuoTone='purpleToPink'>
               Publish
            </Button>
         </form>
      </div>
   );
}