import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} component={Link} to="/go-shop/"/>
          <Tab label="Lists" {...a11yProps(1)} component={Link} to="/go-shop/lists" />
          <Tab label="My List" {...a11yProps(2)} component={Link} to="/go-shop/myList"/>
          <Tab label="Let's Shop" {...a11yProps(3)} component={Link} to="/go-shop/shoppingList"/>
        </Tabs>
      </AppBar>
    </div>
  )
}
