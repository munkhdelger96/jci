/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/css/jci.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import LandingPage from "views/examples/LandingPage.js";
import DynamicPage from "views/examples/DynamicPage";
import DynamicDetailPage from "views/examples/DynamicDetailPage";
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
import moment from "moment";
import NewsItem from "components/News/NewsItem";
import NewsDetail from "components/News/NewsDetail";
import EventItem from "components/Event/EventItem";
import MemberItem from "components/Member/MemberItem";
import ProjectItem from "components/Project/ProjectItem";

const config = {
  apiKey: 'AIzaSyBu8LPVezE1JrVuktpsKxIogoEDrMyCBKU',
  projectId: 'food-dev-85200',
};

firebase.initializeApp(config);

moment.locale('mn', {
  relativeTime : {
      future : 'dans %s',
      past : '1 цаг %s',
      s : 'хэдэн секунд',
      m : '1 минут',
      mm : '%d минут',
      h : '1 цаг',
      hh : '%d цаг',
      d : '1 өдөр',
      dd : '%d өдөр',
      M : '1 сар',
      MM : '%d сар',
      y : '1 жил',
      yy : '%d жил'
  },
});

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path="/index" render={props => <LandingPage {...props} />} />
          <Route 
            path="/news/:id"
            render={props => 
              <DynamicDetailPage 
                {...props}
                component={NewsDetail} 
              />
            }  
          />
          <Route path="/events/:id">
            <div>event detail</div>
          </Route>
          <Route path="/projects/:id">
            <div>project detail</div>
          </Route>
          <Route path="/news">
            <DynamicPage
              component={NewsItem}
              name={'news'}
              url={'/news'}
              isHome={false}
            />
          </Route>
          <Route path="/events">
            <DynamicPage
              component={EventItem}
              name={'events'}
              url={'/events'}
              isHome={false}
            />
          </Route>
          <Route path="/projects">
            <DynamicPage
              component={ProjectItem}
              name={'projects'}
              url={'/projects'}
              isHome={false}
            />
          </Route>
          {/* <Route
            path="/nucleo-icons"
            render={props => <NucleoIcons {...props} />}
          /> */}
          {/* <Route
            path="/landing-page"
            render={props => <LandingPage {...props} />}
            />
            <Route
            path="/profile-page"
            render={props => <ProfilePage {...props} />}
            />
          <Route path="/login-page" render={props => <LoginPage {...props} />} /> */}
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
  </FirestoreProvider>,
  document.getElementById("root")
);
