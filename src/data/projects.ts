export enum Languages {
  JAVASCRIPT = 'Javascript',
  TYPESCRIPT = 'Typescript',
  PYTHON = 'Python',
  GO = 'Go',
}

export const projects = [
  {
    projectTitle: 'Capture the Flag challenges',
    projectDescription:
      'An aggregation of the Capture The Flag challenges and write-ups for CSICTF 2020',
    language: Languages.JAVASCRIPT,
    builtBy: 'Rohan Mukherjee',
    repoLink: 'https://github.com/csivitu/ctf-challenges',
  },
  {
    projectTitle: 'Gravitas Lasertag',
    projectDescription: "The Backend for this year's Gravitas Lasertag",
    language: Languages.JAVASCRIPT,
    builtBy: 'Yug Oswal',
    repoLink: 'https://github.com/csivitu/lasertag-gravitas-csi',
  },
  {
    projectTitle: 'Kustom',
    projectDescription: 'Customizable Form Builder - Forms on steroids',
    language: Languages.TYPESCRIPT,
    builtBy: 'Keshav Aneja',
    repoLink: 'https://kustom.cc',
  },
  {
    projectTitle: 'Code Tester',
    projectDescription:
      'A CLI designed to test user code against user defined inputs',
    language: Languages.TYPESCRIPT,
    builtBy: 'Ashikka Gupta, Rohan Mukherjee, Rahil Kabani',
    repoLink: 'https://github.com/csivitu/code-executor',
  },
  {
    projectTitle: 'Classic Arcade Games',
    projectDescription:
      'A number of classic Games written in a myriad of languages',
    language: Languages.PYTHON,
    builtBy: 'Everyone',
    repoLink: 'https://github.com/csivitu/ArcadeGames',
  },
  // @jrs : Remove our names, and add the ccs tech jrs name
  {
    projectTitle: 'Core Committee Selection',
    projectDescription: 'The Website you are looking at',
    language: Languages.TYPESCRIPT,
    builtBy:
      'Nidhi Karva, Tejas Ghatte, Ishita Babar, Harsh Shah, Neeladri Mullick, Aditi Saxena, Shreeyash Ugale, Harsat Ponnusamy, Adhavan',
    repoLink: 'https://github.com/csivitu/CCS-Frontend-2022',
  },
  {
    projectTitle: 'Evie',
    projectDescription: 'A Calendar website made for VIT Club events.',
    language: Languages.JAVASCRIPT,
    builtBy: 'Sanjay Kumar Baskaran, Mannan Goyal',
    repoLink: 'https://github.com/csivitu/Evie-Frontend',
  },
]
