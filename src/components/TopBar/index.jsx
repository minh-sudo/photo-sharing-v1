import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar ({title}) {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Nguyễn Hồng Minh
            <box>
              <typography varian="h6" color="inherir">
                {title}
              </typography>
            </box>
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
