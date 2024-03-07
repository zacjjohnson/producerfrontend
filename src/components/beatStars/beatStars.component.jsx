import React from 'react';

const BeatStarsEmbed = () => {
    const embedCode = `<iframe src="https://player.beatstars.com/?storeId=146357" style="width:100%; height:100%; max-height: 800px; max-width:1024px;"> -- none -- </iframe>`;
    return <div dangerouslySetInnerHTML={{ __html: embedCode }} style={{ width: '100%', padding: 0, margin: 0 }} />;
  };
  

export default BeatStarsEmbed;
