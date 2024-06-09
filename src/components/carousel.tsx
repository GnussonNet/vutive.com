"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CarouselView = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="relative">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link
              href="#"
              className="group flex h-full cursor-pointer flex-col gap-4 rounded-lg border-2 p-4 outline-offset-0 outline-black hover:border-black"
            >
              <div className="flex justify-between">
                <p className="uppercase">Lorem</p>
                <p>Lorem ipsum</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Lorem1</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, corporis?
                </p>
              </div>
              <p className="mt-auto flex items-center p-0 group-focus-within:underline group-hover:underline">
                View Case Study
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-focus-within:translate-x-1 group-hover:translate-x-1" />
              </p>
            </Link>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link
              href="#"
              className="group flex h-full cursor-pointer flex-col gap-4 rounded-lg border-2 p-4 outline-offset-0 outline-black hover:border-black"
            >
              <div className="flex justify-between">
                <p className="uppercase">Lorem</p>
                <p>Lorem ipsum</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Lorem2</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, corporis?
                </p>
              </div>
              <p className="mt-auto flex items-center p-0 group-focus-within:underline group-hover:underline">
                View Case Study
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-focus-within:translate-x-1 group-hover:translate-x-1" />
              </p>
            </Link>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link
              href="#"
              className="group flex h-full cursor-pointer flex-col gap-4 rounded-lg border-2 p-4 outline-offset-0 outline-black hover:border-black"
            >
              <div className="flex justify-between">
                <p className="uppercase">Lorem</p>
                <p>Lorem ipsum</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Lorem3</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, corporis?
                </p>
              </div>
              <p className="mt-auto flex items-center p-0 group-focus-within:underline group-hover:underline">
                View Case Study
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-focus-within:translate-x-1 group-hover:translate-x-1" />
              </p>
            </Link>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link
              href="#"
              className="group flex h-full cursor-pointer flex-col gap-4 rounded-lg border-2 p-4 outline-offset-0 outline-black hover:border-black"
            >
              <div className="flex justify-between">
                <p className="uppercase">Lorem</p>
                <p>Lorem ipsum</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-medium">Lorem4</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, corporis?
                </p>
              </div>
              <p className="mt-auto flex items-center p-0 group-focus-within:underline group-hover:underline">
                View Case Study
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-focus-within:translate-x-1 group-hover:translate-x-1" />
              </p>
            </Link>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Link
              href="#"
              className="group flex h-full cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-4 outline-offset-0 outline-black hover:border-black"
            >
              <p className="flex items-center p-0 group-focus-within:underline group-hover:underline">
                View All Case Studies
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-focus-within:translate-x-1 group-hover:translate-x-1" />
              </p>
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex" />
        <CarouselNext className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:flex" />
      </div>
      <div className="flex items-center justify-between gap-12 py-4 lg:justify-center">
        <CarouselPrevious className="flex lg:hidden" />
        <div className="text-center text-sm text-muted-foreground">
          Case {current} of {count}
        </div>
        <CarouselNext className="flex lg:hidden" />
      </div>
    </Carousel>
  );
};

export default CarouselView;
