import Link from "next/link"
import InputSearch from "./InputSearch"

const NavigationBar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-4">
        <Link href={"/"} className="font-bold text-white text-xl">RS ANIME LIST</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default NavigationBar
