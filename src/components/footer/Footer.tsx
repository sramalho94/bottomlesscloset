import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 flex flex-col py-10 gap-11 w-full text-[#FEFAFA] bg-[#B0121A]">
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
            <div className="flex flex-row text-[16px]">
              <Image
                src="/footer/phone.png"
                width={20}
                height={18}
                alt="phone"
                className="pr-2"
              />
              <span>1-212-563-2499</span>
            </div>
            <div className="flex flex-row gap-3.5">
              <Link
                href="https://www.youtube.com/user/BottomlessCloset"
                target="_blank"
              >
                <Image
                  src="/footer/youtube.png"
                  width={42}
                  height={8}
                  alt="youtube"
                  className=""
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
                  className=""
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
                  className=""
                />
              </Link>
              <Link href="https://twitter.com/BttmlessClstNYC" target="_blank">
                <Image
                  src="/footer/twitterx.png"
                  width={29}
                  height={8}
                  alt="twitter"
                  className=""
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
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-neutral-50 text-xl font-normal font-['Open Sans'] underline gap-2.5 leading-7">
            <span>Donate Now</span>
            <span>Contact Us</span>
            <span>Get Career Help</span>
            <span>Careers</span>
            <span>Workshops</span>
            <span>Get Involved</span>
            <span>News & Events</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="">
              <span className="text-neutral-50 text-[28px] font-bold font-['Nunito Sans'] leading-[33.60px]">
                Stay Informed
                <br />
              </span>
              <span className="text-neutral-50 text-xl font-normal font-['Open Sans'] leading-7">
                Join our email newsletter to stay up to date on the latest news
                and events!
              </span>
            </div>
            <div className="">
              <span className="text-neutral-50 text-sm font-normal font-['Open Sans'] leading-tight">
                Email:
              </span>
              <div className="flex flex-row gap-2 pt-2">
                <input
                  type="text"
                  className="w-[297.33px] h-9 p-2.5 bg-neutral-50 rounded-md border border-neutral-50  gap-2.5 inline-flex"
                />
                <button className="w-[110px] h-[37px] px-12 bg-rose-200 rounded-[10px] justify-center items-center gap-2.5 flex text-rose-950 text-xl font-semibold font-['Open Sans'] leading-7">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-rose-950 my-10 " />
        <div className="flex justify-between ">
          <div className="h-[49px] text-neutral-50 text-sm font-normal font-['Open Sans']">
            Bottomless Closet is a nonprofit 501(c)(3) organization; EIN/Tax ID
            number 13-4037622 <br />© 2023 Bottomless Closet. All rights
            reserved. Privacy Policy
          </div>
          <div className="flex items-center gap-6 ">
            <Image
              className=" h-[55px]"
              src="/footer/greatest-nonprofits.png"
              width={75}
              height={55}
              alt=""
            />
            <Image
              className="w-[50px] h-[50px]"
              src="/footer/ptrc.png"
              width={50}
              height={50}
              alt=""
            />
            <Image
              className="w-[79px] h-[30px]"
              src="/footer/accreditedcharity.png"
              width={79}
              height={30}
              alt=""
            />
            <Image
              className="w-[75px] h-[55px]"
              src="/footer/gpge.png"
              width={75}
              height={55}
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
