import mainImage from "../assets/images/image-product-1.jpg";
import mainImageThumbail from "../assets/images/image-product-1-thumbnail.jpg";
//
import mainImage2 from "../assets/images/image-product-2.jpg";
import mainImageThumbail2 from "../assets/images/image-product-2-thumbnail.jpg";
//
import mainImage3 from "../assets/images/image-product-3.jpg";
import mainImageThumbail3 from "../assets/images/image-product-3-thumbnail.jpg";
//
import mainImage4 from "../assets/images/image-product-4.jpg";
import mainImageThumbail4 from "../assets/images/image-product-4-thumbnail.jpg";
//
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import IconCart from "../assets/images/icon-cart.svg";

import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: mainImage,
    imageThumbnail: mainImageThumbail,
  },
  {
    id: 2,
    image: mainImage2,
    imageThumbnail: mainImageThumbail2,
  },
  {
    id: 3,
    image: mainImage3,
    imageThumbnail: mainImageThumbail3,
  },
  {
    id: 4,
    image: mainImage4,
    imageThumbnail: mainImageThumbail4,
  },
];
export default function Cards() {
  const [value, setValue] = useState(1);
  const currentItem = data[value];
  const [amount, setAmount] = useState(0);

  const handleNextSlide = () => {
    setAmount((prev) => prev + 1);
  };
  const handlePrevSlide = () => {
    setAmount((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  return (
    <section className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 px-8 pb-10 lg:grid-cols-2">
      <article>
        <div className="relative">
          <img src={currentItem.image} alt="" className="w-full rounded-2xl" />
          <ul>
            <li>
              <button className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white p-5 shadow">
                {" "}
                <img src={previous} alt="" />
              </button>
            </li>
            <li>
              <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white p-5 shadow">
                {" "}
                <img src={next} alt="" />
              </button>
            </li>
          </ul>
        </div>
        <ul className="mt-5 hidden flex-wrap items-center justify-start gap-5 lg:flex">
          {data.map((el, index) => (
            <li
              key={index}
              onClick={() => setValue(index)}
              className={`${index === value && "border-2 border-orange-400 opacity-80"} cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent`}
            >
              <img
                src={el.imageThumbnail}
                alt=""
                className="w-20 rounded-2xl"
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
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-wrap items-center justify-between">
          <ul className="flex items-center justify-center gap-5">
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
          {/*  */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3 shadow-md">
              <button
                onClick={handlePrevSlide}
                className="rounded-full p-2 transition-colors hover:bg-slate-200"
                aria-label="Decrease quantity"
                disabled={amount <= 1}
              >
                <img src={minus} alt="Decrease quantity" className="h-4 w-4" />
              </button>

              <span className="min-w-10 text-center text-lg font-semibold">
                {amount}
              </span>

              <button
                onClick={handleNextSlide}
                className="rounded-full p-2 transition-colors hover:bg-slate-200"
                aria-label="Increase quantity"
              >
                <img src={plus} alt="Increase quantity" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* add to cart */}
          <div className="w-full lg:w-1/2">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-orange-500 px-6 py-3 font-bold text-white shadow-md transition-all duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-[0.98]">
              <img src={IconCart} alt="Shopping cart" className="h-5 w-5" />
              Add to cart
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
