// component
import React from "react";
import Iconify from "../../Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/society-management/dashboard",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "user",
    path: "/society-management/dashboard",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "payments",
    path: "/society-management/dashboard",
    icon: getIcon("eva:shopping-bag-fill"),
  },
  {
    title: "house",
    path: "/society-management/dashboard",
    icon: getIcon("eva:file-text-fill"),
  },
  {
    title: "issues",
    path: "/society-management/dashboard",
    icon: getIcon("eva:lock-fill"),
  },
  {
    title: "delete user",
    path: "/society-management/dashboard",
    icon: getIcon("eva:person-add-fill"),
  },
  {
    title: "payment report",
    path: "/society-management/dashboard",
    icon: getIcon("eva:alert-triangle-fill"),
  },
];

export default navConfig;
