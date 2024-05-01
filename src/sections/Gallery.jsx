import { galleryImages } from "../assets/gallery"

const Gallery = () => {
  return (
    <section className="padding-x padding-y w-full max-tablet:scroll-mt-[45px]" id="gallery">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-10  items-start sm:items-end">
            <div>
                <p className="text-[0.75rem] sm:text-sm opacity-50">~ Hannatu Halan Foundation</p>
                <h1 className="font-bold font-outfit text-5xl text-dark-txt">Gallery</h1>
            </div>

            <p className="font-poppins font-light opacity-50 max-sm:text-sm">Explore our memories, <br /> {"places we've beeen and lives we've touched."}</p>
        </div>
        <div className="mt-8 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            {
                galleryImages.map((image, index)=>(
                    <img key={index} src={image.imgURL} alt="" loading="lazy"/>
                ))
            }
        </div>
    </section>
  )
}

export default Gallery