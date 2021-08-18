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
import { Instagram, Facebook } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper'


// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';


class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  handleSocial = (url) => {
    let newWindow = window.open(url, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null;
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const Button = styled.button`
    color: primary;
    `

    return (
      <>
        <div>
          <Grid className="grid-col grid-col_10">
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <img alt="cat placeholder" src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img alt="cat placeholder" src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img alt="cat placeholder" src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img alt="cat placeholder" src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </Grid>
        </div>
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
        <div>
            <Link
              to="/order"
            >
              <Button
                primary
                variant="contained"
              >
                View Our Menu
        </Button>
            </Link>
        </div>

        <AppBar
          position="static"
        >
          <Grid
            justify="space-evenly"
            container
            direction="row"
            alignItems="center"
          >
            <Instagram style={{ fontSize: 40 }} onClick={() => this.handleSocial('https://google.com')}></Instagram>
            <Facebook style={{ fontSize: 40 }} onClick={() => this.handleSocial('https://facebook.com')}></Facebook>
          </Grid>
        </AppBar>
        <div className="center"
        >
          <h1>Contact & Opening Times</h1>

        </div>
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
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Paper>Hello</Paper>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Paper>Hello</Paper>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Paper>Hello</Paper>
                </Grid>
              </Grid>              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Paper>Hello</Paper>
                </Grid>
              </Grid>              <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <Paper>Hello</Paper>
                </Grid>
              </Grid>
            </Grid>
            
          </div>
          
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
