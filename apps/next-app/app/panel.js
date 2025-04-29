'use client';
import { useState } from 'react';
import { AppBar, Card, Collapse, Toolbar, Typography } from '@mui/material';

export function Panel(props) {
  const { panelTitle, collapsible, isExpand, children } = props;
  const [expanded, setExpanded] = useState(isExpand || false);

  const handleClick = () => {
    if (!collapsible) {
      return;
    }
    setExpanded(!expanded);
  };

  return (
    <Card>
      <AppBar position="static" elevation={0}>
        <Toolbar
          variant="dense"
          onClick={handleClick}
          sx={{
            cursor: collapsible ? 'pointer' : undefined,
          }}
        >
          <Typography variant="subtitle1" color="inherit" className="flex-1">
            {panelTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {(collapsible && <Collapse>{children}</Collapse>) || children}
    </Card>
  );
}
