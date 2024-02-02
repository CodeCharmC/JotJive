import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function DashProfile() {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
        />
        <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="User"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] mx-auto`}
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          defaultValue="***********"
        />
        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          outline
        >
          Update
        </Button>
        <Link
          to="/"
        >
          <Button
            type="button"
            gradientDuoTone="purpleToPink"
            className="w-full"
          >
            Create a post
          </Button>
        </Link>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};
