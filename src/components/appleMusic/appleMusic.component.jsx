import React from 'react';

const AppleMusicEmbed = () => {
  const embedCode = `<iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/artist/writa/1386547967"></iframe>`;

  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};

export default AppleMusicEmbed;
