import {useEffect, useState} from "react"
import Particles, {initParticlesEngine} from "@tsparticles/react"
import {loadSlim} from "@tsparticles/slim"
import config from './config.js'


export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
            init && <Particles
            id="particles-js"
            options={config}/>
    )
}
