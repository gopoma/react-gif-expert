const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Eze1pxJmK09fS7Ktej3O0a5ca41jRtKA&q=${category}&limit=10`;
  const response = await fetch(url);
  const {data:results} = await response.json();
  const gifs = results.map(({id, images:{downsized_medium:{url}}, title}) => ({
    id, 
    title,
    url
  }));
  console.log(gifs);
  return gifs;
};

export default getGifs;