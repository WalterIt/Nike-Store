type PropsType = {
  footerAPI: {
    titles: {
      title: string;
    }[];
    links: {
      lists: Array<{
        link: string;
      }>;
    }[];
    lists: {
      link: string;
    }[];
  };
};

const Footer = ({ footerAPI: { titles, links } }: PropsType) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 ">
          {titles?.map((title, index) => (
            <div key={index} className="grid items-center ">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold ">
                {title.title}
              </h1>
            </div>
          ))}
          {links.map((lists, index) => (
            <ul key={index} className="grid items-center gap-1">
              {lists.map((link, index) => (
                <li key={index} className="text-sm sm:text-xs ">
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright<sup className="text-base font-bold">&copy;</sup> All
            Reserved Rights{" "}
            <span className="font-semibold">
              Walter Silva DEVELOPER {new Date().getFullYear()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
