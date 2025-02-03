import React from "react";
import "./CSS/adminDashboard.css";
import { Link } from "react-router-dom";
import RevenueChart from "./charts/revenueChart";
import YearlyChart from "./charts/yearlyChart";
import EarningChart from "./charts/earningChart";
import SalaryChart from "./charts/salaryChart";
import CustomerChart from "./charts/customerChart";
import ProjectChart from "./charts/projectChart";
import WeeklyChart from "./charts/weeklyChart";
import { Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <div>
      <next-route-announcer
        style={{ position: "absolute" }}
      ></next-route-announcer>
      <div className="modernize-d0h96n">
        <div className="MuiBox-root-admin modernize-1hcovx0">
          <div className="MuiDrawer-root MuiDrawer-docked modernize-oms1ax">
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft modernize-1j4f3kq">
              <div className="MuiBox-root-admin modernize-10klw3m">
                <div className="MuiBox-root-admin modernize-t0051x">
                  <a className="modernize-13biwtz" href="/">
                    <img
                      alt="logo"
                      fetchPriority="high"
                      width="174"
                      height="70"
                      decoding="async"
                      dataNimg="1"
                      src="https://modernize-nextjs.adminmart.com/images/logos/darkLogo.svg"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <div
                  data-simplebar="init"
                  className="modernize-xuctt3 simplebar-scrollable-y"
                >
                  <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer"></div>
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: "0px", bottom: "0px;" }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          tabIndex="0"
                          role="region"
                          aria-label="scrollable content"
                          style={{ height: "100%", overflow: "hidden scroll" }}
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: "0px" }}
                          >
                            <div className="MuiBox-root-admin modernize-t0051x">
                              <ul className="MuiList-root MuiList-padding sidebarNav modernize-1jxmrhb">
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Home
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-aperture"
                                        >
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M3.6 15h10.55"></path>
                                          <path d="M6.551 4.938l3.26 10.034"></path>
                                          <path d="M17.032 4.636l-8.535 6.201"></path>
                                          <path d="M20.559 14.51l-8.535 -6.201"></path>
                                          <path d="M12.257 20.916l3.261 -10.034"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Dashboard
                                          <br />
                                        </span>
                                      </div>
                                      <div
                                        style={{ marginLeft: "60px" }}
                                        className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorSecondary MuiChip-filledSecondary modernize-1k4v5hh"
                                      >
                                        <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                          New
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/dashboards/ecommerce">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-shopping-cart"
                                        >
                                          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M17 17h-11v-14h-2"></path>
                                          <path d="M6 5l14 1l-1 7h-13"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          eCommerce
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Apps
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/contacts">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-package"
                                        >
                                          <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                          <path d="M12 12l8 -4.5"></path>
                                          <path d="M12 12l0 9"></path>
                                          <path d="M12 12l-8 -4.5"></path>
                                          <path d="M16 5.25l-8 4.5"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Contacts
                                          <br />
                                        </span>
                                      </div>
                                      <div
                                        style={{ marginLeft: "85px" }}
                                        className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorSecondary MuiChip-filledSecondary modernize-1k4v5hh"
                                      >
                                        <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                          2
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-chart-donut-3"
                                    >
                                      <path d="M12 3v5m4 4h5"></path>
                                      <path d="M8.929 14.582l-3.429 2.918"></path>
                                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Blog
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/blog/post">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Posts
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Detail
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-basket"
                                    >
                                      <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                      <path d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z"></path>
                                      <path d="M17 10l-2 -6"></path>
                                      <path d="M7 10l2 -6"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Ecommerce
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/ecommerce/shop">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Shop
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/ecommerce/detail/1">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Detail
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/ecommerce/list">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                List
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/ecommerce/checkout">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Checkout
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/chats">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-message-2"
                                        >
                                          <path d="M8 9h8"></path>
                                          <path d="M8 13h6"></path>
                                          <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Chats
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-user-circle"
                                    >
                                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Users
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/user-profile/profile">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Profile
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/user-profile/followers">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Followers
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/user-profile/friends">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Friends
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/apps/user-profile/gallery">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Gallery
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/notes">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-notes"
                                        >
                                          <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                                          <path d="M9 7l6 0"></path>
                                          <path d="M9 11l6 0"></path>
                                          <path d="M9 15l4 0"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Notes
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/calendar">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-calendar"
                                        >
                                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                                          <path d="M16 3v4"></path>
                                          <path d="M8 3v4"></path>
                                          <path d="M4 11h16"></path>
                                          <path d="M11 15h1"></path>
                                          <path d="M12 15v3"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Calendar
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/email">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-mail"
                                        >
                                          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                          <path d="M3 7l9 6l9 -6"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Email
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/apps/tickets">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-ticket"
                                        >
                                          <path d="M15 5l0 2"></path>
                                          <path d="M15 11l0 2"></path>
                                          <path d="M15 17l0 2"></path>
                                          <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Tickets
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Pages
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/theme-pages/casl">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-iconLock-access"
                                        >
                                          <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                                          <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                                          <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                                          <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                                          <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                                          <path d="M10 11v-2a2 2 0 1 1 4 0v2"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Roll Base Access
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/theme-pages/treeview">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-git-merge"
                                        >
                                          <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M7 8l0 8"></path>
                                          <path d="M7 8a4 4 0 0 0 4 4h4"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Treeview
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/theme-pages/pricing">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-currency-dollar"
                                        >
                                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                                          <path d="M12 3v3m0 12v3"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Pricing
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/theme-pages/account-settings">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-user-circle"
                                        >
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Account Setting
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/theme-pages/faq">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-help"
                                        >
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M12 17l0 .01"></path>
                                          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          FAQ
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/landingpage">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-app-window"
                                        >
                                          <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                                          <path d="M6 8h.01"></path>
                                          <path d="M9 8h.01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Landingpage
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-iconLayout"
                                    >
                                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                      <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                      <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Widgets
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/widgets/cards">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Cards
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/widgets/banners">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Banners
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/widgets/charts">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Charts
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Forms
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-apps"
                                    >
                                      <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                      <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                      <path d="M14 7l6 0"></path>
                                      <path d="M17 4l0 6"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Form Elements
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/autocomplete">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Autocomplete
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/button">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Button
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/checkbox">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Checkbox
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/radio">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Radio
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/date-time">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Date Time
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/slider">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Slider
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/forms/form-elements/switch">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Switch
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/formLayout">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-file-description"
                                        >
                                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                          <path d="M9 17h6"></path>
                                          <path d="M9 13h6"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Layout
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-horizontal">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-box-align-bottom"
                                        >
                                          <path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z"></path>
                                          <path d="M4 9v.01"></path>
                                          <path d="M4 4v.01"></path>
                                          <path d="M9 4v.01"></path>
                                          <path d="M15 4v.01"></path>
                                          <path d="M20 4v.01"></path>
                                          <path d="M20 9v.01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Horizontal
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-vertical">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-box-alignLeft"
                                        >
                                          <path d="M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z"></path>
                                          <path d="M15.002 20.003h-.01"></path>
                                          <path d="M20.003 20.003h-.011"></path>
                                          <path d="M20.003 15.002h-.011"></path>
                                          <path d="M20.003 9.002h-.011"></path>
                                          <path d="M20.003 4.002h-.011"></path>
                                          <path d="M15.002 4.002h-.01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Vertical
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-custom">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-file-dots"
                                        >
                                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                          <path d="M9 14v.01"></path>
                                          <path d="M12 14v.01"></path>
                                          <path d="M15 14v.01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Custom
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-wizard">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-files"
                                        >
                                          <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                                          <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                                          <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Wizard
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-validation">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-files"
                                        >
                                          <path d="M15 3v4a1 1 0 0 0 1 1h4"></path>
                                          <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"></path>
                                          <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Form Validation
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/forms/form-quill">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-edit"
                                        >
                                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                          <path d="M16 5l3 3"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Quill Editor
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Tables
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/basic">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-all"
                                        >
                                          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                          <path d="M4 12l16 0"></path>
                                          <path d="M12 4l0 16"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Basic
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/collapsible">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-horizontal"
                                        >
                                          <path d="M4 12l16 0"></path>
                                          <path d="M4 4l0 .01"></path>
                                          <path d="M8 4l0 .01"></path>
                                          <path d="M12 4l0 .01"></path>
                                          <path d="M16 4l0 .01"></path>
                                          <path d="M20 4l0 .01"></path>
                                          <path d="M4 8l0 .01"></path>
                                          <path d="M12 8l0 .01"></path>
                                          <path d="M20 8l0 .01"></path>
                                          <path d="M4 16l0 .01"></path>
                                          <path d="M12 16l0 .01"></path>
                                          <path d="M20 16l0 .01"></path>
                                          <path d="M4 20l0 .01"></path>
                                          <path d="M8 20l0 .01"></path>
                                          <path d="M12 20l0 .01"></path>
                                          <path d="M16 20l0 .01"></path>
                                          <path d="M20 20l0 .01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Collapsible
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/enhanced">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-inner"
                                        >
                                          <path d="M4 12l16 0"></path>
                                          <path d="M12 4l0 16"></path>
                                          <path d="M4 4l0 .01"></path>
                                          <path d="M8 4l0 .01"></path>
                                          <path d="M16 4l0 .01"></path>
                                          <path d="M20 4l0 .01"></path>
                                          <path d="M4 8l0 .01"></path>
                                          <path d="M20 8l0 .01"></path>
                                          <path d="M4 16l0 .01"></path>
                                          <path d="M20 16l0 .01"></path>
                                          <path d="M4 20l0 .01"></path>
                                          <path d="M8 20l0 .01"></path>
                                          <path d="M16 20l0 .01"></path>
                                          <path d="M20 20l0 .01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Enhanced
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/fixed-header">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-vertical"
                                        >
                                          <path d="M12 4l0 16"></path>
                                          <path d="M4 4l0 .01"></path>
                                          <path d="M8 4l0 .01"></path>
                                          <path d="M16 4l0 .01"></path>
                                          <path d="M20 4l0 .01"></path>
                                          <path d="M4 8l0 .01"></path>
                                          <path d="M20 8l0 .01"></path>
                                          <path d="M4 12l0 .01"></path>
                                          <path d="M8 12l0 .01"></path>
                                          <path d="M16 12l0 .01"></path>
                                          <path d="M20 12l0 .01"></path>
                                          <path d="M4 16l0 .01"></path>
                                          <path d="M20 16l0 .01"></path>
                                          <path d="M4 20l0 .01"></path>
                                          <path d="M8 20l0 .01"></path>
                                          <path d="M16 20l0 .01"></path>
                                          <path d="M20 20l0 .01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Fixed Header
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/pagination">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-top"
                                        >
                                          <path d="M4 4l16 0"></path>
                                          <path d="M4 8l0 .01"></path>
                                          <path d="M12 8l0 .01"></path>
                                          <path d="M20 8l0 .01"></path>
                                          <path d="M4 12l0 .01"></path>
                                          <path d="M8 12l0 .01"></path>
                                          <path d="M12 12l0 .01"></path>
                                          <path d="M16 12l0 .01"></path>
                                          <path d="M20 12l0 .01"></path>
                                          <path d="M4 16l0 .01"></path>
                                          <path d="M12 16l0 .01"></path>
                                          <path d="M20 16l0 .01"></path>
                                          <path d="M4 20l0 .01"></path>
                                          <path d="M8 20l0 .01"></path>
                                          <path d="M12 20l0 .01"></path>
                                          <path d="M16 20l0 .01"></path>
                                          <path d="M20 20l0 .01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Pagination
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/tables/search">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-border-style-2"
                                        >
                                          <path d="M4 18v.01"></path>
                                          <path d="M8 18v.01"></path>
                                          <path d="M12 18v.01"></path>
                                          <path d="M16 18v.01"></path>
                                          <path d="M20 18v.01"></path>
                                          <path d="M18 12h2"></path>
                                          <path d="M11 12h2"></path>
                                          <path d="M4 12h2"></path>
                                          <path d="M4 6h16"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Search
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  UI
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-box"
                                    >
                                      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path>
                                      <path d="M12 12l8 -4.5"></path>
                                      <path d="M12 12l0 9"></path>
                                      <path d="M12 12l-8 -4.5"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Ui Components
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/alert">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Alert
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/accordion">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Accordion
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/avatar">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Avatar
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/chip">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Chip
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/dialog">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Dialog
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/list">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                List
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/popover">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Popover
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/rating">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Rating
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/tabs">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Tabs
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/tooltip">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Tooltip
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/transferList">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Transfer List
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/ui-components/typography">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Typography
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Charts
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/line">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chartLine"
                                        >
                                          <path d="M4 19l16 0"></path>
                                          <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Line
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/gradient">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-arcs"
                                        >
                                          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                          <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792"></path>
                                          <path d="M3 12a9 9 0 1 0 9 -9"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Gradient
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/area">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-area"
                                        >
                                          <path d="M4 19l16 0"></path>
                                          <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Area
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/candlestick">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-candle"
                                        >
                                          <path d="M4 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                          <path d="M6 4l0 2"></path>
                                          <path d="M6 11l0 9"></path>
                                          <path d="M10 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                          <path d="M12 4l0 10"></path>
                                          <path d="M12 19l0 1"></path>
                                          <path d="M16 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                          <path d="M18 4l0 1"></path>
                                          <path d="M18 11l0 9"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Candlestick
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/column">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-dots"
                                        >
                                          <path d="M3 3v18h18"></path>
                                          <path d="M9 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                          <path d="M10.16 10.62l2.34 2.88"></path>
                                          <path d="M15.088 13.328l2.837 -4.586"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Column
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/doughnut">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-donut-3"
                                        >
                                          <path d="M12 3v5m4 4h5"></path>
                                          <path d="M8.929 14.582l-3.429 2.918"></path>
                                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Doughtnut &amp; Pie
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/charts/radialbar">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chart-radar"
                                        >
                                          <path d="M12 3l9.5 7l-3.5 11h-12l-3.5 -11z"></path>
                                          <path d="M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z"></path>
                                          <path d="M2.5 10l9.5 3l9.5 -3"></path>
                                          <path d="M12 3v10l6 8"></path>
                                          <path d="M6 21l6 -8"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          RadialBar &amp; Radar
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Auth
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-iconLogin"
                                    >
                                      <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                      <path d="M21 12h-13l3 -3"></path>
                                      <path d="M11 15l-3 -3"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Login
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth1/login">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Side Login
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth2/login">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Boxed Login
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-user-plus"
                                    >
                                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                      <path d="M16 19h6"></path>
                                      <path d="M19 16v6"></path>
                                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Register
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth1/register">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Side Register
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth2/register">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Boxed Register
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-rotate"
                                    >
                                      <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Forgot Password
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth1/forgot-password">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Side Forgot Password
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth2/forgot-password">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Boxed Forgot Password
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-zoom-code"
                                    >
                                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                      <path d="M21 21l-6 -6"></path>
                                      <path d="M8 8l-2 2l2 2"></path>
                                      <path d="M12 8l2 2l-2 2"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Two Steps
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth1/two-steps">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Side Two Steps
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/auth/auth2/two-steps">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Boxed Two Steps
                                                <br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/auth/error">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-alert-circle"
                                        >
                                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                          <path d="M12 8v4"></path>
                                          <path d="M12 16h.01"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Error
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="/auth/maintenance">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-settings"
                                        >
                                          <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Maintenance
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                                <li className="MuiListSubheader-root MuiListSubheader-gutters modernize-k1ygdo">
                                  Other
                                </li>
                                <div
                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                  tabIndex="0"
                                  role="button"
                                >
                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.3rem"
                                      height="1.3rem"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="tabler-icon tabler-icon-box-multiple"
                                    >
                                      <path d="M7 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                                      <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                                    </svg>
                                  </div>
                                  <div
                                    className="MuiListItemText-root modernize-1tsvksn"
                                    color="inherit"
                                  >
                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                      Menu Level
                                    </span>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-chevron-down"
                                  >
                                    <path d="M6 9l6 6l6 -6"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </div>
                                <div
                                  className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                  style={{ minHeight: "0px" }}
                                >
                                  <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                    <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                      <li className="MuiList-root modernize-1uzmcsd">
                                        <a href="/l1">
                                          <div
                                            className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-1r0xshu"
                                            tabIndex="0"
                                            role="button"
                                          >
                                            <div className="MuiListItemIcon-root modernize-13bkji6">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-point"
                                              >
                                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                              </svg>
                                            </div>
                                            <div className="MuiListItemText-root modernize-1tsvksn">
                                              <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                Level 1<br />
                                              </span>
                                            </div>
                                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                          </div>
                                        </a>
                                      </li>
                                      <div
                                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-6wgji6"
                                        tabIndex="0"
                                        role="button"
                                      >
                                        <div className="MuiListItemIcon-root modernize-13bkji6">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1rem"
                                            height="1rem"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-point"
                                          >
                                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                          </svg>
                                        </div>
                                        <div
                                          className="MuiListItemText-root modernize-1tsvksn"
                                          color="inherit"
                                        >
                                          <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                            Level 1.1
                                          </span>
                                        </div>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1rem"
                                          height="1rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-chevron-down"
                                        >
                                          <path d="M6 9l6 6l6 -6"></path>
                                        </svg>
                                        <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                      </div>
                                      <div
                                        className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                        style={{ minHeight: "0px" }}
                                      >
                                        <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                          <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                            <li className="MuiList-root modernize-1uzmcsd">
                                              <a href="/l2">
                                                <div
                                                  className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-18jo5is"
                                                  tabIndex="0"
                                                  role="button"
                                                >
                                                  <div className="MuiListItemIcon-root modernize-13bkji6">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="1rem"
                                                      height="1rem"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="tabler-icon tabler-icon-point"
                                                    >
                                                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                    </svg>
                                                  </div>
                                                  <div className="MuiListItemText-root modernize-1tsvksn">
                                                    <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                      Level 2<br />
                                                    </span>
                                                  </div>
                                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                                </div>
                                              </a>
                                            </li>
                                            <div
                                              className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-11m6oc7"
                                              tabIndex="0"
                                              role="button"
                                            >
                                              <div className="MuiListItemIcon-root modernize-13bkji6">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="1rem"
                                                  height="1rem"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="tabler-icon tabler-icon-point"
                                                >
                                                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                </svg>
                                              </div>
                                              <div
                                                className="MuiListItemText-root modernize-1tsvksn"
                                                color="inherit"
                                              >
                                                <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                  Level 2.1
                                                </span>
                                              </div>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="tabler-icon tabler-icon-chevron-down"
                                              >
                                                <path d="M6 9l6 6l6 -6"></path>
                                              </svg>
                                              <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                            </div>
                                            <div
                                              className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden modernize-a0y2e3"
                                              style={{ minHeight: "0px" }}
                                            >
                                              <div className="MuiCollapse-wrapper MuiCollapse-vertical modernize-hboir5">
                                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical modernize-8atqhb">
                                                  <li className="MuiList-root modernize-1uzmcsd">
                                                    <a href="/l3">
                                                      <div
                                                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-64w6ih"
                                                        tabIndex="0"
                                                        role="button"
                                                      >
                                                        <div className="MuiListItemIcon-root modernize-13bkji6">
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="1rem"
                                                            height="1rem"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="tabler-icon tabler-icon-point"
                                                          >
                                                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                          </svg>
                                                        </div>
                                                        <div className="MuiListItemText-root modernize-1tsvksn">
                                                          <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                            Level 3<br />
                                                          </span>
                                                        </div>
                                                        <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                                      </div>
                                                    </a>
                                                  </li>
                                                  <li className="MuiList-root modernize-1uzmcsd">
                                                    <a href="/l3.1">
                                                      <div
                                                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-64w6ih"
                                                        tabIndex="0"
                                                        role="button"
                                                      >
                                                        <div className="MuiListItemIcon-root modernize-13bkji6">
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="1rem"
                                                            height="1rem"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="tabler-icon tabler-icon-point"
                                                          >
                                                            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                          </svg>
                                                        </div>
                                                        <div className="MuiListItemText-root modernize-1tsvksn">
                                                          <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                                            Level 3.1
                                                            <br />
                                                          </span>
                                                        </div>
                                                        <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                                      </div>
                                                    </a>
                                                  </li>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-disabled Mui-disabled MuiListItemButton-root MuiListItemButton-gutters Mui-disabled modernize-ctuec9"
                                      tabIndex="-1"
                                      role="button"
                                      aria-disabled="true"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-ban"
                                        >
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M5.7 5.7l12.6 12.6"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Disabled
                                          <br />
                                        </span>
                                      </div>
                                    </div>
                                  
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <Link >
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-star"
                                        >
                                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          SubCaption
                                          <br />
                                          <span className="MuiTypography-root MuiTypography-caption modernize-189il1r">
                                            This is the sutitle
                                          </span>
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <Link>
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-award"
                                        >
                                          <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
                                          <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"></path>
                                          <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Chip
                                          <br />
                                        </span>
                                      </div>
                                      <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-filledPrimary modernize-now1gd">
                                        <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                          9
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <Link>
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-mood-smile"
                                        >
                                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                          <path d="M9 10l.01 0"></path>
                                          <path d="M15 10l.01 0"></path>
                                          <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          Outlined
                                          <br />
                                        </span>
                                      </div>
                                      <div className="MuiChip-root MuiChip-outlined MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-outlinedPrimary modernize-15plw3p">
                                        <span className="MuiChipLabel MuiChipLabelSmall modernize-cxrmjv">
                                          outline
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </Link>
                                </li>
                                <li className="MuiList-root modernize-1uzmcsd">
                                  <a href="https://google.com">
                                    <div
                                      className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters modernize-ctuec9"
                                      tabIndex="0"
                                      role="button"
                                    >
                                      <div className="MuiListItemIcon-root modernize-13bkji6">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.3rem"
                                          height="1.3rem"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="tabler-icon tabler-icon-star"
                                        >
                                          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                                        </svg>
                                      </div>
                                      <div className="MuiListItemText-root modernize-1tsvksn">
                                        <span className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary modernize-169beq8">
                                          External Link
                                          <br />
                                        </span>
                                      </div>
                                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "269px", height: "2983px" }}
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: "0px", display: "none" }}
                    ></div>
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: "124px",
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "block",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="MuiBox-root-admin modernize-autyzp">
                  <div className="MuiAvatar-root MuiAvatar-circular modernize-1cgq0jd">
                    <img
                      alt="Remy Sharp"
                      src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                      className="MuiAvatar-img modernize-1hy9t21"
                    />
                  </div>
                  <div className="MuiBox-root-admin modernize-0">
                    <h6 className="MuiTypography-root MuiTypography-h6 modernize-19nz88h">
                      Mathew
                    </h6>
                    <span className="MuiTypography-root MuiTypography-caption modernize-189il1r">
                      Designer
                    </span>
                  </div>
                  <div className="MuiBox-root-admin modernize-zdpt2t">
                    <a
                      className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeSmall modernize-1xhvhgj"
                      tabIndex="0"
                      aria-label="logout"
                      href="/auth/auth1/login"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-power"
                      >
                        <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
                        <path d="M12 4l0 8"></path>
                      </svg>
                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper modernize-y7ffhw">
          <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorDefault MuiAppBar-positionSticky modernize-19u6eqh">
            <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular modernize-84eiag">
              <button
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium modernize-1774owm"
                tabIndex="0"
                type="button"
                aria-label="menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-menu-2"
                >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </button>
              <button
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge modernize-33zpdj"
                tabIndex="0"
                type="button"
                aria-label="show 4 new mails"
                aria-controls="search-menu"
                aria-haspopup="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-search"
                >
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                  <path d="M21 21l-6 -6"></path>
                </svg>
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </button>
              <div className="MuiBox-root-admin modernize-0">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit modernize-1giavn0"
                  tabIndex="0"
                  type="button"
                  aria-label="show 11 new notifications"
                  aria-controls="msgs-menu"
                  aria-haspopup="true"
                >
                  Apps
                  <span className="MuiButton-endIcon MuiButton-iconSizeMedium modernize-pt151d">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-chevron-down"
                      style={{ marginLeft: "-5px", marginTop: "2px" }}
                    >
                      <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                  </span>
                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                </button>
              </div>
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit modernize-wwrdpl"
                tabIndex="0"
                href="/apps/chats"
              >
                Chat
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </a>
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit modernize-wwrdpl"
                tabIndex="0"
                href="/apps/calendar"
              >
                Calendar
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </a>
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit MuiButton-root MuiButton-text MuiButton-textInherit MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorInherit modernize-wwrdpl"
                tabIndex="0"
                href="/apps/email"
              >
                Email
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </a>
              <div className="MuiBox-root-admin modernize-i9gxme"></div>
              <div className="MuiStack-root modernize-csffzd">
                <button
                  className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium modernize-1yhx7lq"
                  tabIndex="0"
                  type="button"
                  aria-label="more"
                  id="long-button"
                  aria-haspopup="true"
                >
                  <div className="MuiAvatar-root MuiAvatar-circular modernize-1e490bp">
                    <img
                      alt="en"
                      src="https://modernize-nextjs.adminmart.com/images/flag/icon-flag-en.svg"
                      className="MuiAvatar-img modernize-1hy9t21"
                    />
                  </div>
                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                </button>
                <div className="MuiBox-root-admin modernize-0">
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge modernize-1d4ilhq"
                    tabIndex="0"
                    type="button"
                  >
                    <span className="MuiBadge-root modernize-1rzb3uu">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-shopping-cart"
                      >
                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M17 17h-11v-14h-2"></path>
                        <path d="M6 5l14 1l-1 7h-13"></path>
                      </svg>
                      <span className="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError modernize-tbixlu">
                        0
                      </span>
                    </span>
                    <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                  </button>
                </div>
                <div className="MuiBox-root-admin modernize-0">
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge modernize-1d4ilhq"
                    tabIndex="0"
                    type="button"
                    aria-label="show 11 new notifications"
                    aria-controls="msgs-menu"
                    aria-haspopup="true"
                  >
                    <span className="MuiBadge-root modernize-1rzb3uu">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-bell-ringing"
                      >
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                        <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"></path>
                        <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"></path>
                      </svg>
                      <span className="MuiBadge-badge MuiBadge-dot MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary modernize-1uvgfx2"></span>
                    </span>
                    <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                  </button>
                </div>
                <div className="MuiBox-root-admin modernize-0">
                  <button
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge modernize-1lealrw"
                    tabIndex="0"
                    type="button"
                    aria-label="show 11 new notifications"
                    aria-controls="msgs-menu"
                    aria-haspopup="true"
                  >
                    <div className="MuiAvatar-root MuiAvatar-circular modernize-rkpncm">
                      <img
                        alt="ProfileImg"
                        src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                        className="MuiAvatar-img modernize-1hy9t21"
                      />
                    </div>
                    <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="MuiContainer-root MuiContainer-maxWidthLg modernize-17i2v16">
            <div className="MuiBox-root-admin modernize-76jx17">
              <div>
                <div className="MuiBox-root-admin modernize-0">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-1h77wgb">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-12 modernize-15j76c0">
                      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-12m2me8">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-z9vtzs">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-user-male.a5b2d01a.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-drurxu">
                                Employees
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-j7o4h0">
                                96
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-9qnejo">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-briefcase.38d6d21c.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-1vqvic6">
                                Clients
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-35kfxg">
                                3,650
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-1d5q2y6">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-mailbox.5d05d1cf.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-krwhjh">
                                Projects
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-8vd6v9">
                                356
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-177kdpp">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-favorites.62841e4a.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-1p2fhyp">
                                Events
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-1241l">
                                696
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-5zfaq9">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-speech-bubble.51601a3f.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-ej1hkj">
                                Payroll
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-8yrplk">
                                $96k
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-gridLg-2 modernize-1e35mkm">
                          <div className="MuiBox-root-admin modernize-11nw8t4">
                            <div className="MuiCardContent-root modernize-18mhetb">
                              <img
                                alt="topcard.icon"
                                loading="lazy"
                                width="50"
                                height="50"
                                decoding="async"
                                dataNimg="1"
                                src="https://modernize-nextjs.adminmart.com/_next/static/media/icon-connect.37d0522d.svg"
                                style={{
                                  color: "transparent",
                                  marginLeft: "37.5px",
                                }}
                              />
                              <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-7l49vn">
                                Reports
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-t95uzb">
                                59
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-8 modernize-11d57x6">
                      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                        <div className="MuiCardContent-root modernize-t76ygq">
                          <div className="MuiStack-root modernize-1vfxu98">
                            <div className="MuiBox-root-admin modernize-0">
                              <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                Revenue Updates
                              </h5>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                Overview of Profit
                              </h6>
                            </div>
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-sizeSmall modernize-yr6l3j">
                              <div
                                tabIndex="0"
                                role="combobox"
                                aria-controls=":r5:"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-labelledby="month-dd month-dd"
                                id="month-dd"
                                className="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall modernize-b43eno"
                              >
                                March 2023
                              </div>
                              <input
                                aria-invalid="false"
                                aria-hidden="true"
                                tabIndex="-1"
                                className="MuiSelect-nativeInput modernize-1k3x8v3"
                                value="1"
                                name=":r6:"
                              />
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined modernize-1636szt"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ArrowDropDownIcon"
                              >
                                <path d="M7 10l5 5 5-5z"></path>
                              </svg>
                              <fieldset
                                aria-hidden="true"
                                className="MuiOutlinedInput-notchedOutline modernize-igs3ac"
                              >
                                <legend className="modernize-ihdtdm">
                                  <span className="notranslate">.</span>
                                </legend>
                              </fieldset>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-1h77wgb">
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 modernize-1iqiv84">
                              <div className="rounded-bars MuiBox-root-admin modernize-0">
                                <div
                                  // options="[object Object]"
                                  // series="[object Object],[object Object]"
                                  type="bar"
                                  height="360"
                                  width="100%"
                                  style={{ minHeight: "375px" }}
                                >
                                  <div
                                    id="apexchartsp1q6r8ad"
                                    className="apexcharts-canvas apexchartsp1q6r8ad apexcharts-themeLight"
                                    style={{ width: "457px", height: "360px" }}
                                  >
                                    <RevenueChart />

                                    <div className="apexcharts-tooltip apexcharts-themeLight">
                                      <div
                                        className="apexcharts-tooltip-title"
                                        style={{ fontSize: "12px" }}
                                      ></div>
                                      <div
                                        className="apexcharts-tooltip-series-group"
                                        style={{ order: "1" }}
                                      >
                                        <span
                                          className="apexcharts-tooltip-marker"
                                          style={{
                                            backgroundColor:
                                              "rgb(93, 135, 255)",
                                          }}
                                        ></span>
                                        <div
                                          className="apexcharts-tooltip-text"
                                          style={{ fontSize: "12px" }}
                                        >
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-yLabel"></span>
                                            <span className="apexcharts-tooltip-text-y-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-zLabel"></span>
                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="apexcharts-tooltip-series-group"
                                        style={{ order: "2" }}
                                      >
                                        <span
                                          className="apexcharts-tooltip-marker"
                                          style={{
                                            backgroundColor:
                                              "rgb(73, 190, 255)",
                                          }}
                                        ></span>
                                        <div
                                          className="apexcharts-tooltip-text"
                                          style={{ fontSize: "12px" }}
                                        >
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-yLabel"></span>
                                            <span className="apexcharts-tooltip-text-y-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-zLabel"></span>
                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                      <div className="apexcharts-yaxistooltip-text"></div>
                                    </div>
                                    <div
                                      className="apexcharts-toolbar"
                                      style={{ top: "0px", right: "3px" }}
                                    >
                                      <div
                                        className="apexcharts-menu-icon"
                                        title="Menu"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                          ></path>
                                          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                        </svg>
                                      </div>
                                      <div className="apexcharts-menu">
                                        <div
                                          className="apexcharts-menu-item exportSVG"
                                          title="Download SVG"
                                        >
                                          Download SVG
                                        </div>
                                        <div
                                          className="apexcharts-menu-item exportPNG"
                                          title="Download PNG"
                                        >
                                          Download PNG
                                        </div>
                                        <div
                                          className="apexcharts-menu-item exportCSV"
                                          title="Download CSV"
                                        >
                                          Download CSV
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 modernize-h3o6is">
                              <div className="MuiStack-root modernize-toquap">
                                <div className="MuiStack-root modernize-1x4jos1">
                                  <div className="MuiBox-root-admin modernize-1g36mrm">
                                    <h6 className="MuiTypography-root MuiTypography-h6 modernize-tb969r">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-grid-dots"
                                      >
                                        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                      </svg>
                                    </h6>
                                  </div>
                                  <div className="MuiBox-root-admin modernize-0">
                                    <h3 className="MuiTypography-root MuiTypography-h3 modernize-f3hoxo">
                                      $63,489.50
                                    </h3>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                      Total Earnings
                                    </h6>
                                  </div>
                                </div>
                              </div>
                              <div className="MuiStack-root modernize-1qrtkx5">
                                <div className="MuiStack-root modernize-jj2ztu">
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-1qjrupw">
                                    <svg
                                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback modernize-13y7ul3"
                                      focusable="false"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-testid="PersonIcon"
                                    >
                                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    </svg>
                                  </div>
                                  <div className="MuiBox-root-admin modernize-0">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-iu7z13">
                                      Earnings this month
                                    </h6>
                                    <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                      $48,820
                                    </h5>
                                  </div>
                                </div>
                                <div className="MuiStack-root modernize-jj2ztu">
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-ecz6wl">
                                    <svg
                                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback modernize-13y7ul3"
                                      focusable="false"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-testid="PersonIcon"
                                    >
                                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    </svg>
                                  </div>
                                  <div className="MuiBox-root-admin modernize-0">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-iu7z13">
                                      Expense this month
                                    </h6>
                                    <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                      $26,498
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth modernize-txw6jf"
                                tabIndex="0"
                                type="button"
                              >
                                View Full Report
                                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-4 modernize-1px0r2z">
                      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-1h77wgb">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-gridLg-12 modernize-1wkmp8i">
                          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                            <div className="MuiCardContent-root modernize-t76ygq">
                              <div className="MuiStack-root modernize-1vfxu98">
                                <div className="MuiBox-root-admin modernize-0">
                                  <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                    Yearly Breakup
                                  </h5>
                                </div>
                              </div>
                              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-1h77wgb">
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-7 MuiGrid-grid-sm-7 modernize-7vy65v">
                                  <h3 className="MuiTypography-root MuiTypography-h3 modernize-f3hoxo">
                                    $36,358
                                  </h3>
                                  <div className="MuiStack-root modernize-1gmmy3l">
                                    <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-10hsc5x">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#39B69A"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-arrow-upLeft"
                                      >
                                        <path d="M7 7l10 10"></path>
                                        <path d="M16 7l-9 0l0 9"></path>
                                      </svg>
                                    </div>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                      +9%
                                    </h6>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                      last year
                                    </h6>
                                  </div>
                                  <div className="MuiStack-root modernize-1gxgbzi">
                                    <div className="MuiStack-root modernize-csffzd">
                                      <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-186i19t">
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback modernize-13y7ul3"
                                          focusable="false"
                                          aria-hidden="true"
                                          viewBox="0 0 24 24"
                                          data-testid="PersonIcon"
                                        >
                                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg>
                                      </div>
                                      <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                        2023
                                      </h6>
                                    </div>
                                    <div className="MuiStack-root modernize-csffzd">
                                      <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-1b4e5v">
                                        <svg
                                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback modernize-13y7ul3"
                                          focusable="false"
                                          aria-hidden="true"
                                          viewBox="0 0 24 24"
                                          data-testid="PersonIcon"
                                        >
                                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg>
                                      </div>
                                      <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                        2023
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5 MuiGrid-grid-sm-5 modernize-8e4lkk">
                                  <div
                                    // options="[object Object]"
                                    // series="38,40,25"
                                    type="donut"
                                    height="150"
                                    width="100%"
                                    style={{ minHeight: "128.7px" }}
                                  >
                                    <div
                                      id="apexcharts7qatjqaa"
                                      className="apexcharts-canvas apexcharts7qatjqaa apexcharts-themeLight"
                                      style={{
                                        width: "113px",
                                        height: "128.7px",
                                      }}
                                    >
                                      <YearlyChart />
                                      <div className="apexcharts-tooltip apexcharts-themeLight">
                                        <div
                                          className="apexcharts-tooltip-series-group"
                                          style={{ order: "1" }}
                                        >
                                          <span
                                            className="apexcharts-tooltip-marker"
                                            style={{
                                              backgroundColor:
                                                "rgb(93, 135, 255)",
                                            }}
                                          ></span>
                                          <div
                                            className="apexcharts-tooltip-text"
                                            style={{ fontSize: "12px" }}
                                          >
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-yLabel"></span>
                                              <span className="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                              <span className="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-zLabel"></span>
                                              <span className="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="apexcharts-tooltip-series-group"
                                          style={{ order: "2" }}
                                        >
                                          <span
                                            className="apexcharts-tooltip-marker"
                                            style={{
                                              backgroundColor:
                                                "rgb(236, 242, 255)",
                                            }}
                                          ></span>
                                          <div
                                            className="apexcharts-tooltip-text"
                                            style={{ fontSize: "12px" }}
                                          >
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-yLabel"></span>
                                              <span className="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                              <span className="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-zLabel"></span>
                                              <span className="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="apexcharts-tooltip-series-group"
                                          style={{ order: "3" }}
                                        >
                                          <span
                                            className="apexcharts-tooltip-marker"
                                            style={{
                                              backgroundColor:
                                                "rgb(249, 249, 253)",
                                            }}
                                          ></span>
                                          <div
                                            className="apexcharts-tooltip-text"
                                            style={{ fontSize: "12px" }}
                                          >
                                            <div className="apexcharts-tooltip-y-group">
                                              <span className="apexcharts-tooltip-text-yLabel"></span>
                                              <span className="apexcharts-tooltip-text-y-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-goals-group">
                                              <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                              <span className="apexcharts-tooltip-text-goals-value"></span>
                                            </div>
                                            <div className="apexcharts-tooltip-z-group">
                                              <span className="apexcharts-tooltip-text-zLabel"></span>
                                              <span className="apexcharts-tooltip-text-z-value"></span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-gridLg-12 modernize-1wkmp8i">
                          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                            <div className="MuiCardContent-root modernize-t76ygq">
                              <div className="MuiStack-root modernize-1vfxu98">
                                <div className="MuiBox-root-admin modernize-0">
                                  <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                    Monthly Earnings
                                  </h5>
                                </div>
                                <button
                                  className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeMedium MuiFab-secondary MuiFab-root MuiFab-circular MuiFab-sizeMedium MuiFab-secondary modernize-zwoerp"
                                  tabIndex="0"
                                  type="button"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-currency-dollar"
                                  >
                                    <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                                    <path d="M12 3v3m0 12v3"></path>
                                  </svg>
                                  <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                                </button>
                              </div>
                              <h3 className="MuiTypography-root MuiTypography-h3 modernize-18do7b4">
                                $6,820
                              </h3>
                              <div className="MuiStack-root modernize-q4nuaw">
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-1anpa5q">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FA896B"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-arrow-down-right"
                                  >
                                    <path d="M7 7l10 10"></path>
                                    <path d="M17 8l0 9l-9 0"></path>
                                  </svg>
                                </div>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +9%
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                  last year
                                </h6>
                              </div>
                            </div>
                            <div
                              // options="[object Object]"
                              // series="[object Object]"
                              type="area"
                              height="60"
                              width="100%"
                              style={{ minHeight: "60px" }}
                            >
                              <div
                                id="apexchartsj0zv6i6y"
                                className="apexcharts-canvas apexchartsj0zv6i6y apexcharts-themeLight"
                                style={{ width: "398px", height: "60px" }}
                              >
                                <EarningChart />
                                <div className="apexcharts-tooltip apexcharts-themeLight">
                                  <div
                                    className="apexcharts-tooltip-title"
                                    style={{ fontSize: "12px" }}
                                  ></div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: "1" }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(73, 190, 255)",
                                      }}
                                    ></span>
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-yLabel"></span>
                                        <span className="apexcharts-tooltip-text-y-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-zLabel"></span>
                                        <span className="apexcharts-tooltip-text-z-value"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                  <div className="apexcharts-yaxistooltip-text"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-4 modernize-1px0r2z">
                      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                        <div className="MuiCardContent-root modernize-t76ygq">
                          <div className="MuiBox-root-admin modernize-0">
                            <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                              Employee Salary
                            </h5>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                              Every month
                            </h6>
                          </div>
                          <div className="MuiBox-root-admin modernize-c17y0q">
                            <div
                              // options="[object Object]"
                              // series="[object Object]"
                              type="bar"
                              height="280"
                              width="100%"
                              style={{ minHeight: "295px" }}
                            >
                              <div
                                id="apexcharts22v0p75d"
                                className="apexcharts-canvas apexcharts22v0p75d apexcharts-themeLight"
                                style={{ width: "307px", height: "280px" }}
                              >
                                <SalaryChart />
                                <div className="apexcharts-tooltip apexcharts-themeLight">
                                  <div
                                    className="apexcharts-tooltip-title"
                                    style={{ fontSize: "12px" }}
                                  ></div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: "1" }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(242, 246, 250)",
                                      }}
                                    ></span>
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-yLabel"></span>
                                        <span className="apexcharts-tooltip-text-y-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-zLabel"></span>
                                        <span className="apexcharts-tooltip-text-z-value"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                  <div className="apexcharts-yaxistooltip-text"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiStack-root modernize-yblpyc">
                            <div className="MuiStack-root modernize-1x4jos1">
                              <div className="MuiBox-root-admin modernize-18fcgf6">
                                <p className="MuiTypography-root MuiTypography-body1 modernize-2ozexr">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-grid-dots"
                                  >
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                  </svg>
                                </p>
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                  Salary
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-h6 modernize-1i82xty">
                                  $36,358
                                </h6>
                              </div>
                            </div>
                            <div className="MuiStack-root modernize-1x4jos1">
                              <div className="MuiBox-root-admin modernize-1pdghbb">
                                <p className="MuiTypography-root MuiTypography-body1 modernize-15x1qs4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-grid-dots"
                                  >
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                  </svg>
                                </p>
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                  Profit
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-h6 modernize-1i82xty">
                                  $5,296
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-4 modernize-1px0r2z">
                      <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-1h77wgb">
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 modernize-rpybyc">
                          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                            <div className="MuiCardContent-root modernize-t76ygq">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                Customers
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-zlohor">
                                36,358
                              </h4>
                              <div className="MuiStack-root modernize-1gmmy3l">
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-p2ugae">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FA896B"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-arrow-down-right"
                                  >
                                    <path d="M7 7l10 10"></path>
                                    <path d="M17 8l0 9l-9 0"></path>
                                  </svg>
                                </div>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +9%
                                </h6>
                              </div>
                            </div>
                            <div className="MuiBox-root-admin modernize-4tnojn">
                              <div
                                // options="[object Object]"
                                // series="[object Object]"
                                type="area"
                                height="80"
                                width="100%"
                                style={{ minHeight: "80px" }}
                              >
                                <div
                                  id="apexchartss4lkaexg"
                                  className="apexcharts-canvas apexchartss4lkaexg apexcharts-themeLight"
                                  style={{ width: "201px", height: "80px" }}
                                >
                                  <CustomerChart />
                                  <div className="apexcharts-tooltip apexcharts-themeLight">
                                    <div
                                      className="apexcharts-tooltip-series-group"
                                      style={{ order: "1" }}
                                    >
                                      <span
                                        className="apexcharts-tooltip-marker"
                                        style={{
                                          backgroundColor: "rgb(73, 190, 255)",
                                        }}
                                      ></span>
                                      <div
                                        className="apexcharts-tooltip-text"
                                        style={{ fontSize: "12px" }}
                                      >
                                        <div className="apexcharts-tooltip-y-group">
                                          <span className="apexcharts-tooltip-text-yLabel"></span>
                                          <span className="apexcharts-tooltip-text-y-value"></span>
                                        </div>
                                        <div className="apexcharts-tooltip-goals-group">
                                          <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                          <span className="apexcharts-tooltip-text-goals-value"></span>
                                        </div>
                                        <div className="apexcharts-tooltip-z-group">
                                          <span className="apexcharts-tooltip-text-zLabel"></span>
                                          <span className="apexcharts-tooltip-text-z-value"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                    <div className="apexcharts-yaxistooltip-text"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 modernize-rpybyc">
                          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                            <div className="MuiCardContent-root modernize-t76ygq">
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                Projects
                              </h6>
                              <h4 className="MuiTypography-root MuiTypography-h4 modernize-zlohor">
                                78,298
                              </h4>
                              <div className="MuiStack-root modernize-q4nuaw">
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-a39f3p">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#39B69A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-arrow-upLeft"
                                  >
                                    <path d="M7 7l10 10"></path>
                                    <path d="M16 7l-9 0l0 9"></path>
                                  </svg>
                                </div>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +9%
                                </h6>
                              </div>
                              <div className="MuiBox-root-admin modernize-4tnojn">
                                <div
                                  // options="[object Object]"
                                  // series="[object Object]"
                                  type="bar"
                                  height="80"
                                  width="100%"
                                  style={{ minHeight: "80px" }}
                                >
                                  <div
                                    id="apexcharts9rf9v7q5g"
                                    className="apexcharts-canvas apexcharts9rf9v7q5g apexcharts-themeLight"
                                    style={{ width: "120px", height: "80px" }}
                                  >
                                    <ProjectChart />
                                    <div className="apexcharts-tooltip apexcharts-themeLight">
                                      <div
                                        className="apexcharts-tooltip-series-group"
                                        style={{ order: "1" }}
                                      >
                                        <span
                                          className="apexcharts-tooltip-marker"
                                          style={{
                                            backgroundColor:
                                              "rgb(93, 135, 255)",
                                          }}
                                        ></span>
                                        <div
                                          className="apexcharts-tooltip-text"
                                          style={{ fontSize: "12px" }}
                                        >
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-yLabel"></span>
                                            <span className="apexcharts-tooltip-text-y-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                            <span className="apexcharts-tooltip-text-goals-value"></span>
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-zLabel"></span>
                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                      <div className="apexcharts-yaxistooltip-text"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 modernize-15j76c0">
                          <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                            <div className="MuiCardContent-root modernize-t76ygq">
                              <div className="MuiStack-root modernize-jj2ztu">
                                <div className="MuiAvatar-root MuiAvatar-circular modernize-fpy2ez">
                                  <img
                                    alt="ProfileImg"
                                    src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                                    className="MuiAvatar-img modernize-1hy9t21"
                                  />
                                </div>
                                <div className="MuiBox-root-admin modernize-0">
                                  <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                    Super awesome, Vue coming soon!
                                  </h5>
                                  <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                    22 March, 2023
                                  </h6>
                                </div>
                              </div>
                              <div className="MuiStack-root modernize-1jpwfib">
                                <div className="MuiAvatarGroup-root modernize-1mceequ">
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatarGroup-avatar modernize-1bzm6af">
                                    <img
                                      alt="Agnes Walker"
                                      src="https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg"
                                      className="MuiAvatar-img modernize-1hy9t21"
                                    />
                                  </div>
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatarGroup-avatar modernize-1bzm6af">
                                    <img
                                      alt="Cindy Baker"
                                      src="https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg"
                                      className="MuiAvatar-img modernize-1hy9t21"
                                    />
                                  </div>
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatarGroup-avatar modernize-1bzm6af">
                                    <img
                                      alt="Travis Howard"
                                      src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg"
                                      className="MuiAvatar-img modernize-1hy9t21"
                                    />
                                  </div>
                                  <div className="MuiAvatar-root MuiAvatar-circular MuiAvatarGroup-avatar modernize-1bzm6af">
                                    <img
                                      alt="Remy Sharp"
                                      src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                                      className="MuiAvatar-img modernize-1hy9t21"
                                    />
                                  </div>
                                </div>
                                <Link to="/admin-dashboard">
                                  <div className="MuiBox-root-admin modernize-1g36mrm">
                                    <p className="MuiTypography-root MuiTypography-body1 modernize-2ozexr">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-message-2"
                                      >
                                        <path d="M8 9h8"></path>
                                        <path d="M8 13h6"></path>
                                        <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
                                      </svg>
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-4 modernize-1px0r2z">
                      <div className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded modernize-1wzjkg9">
                        <div className="MuiCardContent-root modernize-18mhetb">
                          <h5 className="MuiTypography-root MuiTypography-h5 modernize-1twmrae">
                            Best selling products
                          </h5>
                          <h6 className="MuiTypography-root MuiTypography-subtitle1 modernize-1lu50ni">
                            Overview 2023
                          </h6>
                          <div className="MuiBox-root-admin modernize-1v83ptp">
                            <img
                              alt="SavingsImg"
                              loading="lazy"
                              width="300"
                              height="213"
                              decoding="async"
                              dataNimg="1"
                              srcSet="https://modernize-nextjs.adminmart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpiggy.f78b1ebb.png&amp;w=384&amp;q=75  1x,https://modernize-nextjs.adminmart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpiggy.f78b1ebb.png&amp;w=640&amp;q=75  2x"
                              src="https://modernize-nextjs.adminmart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpiggy.f78b1ebb.png&amp;w=640&amp;q=75"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 modernize-1uq5ujq">
                          <div className="MuiBox-root-admin modernize-19kzrtu">
                            <div className="MuiStack-root modernize-1orv6po">
                              <div className="MuiBox-root-admin modernize-0">
                                <div className="MuiStack-root modernize-91osnw">
                                  <div className="MuiBox-root-admin modernize-0">
                                    <h6 className="MuiTypography-root MuiTypography-h6 modernize-19nz88h">
                                      MaterialPro
                                    </h6>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                      $23,568
                                    </h6>
                                  </div>
                                  <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault modernize-1blofbg">
                                    <span className="MuiChipLabel MuiChipLabelMedium modernize-14vsv3w">
                                      55%
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate modernize-1j8fyya"
                                  role="progressbar"
                                  aria-valuenow="55"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate modernizeLn84es"
                                    style={{ transform: "translateX(-45%)" }}
                                  ></span>
                                </span>
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <div className="MuiStack-root modernize-91osnw">
                                  <div className="MuiBox-root-admin modernize-0">
                                    <h6 className="MuiTypography-root MuiTypography-h6 modernize-19nz88h">
                                      Flexy Admin
                                    </h6>
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                      $23,568
                                    </h6>
                                  </div>
                                  <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault modernize-1eqvd46">
                                    <span className="MuiChipLabel MuiChipLabelMedium modernize-14vsv3w">
                                      20%
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className="MuiLinearProgress-root MuiLinearProgress-colorSecondary MuiLinearProgress-determinate modernize-1r9y20o"
                                  role="progressbar"
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span
                                    className="MuiLinearProgress-bar MuiLinearProgress-barColorSecondary MuiLinearProgress-bar1Determinate modernize-1f5fx6v"
                                    style={{ transform: "translateX(-80%)" }}
                                  ></span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-4 modernize-1px0r2z">
                      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                        <div className="MuiCardContent-root modernize-t76ygq">
                          <div className="MuiStack-root modernize-1vfxu98">
                            <div className="MuiBox-root-admin modernize-0">
                              <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                Weekly Stats
                              </h5>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                Average sales
                              </h6>
                            </div>
                          </div>
                          <div className="MuiStack-root modernize-mikfal">
                            <div
                              // options="[object Object]"
                              // series="[object Object]"
                              type="area"
                              height="130"
                              width="100%"
                              style={{ minHeight: "130px" }}
                            >
                              <div
                                id="apexchartsasxqyqih"
                                className="apexcharts-canvas apexchartsasxqyqih apexcharts-themeLight"
                                style={{ width: "339px", height: "130px" }}
                              >
                                <WeeklyChart />
                                <div className="apexcharts-tooltip apexcharts-themeLight">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: "1" }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(93, 135, 255)",
                                      }}
                                    ></span>
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{ fontSize: "12px" }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-yLabel"></span>
                                        <span className="apexcharts-tooltip-text-y-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goalsLabel"></span>
                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-zLabel"></span>
                                        <span className="apexcharts-tooltip-text-z-value"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltipLeft apexcharts-themeLight">
                                  <div className="apexcharts-yaxistooltip-text"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="MuiStack-root modernize-toquap">
                            <div className="MuiStack-root modernize-1xanggh">
                              <div className="MuiStack-root modernize-1x4jos1">
                                <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault modernize-puz3he">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-grid-dots"
                                  >
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                  </svg>
                                </div>
                                <div className="MuiBox-root-admin modernize-0">
                                  <h6 className="MuiTypography-root MuiTypography-h6 modernize-1kg98ev">
                                    Top Sales
                                  </h6>
                                  <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                    Johnathan Doe
                                  </h6>
                                </div>
                              </div>
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-1gy6nor">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +68
                                </h6>
                              </div>
                            </div>
                            <div className="MuiStack-root modernize-1xanggh">
                              <div className="MuiStack-root modernize-1x4jos1">
                                <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault modernize-1ia2yge">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-grid-dots"
                                  >
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                  </svg>
                                </div>
                                <div className="MuiBox-root-admin modernize-0">
                                  <h6 className="MuiTypography-root MuiTypography-h6 modernize-1kg98ev">
                                    Best Seller
                                  </h6>
                                  <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                    Footware
                                  </h6>
                                </div>
                              </div>
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-6tef67">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +45
                                </h6>
                              </div>
                            </div>
                            <div className="MuiStack-root modernize-1xanggh">
                              <div className="MuiStack-root modernize-1x4jos1">
                                <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault modernize-16mwppq">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-grid-dots"
                                  >
                                    <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                  </svg>
                                </div>
                                <div className="MuiBox-root-admin modernize-0">
                                  <h6 className="MuiTypography-root MuiTypography-h6 modernize-1kg98ev">
                                    Most Commented
                                  </h6>
                                  <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                    Fashionware
                                  </h6>
                                </div>
                              </div>
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault modernize-18myw6g">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                  +14
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-gridLg-8 modernize-11d57x6">
                      <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 MuiCard-root modernize-eajgbi">
                        <div className="MuiCardContent-root modernize-t76ygq">
                          <div className="MuiStack-root modernize-1vfxu98">
                            <div className="MuiBox-root-admin modernize-0">
                              <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                                Top Projects
                              </h5>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                                Best Products
                              </h6>
                            </div>
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-sizeSmall modernize-yr6l3j">
                              <div
                                tabIndex="0"
                                role="combobox"
                                aria-controls=":r2:"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-labelledby="month-dd month-dd"
                                id="month-dd"
                                className="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall modernize-b43eno"
                              >
                                March 2023
                              </div>
                              <input
                                aria-invalid="false"
                                aria-hidden="true"
                                tabIndex="-1"
                                className="MuiSelect-nativeInput modernize-1k3x8v3"
                                value="1"
                                name=":r3:"
                              />
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined modernize-1636szt"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ArrowDropDownIcon"
                              >
                                <path d="M7 10l5 5 5-5z"></path>
                              </svg>
                              <fieldset
                                aria-hidden="true"
                                className="MuiOutlinedInput-notchedOutline modernize-igs3ac"
                              >
                                <legend className="modernize-ihdtdm">
                                  <span className="notranslate">.</span>
                                </legend>
                              </fieldset>
                            </div>
                          </div>
                          <div className="MuiTableContainer-root modernize-kge0eu">
                            <table
                              className="MuiTable-root modernize-1nu9omc"
                              aria-label="simple table"
                            >
                              <thead className="MuiTableHead-root modernize-1wbz3t9">
                                <tr className="MuiTableRow-root MuiTableRow-head modernize-1my6p55">
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium modernize-1t36v8j"
                                    scope="col"
                                  >
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                      Assigned
                                    </h6>
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium modernize-1t36v8j"
                                    scope="col"
                                  >
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                      Project
                                    </h6>
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium modernize-1t36v8j"
                                    scope="col"
                                  >
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                      Priority
                                    </h6>
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium modernize-1t36v8j"
                                    scope="col"
                                  >
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                      Budget
                                    </h6>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="MuiTableBody-root modernize-1xnox0e">
                                <tr className="MuiTableRow-root modernize-1my6p55">
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiStack-root modernize-jj2ztu">
                                      <div className="MuiAvatar-root MuiAvatar-circular modernizeL36c7f">
                                        <img
                                          alt="/images/profile/user-1.jpg"
                                          src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                                          className="MuiAvatar-img modernize-1hy9t21"
                                        />
                                      </div>
                                      <div className="MuiBox-root-admin modernize-0">
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                          Sunil Joshi
                                        </h6>
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1977gxc">
                                          Web Designer
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-16l9as4">
                                      Elite Admin
                                    </h6>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-filledDefault modernize-1n81rgv">
                                      <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                        Low
                                      </span>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1kzeih0">
                                      $3.9k
                                    </h6>
                                  </td>
                                </tr>
                                <tr className="MuiTableRow-root modernize-1my6p55">
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiStack-root modernize-jj2ztu">
                                      <div className="MuiAvatar-root MuiAvatar-circular modernizeL36c7f">
                                        <img
                                          alt="/images/profile/user-2.jpg"
                                          src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg"
                                          className="MuiAvatar-img modernize-1hy9t21"
                                        />
                                      </div>
                                      <div className="MuiBox-root-admin modernize-0">
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                          John Deo
                                        </h6>
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1977gxc">
                                          Web Developer
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-16l9as4">
                                      Flexy Admin
                                    </h6>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-filledDefault modernize-1mz7v51">
                                      <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                        Medium
                                      </span>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1kzeih0">
                                      $24.5k
                                    </h6>
                                  </td>
                                </tr>
                                <tr className="MuiTableRow-root modernize-1my6p55">
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiStack-root modernize-jj2ztu">
                                      <div className="MuiAvatar-root MuiAvatar-circular modernizeL36c7f">
                                        <img
                                          alt="/images/profile/user-3.jpg"
                                          src="https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg"
                                          className="MuiAvatar-img modernize-1hy9t21"
                                        />
                                      </div>
                                      <div className="MuiBox-root-admin modernize-0">
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                          Nirav Joshi
                                        </h6>
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1977gxc">
                                          Web Manager
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-16l9as4">
                                      Material Pro
                                    </h6>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-filledDefault modernize-cl41lz">
                                      <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                        High
                                      </span>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1kzeih0">
                                      $12.8k
                                    </h6>
                                  </td>
                                </tr>
                                <tr className="MuiTableRow-root modernize-1my6p55">
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiStack-root modernize-jj2ztu">
                                      <div className="MuiAvatar-root MuiAvatar-circular modernizeL36c7f">
                                        <img
                                          alt="/images/profile/user-4.jpg"
                                          src="https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg"
                                          className="MuiAvatar-img modernize-1hy9t21"
                                        />
                                      </div>
                                      <div className="MuiBox-root-admin modernize-0">
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1d0dyr1">
                                          Yuvraj Sheth
                                        </h6>
                                        <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1977gxc">
                                          Project Manager
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-16l9as4">
                                      Xtreme Admin
                                    </h6>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorDefault MuiChip-filledDefault modernize-79ipok">
                                      <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                                        Very High
                                      </span>
                                    </div>
                                  </td>
                                  <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium modernize-cfdn9v">
                                    <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1kzeih0">
                                      $2.4k
                                    </h6>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-primary MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-primary modernize-vix2ke"
              tabIndex="0"
              type="button"
              aria-label="settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-settings"
              >
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
              <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
            </button>
          </div>
        </div>
      </div>
      <svg
        id="SvgjsSvg1391"
        width="2"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        // xmlns-xlink="http://www.w3.org/1999/xlink"
        // xmlns-svgjs="http://svgjs.dev"
        style={{
          overflow: "hidden",
          top: "-100%",
          left: "-100%",
          position: "absolute",
          opacity: "0",
        }}
      >
        <defs id="SvgjsDefs1392"></defs>
        <polyline id="SvgjsPolyline1393" points="0,0"></polyline>
        <path
          id="SvgjsPath1394"
          d="M-1 162.5L-1 162.5C-1 162.5 77 162.5 77 162.5C77 162.5 154 162.5 154 162.5C154 162.5 230.99999999999997 162.5 230.99999999999997 162.5C230.99999999999997 162.5 308 162.5 308 162.5C308 162.5 308 162.5 308 162.5C308 162.5 308 162.5 308 162.5 "
        ></path>
      </svg>
      <div
        role="presentation"
        id="msgs-menu"
        className="MuiPopover-root MuiMenu-root MuiModal-root MuiModal-hidden modernize-1f2zz5j"
        aria-hidden="true"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop modernize-esi9ax"
          style={{ opacity: "0", visibility: "hidden" }}
        ></div>
        <div tabIndex="-1" data-testid="sentinelStart"></div>
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper modernize-dnc1y7"
          tabIndex="-1"
          style={{
            opacity: "0",
            transform: "scale(0.75, 0.5625)",
            visibility: "hidden",
          }}
        >
          <ul
            className="MuiList-root MuiList-padding MuiMenuList modernize-r8u8y9"
            role="menu"
            tabIndex="-1"
          >
            <div
              className="MuiGrid-root MuiGrid-container modernize-1d3bbye"
              tabIndex="0"
            >
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-8 modernize-1ox5ryr">
                <div className="MuiBox-root-admin modernize-phjzei">
                  <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 modernize-66su3c">
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/chats">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-chat.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-chat.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Chat Application
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              New messages arrived
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a
                        className="hover-text-primary"
                        href="/apps/ecommerce/shop"
                      >
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-cart.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-cart.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              eCommerce App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              New stock available
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/notes">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-invoice.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-invoice.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Notes App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              To-do and Daily tasks
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/calendar">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-date.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-date.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Calendar App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              Get dates
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/contacts">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-mobile.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-mobile.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Contact Application
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              2 Unsaved Contacts
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/tickets">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-ddLifebuoy.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-ddLifebuoy.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Tickets App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              Submit tickets
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/email">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-message-box.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-message-box.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Email App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              Get new emails
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="MuiGrid-root MuiGrid-item MuiGrid-gridLg-6 modernize-11uz27b">
                      <a className="hover-text-primary" href="/apps/blog/post">
                        <div className="MuiStack-root modernize-jj2ztu">
                          <div className="MuiBox-root-admin modernize-1d0t4g1">
                            <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                              <img
                                alt="/images/svgs/icon-dd-application.svg"
                                src="https://modernize-nextjs.adminmart.com/images/svgs/icon-dd-application.svg"
                                className="MuiAvatar-img modernize-1hy9t21"
                              />
                            </div>
                          </div>
                          <div className="MuiBox-root-admin modernize-0">
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                              Blog App
                            </h6>
                            <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-h8qulu">
                              added new blog
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <hr className="MuiDivider-root MuiDivider-fullWidth modernize-1pza92q" />
                  <div className="MuiBox-root-admin modernize-1ekrh7y">
                    <a href="/faq">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-14uiit2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="tabler-icon tabler-icon-help"
                        >
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                          <path d="M12 17l0 .01"></path>
                          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                        </svg>
                        Frequently Asked Questions
                      </h6>
                    </a>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium modernize-169rga5"
                      tabIndex="0"
                      type="button"
                    >
                      Check
                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                    </button>
                  </div>
                </div>
                <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical modernize-18o9w0c" />
              </div>
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-4 modernize-1udr1mz">
                <div className="MuiBox-root-admin modernize-1wcaknn">
                  <h5 className="MuiTypography-root MuiTypography-h5 modernize-17loaeg">
                    Quick Links
                  </h5>
                  <div className="MuiStack-root modernize-tp5b2c">
                    <a
                      className="hover-text-primary"
                      href="/theme-pages/pricing"
                    >
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Pricing Page
                      </h6>
                    </a>
                    <a className="hover-text-primary" href="/auth/auth1/login">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Authentication Design
                      </h6>
                    </a>
                    <a
                      className="hover-text-primary"
                      href="/auth/auth1/register"
                    >
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Register Now
                      </h6>
                    </a>
                    <a className="hover-text-primary" href="/404">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        404 Error Page
                      </h6>
                    </a>
                    <a className="hover-text-primary" href="/apps/note">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Notes App
                      </h6>
                    </a>
                    <a
                      className="hover-text-primary"
                      href="/apps/user-profile/profile"
                    >
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        User Application
                      </h6>
                    </a>
                    <a className="hover-text-primary" href="/apps/blog/post">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Blog Design
                      </h6>
                    </a>
                    <a
                      className="hover-text-primary"
                      href="/apps/ecommerce/checkout"
                    >
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 text-hover modernize-pt0zwc">
                        Shopping Cart
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div tabIndex="-1" data-testid="sentinelEnd"></div>
      </div>
      <div
        role="presentation"
        id="msgs-menu"
        className="MuiPopover-root MuiMenu-root MuiModal-root MuiModal-hidden modernize-1acc5it"
        aria-hidden="true"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop modernize-esi9ax"
          style={{ opacity: "0", visibility: "hidden" }}
        ></div>
        <div tabIndex="-1" data-testid="sentinelStart"></div>
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper modernize-dnc1y7"
          tabIndex="-1"
          style={{
            opacity: "0",
            transform: "scale(0.75, 0.5625)",
            visibility: "hidden",
          }}
        >
          <ul
            className="MuiList-root MuiList-padding MuiMenuList modernize-r8u8y9"
            role="menu"
            tabIndex="-1"
          >
            <div className="MuiStack-root modernize-q9pkbu" tabIndex="0">
              <h6 className="MuiTypography-root MuiTypography-h6 modernize-19nz88h">
                Notifications
              </h6>
              <div className="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorPrimary MuiChip-filledPrimary modernize-now1gd">
                <span className="MuiChipLabel MuiChipLabelSmall modernize-tavflp">
                  5 new
                </span>
              </div>
            </div>
            <div
              data-simplebar="init"
              className="modernize-ug246w simplebar-scrollable-y"
            >
              <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: "0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      tabIndex="0"
                      role="region"
                      aria-label="scrollable content"
                      style={{ height: "100%", overflow: "hidden scroll" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: "0px" }}
                      >
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-1.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  Roman Joined the Team!
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Congratulate him
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-2.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  New message received
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Salma sent you new message
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-3.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  New Payment received
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Check your earnings
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-4.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  Jolly completed tasks
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Assign her new tasks
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-1.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  Roman Joined the Team!
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Congratulate him
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-2.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  New message received
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Salma sent you new message
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-3.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  New Payment received
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Check your earnings
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                        <div className="MuiBox-root-admin modernize-0">
                          <li
                            className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters modernize-1uiqpo2"
                            tabIndex="-1"
                            role="menuitem"
                          >
                            <div className="MuiStack-root modernize-jj2ztu">
                              <div className="MuiAvatar-root MuiAvatar-circular modernize-a9t5ir">
                                <img
                                  alt="/images/profile/user-4.jpg"
                                  src="https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg"
                                  className="MuiAvatar-img modernize-1hy9t21"
                                />
                              </div>
                              <div className="MuiBox-root-admin modernize-0">
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1nuow1f">
                                  Jolly completed tasks
                                </h6>
                                <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                                  Assign her new tasks
                                </h6>
                              </div>
                            </div>
                            <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: "360px", height: "640px" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: "0px", display: "none" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "visible" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: "231px",
                    transform: "translate3d(0px, 0px, 0px)",
                    display: "block",
                  }}
                ></div>
              </div>
            </div>
            <div className="MuiBox-root-admin modernize-1j30m50">
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-fullWidth modernize-1e7c9k9"
                tabIndex="0"
                href="/apps/email"
              >
                See all Notifications
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </a>
            </div>
          </ul>
        </div>
        <div tabIndex="-1" data-testid="sentinelEnd"></div>
      </div>
      <div
        role="presentation"
        id="msgs-menu"
        className="MuiPopover-root MuiMenu-root MuiModal-root MuiModal-hidden modernize-1ykkkgt"
        aria-hidden="true"
      >
        <div
          aria-hidden="true"
          className="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop modernize-esi9ax"
          style={{ opacity: "0", visibility: "hidden" }}
        ></div>
        <div tabIndex="-1" data-testid="sentinelStart"></div>
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper modernize-dnc1y7"
          tabIndex="-1"
          style={{
            opacity: "0",
            transform: "scale(0.75, 0.5625)",
            visibility: "hidden",
          }}
        >
          <ul
            className="MuiList-root MuiList-padding MuiMenuList modernize-r8u8y9"
            role="menu"
            tabIndex="-1"
          >
            <h5
              className="MuiTypography-root MuiTypography-h5 modernize-17loaeg"
              tabIndex="0"
            >
              User Profile
            </h5>
            <div className="MuiStack-root modernize-ynv2d5">
              <div className="MuiAvatar-root MuiAvatar-circular modernize-1hzmjgm">
                <img
                  alt="ProfileImg"
                  src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
                  className="MuiAvatar-img modernize-1hy9t21"
                />
              </div>
              <div className="MuiBox-root-admin modernize-0">
                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-pt0zwc">
                  Mathew Anderson
                </h6>
                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-1mvnjtp">
                  Designer
                </h6>
                <h6 className="MuiTypography-root MuiTypography-subtitle2 modernize-17pgvj">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-mail"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                  info@modernize.com
                </h6>
              </div>
            </div>
            <hr className="MuiDivider-root MuiDivider-fullWidth modernize-1pza92q" />
            <div className="MuiBox-root-admin modernize-0">
              <div className="hover-text-primary MuiBox-root-admin modernize-1yyviwt">
                <a href="/apps/user-profile/profile">
                  <div className="MuiStack-root modernize-jj2ztu">
                    <div className="MuiBox-root-admin modernize-1xuaw9x">
                      <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                        <img
                          alt="/images/svgs/icon-account.svg"
                          src="https://modernize-nextjs.adminmart.com/images/svgs/icon-account.svg"
                          className="MuiAvatar-img modernize-1hy9t21"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root-admin modernize-0">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                        My Profile
                      </h6>
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                        Account Settings
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="MuiBox-root-admin modernize-0">
              <div className="hover-text-primary MuiBox-root-admin modernize-1yyviwt">
                <a href="/apps/email">
                  <div className="MuiStack-root modernize-jj2ztu">
                    <div className="MuiBox-root-admin modernize-1xuaw9x">
                      <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                        <img
                          alt="/images/svgs/icon-inbox.svg"
                          src="https://modernize-nextjs.adminmart.com/images/svgs/icon-inbox.svg"
                          className="MuiAvatar-img modernize-1hy9t21"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root-admin modernize-0">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                        My Inbox
                      </h6>
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                        Messages &amp; Emails
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="MuiBox-root-admin modernize-0">
              <div className="hover-text-primary MuiBox-root-admin modernize-1yyviwt">
                <a href="/apps/notes">
                  <div className="MuiStack-root modernize-jj2ztu">
                    <div className="MuiBox-root-admin modernize-1xuaw9x">
                      <div className="MuiAvatar-root MuiAvatar-circular modernize-1fqkxis">
                        <img
                          alt="/images/svgs/icon-tasks.svg"
                          src="https://modernize-nextjs.adminmart.com/images/svgs/icon-tasks.svg"
                          className="MuiAvatar-img modernize-1hy9t21"
                        />
                      </div>
                    </div>
                    <div className="MuiBox-root-admin modernize-0">
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap text-hover modernize-3lehtt">
                        My Tasks
                      </h6>
                      <h6 className="MuiTypography-root MuiTypography-subtitle2 MuiTypography-noWrap modernize-1ysjngv">
                        To-do and Daily Tasks
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="MuiBox-root-admin modernize-1yuhvjn">
              <div className="MuiBox-root-admin modernize-1eyr69j">
                <div className="MuiBox-root-admin modernize-gg4vpm">
                  <div className="MuiBox-root-admin modernize-0">
                    <h5 className="MuiTypography-root MuiTypography-h5 modernize-1lbmk6f">
                      Unlimited <br />
                      Access
                    </h5>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium modernize-169rga5"
                      tabIndex="0"
                      type="button"
                    >
                      Upgrade
                      <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
                    </button>
                  </div>
                  <img
                    alt="unlimited"
                    loading="lazy"
                    width="150"
                    height="183"
                    decoding="async"
                    dataNimg="1"
                    className="signup-bg"
                    srcSet="https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fbackgrounds%2Funlimited-bg.png&amp;w=256&amp;q=75  1x,https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fbackgrounds%2Funlimited-bg.png&amp;w=384&amp;q=75  2x"
                    src="https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fbackgrounds%2Funlimited-bg.png&amp;w=384&amp;q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <a
                className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-fullWidth MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-fullWidth modernize-1e7c9k9"
                tabIndex="0"
                href="/auth/auth1/login"
              >
                Logout
                <span className="MuiTouchRipple-root modernize-w0pj6f"></span>
              </a>
            </div>
          </ul>
        </div>
        <div tabIndex="-1" data-testid="sentinelEnd"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
