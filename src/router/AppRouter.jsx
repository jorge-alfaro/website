import {CoverPage} from "../components/ui/CoverPage.jsx";
import {MainInfoScreen} from "../components/ui/MainInfoScreen.jsx";
import {ProjectsScreen} from "../components/projects/ProjectsScreen.jsx";
import {Phrase} from "../components/ui/Phrase.jsx";
import {FooterInfo} from "../components/ui/FooterInfo.jsx";
import {ParticleBackground} from "../components/particles/ParticleBackground.jsx";

export const AppRouter = () => {
    return (
        <>
            <ParticleBackground/>
            <CoverPage/>
            <div className="p-wallpaper">
                <MainInfoScreen/>
                <ProjectsScreen/>
                <Phrase/>
                <FooterInfo/>
            </div>
        </>
    )
};
