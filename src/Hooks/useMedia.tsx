import React from 'react';

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState(false);

  React.useEffect(() => {
    const changeMath = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };
    window.addEventListener('resize', changeMath);
    return () => {
      window.removeEventListener('resize', changeMath);
    };
  }, [media]);

  return match;
};

export default useMedia;
