import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {app} from '../firebase';
import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';


export default function UpdatePost() {
   const [file, setFile] = useState(null);
   const [imageUploadProgress, setImageUploadProgress] = useState(null);
   const [imageUploadError, setImageUploadError] = useState(null);
   const [formData, setFormData] = useState({});
   const [publishError, setPublishError] = useState(null);
   const navigate = useNavigate();
   const { postId } = useParams();
   
   useEffect(() => {      
      try {
         const fetchPost = async () => {
            const res = await fetch(`/api/post/getposts?postId=${postId}`);
            const data = await res.json();
            if (!res.ok) {
               console.log(data.message);
               setPublishError(data.message);
               return;
            }
            if (res.ok) {
               setFormData(data.posts[0]);
               setPublishError(null);
            }
         };
         fetchPost();
      } catch (error) {
         console.log(error.message);
      } 
   }, [postId]);
   const handleUpdloadImage = async () => {
      try {
         if (!file) {
            setImageUploadError('No file selected');
            return
         }
         setImageUploadError(null);
         const storage = getStorage(app);
         const fileName = new Date().getTime() + file.name;
         const storageRef = ref(storage, fileName);
         const uploadTask = uploadBytesResumable(storageRef, file);
         uploadTask.on(
            'state_changed',
            (snapshot) => {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               setImageUploadProgress(progress.toFixed(0));
            },
            (error) => {
               setImageUploadProgress(null);
               setImageUploadError('Image upload failed');
            },
            () => {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  setImageUploadProgress(null);
                  setImageUploadError(null);
                  setFormData({ ...formData, image: downloadURL });                  
               });
            }
         )
      } catch (error) {
         setImageUploadError(error.message);
      }   
   }
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch('/api/post/updatepost', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         })
         const data = await res.json();
         if (!res.ok) {
            setPublishError(data.message);
            return;
         }
         if (res.ok) {
            setPublishError(null);
            navigate(`/`);
         }
      } catch (error) {
         setPublishError("Something went wrong");
      }      
   }
   return (
      <div className='p-3 max-w-3xl mx-auto min-h-screen'>
         <h1 className='text-center text-3xl my-7 font-semibold'>Update post</h1>
         <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
         >
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
               <TextInput
                  type='text'
                  placeholder='Title'
                  required
                  id='title'
                  className='flex-1'  
                  onChange={(e) => setFormData({
                     ...formData, title: e.target.value
                  })}
                  value={formData.title}
                  key={formData.title}
               />
               <Select
                  onChange={(e) => setFormData({
                     ...formData, category: e.target.value
                  })}
                  value={formData.category}
                  key={formData.category}
               >
                  <option value='uncategorized'>Select a category</option>
                  <option value='beauty'>Beauty</option>
                  <option value='education'>Education</option>
                  <option value='entertainment'>Entertainment</option>
                  <option value='technology'>Technology</option>                  
               </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
               <FileInput
                  type='file'
                  accept='image/*'
                  onChange={(e) => setFile(e.target.files[0])}
                  key={file}
               />
               <Button
                  type='button'
                  gradientDuoTone='purpleToBlue'
                  size='sm'
                  outline
                  onClick={handleUpdloadImage}
               >
                  {imageUploadProgress ? (
                     <div className='w-16 h-16'>
                        <CircularProgressbar
                           value={imageUploadProgress}
                           text={`${imageUploadProgress || 0}%`}
                        />
                     </div>
                  ) : (
                     'Upload Image'
                  )}
               </Button>
            </div>
            {imageUploadError && (
               <Alert
                  color='failure'
               >
                  {imageUploadError}
               </Alert>
            )}
            {formData.image && (
               <img
                  src={formData.image}
                  alt='cover image'
                  className='w-full h-72 object-cover'
               />
            )}
            <ReactQuill
               theme='snow'
               placeholder='Write something...'
               className='h-72 mb-12'
               required
               onChange={(value) => setFormData({
                  ...formData, content: value
               })}
               value={formData.content}
               key={formData.content}
            />                      
            <Button 
               type='submit' 
               gradientDuoTone='purpleToPink'
            >
               Update
            </Button>
            {publishError && (
               <Alert
                  color='failure'
                  className='mt-5'
               >
                  {publishError}
               </Alert>
            )}
         </form>
      </div>
   );
}