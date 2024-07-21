import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const icons = [
    {
      id: 2,
      url: "https://www.linkedin.com/in/mayinuddin-munna",
      // icon: <LinkedInIcon />,
      backgroundColor: "#0082ca",
    },
    {
      id: 3,
      url: "https://www.facebook.com/profile.php?id=100073611545089",
      // icon: <FacebookIcon />,
      backgroundColor: "#3b5998",
    },
    {
      id: 4,
      url: "https://github.com/mayinuddin-munna",
      // icon: <GitHubIcon />,
      backgroundColor: "#333333",
    },
    {
      id: 5,
      url: "https://twitter.com/mayinuddinMunna",
      // icon: <TwitterIcon />,
      backgroundColor: "#55acee",
    },
    {
      id: 6,
      url: "https://www.google.com",
      // icon: <GoogleIcon />,
      backgroundColor: "#dd4b39",
    },
    {
      id: 1,
      url: "https://instagram.com",
      // icon: <InstagramIcon />,
      backgroundColor: "#ac2bac",
    },
  ];

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {icons.map((icon) => (
          <Link
            key={icon.id}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textShadow: "10px",
              margin: "0 .5rem 0 .5rem",
              backgroundColor: icon.backgroundColor,
            }}
          >
            {/* {icon.icon} */}
          </Link>
        ))}
      </div>
      <h1 className="text-center">
        &copy; {currentYear} - All rights reserved by{" "}
        <span className="text-[#1A73E8]">Mayinuddin M. Munna</span>
      </h1>
    </div>
  );
};

export default Footer;
