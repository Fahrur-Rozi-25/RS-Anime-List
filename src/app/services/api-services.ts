export const AnimeResponse = async (resource: any, query?: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );

  const Data = await response.json();
  return Data;
};
