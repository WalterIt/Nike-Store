import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { truncate } from "lodash";

type PropsType = {
  story: {
    title: string;
    news: {
      img: string;
      clip: string;
      like: number;
      time: string;
      title: string;
      by: string;
      text: string;
      url: string;
      source: string;
      btn: string;
    }[];
  };
};

const Stories = ({ story: { title, news } }: PropsType) => {
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7  ">
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            type: "loop",
            rewind: true,
            keyboard: "global",
            gap: "1rem",
            pagination: false,
            padding: "2rem",
            breakpoints: {
              1200: { perPage: 3 },
              991: { perPage: 2.3 },
              768: { perPage: 2 },
              500: { perPage: 1.3 },
              425: { perPage: 1 },
            },
          }}
        >
          {news.map((item, index) => (
            <SplideSlide key={index} className="mb-0.5">
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
                <div className="flex items-center justify-center  ">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg "
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4 ">
                  <div className="flex items-center gap-1">
                    <span className="icon-style text-red-500 w-5 h-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold ">{item.like}</span>
                  </div>
                  <div className="flex items-center  gap-0.5">
                    <span className="icon-style w-4 h-4 text-black mr-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-xs font-bold mt-2">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <span className="icon-style text-blue-600 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-xs font-bold mt-1 text-blue-600">
                      {item.by}
                    </span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4 ">
                  <h1 className="text-base font-semibold lg:text-sm  ">
                    {item.title}
                  </h1>
                  <p className="text-sm text-justify lg:text-xs">
                    {truncate(item.text, { length: 175 })}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 w-full ">
                  <a
                    href={item.url}
                    target="_blank"
                    role={"button"}
                    className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100  py-1.5 button-theme "
                  >
                    {item.btn}
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
