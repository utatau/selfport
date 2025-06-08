'use client'
import ChromaGrid from "@/app/components/ChromaGrid/ChromaGrid";
import Particles from "@/app/components/Particles/Particles";
import StarBorder from "@/app/components/StarBorder/StarBorder";
export default function Laravel() {
    const kembali = () => {
        window.location.href = '/'
    }
    const items = [
        {
            image: "https://www.pngkey.com/png/detail/667-6673683_e-commerce-icon-png.png",
            title: "Pancong Abidzar",
            handle: "E-Commerce",
            subtitle: "Laract With Midtrans",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
            url: "https://github.com/sarahjohnson"
        }
    ];
    return (
        <div className="overflow-x-hidden min-h-screen bg-black">
            <div className="container mx-auto mt-5">
                <div className="rounded-3xl bg-[#301a3f] p-2 shadow-2xl shadow-[#FF6EC7] flex justify-around">
                    <StarBorder
                        as="button"
                        className="custom-class bg-[#FF6EC7] shadow-[#FF6EC7] cursor-pointer"
                        color="cyan"
                        speed="5s"

                    >
                        My Project
                    </StarBorder>
                    <StarBorder
                        as="button"
                        className="custom-class bg-[#FF6EC7] shadow-[#FF6EC7] cursor-pointer"
                        color="cyan"
                        speed="5s"
                        onClick={kembali}
                    >
                        Kembali
                    </StarBorder>
                </div>
            </div>
            <div className="right-0 left-0 bottom-0 top-0 absolute">
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
            <div className="container mx-auto h-screen flex">
                <div className="mx-auto self-center">
                    <ChromaGrid
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
            {/* <div className="container mx-auto">
                <div className="flex justify-end">
                    <StarBorder
                        as="button"
                        className="custom-class bg-[#FF6EC7] shadow-[#FF6EC7]"
                        color="cyan"
                        speed="5s"
                    >
                        Kembali
                    </StarBorder>
                </div>
            </div> */}
        </div>
    )
}