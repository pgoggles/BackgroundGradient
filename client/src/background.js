import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import BaseGradients from '../../config/gradients';
import Constants from '../../config/constants';

export default class AnimationExample extends React.Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <AnimationApp gradients = {BaseGradients} />

    );
  }
}

class AnimationApp extends React.Component {
  constructor(props) {
    super(props)
    let location = this.props.location;
    this.state = {
      gradient: this.props.gradients[0]
    }
    this.changeGradient()
  }

  changeGradient() {
    setTimeout(() =>
    {
      this.setState.call(this, {gradient: this.props.gradients[Math.floor(Math.random() * this.props.gradients.length)]})
      this.changeGradient.call(this)
  }, 60000)
  }
  render() {
    return (
      <div style={styles.fill}>
        <div style={styles.content}>
          <TransitionGroup>
            <CSSTransition
              key={this.state.gradient.angle}
              classNames="fade"
              timeout={300}
            >
              <Gradient gradient={this.state.gradient}/>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
function Gradient(props) {
  return (
    <div
      style={{
        ...styles.fill,
        backgroundImage: `linear-gradient(${props.gradient.angle}, ${props.gradient.colors})`,
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <img src='./grain.png' style={{
        mixBlendMode: 'overlay',
        position: 'absolute',
        maxWidth: '100%',
        overflow: 'hidden'
      }}></img>
      <img src='./logo.png' style={
        {
          maxWidth: Constants.logoSize,
        }
        }></img>
    </div>
  );
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};