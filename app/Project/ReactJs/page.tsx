'use client'
import ChromaGrid from "@/app/components/ChromaGrid/ChromaGrid";
import Particles from "@/app/components/Particles/Particles";
import StarBorder from "@/app/components/StarBorder/StarBorder";
export default function ReactJs() {
    const kembali = () => {
        window.location.href = '/'
    }
    const items = [
        {
            image: "https://training-datalab.com/en/author/chatbot-ollama/avatar_hued5a0cfd5bfe4c2e1ac5ef76c665066b_131443_270x270_fill_lanczos_center_3.png",
            title: "ChatBot Ollama",
            handle: "Local AI",
            subtitle: "NextJs",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
            url: "https://github.com/utatau/LOL"
        },
        {
            image: "https://seeklogo.com/images/E/e-commerce-concept-logo-5146F23CC5-seeklogo.com.png",
            title: "E-Commerce",
            handle: "React Expo",
            subtitle: "E-Commerce 60% -> done",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
            url: "https://github.com/utatau/bot-aing"
        },
        {
            image: "https://i0.wp.com/techtrantor.com/wp-content/uploads/2025/02/image-10.png?resize=678%2C678&ssl=1",
            title: "ChatBot",
            handle: "Local AI",
            subtitle: "NextJs",
            borderColor: "#3B82F6",
            gradient: "linear-gradient(145deg, #3B82F6, #000)",
            url: "https://github.com/utatau/bot-aing"
        },
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
        </div>
    )
}