'use client'
import React from "react";
import RotatingText from "./components/RotatingText/RotatingText";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import BlurText from "./components/BlurText/BlurText";
import Particles from "./components/Particles/Particles";
import GooeyNav from "./components/GooeyNav/GooeyNav";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import StarBorder from "./components/StarBorder/StarBorder";
import FadeContent from "./components/FadeContent/FadeContent";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import PixelTransition from "./components/PixelTransition/PixelTransition";
import CardSwap, { Card } from './components/CardSwap/CardSwap'
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#project" },
  ];
  const router = useRouter();
  return (
    <div className="overflow-x-hidden lg:min-h-screen sm:min-h-36 bg-black overflow-y-hidden">
      <div className="right-0 left-0 bottom-0 top-0 absolute" id="home">
        <Particles
          particleColors={['#FF6EC7', '#4B0082']}
          particleCount={500}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={140}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <div className="container mx-auto mt-4">
        <div className="flex justify-around shadow-2xl p-2 rounded-full">
          <h1 className="text-2xl font-semibold flex shadow-2xs text-white">Mahardika</h1>
          <div className="shadow-amber-100 bg-auto">
            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-12 sm:ml-3">
          <div className="col-span-6">
            <div className="flex flex-col h-screen lg:justify-center sm:justify-start sm:mt-10 ">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="elastic.out(1,0.3)"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <h1 className="text-white font-bold text-7xl shadow-2xl">Hi, i'm Putra Mahardika</h1>
              </AnimatedContent>
              <div className="flex gap-2 mt-5">
                <h1 className="font-bold text-2xl gap-4 text-white self-center">I'm Ready for Jobs</h1>
                <RotatingText
                  texts={['Web Development', 'DevOps', 'Software Engineer', 'Backend Engineer']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black text-2xl  font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg flex inline-flex"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 inline-flex"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3200}
                />
              </div>
              <div className="mt-5 relative h-1.5 -p-3">
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="cyan"
                  speed="5s"
                >
                  <a href="#about" className="font-bold hover:text-amber-200">About me</a>
                </StarBorder>
              </div>
              <div className="flex flex-row ml-40 gap-4 relative">
                <a href="https://instagram.com/mhrkdaa._">
                  <Image
                    src="/assets/icon/instagram.svg"
                    alt="Instagram"
                    className="bg-red-600 w-10 rounded-2xl self-start"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://github.com/utatau">
                  <Image src="/assets/icon/github.svg"
                    width={30}
                    height={30}
                    alt="Github"
                    className="bg-white w-10 rounded-2xl self-start" />
                </a>
                <a href="https://linkedin.com/in/putra-mahardika-bb7591298/">
                  <Image src="/assets/icon/linkedin.svg"
                    width={30}
                    height={30}
                    alt="Linkedin"
                    className="bg-blue-300 w-10 rounded-2xl self-start cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-6 ">
            <div className="lg:flex lg:flex-col h-screen justify-center sm:hidden">
              <div className="self-center">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                  <TiltedCard
                    imageSrc="https://avatars.worldcubeassociation.org/uploads/user/avatar/2018MAHA07/1600837185.jpg"
                    altText="Putra Mahardika"
                    captionText="Putra Mahardika"
                    containerHeight="500px"
                    containerWidth="500px"
                    imageHeight="500px"
                    imageWidth="600px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p></p>
                    }
                  />
                </FadeContent>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="container mx-auto" >
        <div className="text-white font-bold flex justify-center mt-10" id="about">
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-6 text-white">
            <div className="col-span-3 ">
              <div className="flex justify-center mt-20 h-180">
                <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0}>
                  <PixelTransition
                    firstContent={
                      <img
                        src="/assets/png.png"
                        alt="Fullstack Developer"
                        className="object-center w-full"
                      />
                    }
                    secondContent={
                      <img
                        src="/assets/2.jpg"
                        alt="Fullstack Developer"
                        className="object-center w-full h-full "
                      />
                    }
                    gridSize={12}
                    pixelColor='#4B0082'
                    animationStepDuration={0.8}
                    className="custom-pixel-card border-2 hover:shadow-[#4B0082] shadow-2xl"
                  />
                </FadeContent>
              </div>
            </div>
            <div className="col-span-3 h-screen">
              <BlurText
                text="Saya adalah mahasiswa semester 4 Program Studi Teknik Informatika di Universitas Bina Insani.
                    Saya senang belajar hal-hal baru, mengembangkan keterampilan teknis, serta mencoba tantangan baru melalui proyek pribadi maupun tugas perkuliahan.
                    Bagi saya, belajar adalah proses berkelanjutan, dan dunia teknologi selalu menawarkan ruang untuk tumbuh dan berinovasi."
                delay={120}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 font-semibold mt-20 justify-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-screen " id="project">
        <BlurText
          text="My Project"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl font-bold mb-9 text-white flex justify-center"
        />
        <div className="grid grid-cols-6">
          <div className="col-span-3 h-screen">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={30}
              blurStrength={10}
              textClassName="text-white sm:m-10 sm:text-2xl"
            >
              ini adalah beberapa project saya dengan framework berbeda!
            </ScrollReveal>
          </div>
          <div className="col-span-3 lg:my-100 sm:my-80">
            <div className="h-auto relative">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
                onCardClick={() => { }}
              >
                <Card className="hover:bg-blue-800 hover:border-4">
                  <h3 className="text-white text-2xl  shadow-2xl m-5">ReactJs</h3>
                  <div className="flex h-full my-15 justify-center">
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Reactjs" className="h-50 cursor-pointer" onClick={() => router.push('/Project/Laravel')} />
                  </div>
                </Card>
                <Card className="hover:bg-red-800 hover:border-4 ">
                  <h3 className="text-white text-2xl m-5">Laravel</h3>
                  <div className="flex h-full justify-center my-15">
                    <img src="https://brandlogos.net/wp-content/uploads/2022/01/laravel-logo-brandlogo.net_.png" alt="" className="h-50 cursor-pointer" onClick={() => router.push('/Project/Laravel')} />
                  </div>
                </Card>
                <Card className="hover:bg-green-800 hover:border-4">
                  <h3 className="text-white text-2xl m-5">NodeJs</h3>
                  <div className="flex h-full justify-center my-15" >
                    <img src="https://static.vecteezy.com/system/resources/previews/051/336/396/non_2x/node-js-transparent-logo-free-png.png" alt="NodeJs" className="h-50 cursor-pointer" onClick={() => router.push('/Project/NodeJs')} />
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
