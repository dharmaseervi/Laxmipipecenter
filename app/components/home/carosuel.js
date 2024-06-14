import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
    return (
      <div className="relative ">
          <Carousel className="" autoplay={{ autoplay: true }} transition={{ duration: 2 }}>
            <img
                src="/astral-banner1.jpg"
                alt="image 1"
                className="h-5/6 w-full object-cover"
            />
            <img
                src="/astral-banner2.jpg"
                alt="image 2"
                className="h-5/6 w-full object-cover"
            />
            <img
                src="/astral-banner3.jpg"
                alt="image 3"
                className="h-5/6 w-full object-cover"
            />
            <img
                src="/astral-banner4.jpg"
                alt="image 4"
                className="h-5/6 w-full object-cover"
            />
        </Carousel>
      </div>
    );
}