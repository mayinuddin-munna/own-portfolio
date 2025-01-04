export const headerData = {
  phoneNumbers: ["+8801572394249", "+8801988545311"],
  email: "mayinuddin.munna@gmail.com",
  navigation: [
    { name: "About", href: "/#" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/#resume" },
    { name: "Contact", href: "/contact" },
    // { name: "Blog", href: "/blog" },
  ],

  socialLinks: [
    {
      bootstrapIcons: "bi bi-facebook",
      href: "https://www.facebook.com/profile.php?id=100073611545089",
    },
    {
      bootstrapIcons: "bi bi-twitter-x",
      href: "https://www.facebook.com/profile.php?id=100073611545089",
    },
    {
      bootstrapIcons: "bi bi-linkedin",
      href: "https://www.linkedin.com/in/mayinuddin-munna/",
    },
    {
      bootstrapIcons: "bi bi-github",
      href: "https://github.com/mayinuddin-munna",
    },
  ],
  logo: "portfolio",
};

export const heroData = {
  avatarSrc: "/images/munna.png",
  title:
    "Hi There! I'm Munna. A Professional Software Engineer based in Bangladesh",
  hireStatus: "Available for hire",
  socialLinks: [
    {
      bootstrapIcons: "bi bi-linkedin",
      href: "https://www.linkedin.com/in/mayinuddin-munna/",
    },
    {
      bootstrapIcons: "bi bi-github",
      href: "https://github.com/mayinuddin-munna",
    },
    {
      bootstrapIcons: "bi bi-twitter-x",
      href: "https://www.facebook.com/profile.php?id=100073611545089",
    },
  ],
};

export const servicesData = [
  {
    icon: "bi bi-globe",
    title: "Get in touch latest industry standard technology",
    href: "/contact",
  },
  {
    icon: "bi bi-bar-chart",
    title: "Communicate with others client and members",
    href: "/contact",
  },
  {
    title: "200+",
    description:
      "Solved 200+ problems by using C, C++, and JavaScript.",
  },
];

export const experienceData = {
  yearsOfExperience: "1.5+",
  description:
    "I am a enthusiastic Software Engineer with a B.Sc in CSE and 1.5 years of professional experience. Specializing in building dynamic and user-friendly websites, I excel at creating interactive interfaces using React.js and Next.js. I am eager to continue advancing my skills and contributing to innovative projects in the field.",
};

export const clientsData = [
  {
    logoLight: "/images/skills/javascript.png",
    logoDark: "/images/skills/javascript.png",
    url: "/",
  },
  {
    logoLight: "/images/skills/typescript.png",
    logoDark: "/images/skills/typescript.png",
    url: "/",
  },
  {
    logoLight: "/images/skills/react.png",
    logoDark: "/images/skills/react.png",
    url: "/",
  },
  {
    logoLight: "/images/skills/next.png",
    logoDark: "/images/skills/next.png",
    url: "/",
  },
  {
    logoLight: "/images/skills/mongoose.png",
    logoDark: "/images/skills/mongoose.png",
    url: "/",
  },
  {
    logoLight: "/images/skills/postgreSQL.png",
    logoDark: "/images/skills/postgreSQL.png",
    url: "/",
  },
];

export const testimonialsData = [
  {
    quote:
      "Successfully delivered multiple projects, ensuring high-quality, and developed Frontend functionality through implementing  projects.",
    author: "As a Frontend Developer",
  },
  {
    quote:
      "As a member of a developer team, I completed multiple projects to ensure quality and improve backend functionality using MVC and Module logic.",
    author: "As a Full Stack Developer",
  },
];

export const portfolioData = {
  title: "My Recent Works",
  filterCategories: ["Show All", "First", "Second"],
  projects: [
    {
      title: "Galaxy Meet",
      slug: "galaxy-meet",
      category: "Meeting Platform",
      excerpt:
        "Galaxy Meet is calling technology, you can foster seamless communication across borders, time zones, and platforms. Whether it's team meetings, client presentations, or international conferences, our calling solution ensures crystal-clear audio and smooth video connections. Say goodbye to geographical limitations and hello to productive and efficient interactions.",
      content:
        '<h2 class="fw-medium">No Worries, No Risk</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>If you fail to clear the test, no harm done. Your scores will remain private and will not be shared with any company. You will be allowed to retake the test after a stipulated number of days.</p> </div> <div class="col-12 col-lg-6"> <p>Company, Organization employee can create meeting.</p> </div> </div>',
      content2:
        '<h2 class="fw-medium">Features</h2><p>Online Meeting(Conduct online meetings with ease and convenience. Collaborate with team members, clients, or partners from anywhere in the world. Share presentations, discuss projects, and make decisions in real-time.)</p>',
      thumbnail: "/images/projects/galaxy1.png",
      projectLink: {
        label: "Galaxy Meet",
        url: "https://galaxy-meeting-app.web.app/",
      },
      images: ["/images/projects/galaxy1.png", "/images/projects/galaxy2.png"],
      video: {
        thumbnail: "/images/projects/galaxy3.png",
        // url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
    },
    {
      title: "Suit Brand Commerce",
      slug: "suit-brand-commerce",
      category: "E-commerce",
      excerpt:
        "your destination for high-quality ready-made suits and personalized fashion solutions. Established in 2004, we are dedicated to blending elegance with practicality in our lifestyle fashion. Whether you're looking for the perfect suit or need customization, we ensure you look and feel exceptional.",
      content:
        '<h2 class="fw-medium">Contact Us</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Established in 2004, SuitShop Ltd has been providing exceptional fashion solutions and customer service for over a decade. We look forward to assisting you with your fashion needs.</p> </div> <div class="col-12 col-lg-6"> <p>Thank you for choosing Sea Sky. We invite you to explore our collection and find the perfect items to celebrate your love for the ocean. Dive in and let the seas beauty inspire you every day.</p> </div> </div>',
      content2:
        '<h2 class="fw-medium">Customer Satisfaction</h2><p>Your satisfaction is our priority. We are committed to ensuring that every product and service meets the highest standards of quality. For any concerns or assistance, our dedicated team is here to help you.</p>',
      thumbnail: "/images/projects/project1.png",
      projectLink: {
        label: "Suit Shop",
        url: "https://suitshop.vercel.app/",
      },
      images: [
        "/images/projects/project1.png",
        "/images/projects/project11.png",
      ],
      video: {
        thumbnail: "/images/projects/project111.png",
        // url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
    },
    {
      title: "ID Daddy",
      slug: "id-daddy",
      category: "Generate Identity cards",
      excerpt:
        "Customizable Design. Digital and Printable Formats(Generate both digital versions (for mobile use) and printable formats (for physical cards)). Secure Features(Integration of security elements like watermarks, holographic overlays, and anti-tampering QR codes.). Convenience",
      content:
        '<h2 class="fw-medium">Purpose</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>School, Collage, Univeisuty student can make own ID card</p> </div> <div class="col-12 col-lg-6"> <p>Company, Organization employee can make their on Id card.</p> </div> </div>',
      content2:
        '<h2 class="fw-medium">For Educational Institutions, Companies and Organizations</h2><p>Assists organizations in issuing ID cards for employees with details like name, job title, and department. Enhances workplace security by distinguishing authorized personnel. Cards can feature QR codes or barcodes for building access control or attendance systems. </p>',
      thumbnail: "/images/projects/project3.png",
      projectLink: {
        label: "ID Daddy",
        url: "https://identity-card-client.vercel.app/",
      },
      images: ["/images/projects/project3.png", "/images/projects/project33.png"],
      video: {
        thumbnail: "/images/projects/project333.png",
        // url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
    },
    {
      title: "Charg Life",
      slug: "charg-life",
      category: "Ecommerce",
      excerpt:
        "Charg Life is a leading manufacturer and distributor of mobile accessories & electronic smart Gadgets. The company was founded in 2022 and is currently operating in Nikunjo 1. Charg Life has many brands; two renowned brands are Ugreen and Xpert. ",
      content:
        '<h2 class="fw-medium">Mission And Vision</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Our mission is to enhance the smart experience of our customers by providing high-quality, innovative, and stylish mobile accessories & gadget integrate with the devices. </p> </div> <div class="col-12 col-lg-6"> <p>We aim to be the go-to brand for mobile users seeking reliable, trendy, and cutting-edge accessories that enhance their mobile lifestyle.</p> </div> </div>',
      content2:
        '<h2 class="fw-medium">Try to make customer satisfaction</h2><p> Charg Life commitment to excellence is reflected in its extensive product line, which is constantly expanding and evolving to meet the changing demands of the market. TRAD/DNCC/005831/2022 is our E-trade License Number. With a strong focus on innovation and customer service, Ajwah Tech is poised to continue its success and growth in the competitive electronics industry.</p>',
      thumbnail: "/images/projects/project2.png",
      projectLink: {
        label: "Charg Life",
        url: "https://charg.vercel.app/",
      },
      images: ["/images/projects/project2.png", "/images/projects/project22.png"],
      video: {
        thumbnail: "/images/projects/project2.png",
        // url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
    },
  ],
};

export const blogData = [
  {
    title: "Blog Post Title 1",
    slug: "post-title-1",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
  {
    title: "Blog Post Title 2",
    slug: "post-title-2",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
  {
    title: "Blog Post Title 3",
    slug: "post-title-3",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
  {
    title: "Blog Post Title 4",
    slug: "post-title-4",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
  {
    title: "Blog Post Title 5",
    slug: "post-title-5",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
  {
    title: "Blog Post Title 6",
    slug: "post-title-6",
    date: "Aug 24",
    category: "Category",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    content:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><div class="row g-4"> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> <div class="col-12 col-lg-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> </div> </div>',
    content2:
      '<h2 class="fw-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    thumbnail: "/images/blog.png",
    author: {
      label: "Munna",
      url: "#",
    },
    images: ["/images/blog-single.png", "/images/blog-single.png"],
    video: {
      thumbnail: "/images/blog-wide.png",
      url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
    },
  },
];

export const skillsData = [
  { name: "Javascript", progress: 70 },
  { name: "Typescript", progress: 65 },
  { name: "React.js", progress: 80 },
  { name: "Next.js", progress: 70 },
  { name: "Mongoose", progress: 65 },
  { name: "PostgreSQL", progress: 60 },
];

export const resumeData = {
  experience: [
    {
      period: "Feb-24 - Present",
      title: "Full Stack Developer",
      company: "Amarlodge Ltd",
      description:
        "Amarlodge.com is a Bangladeshi online Booking & travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings.",
    },
    {
      period: "Nov-23 - Jan-24",
      title: "Fronend Developer",
      company: "Store Republic",
      description:
        "Transforming your vision into stunning websites at affordable prices. Our expert team desing and desons and develops custom solutions to enhance your online presence.",
    },
  ],
  education: [
    {
      degree: "Higher Secondary Certificate",
      institution: "Mohammad Kendriya Collage",
      icon: "bi bi-mortarboard",
    },
    {
      degree: "Bachelor of Computer Science",
      institution:
        "Institute of Science and Technology (IST), affiliated with National University, Bangladesh.",
      icon: "bi bi-mortarboard",
    },
  ],
};

export const slidingTextData = [
  "HTML5",
  "CSS3",
  "TailindCss",
  "Material UI",
  "Ant Design",
  "Javascript",
  "Typescript",
  "React.js",
  "Redux",
  "Next.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",
  "Prisma",
  "OOP",
  "Data Structure",
  "Git",
  "Jira",
  "Lucid",
  "Docker",
  "Postman",
  "MongoDB Comapss",
  "Axios",
  "Firebase",
  "Figma",
];

export const contactData = {
  phoneNumbers: ["+8801572394249", "+8801988545311"],
  emails: ["mayinuddin.munna@gmail.com"],
  address: ["Adabor, Dhaka 1207"],
};

export const mapData = {
  latitude: "51.513569",
  longitude: "-0.123443",
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Munna. All rights reserved.`,
  scrollToTopText: "Scroll to Top",
};
