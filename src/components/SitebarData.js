import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
///import * as IoIcons from 'react-icons/io'

export const SitebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "1st",
    path: "/1st_floor",
    icon: <FaIcons.FaParking />,
    cName: "nav-text",
  },
  {
    title: "2nd",
    path: "/2nd_floor",
    icon: <FaIcons.FaParking />,
    cName: "nav-text",
  },
  {
    title: "3th",
    path: "/3th_floor",
    icon: <FaIcons.FaParking />,
    cName: "nav-text",
  },
  {
    title: "camera",
    path: "/camera",
    icon: <AiIcons.AiFillVideoCamera />,
    cName: "nav-text",
  },
];
