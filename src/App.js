import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./App.css";
import { Navbar } from "./components/Navbar/index.js";
import { Hero } from "./components/Center/Hero/hero.js";
import { About } from "./components/Center/About/index.js";
import { Services } from "./components/Center/Service/index.js";
import { DiscountBanner } from "./components/Center/Banner/discount.js";
import { Experience } from "./components/Center/Experience/index.js";
import ScrollableAnchor from "react-scrollable-anchor";
import { Testimonial } from "./components/Center/Testimonial/index.js";
import {Contact} from './components/Center/Contact/index.js'
import {Blog} from './components/Center/Blog/index.js'
import {Portfolio} from './components/Center/Portfolio/index.js'
import { Footer } from "./components/Footer/index.js";

class PageSection extends Component {
  render() {
    return this.props.content
  }
}

PageSection.propTypes = {
   content: PropTypes.node.isRequired
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div data-spy="scroll" data-target="#navbar" data-offset="51">
        <Navbar />
        <ScrollableAnchor id={"home"}>
        <PageSection content={<Hero />}/>          
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
        <PageSection content={<About />}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={"service"}>
        <PageSection content={<Services />}/>
        </ScrollableAnchor>
        <DiscountBanner />
        <ScrollableAnchor id={"experience"}>
        <PageSection content={ <Experience />}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={"review"}>
        <PageSection content={ <Testimonial />}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={"portfolio"}>
        <PageSection content={ <Portfolio />}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
        <PageSection content={<Contact />}/>
        </ScrollableAnchor>
        <ScrollableAnchor id={"blog"}>
        <PageSection content={<Blog />}/>
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;
