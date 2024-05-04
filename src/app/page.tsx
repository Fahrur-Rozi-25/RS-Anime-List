import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList/AnimeList";
import { AnimeResponse } from "./services/api-services";

const Home = async () => {
  const TopAnime = await AnimeResponse("top/anime", "limit=8");

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
    </main>
  );
};

export default Home;
