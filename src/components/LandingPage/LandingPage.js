import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './LandingPage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

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
      slidesToScroll: 1
    };
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
        
        <h2>{this.state.heading}</h2>

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

            <p>
              Praesent consectetur orci dui, id elementum eros facilisis id. Sed
              id dolor in augue porttitor faucibus eget sit amet ante. Nunc
              consectetur placerat pharetra. Aenean gravida ex ut erat commodo,
              ut finibus metus facilisis. Nullam eget lectus non urna rhoncus
              accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
              euismod, augue at condimentum rhoncus, massa lorem semper lacus,
              sed lobortis augue mi vel felis. Duis ultrices sapien at est
              convallis congue.
            </p>

            <p>
              Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
              Suspendisse posuere dapibus maximus. Aliquam vitae felis libero.
              In vehicula sapien at semper ultrices. Vivamus sed feugiat libero.
              Sed sagittis neque id diam euismod, ut egestas felis ultricies.
              Nullam non fermentum mauris. Sed in enim ac turpis faucibus
              pretium in sit amet nisi.
            </p>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
