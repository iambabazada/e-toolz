import React from 'react'
import AboutHero from './hero/AboutHero'
import AboutSection from './aboutSection/AboutSection'
import Title from '@src/component/title/Title'
import Team from './team/Team'
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <main>
            <motion.div className="progress_bar" style={{ scaleX }} />
            <AboutHero />
            <AboutSection />
            <Title name="Our team" title="Introduce your team" desc="lorem impsum" />
            <Team />
        </main>
    )
}

export default About