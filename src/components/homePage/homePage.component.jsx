import './homePage.styles.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';




const HomePage = () => {

    const { isLoggedIn, user } = useContext(AuthContext);
    console.log(user);

    if(user){

        const { name, location } = user;
        console.log(name, location);
        return (
            <>
            <div className="home-page">

                <div className='name'>
                    <h1>Writa Beats</h1>
                    
                </div>
                <div className='main-image'>

                    <img src='https://imagizer.imageshack.com/img922/4953/1OsPb9.jpg' alt='profileimage'></img>

                </div>
            
    
            
            </div>

            </>
        )
    } else {
        return (
          <>
            {/* <section className=" dark:text-gray-800">
              <div className="mx-auto flex flex-row items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                  Writa Beats
                  <p className="px-8 mt-8 mb-12 text-lg">
                    Producer from Orlando, FL
                  </p>
                </h1>

                <img
                  className="w-96"
                  src="https://i.imgur.com/WAvRbPQ.jpg"
                  alt="profileimage"
                ></img>
              </div>
            </section> */}

            <div className="home-page">
              <div className="name">
                <h1>Writa Beats</h1>
                <h2>Producer</h2>
                <h4>Orlando, Fl</h4>
              </div>
              <div className="main-image">
                <img
                  className='homepage-image'
                  src="https://imagizer.imageshack.com/img922/4953/1OsPb9.jpg"
                  alt="profileimage"
                ></img>
              </div>
            </div>
          </>
        );
    }
    
}


export default HomePage;