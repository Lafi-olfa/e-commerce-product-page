import "./App.css";
import Header from "./components/header";
import minus from "./assets/images/icon-minus.svg";
import plus from "./assets/images/icon-plus.svg";
import IconCart from "./assets/images/icon-cart.svg";
import next from "./assets/images/icon-next.svg";
import previous from "./assets/images/icon-previous.svg";
import { useState } from "react";
import { data } from "./data";
import Lightbox from "./components/lightbox";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Un seul état pour tout

  const [amount, setAmount] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  // Fonction pour cliquer sur les thumbnails
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePlus = () => {
    setAmount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setAmount((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  // const currentImage = data[currentIndex];

  const [showLightBox, setShowLightBox] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      {showLightBox && (
        <Lightbox
          products={data}
          currentIndex={currentIndex}
          setShowLightBox={setShowLightBox}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          handleThumbnailClick={handleThumbnailClick}
        />
      )}
      <section className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 px-8 pb-10 lg:grid-cols-2 lg:place-items-center lg:py-20">
        <article>
          {data.map((el, index) => (
            <div className={currentIndex === index ? "relative" : "hidden"}>
              <img
                src={el.mainImage}
                alt={`Product view ${currentIndex + 1}`}
                className="w-full rounded-2xl"
                onClick={() => setShowLightBox(true)}
              />

              <div className="lg:hidden">
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white p-5 shadow transition-colors hover:bg-gray-50"
                >
                  <img src={previous} alt="Previous image" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white p-5 shadow transition-colors hover:bg-gray-50"
                >
                  <img src={next} alt="Next image" />
                </button>
              </div>
            </div>
          ))}

          <ul className="mt-5 hidden flex-wrap items-center justify-start gap-5 lg:flex">
            {data.map((el, index) => (
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
        </article>
        <article className="">
          <h2 className="mb-10 inline-block bg-slate-100 px-2 py-1 text-sm font-bold tracking-wide text-orange-400 uppercase shadow">
            Sneaker Company
          </h2>

          <h1 className="mb-10 text-3xl font-bold text-slate-900 lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>

          <p className="mb-10 leading-relaxed text-slate-600">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-4">
            <ul className="flex items-center justify-center gap-2">
              <li className="text-2xl font-bold text-slate-900">$125.00</li>
              <li className="inline-block bg-orange-100 px-2 py-1 text-sm font-bold tracking-wide text-orange-400 shadow">
                50%
              </li>
            </ul>
            <p className="text-sm text-slate-600">
              <s>$250.00</s>
            </p>
          </div>

          <div className="mt-10 flex w-full flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3 shadow-md">
                <button
                  onClick={handleMinus}
                  className="rounded-full p-2 transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Decrease quantity"
                  disabled={amount <= 0}
                >
                  <img
                    src={minus}
                    alt="Decrease quantity"
                    className="h-4 w-4"
                  />
                </button>

                <span className="min-w-10 text-center text-lg font-semibold">
                  {amount}
                </span>

                <button
                  onClick={handlePlus}
                  className="rounded-full p-2 transition-colors hover:bg-slate-200"
                  aria-label="Increase quantity"
                >
                  <img src={plus} alt="Increase quantity" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <button className="flex w-full items-center justify-center gap-4 rounded-lg bg-orange-500 px-4 py-4 font-bold text-black shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]">
                <img src={IconCart} alt="Shopping cart" className="h-5 w-5" />
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
