import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import closeIcon from "../assets/images/icon-close.svg";

interface Product {
  id: number;
  mainImage: string;
  thumbnail: string;
}

interface ProductProps {
  products: Product[];
  currentIndex: number;
  setShowLightBox: (show: boolean) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  handleThumbnailClick: (a: number) => void;
}

export default function Lightbox({
  products,
  currentIndex,
  setShowLightBox,
  nextSlide,
  prevSlide,
  handleThumbnailClick,
}: ProductProps) {
  const closeMenu = () => {
    setShowLightBox(false);
  };
  return (
    <article className="absolute top-0 right-0 bottom-0 left-0 z-50 bg-black/70">
      <div className="relative top-0 right-1.5 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="relative mx-auto max-w-4xl">
          <button
            onClick={closeMenu}
            className="absolute -top-1/7 -right-3 z-10 cursor-pointer rounded-full bg-transparent p-3"
            aria-label="Close lightbox"
          >
            <img
              src={closeIcon}
              alt="Close"
              className="h-8 w-8 bg-transparent fill-amber-800"
            />
          </button>

          {products.map((el, index) => (
            <div className={currentIndex === index ? "relative" : "hidden"}>
              <img
                src={el.mainImage}
                alt={`Product view ${currentIndex + 1}`}
                className="h-96 w-96 rounded-2xl"
                onClick={() => setShowLightBox(true)}
              />

              <div className="">
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 translate-x-3 -translate-y-1/2 rounded-full bg-white p-5 shadow transition-colors hover:bg-gray-50 md:-translate-x-7"
                >
                  <img src={previous} alt="Previous image" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white p-5 shadow transition-colors hover:bg-gray-50 md:-right-5"
                >
                  <img src={next} alt="Next image" />
                </button>
              </div>
            </div>
          ))}

          <ul className="mt-5 hidden flex-wrap items-center justify-start gap-5 lg:flex">
            {products.map((el, index) => (
              <li
                key={el.id}
                onClick={() => handleThumbnailClick(index)}
                className={` ${
                  index === currentIndex
                    ? "border-2 border-orange-400 opacity-80"
                    : "border-2 border-transparent"
                } cursor-pointer overflow-hidden rounded-2xl transition-opacity hover:opacity-80`}
              >
                <img
                  src={el.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 rounded-2xl transition-transform hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
