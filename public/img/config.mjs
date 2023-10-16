// config.mjs
// https://flowershow.app/docs/config

const config = {
  title: "home of Fe",
  description: "Дом Веры Валериан Борисыча",
  author: "Валериан Борисыч",
  logo: "/images/logo.svg",
  domain: "https://john.app/",
  // links to the pages you want to link to in the navbar and in the footer
  navLinks: [{ href: "/about", name: "About" }],

  //
  showSidebar: true,

  //
  showToc: true,

  //
  search: {
    provider: "kbar",
    kbarConfig: {
      defaultActions: [
        {
          id: "blog",
          name: "Blog",
          keywords: "content",
          perform: () => (window.location.pathname = "blog"),
        },
      ],
    },
  },

  //
  nextSeo: {
    title: "MyBlog blog post",
    description: "This is a blog about data management",
  },
};

const userConfig = {
  showEditLink: true,
  editLinkRoot: "https://github.com/flowershow/flowershow/edit/main/site",

  //
  navbarTitle: {
    text: "Your custom title here",
    logo: "/images/your-logo.svg", // optional
  },
};

export default config;
