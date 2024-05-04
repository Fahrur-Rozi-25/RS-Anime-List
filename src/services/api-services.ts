export const AnimeResponse = async (resource: any, query?: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );

  const Data = await response.json();
  return Data;
};

export const getNestedAnimeResponse = async (
  resource: any,
  objectProperty: any
) => {
  const response = await AnimeResponse(resource);
  return response.data.flatMap(
    (item: { [x: string]: any }) => item[objectProperty]
  );
};

export const reproduce = (data: any, gap: any) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
