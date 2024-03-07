import React from 'react';

const SpotifyEmbed = () => {
  // Your Spotify embed code as a string
  const embedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/436n7Ut7vqLxKqJiVipZWo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

  // Use dangerouslySetInnerHTML to set the iframe code
  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};

export default SpotifyEmbed;