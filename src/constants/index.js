import {
instagram,
facebook,
twitter,
linkedin,
tiktok,
github,
} from "../assets";

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      merkabahScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      demandLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      teslaLogoPosition: isSmall ? [-3, 4, 0] : isMobile ? [-5, 4, 0] : isTablet ? [-5, 4, 0] : [-10, 1, 0],
      solarMaxLogoPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
      sunrunLogoPosition: isSmall ? [4, -5, -20] : isMobile ? [7, -5, -25] : isTablet ? [8, -5, -15] : [8, -5, -15],
    };
  };


  export const socialMedia = [
    {
      id: "social-media-6",
      icon: github,
      link: "https://github.com/PortraitstoneLabs/hearthenergy",
    },
  
  ];

  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];