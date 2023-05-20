// import '../about/about.styles.css'

const About = () => {
  return (
    <>
      <h1 className="text-4xl text-center p-12">About Me</h1>
      <div className="flex flex-row w-full mx-auto">
        <div className="w-50">
          <img
            src={"https://imagizer.imageshack.com/img924/7638/W6uv3m.jpg"}
            alt="artist"
            className="w-full p-2 max-w-xs mx-auto"
          ></img>
        </div>

        <div className="w-50">
          <h3 className="text-lg">
            Hi, my name is Writa beats and I am a music producer based in
            Orlando, Florida. I am 29 years old and have a degree in music
            production. I have worked with a diverse range of artists from
            across the country and have recorded and mixed over 500 songs. I am
            passionate about creating high-quality, innovative music that
            connects with listeners on a deeper level. Thank you for visiting my
            website and I hope you enjoy the music I have to share.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
