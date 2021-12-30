import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Home: NextPage = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const [count, setCount] = useState(0);

  const images = [
    { src: "/top5.jpg" },
    { src: "/top8.jpg" },
    { src: "/top6.jpg" },
    { src: "/top9.jpg" },
    { src: "/top1.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => {
        return count >= images.length - 1 ? 0 : count + 1;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [images, 4000]);

  return (
    <>
      {isShowMenu ? (
        <header className="h-0 z-[1000] fixed top-0 left-0 right-0 bottom-0">
          <div className="z-[1001] fixed w-full translate-y-0 bg-none">
            <div className="h-20 flex justify-between text-center items-center bg-white">
              <div className="w-16 h-20 mt-3">
                <button
                  onClick={handleMenu}
                  className="flex table-column justify-end w-full h-full"
                >
                  <div>
                    <div className="relative w-6 h-4 mx-auto mb-[2px]">
                      <span className="bg-black top-0 absolute inline-block left-0 w-full h-[2px] translate-y-[7px] -rotate-45"></span>
                      <span className="bg-black top-[calc(50%-1px)] absolute inline-block left-0 w-full h-[2px] opacity-0"></span>
                      <span className="bg-black bottom-0 absolute inline-block left-0 w-full h-[2px] -translate-y-[7px] rotate-45"></span>
                    </div>
                    <div className="leading-[1px] mx-auto mt-[10px] mb-5 tracking-[.02em] text-[10px] text-black">
                      CLOSE
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-32">
                <Link href="/">
                  <Image
                    className="cursor-pointer block"
                    src="/logo.jpg"
                    width={300}
                    height={40}
                  />
                </Link>
              </div>
              <div className="w-16 h-20"></div>
            </div>
            <nav className="fixed visible top-20 left-0 right-0 bg-white h-[calc(100vh-80px)] overflow-y-scroll z-[1002]"></nav>
          </div>
        </header>
      ) : (
        <header className="h-0 z-[1000] fixed top-0 left-0 right-0 bottom-0">
          <div className="z-[1001] fixed w-full translate-y-0 bg-none">
            <div className=" bg-none h-20 flex justify-between text-center items-center z-[1001] fixed w-full translate-y-0">
              <div className="w-16 h-20 mt-3">
                <button
                  onClick={handleMenu}
                  className="flex table-column justify-end w-full h-full"
                >
                  <div>
                    <div className="relative w-6 h-4 mx-auto mb-[2px]">
                      <span className="bg-white top-0 absolute inline-block left-0 w-full h-[2px]"></span>
                      <span className="bg-white top-[calc(50%-1px)] absolute inline-block left-0 w-full h-[2px]"></span>
                      <span className="bg-white bottom-0 absolute inline-block left-0 w-full h-[2px]"></span>
                    </div>
                    <div className="leading-[1px] mx-auto mt-[10px] mb-5 tracking-[.02em] text-[10px] text-white">
                      MENU
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-32">
                <Link href="/">
                  <Image
                    className="cursor-pointer block"
                    src="/logo.jpg"
                    width={300}
                    height={40}
                  />
                </Link>
              </div>
              <div className="w-16 h-20"></div>
            </div>
            <nav></nav>
          </div>
        </header>
      )}

      <main className=" bg-white">
        <div className="w-full h-screen relative">
          {images.map((image, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={1000}
                in={index === count}
                classNames="fade"
                unmountOnExit
              >
                <Image
                  src={image.src}
                  layout="fill"
                  priority={true}
                  className="absolute "
                />
              </CSSTransition>
            );
          })}
        </div>

        <div className="bg-amber-200 mt-20 max-w-[1330px] m-auto pl-6 pr-6">
          <div>
            <h4 className=" text-center mt-[-0.3em] mb-[26px]">
              NEWS
              <br />
              <span>新着情報</span>
            </h4>
            <ul className="list-none">
              <li className="flex flex-wrap justify-end py-5 px-0">
                <time dateTime="2021-12-29T17:00:00">2021.12.29</time>
                <span>
                  <Link href="/">お知らせ</Link>
                </span>
                <Link href="/">2022年新春初売りのお知らせ</Link>
              </li>
            </ul>
            <div></div>
          </div>
        </div>

        <div className="mt-20 max-w-[1330px] m-auto pl-6 pr-6">
          <div className="grid grid-cols-2 grid-rows-1 gap-2 gap-y-2">
            <Image
              className="bg-green-100 w-full h-screen col-span-1"
              src="/top4.jpg"
              width={270}
              height={270}
            />
            <Image
              className="bg-green-100 w-full h-screen"
              src="/top2.jpg"
              width={131}
              height={131}
            />
            <Image
              className="bg-green-100 w-full h-screen"
              src="/top6.jpg"
              width={131}
              height={131}
            />
            <Image
              className="bg-green-100 w-full h-screen"
              src="/top1.jpg"
              width={131}
              height={131}
            />
          </div>
        </div>
      </main>

      <footer className="mt-20 pt-1">
        <div className="w-full max-w-[1230px] m-auto pl-6 pr-6">
          <div>
            <ul className="list-none flex justify-center">
              <li>
                <Link href={"https://www.instagram.com/3cedarscoffee/?hl=ja"}>
                  <svg
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="fill-gray-500 w-10 h-10"
                  >
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Home;
