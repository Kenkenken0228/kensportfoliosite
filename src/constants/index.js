import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    figma,
    starbucks,
    tesla,
    threeDs,
    Ae,
    Ai,
    Au,
    Pr,
    Ps,
    Blender,
    unity,
    DaVinciResolve,
    carrentapp,
    redesign,
    FYP,
    unitygame,
    watch,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "web development",
      icon: web,
    },
    {
      title: "3D modeling",
      icon: mobile,
    },
    {
      title: "UI design",
      icon: backend,
    },
    {
      title: "Programming",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "threeDs",
      icon: threeDs,
    },
    {
      name: "Ae",
      icon: Ae,
    },
    {
      name: "Ai",
      icon: Ai,
    },
    {
      name: "Au",
      icon: Au,
    },
    {
      name: "Pr",
      icon: Pr,
    },
    {
      name: "Ps",
      icon: Ps,
    },
    {
      name: "Blender",
      icon: Blender,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "DaVinciResolve",
      icon: DaVinciResolve,
    },
  ];
  
  const experiences = [
    {
      title: "IA, Video Shooting",
      company_name: "ITCC",
      icon: starbucks,
      iconBg: "#6B799E",
      date: "June 2022 - September 2022",
      points: [
        "Shoot promotional videos for other ive campus.",
        "Planning how and what to shoot.",
        "video editing and post-production."
      ],
    },
    {
      title: "Final year project",
      company_name: "IVE",
      icon: tesla,
      iconBg: "#6B799E",
      date: "September 2022 - June 2023",
      points: [
        "Developing a VR Chinese Temple.",
        "Design and model the chinese temple using 3dmax, Blender.",
        "Coding the function with c#."
      ],
    },
    

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mobile app UI design",
      description:
        "This is a car rent mobile app ui designed for rental cars, also have the function of ordering snacks and weather report.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Ps",
          color: "green-text-gradient",
        },
      
      ],
      image: carrentapp,
      source_code_link: "https://www.figma.com/proto/2NsNQI1wjzNDqjOptQXU5g/ea_app_design?page-id=0%3A1&type=design&node-id=58-1038&viewport=718%2C477%2C1&scaling=scale-down&starting-point-node-id=5%3A127&show-proto-sidebar=1",
    },
    {
      name: "App UI Redesign",
      description:
        "This is the ui redesign for the shopping app, it simplify the ui make it easy to use and watch.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Ps",
          color: "green-text-gradient",
        },

      ],
      image: redesign,
      source_code_link: "https://www.figma.com/proto/FQFRCdyxtxchvOy256sDcR/4164AS?page-id=0%3A1&type=design&node-id=4-48&viewport=202%2C321%2C0.25&scaling=scale-down&starting-point-node-id=4%3A48&show-proto-sidebar=1",
    },
    {
      name: "Final Year Project",
      description:
        "This is our final year project, we make the VR chinese temple at this project, player can experience worshiping God through VR.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "3D modeling",
          color: "pink-text-gradient",
        },
      ],
      image: FYP,
      source_code_link: "https://large-situation-9e5.notion.site/FYP-Group-1-565cfe18162444c6807ef4ce9b09c656",
    },
        {
      name: "Unity game",
      description:
        "This is a shooting game make at the unity, the monster in the game can detect the player and attack. Player can shoot the the monster and kill them.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "3D modeling",
          color: "pink-text-gradient",
        },
      ],
      image: unitygame,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };