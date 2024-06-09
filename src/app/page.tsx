import CarouselView from "@/components/carousel";
import { Button } from "@/components/ui/button";
import WordRotate from "@/components/WordRotate";
import { Mail, Sparkle, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative pb-10 pt-20">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-12 after:bg-gradient-to-t after:from-white after:to-transparent"></div>
        <div className="container flex max-w-4xl flex-col items-center">
          <h1 className="text-center text-3xl font-medium tracking-tight md:text-6xl">
            Understanding your
            <Sparkle className="mx-2 -mt-1 inline h-7 w-7 rounded-full bg-blue-500 fill-white text-white md:-mt-2 md:h-12 md:w-12" />
            vision, Amplifying
            <Star className="mx-2 inline h-7 w-7 rounded-full bg-red-500 fill-white text-white md:mt-2 md:h-12 md:w-12" />
            your{" "}
            <WordRotate words={["message", "brand", "success", "growth"]} />
          </h1>
          <p className="mt-6 max-w-lg text-center text-muted-foreground">
            We translate your vision into powerful digital experiences. Our
            expert team amplifies your brand and message, ensuring it resonates
            with your audience.
          </p>
          <Button className="mt-6">
            Send us a message <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="container overflow-hidden py-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">Case Studies</h2>
          <Button variant="link">View all</Button>
        </div>
        <div className="mt-4">
          <CarouselView />
        </div>
      </div>
    </>
  );
}
