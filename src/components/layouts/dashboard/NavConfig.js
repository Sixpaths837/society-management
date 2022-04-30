// component
import React from "react";
import Iconify from "../../Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig1 = [
  {
    id: "0",
    title: "user details",
    icon: getIcon("eva:person-fill"),
  },
  {
    id: "1",
    title: "house details",
    icon: getIcon("eva:home-fill"),
  },
  {
    id: "2",
    title: "file complaint",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    id: "3",
    title: "view replies",
    icon: getIcon("eva:list-fill"),
  },
  {
    id: "4",
    title: "pay bills",
    icon: getIcon("eva:credit-card-fill"),
  },
];

const navConfig2 = [
  {
    title: "create house",
    icon: getIcon("eva:plus-circle-fill"),
    id: "0",
  },
  {
    title: "add payment",
    icon: getIcon("eva:file-add-fill"),
    id: "1",
  },
  {
    title: "resolve issue",
    icon: getIcon("eva:clipboard-fill"),
    id: "2",
  },
  {
    title: "search/delete user",
    icon: getIcon("eva:people-fill"),
    id: "3",
  },

  {
    title: "due payments",
    icon: getIcon("eva:slash-fill"),
    id: "4",
  },
  {
    title: "completed payments",
    icon: getIcon("eva:checkmark-square-fill"),
    id: "5",
  },
];

export { navConfig1, navConfig2 };
