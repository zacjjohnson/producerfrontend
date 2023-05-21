import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const HomePage = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    const { name, location } = user;
    console.log(name, location);
    return (
      <>
        <div className="flex flex-row mx-auto min-w-full justify-center gap-48 pt-12">
          <div className="">
            <h1 className="text-8xl p-8">Writa Beats</h1>
            <h2 className="text-6xl p-4">Producer</h2>
            <h4 className="text-4xl p-4">Orlando, Fl</h4>
          </div>

          <div className="p-8">
            <img
              className="rounded-md  h-auto max-w-lg drop-shadow-sm"
              src="https://imagizer.imageshack.com/img922/4953/1OsPb9.jpg"
              alt="profileimage"
            ></img>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row mx-auto min-w-full justify-center gap-48 pt-12">
          <div className="">
            <h1 className="text-8xl p-8">Writa Beats</h1>
            <h2 className="text-6xl p-4">Producer</h2>
            <h4 className="text-4xl p-4">Orlando, Fl</h4>
          </div>

          <div className="p-8">
            <img
              className="rounded-md  h-auto max-w-lg drop-shadow-sm"
              src="https://imagizer.imageshack.com/img922/4953/1OsPb9.jpg"
              alt="profileimage"
            ></img>
          </div>
        </div>
      </>
    );
  }
};

export default HomePage;
