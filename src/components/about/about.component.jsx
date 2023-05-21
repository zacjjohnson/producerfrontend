// import '../about/about.styles.css'

const About = () => {
  return (
    <>
      {/* Header */}
      <h1 className="text-4xl text-center p-12 font-bold">About Me</h1>

      {/* Content body */}
      
        <div className="flex flex-row mx-auto w-full p-4 gap-4 align-middle">
          <div className="w-1/2">
            <img
              src={"https://imagizer.imageshack.com/img924/7638/W6uv3m.jpg"}
              alt="artist"
              className="rounded-md"
            ></img>
          </div>

          {/* About Me Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-lg text-center">
              Hi, my name is Writa beats and I am a music producer based in
              Orlando, Florida. I am 29 years old and have a degree in music
              production. I have worked with a diverse range of artists from
              across the country and have recorded and mixed over 500 songs. I
              am passionate about creating high-quality, innovative music that
              connects with listeners on a deeper level. Thank you for visiting
              my website and I hope you enjoy the music I have to share.
            </h3>
          </div>
        </div>
      
    </>
  );
};

export default About;
