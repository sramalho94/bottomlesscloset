import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.youtube.com/user/BottomlessCloset",
      src: "/footer/youtube.png",
      width: 39,
      height: 8,
      alt: "youtube",
    },
    {
      href: "https://www.linkedin.com/company/bottomless-closet/",
      src: "/footer/linkedIn.png",
      width: 39,
      height: 8,
      alt: "linkedIn",
    },
    {
      href: "https://www.pinterest.com/bottomlesscloset/",
      src: "/footer/pinterest.png",
      width: 32,
      height: 8,
      alt: "pinterest",
    },
    {
      href: "https://twitter.com/BttmlessClstNYC",
      src: "/footer/twitterx.png",
      width: 29,
      height: 8,
      alt: "twitter",
    },
    {
      href: "https://www.facebook.com/BottomlessClosetNYC",
      src: "/footer/facebook.png",
      width: 32,
      height: 8,
      alt: "facebook",
    },
  ];

  const additionalImages = [
    { src: "/footer/greatest-nonprofits.png", width: 75, height: 55, alt: "" },
    { src: "/footer/ptrc.png", width: 50, height: 50, alt: "" },
    { src: "/footer/accreditedcharity.png", width: 79, height: 30, alt: "" },
    { src: "/footer/gpge.png", width: 75, height: 55, alt: "" },
  ];

  const footerLinks = [
    { text: "Donate Now", link: "/donate" },
    { text: "Contact Us", link: "/contact-us" },
    { text: "Get Career Help", link: "/get-career-help" },
    { text: "Careers", link: "/careers" },
    { text: "Workshops", link: "/workshops" },
    { text: "Get Involved", link: "/get-involved" },
    { text: "News & Events", link: "/news-and-events" },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map(({ href, src, width, height, alt }, index) => (
      <Link key={index} href={href} target="_blank">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="w-4 h-4 md: md:w-auto md:h-auto"
        />
      </Link>
    ));
  };

  const renderImages = (
    images: { src: string; width: number; height: number; alt: string }[]
  ) => {
    return images.map(({ src, width, height, alt }, index) => (
      <Image
        key={index}
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-6 h-6 md:w-auto md:h-auto"
      />
    ));
  };

  const renderFooterLinks = (links: { text: string; link: string }[]) => {
    return links.map(({ text, link }, index) => (
      <Link key={index} href={link} className="link link-hover">
        {text}
      </Link>
    ));
  };

  return (
    <footer className="footer px-6 pt-6 pb-3 text-[#FEFAFA] bg-core-red bottom-[0] relative">
      <div className="container mx-auto py-2">
        <div className="grid grid-cols-3 gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src="/footer/logo1.png"
                width={163}
                height={11}
                alt="logo"
                className="pb-6 pt-2"
              />
            </Link>
            <div className="flex flex-row text-xs md:text-sm gap-1 ">
              <Image
                src="/footer/phone.png"
                width={24}
                height={12}
                alt="phone"
                className="h-3 w-3 md:h-4 md:w-4 md:mt-0.5 "
              />
              <span>1-212-563-2499</span>
            </div>
            <div className="flex flex-row gap-1 ">{renderSocialLinks()}</div>
          </div>
          <div className="flex flex-col text-neutral-50 text-xs md:text-sm font-normal font-osans gap-1">
          {renderFooterLinks(footerLinks)}
          </div>
          <div className="flex flex-col ">
            <div className="mt-2 md:mt-3">
              <span className="text-neutral-50 text-sm md:text-lg font-bold font-mont">
                Stay Informed
                <br />
              </span>
              <p className="text-neutral-50 text-[10px] md:text-sm font-normal font-osans mt-1">
                Join our email newsletter to stay up to date on the latest news
                and events!
              </p>
            </div>
            <div className="py-1 md:py-2">
              <span className="text-neutral-50 text-[10px] md:text-sm font-normal font-osans leading-tight">
                Email:
              </span>
              <div className="flex md:flex-row flex-col gap-1 pt-1 md:pt-2">
                <input
                  type="text"
                  placeholder="potus1234@yahoo.com"
                  className=" bg-neutral-50 rounded-md border lg:w-[65%] md:w-[65%] border-neutral-50 inline-flex pl-1 text-[10px] md:text-xs font-normal font-osans"
                />
                <button className=" bg-pink-2 rounded-md justify-center items-center flex text-dark-red text-[10px] md:text-xs px-1 lg:px-4 md:h-[1.5rem] w-[55px] md:w-auto font-semibold font-osans">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-dark-red my-4 " />
        <div className="flex justify-between lg:gap-48 xl:gap-72 ">
          <div className="text-neutral-50 md:text-sm text-[10px] font-normal font-osans">
            Bottomless Closet is a nonprofit 501(c)(3) organization; EIN/Tax ID
            number 13-4037622 <br />© 2023 Bottomless Closet. All rights
            reserved. Privacy Policy
          </div>
          <div className="flex items-center gap-1 md:gap-2 pr-8 ">
            {renderImages(additionalImages)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
