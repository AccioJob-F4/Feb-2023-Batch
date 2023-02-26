export const apiKey = "b30fc35d";

export const searchUrlGenerator = (str) => {
  const loweredStr = str.toLowerCase();
  const newSearchParam = loweredStr.split(" ").join("+");
  const paramUrl = `?apikey=${apiKey}&s=${newSearchParam}`;

  //   console.log({ loweredStr, newSearchParam, paramUrl });

  return paramUrl;
};

export const detailUrlGenerator = (imdbId) => {
  return `?apikey=${apiKey}&i=${imdbId}`;
};
