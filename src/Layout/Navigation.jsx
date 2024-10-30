import React from "react";
import {
  DashboardOutlined,
  OrderedListOutlined,
  FileAddOutlined,
  IssuesCloseOutlined,
  LaptopOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export const NavigationsTop = [
  {
    key: "Dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    path: "/Dashboard",
  },
  {
    key: "stockpile",
    icon: <OrderedListOutlined />,
    label: "Stockpile",
    children: [
      {
        key: "Settings",
        icon: <FileAddOutlined />,
        label: "Settings",
        path: "/Settings",
      },
      {
        key: "stockpile",
        icon: <FileAddOutlined />,
        label: "Stockpile",
        path: "/register-device",
      },
    ],
  },
  {
    key: "devices",
    icon: <LaptopOutlined />,
    label: "Devices",
    children: [
      {
        key: "register-device",
        icon: <FileAddOutlined />,
        label: "Register Device",
        path: "/register-device",
      },

      {
        key: "device-issues",
        icon: <IssuesCloseOutlined />,
        label: "Device Issues",
        path: "/device-issues",
      },
      {
        key: "assign-device",
        icon: <FileAddOutlined />,
        label: "Assign Device",
        path: "/assign-device",
      },
    ],
  },
];
export const NavigationsBottom = [
  {
    key: "register-admin",
    icon: <UserAddOutlined />,
    label: "Register Admin",
    path: "/register-admin",
  },
];
