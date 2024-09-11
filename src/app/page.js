import HomeHeader from "@/components/HomeHeader"
import HomeSearch from "@/components/HomeSearch"
import Image from "next/image"

const page = () => {
  return (
    <>
    <HomeHeader/>
    <div className="flex flex-col items-center mt-24">
      <Image src={"https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png"}
      alt="Google Logo"
      width={300}
      height={100}
      priority
      style={{width:"auto"}}
      />
      <HomeSearch/>
    </div>
    </>
  )
}

export default page
