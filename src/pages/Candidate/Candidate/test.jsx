const SideMenu = ({ isjobseeker }) => {
  //routing
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (itemName) => {
    setActiveMenu(itemName);
  };

  // sidemenu dropdown

  const [anchorEl, setAnchorEl] = useState(null);
  const [drop, setDrop] = useState(false);

  const handleDropClick = (e) => {
    setAnchorEl(e.currentTarget);
    setDrop(true);
  };
  const handleDropClose = () => {
    setAnchorEl(null);
    setDrop(false);
  };

  //pop up on delete

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // dynamicity in side menu => progress bar

  return (
    <>
      {isjobseeker ? (
        <div className="__variable_e76efa __variable_95782f">
          <div className="main-page-wrapper">
            <aside className="dash-aside-navbar">
              <div className="position-relative">
                <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
                  <Link to="/">
                    <img
                      alt="logo"
                      fetchPriority="high"
                      width="125"
                      height="50"
                      decoding="async"
                      dataNimg="1"
                      style={{ color: "transparent", backgroundColor: "blue" }}
                      src={logo}
                    />
                  </Link>
                  <button className="close-btn d-block d-md-none">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <div className="user-data">
                  <div className="user-avatar online position-relative rounded-circle">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="75"
                      height="75"
                      decoding="async"
                      dataNimg="1"
                      className="lazy-img"
                      style={{ color: "transparent", height: "auto" }}
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01.2651497f.jpg&w=96&q=75"
                    />
                  </div>
                  <div className="user-name-data">
                    <button
                      className="user-name dropdown-toggle"
                      type="button"
                      id="profile-dropdown"
                      aria-controls={drop ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={drop ? "true" : undefined}
                      onClick={handleDropClick}
                    >
                      James Brower
                    </button>

                    <Menu anchorEl={anchorEl} open={drop} onClose={handleDropClose}>
                      <MenuItem
                        sx={{ gap: "15px" }}
                        className={activeMenu === "profile" ? "active" : ""}
                        onClick={() => handleMenuClick("profile")}
                      >
                        <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                        <Link to="/job-portal/dashboard/candidate-dashboard/myProfile">
                          <span> Profile</span>
                        </Link>
                      </MenuItem>
                      <MenuItem
                        sx={{ gap: "15px" }}
                        className={activeMenu === "settings" ? "active" : ""}
                        onClick={() => handleMenuClick("settings")}
                      >
                        <SettingsRoundedIcon sx={{ color: 'black' }} />
                        <Link to="/job-portal/dashboard/candidate-dashboard/accountSettings">
                          <span>Account Settings</span>
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                <nav className="dasboard-main-nav">
                  <ul className="style-none">
                    <li
                      className={activeMenu === "dashboard" ? "active" : ""}
                      onClick={() => handleMenuClick("/")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <GridViewOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard">
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "profile" ? "active" : ""}
                      onClick={() => handleMenuClick("profile")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/myProfile">
                        <span>My Profile</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "education" ? "active" : ""}
                      onClick={() => handleMenuClick("education")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SchoolOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/education">
                        <span>Education</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "experience" ? "active" : ""}
                      onClick={() => handleMenuClick("experience")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <WorkOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/experience">
                        <span>Experience</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "project" ? "active" : ""}
                      onClick={() => handleMenuClick("project")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SchoolOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/project">
                        <span>Projects & Courses</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "award" ? "active" : ""}
                      onClick={() => handleMenuClick("award")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <WorkOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/award">
                        <span>Awards & Publication</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "resume" ? "active" : ""}
                      onClick={() => handleMenuClick("resume")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <DescriptionOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/resume">
                        <span>Resume</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "messages" ? "active" : ""}
                      onClick={() => handleMenuClick("messages")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <EmailOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/messages">
                        <span>Messages</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "jobAlert" ? "active" : ""}
                      onClick={() => handleMenuClick("jobAlert")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <AddAlertOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/jobAlert">
                        <span>Job Alert</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "news" ? "active" : ""}
                      onClick={() => handleMenuClick("news")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <NewspaperOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/news">
                        <span>News</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "jobSaved" ? "active" : ""}
                      onClick={() => handleMenuClick("jobSaved")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <BookmarkBorderOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/savedJob">
                        <span>Saved Job</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "settings" ? "active" : ""}
                      onClick={() => handleMenuClick("settings")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SettingsRoundedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/candidate-dashboard/accountSettings">
                        <span>Account Settings</span>
                      </Link>
                    </li>

                    <li
                      onClick={handleOpen}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <DeleteOutlinedIcon sx={{ color: 'black' }} />
                      <Link>
                        <span>Delete Account</span>
                      </Link>

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <DeleteAcc />
                      </Modal>
                    </li>
                  </ul>
                </nav>
                <div className="profile-complete-status">
                  <div className="progress-value fw-500">87%</div>
                  <div className="progress-line position-relative">
                    <div className="inner-line" style={{ width: "80%" }}></div>
                  </div>
                  <p>Profile Complete</p>
                </div>
                <Link to="/"
               /*href="#"*/ className="d-flex w-100 align-items-center logout-btn"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="23"
                    height="22"
                    decoding="async"
                    dataNimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_9.69f19313.svg"
                  />
                  <span>Logout</span>
                </Link>
              </div>
            </aside>

          </div>
        </div>
      ) : (
        <div className="__variable_e76efa __variable_95782f">
          <div className="main-page-wrapper">
            <aside className="dash-aside-navbar">
              <div className="position-relative">
                <div className="logo text-md-center d-md-block d-flex align-items-center justify-content-between">
                  <Link to="/">
                    <img
                      alt="logo"
                      fetchPriority="high"
                      width="125"
                      height="50"
                      decoding="async"
                      dataNimg="1"
                      style={{ color: "transparent", backgroundColor: "blue" }}
                      src={logo}
                    />
                  </Link>
                  <button className="close-btn d-block d-md-none">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
                <div className="user-data">
                  <div className="user-avatar online position-relative rounded-circle">
                    <img
                      alt="avatar"
                      loading="lazy"
                      width="75"
                      height="75"
                      decoding="async"
                      dataNimg="1"
                      className="lazy-img"
                      style={{ color: "transparent", height: "auto" }}
                      src="https://jobi-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_01.2651497f.jpg&w=96&q=75"
                    />
                  </div>
                  <div className="user-name-data">
                    <button
                      className="user-name dropdown-toggle"
                      type="button"
                      id="profile-dropdown"
                      aria-controls={drop ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={drop ? "true" : undefined}
                      onClick={handleDropClick}
                    >
                      James Brower
                    </button>

                    <Menu anchorEl={anchorEl} open={drop} onClose={handleDropClose}>
                      <MenuItem
                        sx={{ gap: "15px" }}
                        className={activeMenu === "profile" ? "active" : ""}
                        onClick={() => handleMenuClick("profile")}
                      >
                        <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                        <Link to="/job-portal/dashboard/student-dashboard/myProfile">
                          <span> Profile</span>
                        </Link>
                      </MenuItem>
                      <MenuItem
                        sx={{ gap: "15px" }}
                        className={activeMenu === "settings" ? "active" : ""}
                        onClick={() => handleMenuClick("settings")}
                      >
                        <SettingsRoundedIcon sx={{ color: 'black' }} />
                        <Link to="/job-portal/dashboard/student-dashboard/accountSettings">
                          <span>Account Settings</span>
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                <nav className="dasboard-main-nav">
                  <ul className="style-none">
                    <li
                      className={activeMenu === "dashboard" ? "active" : ""}
                      onClick={() => handleMenuClick("/")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <GridViewOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard">
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "profile" ? "active" : ""}
                      onClick={() => handleMenuClick("profile")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <PersonOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/myProfile">
                        <span>My Profile</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "education" ? "active" : ""}
                      onClick={() => handleMenuClick("education")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SchoolOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/education">
                        <span>Education</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "experience" ? "active" : ""}
                      onClick={() => handleMenuClick("experience")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <WorkOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/experience">
                        <span>Experience</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "project" ? "active" : ""}
                      onClick={() => handleMenuClick("project")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SchoolOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/project">
                        <span>Projects & Courses</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "award" ? "active" : ""}
                      onClick={() => handleMenuClick("award")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <WorkOutlineOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/award">
                        <span>Awards & Publication</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "messages" ? "active" : ""}
                      onClick={() => handleMenuClick("messages")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <EmailOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/messages">
                        <span>Messages</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "jobAlert" ? "active" : ""}
                      onClick={() => handleMenuClick("jobAlert")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <AddAlertOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/jobAlert">
                        <span>Job Alert</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "news" ? "active" : ""}
                      onClick={() => handleMenuClick("news")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <NewspaperOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/news">
                        <span>News</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "loan" ? "active" : ""}
                      onClick={() => handleMenuClick("news")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <NewspaperOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/loan">
                        <span>Loan</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "jobSaved" ? "active" : ""}
                      onClick={() => handleMenuClick("jobSaved")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <BookmarkBorderOutlinedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/savedJob">
                        <span>Saved Job</span>
                      </Link>
                    </li>
                    <li
                      className={activeMenu === "settings" ? "active" : ""}
                      onClick={() => handleMenuClick("settings")}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <SettingsRoundedIcon sx={{ color: 'black' }} />
                      <Link to="/job-portal/dashboard/student-dashboard/accountSettings">
                        <span>Account Settings</span>
                      </Link>
                    </li>

                    <li
                      onClick={handleOpen}
                      style={{
                        display: "flex", justifyContent: "left", marginLeft: "15px", marginTop: "25px", alignItems: 'center'
                      }}>
                      <DeleteOutlinedIcon sx={{ color: 'black' }} />
                      <Link>
                        <span>Delete Account</span>
                      </Link>

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <DeleteAcc />
                      </Modal>
                    </li>
                  </ul>
                </nav>
                <div className="profile-complete-status">
                  <div className="progress-value fw-500">87%</div>
                  <div className="progress-line position-relative">
                    <div className="inner-line" style={{ width: "80%" }}></div>
                  </div>
                  <p>Profile Complete</p>
                </div>
                <Link to="/"
              /*href="#"*/ className="d-flex w-100 align-items-center logout-btn"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="23"
                    height="22"
                    decoding="async"
                    dataNimg="1"
                    className="lazy-img"
                    style={{ color: "transparent" }}
                    src="https://jobi-nextjs.vercel.app/_next/static/media/icon_9.69f19313.svg"
                  />
                  <span>Logout</span>
                </Link>
              </div>
            </aside>

          </div>
        </div>
      )}
    </>

  );
};

export default SideMenu;
