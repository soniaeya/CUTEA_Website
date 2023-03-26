import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['About', 'Contact Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Link from 'next/link';



export default function ResponsiveAppBar() {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Merchandise', path: '/merchandise' },
        { name: 'Events', path: '/events' },
        { name: 'Join Us', path: '/join' },
    ];

    return (
      <div>

          <AppBar position = "absolute" style = {{background: "#808000"}}>

              <nav>
                  <ul>
                      {navItems.map((item) => (
                          <Button variant="text" color="primary" key={item.path}>
                              <Link legacyBehavior href={item.path}>
                                  <a style={{ color: '#EEE8AA', textDecoration: 'none' }}>{item.name}</a>
                              </Link>
                          </Button>
                      ))}
                  </ul>
              </nav>
          </AppBar>

      </div>
    );
}