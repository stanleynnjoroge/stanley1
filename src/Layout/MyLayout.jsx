import React from "react";
import { Menu, Layout } from "antd";
import { NavigationsBottom, NavigationsTop } from "./Navigation";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const MyLayout = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const key = e.key;
    const item = [...NavigationsTop, ...NavigationsBottom].find(
      (navItem) => navItem.key === key
    );

    if (item && item.path) {
      navigate(item.path);
    }
  };

  return (
    <Layout
      style={{
        padding: "24px",
        margin: "20px",
        height: "calc(100vh - 64px)",
      }}
    >
      <Header
        style={{
          padding: 0,
          background: "white",
          position: "absolute",
          width: "100%",
          zIndex: 1000,
          borderBottom: "1px solid #333",
        }}
      ></Header>
      <div style={{}}>
        <Sider
          style={{
            display: "flex",
            alignItems: "space-between", // Updated to flex-start for correct alignment
            flexDirection: "column", // Ensure items stack vertically
            gap: "20px", // Adjust gap to fit your design
            position: "sticky",
            marginTop: "60px",
            backgroundColor: "white",
            height: "100%",
          }}
          width={250}
        >
          <Menu
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "4px",
              backgroundColor: "white",
              fontWeight: 700,
            }}
            mode="inline"
            items={NavigationsTop}
            onClick={handleMenuClick}
          />

          <Menu
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-end",
              marginBottom: "4px",
              backgroundColor: "white",
              fontWeight: 700,
              position: "absolute",
            }}
            mode="inline"
            items={NavigationsBottom}
            onClick={handleMenuClick}
          />
        </Sider>
      </div>

      <Layout style={{ padding: "24px 0" }}>
        <Content style={{ padding: 24, margin: 100, minHeight: 280 }}>
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "whitesmoke",
            padding: "3px 0",
          }}
        >
          <span style={{ fontSize: "12px" }}>
            IMS ©{new Date().getFullYear()} Powered By Stanley
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
