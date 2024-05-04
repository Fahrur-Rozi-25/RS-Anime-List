import { AnimeResponse } from "@/app/services/api-services";
import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }: any) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const SearchAnime = await AnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <main>
      <section>
        <Header title={`Pencarian Untuk Anime ${decodedKeyword}...`}></Header>
        <AnimeList api={SearchAnime}></AnimeList>
      </section>
    </main>
  );
};

export default Page;
