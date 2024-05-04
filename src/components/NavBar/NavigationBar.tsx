import Link from "next/link"
import InputSearch from "./InputSearch"

const NavigationBar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-4">
        <Link href={"/"} className="font-bold text-xl">RS ANIME-LIST</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default NavigationBar
