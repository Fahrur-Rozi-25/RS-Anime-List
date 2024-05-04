import { AnimeResponse } from "@/app/services/api-services";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }: any) => {
  const anime = await AnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="p-4">
        <h3 className="text-color-primary text-xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>


      <div className="p-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>PERINGKAT</h3>
            <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>SCORE</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>ANGGOTA</h3>
            <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>EPISODE</h3>
            <p>{anime.data.episodes}</p>
        </div>

      </div>
      <div className="p-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-lg">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youTubeId={anime.data.trailer.youtube_id}/>
      </div>
    </>
  );
};

export default page;
