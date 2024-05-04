import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList/AnimeList";
import {
  AnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../services/api-services";

const Home = async () => {
  const TopAnime = await AnimeResponse("top/anime", "limit=8");
  let RecomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  RecomendedAnime = reproduce(RecomendedAnime, 8)

  return (
    <main>
      <section>
        <Header
          title="paling populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        ></Header>
        <AnimeList api={TopAnime}></AnimeList>
      </section>
      <section>
        <Header title="Rekomendasi"></Header>
        <AnimeList api={RecomendedAnime}></AnimeList>
      </section>
    </main>
  );
};

export default Home;
