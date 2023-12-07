import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="footer pt-6 pb-3 text-[#FEFAFA] bg-[#B0121A] bottom-[0] relative">
      <div className="container mx-auto py-2">
        <div className="grid grid-cols-3 gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src="/footer/logo1.png"
                width={163}
                height={11}
                alt="logo"
                className="pb-6"
              />
            </Link>
            <div className="flex flex-row text-sm md:text-md gap-2">
              <Image
                src="/footer/phone.png"
                width={24}
                height={12}
                alt="phone"
                className="h-4 w-4 mt-0.5"
              />
              <span>1-212-563-2499</span>
            </div>
            <div className="flex flex-row ">
              <Link
                href="https://www.youtube.com/user/BottomlessCloset"
                target="_blank"
              >
                <Image
                  src="/footer/youtube.png"
                  width={39}
                  height={8}
                  alt="youtube"
                  className="w-4 h-4 md: md:w-auto md:h-auto"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bottomless-closet/"
                target="_blank"
              >
                <Image
                  src="/footer/linkedIn.png"
                  width={39}
                  height={8}
                  alt="linkedIn"
                  className="w-4 h-4 md: md:w-auto md:h-auto"
                />
              </Link>
              <Link
                href="https://www.pinterest.com/bottomlesscloset/"
                target="_blank"
              >
                <Image
                  src="/footer/pinterest.png"
                  width={32}
                  height={8}
                  alt="pinterest"
                  className="w-4 h-4 md: md:w-auto md:h-auto"
                />
              </Link>
              <Link href="https://twitter.com/BttmlessClstNYC" target="_blank">
                <Image
                  src="/footer/twitterx.png"
                  width={29}
                  height={8}
                  alt="twitter"
                  className="w-4 h-4 md: md:w-auto md:h-auto"
                />
              </Link>
              <Link
                href="https://www.facebook.com/BottomlessClosetNYC"
                target="_blank"
              >
                <Image
                  src="/footer/facebook.png"
                  width={32}
                  height={8}
                  alt="facebook"
                  className="w-4 h-4 md: md:w-auto md:h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-neutral-50 text-sm md:text-md font-normal font-osans gap-1">
            <Link href={""} className="link link-hover">Donate Now</Link>
            <Link href={""} className="link link-hover">Contact Us</Link>
            <Link href={""} className="link link-hover">Get Career Help</Link>
            <Link href={""} className="link link-hover">Careers</Link>
            <Link href={""} className="link link-hover">Workshops</Link>
            <Link href={""} className="link link-hover">Get Involved</Link>
            <Link href={""} className="link link-hover">News & Events</Link>
          </div>
          <div className="flex flex-col">
            <div className="mt-6">
              <span className="text-neutral-50 text-md md:text-lg font-bold font-mont ">
                Stay Informed
                <br />
              </span>
              <span className="text-neutral-50 text-sm md:text-md font-normal font-osans ">
                Join our email newsletter to stay up to date on the latest news
                and events!
              </span>
            </div>
            <div className="py-2">
              <span className="text-neutral-50 text-sm font-normal font-osans leading-tight">
                Email:
              </span>
              <div className="flex flex-row gap-2 pt-2">
                <input
                  type="text"
                  className=" bg-neutral-50 rounded-md border border-neutral-50 inline-flex"
                />
                <button className=" bg-rose-200 rounded-md justify-center items-center flex text-rose-950 text-sm px-4 font-semibold font-osans ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-rose-950 my-4 " />
        <div className="flex justify-between lg:gap-48">
          <div className="text-neutral-50 text-sm font-normal font-osans">
            Bottomless Closet is a nonprofit 501(c)(3) organization; EIN/Tax ID
            number 13-4037622 <br />© 2023 Bottomless Closet. All rights
            reserved. Privacy Policy
          </div>
          <div className="flex items-center gap-2 md:gap-4 ">
            <Image
              src="/footer/greatest-nonprofits.png"
              width={75}
              height={55}
              alt=""
              className="w-10 h-18 md: md:w-auto md:h-auto"
            />
            <Image
              src="/footer/ptrc.png"
              width={50}
              height={50}
              alt=""
              className="w-10 h-8 md: md:w-auto md:h-auto"
            />
            <Image
              src="/footer/accreditedcharity.png"
              width={79}
              height={30}
              alt=""
              className="w-10 h-8 md: md:w-auto md:h-auto"
            />
            <Image
              src="/footer/gpge.png"
              width={75}
              height={55}
              alt=""
              className="w-10 h-8 md: md:w-auto md:h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
