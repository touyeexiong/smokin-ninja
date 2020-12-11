import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Twitter, Instagram } from '@material-ui/icons';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  }
}))

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const Button = styled.button`
    color: palevioletred;
    `

    const classes = useStyles();

    return (
      <>
      <div>
        <Grid>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
          </Grid>
        </div>
      <div className="container">
        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Testing testing 123
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra
              lacus ut ex molestie blandit. Etiam et turpis sit amet risus
              mollis interdum. Suspendisse et justo vitae metus bibendum
              fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
              vitae consequat odio elementum eget. Praesent efficitur eros vitae
              nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac
              dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum
              fringilla nibh a luctus. Duis a sapien metus.
            </p>
          </div>
        </div>
        <Link 
        to="/menu"
        >
            <Button
              primary
              variant="contained"
            >
              View Our Menu
        </Button>
        </Link>

      </div>
      <Grid
      justify="space-between"
      container
      spacing={24}
      >
          <AppBar 
          position="static"
          style={classes.root}
          >
            <Instagram fontSize="large"></Instagram>
            <Twitter fontSize="large"></Twitter>
          </AppBar>
      </Grid>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
