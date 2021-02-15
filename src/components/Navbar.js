import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from "react-icons/ai";
import { SitebarData } from "./SitebarData";

import "./Navbar.css";
// import { IconContext } from "react-icons";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));
export default function Navbar(props) {
  const history = useHistory();
  const home = () => history.push("/");
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="menu-bars">
            <div>
              <IconButton
                onClick={showSidebar}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SitebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Typography variant="h6" className={classes.title} onClick={home}>
              PARKING DASHBOARD
            </Typography>

            <Button color="inherit" onClick={props.handleLogout} href="/">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      {/* <IconContext.Provider value={{color:'#fff'}}>
        <div className = "navbar">
       
            <Link to ="#" className = 'menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
            
            </Link>  
          
                <div >
                   <h1>PARKING</h1>        
           </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
     
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className ="navbar-toggle">
                    <Link to ="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SitebarData.map((item , index)=>{
                    return(
                        <li key={index} className={item.cName}> 
                        <Link to ={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider> */}
    </>
  );
}
