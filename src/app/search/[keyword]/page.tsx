import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }: any) => {
  const { keyword } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const SearchAnime = await response.json();

  return (
    <main>
      <section>
        <Header title={`Pencarian Untuk Anime ${keyword}...`}></Header>
        <AnimeList api={SearchAnime}></AnimeList>
      </section>
    </main>
  );
};

export default Page;
