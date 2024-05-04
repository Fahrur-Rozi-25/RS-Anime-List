import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const TopAnime = await response.json();

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
