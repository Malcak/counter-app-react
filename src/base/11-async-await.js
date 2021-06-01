export const getImagen = async () => {
  try {
    const apiKey = 'OFQBLaDb61ml1XxsiTgXTf3hBDj6DR5d';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    return data;
  } catch (error) {
    return 'No existe';
  }
};
