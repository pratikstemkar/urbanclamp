import Benefits from "./_components/Benefits";
import AboutServiceProviders from "./_components/AboutServiceProviders";
import Questions from "./_components/Questions";
import GetStarted from "./_components/GetStarted";
import WhyChoose from "./_components/WhyChoose";
import HowItWorks from "./_components/HowItWorks";
import HeroElement from "./_components/HeroElement";

export default function Home() {
    return (
        <main className="max-w-7xl m-auto">
            <div className="flex-col space-y-10 lg:space-y-32 mt-10 lg:mt-32 mb-10 lg:mb-32 px-5 lg:px-0">
                <HeroElement />
                <HowItWorks />
                <WhyChoose />
                <Benefits />
                <AboutServiceProviders />
                <Questions />
                <GetStarted />
            </div>
        </main>
    );
}
