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
  const [value, setValue] = useState(0);
  const currentItem = data[value];

  return (
    <section className="max-x-7xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
      <article>
        <img src={currentItem.image} alt="" />
        <ul className="flex flex-wrap items-center justify-start gap-3">
          {data.map((el, index) => (
            <li key={index} onClick={() => setValue(index)}>
              <img src={el.imageThumbnail} alt="" className="w-20" />
            </li>
          ))}
        </ul>
      </article>
      <article>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet deleniti
        ipsum aliquid deserunt. Blanditiis enim consequuntur, expedita earum
        error excepturi, repellat doloribus numquam ex atque velit neque labore
        fugiat dolore.s
      </article>
    </section>
  );
}
