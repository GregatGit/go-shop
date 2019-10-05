import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core'
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

function Header({list}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  let amount = 0
  list.forEach((item) => {
    if(!item.done){
      amount++
    }
  })

  console.log(amount)
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
          <Tab label={"Let's Shop " + amount} {...a11yProps(3)} component={Link} to="/go-shop/shoppingList"/>
        </Tabs>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.shoppingList
  }
}

export default connect(mapStateToProps)(Header)
