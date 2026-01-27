export interface Project {
  title: string;
  slug: string;
  description: string;
  date: string;
  img?: string;
  projecturl: string;
}

export const projects: Project[] = [
  {
    title: "Pinny.co",
    slug: "pinny-co",
    description: "Pinny.co",
    date: "2024-10-01",
    img: undefined,
    projecturl: "https://pinny.co",
  },
  {
    title: "Framebird.io",
    slug: "framebird-io",
    description: "Framebird.io",
    date: "2023-06-01",
    img: undefined,
    projecturl: "https://framebird.io",
  },
  {
    title: "Geoist",
    slug: "geoist",
    description: "Keep track of where you've been in the World",
    date: "2019-03-01",
    img: "geoist.png",
    projecturl: "https://geoist.app",
  },
  {
    title: "Shutter.cc",
    slug: "shutter-cc",
    description: "Get your Camera Shutter Count",
    date: "2018-05-01",
    img: "shuttercc.png",
    projecturl: "https://shutter.cc",
  },
  {
    title: "Coffeemonkey.de",
    slug: "coffeemonkey",
    description: "Get a free Coffee by watching a sponsored video",
    date: "2018-02-01",
    img: "coffeemonkey.png",
    projecturl: "http://coffeemonkey.de",
  },
  {
    title: "Skygarage.de",
    slug: "skygarage",
    description: "Drone Aerial Images",
    date: "2017-05-01",
    img: "skygarage.jpg",
    projecturl: "https://skygarage.de",
  },
];
