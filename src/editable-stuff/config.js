// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sanath",
  middleName: "",
  lastName: "Acharya",
  message: "Welcome to my digital corner of the world.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sanathkacharya/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sanath.acharya/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sanathacharya/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sanathacharya/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/sanath_acharya/",
    },
  ],
};

// ABOUT SECTION

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sanathacharya.png"),
  imageSize: 375,
  message:
    "Hello there! I'm Sanath Acharya, a curious mind with a passion for turning ideas into reality.\n\n" +
    "What started as a childhood fascination with the blinking cursor on my first computer has evolved into a fulfilling " +
    "career in technology. With over half a decade of hands-on experience in numerous technology, I've had the privilege " +
    "of working with diverse teams to build innovative solutions that solve real-world problems.\n\n" +
    "When I'm not immersed in lines of code, you can find me exploring the great outdoors, experimenting with new recipes " +
    "in the kitchen, or playing badminton or just binge watching a show.\n\n" +
    "I believe in living a balanced life that fuels both my professional and personal passions.",
  resume: "https://drive.google.com/file/d/1h30AfQxLBuwLmiXE6qmluUX0VILvArZq",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sanathkacharya", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/sanathacharya.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/sanathacharya.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm Sanath Acharya, the creator of this website built to satisfy my curisoty and passion for exploring latest technologies.\n\
    Through this project, I've delved into the backend, frontend, and embraced newer innovations,\n\
    all in pursuit of expanding my knowledge and skills in website management.\nJoin me in this exciting journey of discovery and innovation.\n\
    You can reach out to me on",
  email: "sanathacharya1996@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
const blog = {
  show: false,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
