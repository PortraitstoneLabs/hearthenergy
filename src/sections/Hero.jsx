import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';


import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { Merkabah } from '../components/Merkabah.jsx';
import TeslaLogo from '../components/TeslaLogo.jsx';
import SunrunLogo from '../components/SunrunLogo.jsx';
import DemandLogo from '../components/DemandLogo.jsx';
import SolarMaxLogo from '../components/SolarMaxLogo.jsx';
import { Hearth } from '../components/Hearth.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-black text-center font-Roboto">
          Welcome to Hearth Energy <span className="spinning-hand">♻️</span>
        </p>
        <p className="hero_tag text-gray_gradient">Auditing the Solar Industry</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
            {/* <Merkabah scale={sizes.merkabahScale} position={sizes.merkabaPosition} rotation={[0.1, -Math.PI, 0]} /> */}
              <Hearth scale={sizes.hearthScale} position={sizes.hearthPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <SolarMaxLogo position={sizes.solarMaxLogoPosition} />
              <DemandLogo position={sizes.demandLogoPosition} />
              <TeslaLogo position={sizes.teslaLogoPosition} />
              <SunrunLogo position={sizes.sunrunLogoPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[100, 10, 10]} intensity={5.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Now, let’s identify ways to reduce friction and move towards energy independence in the most efficient way:" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;