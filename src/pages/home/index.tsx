import { FC } from "react";
import { HeroSection } from "../../Components/HeroSection";
import { Navbaar } from "../../Components/navigation";
import { Store } from "../../Components/Store";

export const Home: FC = () => {
    return (
        <>
            <Navbaar />
            <main className='w-screen bg-[#F6F7F9] z-0'>
                <HeroSection />
                <Store />
            </main>
        </>
    )
}