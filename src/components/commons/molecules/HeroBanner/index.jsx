const HeroBanner = () => {
  return (
    <>
      <div className="relative h-96 bg-[url('images/bg-banner.jpg')] bg-cover bg-[center_-100px] max-md:bg-[center_center] flex flex-col justify-center items-center opacity-80">
          <div className="absolute inset-0 bg-black/85" />
          <div className="w-[60%] z-10 max-md:w-[75%] text-white text-center">
            <h3 className="text-6xl max-md:text-3xl font-inter font-bold mb-2 max-md:mb-1">Produk Limited Edition</h3>
            <p className="text-xl max-md:text-[17px] font-roboto font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati ad beatae praesentium, necessitatibus harum exercitationem blanditiis</p>
          </div>
      </div>
    </>
  )
}

export default HeroBanner;

