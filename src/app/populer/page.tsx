"use client";

import AnimeList from "@/components/AnimeList/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { AnimeResponse } from "../services/api-services";

const Page = () => {
  const [page, setPage] = useState(1);
  const [TopAnime, setTopAnime] = useState<any>([]);

  const fetchData = async () => {
    const PopulerAnime = await AnimeResponse("top/anime", `page=${page}`);

    setTopAnime(PopulerAnime);
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={TopAnime} />
      <Pagination
        page={page}
        lastPage={TopAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default Page;
