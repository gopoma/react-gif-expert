import {useEffect, useState} from "react";

const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Eze1pxJmK09fS7Ktej3O0a5ca41jRtKA&q=${category}&limit=10`;
    fetch(url)
    .then(response => response.json())
    .then(({data:results}) => {
      const fetchedGifs = results.map(({id, title, images:{downsized_medium:{url}}}) => ({
        id,
        title,
        url
      }));
      setGifs(fetchedGifs);
      setIsLoading(false);
    })
    .catch(console.log)
    // {id, title, images:{downsized_medium:{url}}}
  }, []);

  return {
    gifs,
    isLoading
  };
};

export default useFetchGifs;