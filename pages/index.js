import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Up Start Finance</title>
          <meta property="og:title" content="Up Start Finance" />
        </Head>
        <div className="home-navbar navbar-container">
          <div className="max-width">
            <header data-thq="thq-navbar" className="home-navbar-interactive">
              <div className="home-logo">
                <img
                  alt="image"
                  src="/group%203-200h.png"
                  className="home-image"
                />
              </div>
              <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                <div className="home-links">
                  <span className="home-text navbarLink">What We do?</span>
                  <span className="home-text01 navbarLink">Features</span>
                  <span className="home-text02 navbarLink">Blogs</span>
                  <button className="button button-primary">Login</button>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div className="home-nav">
                  <div className="home-top">
                    <div className="home-logo1">
                      <img
                        alt="image"
                        src="/group%202.svg"
                        className="home-image1"
                      />
                      <span className="brandName">
                        <span className="home-text04">UP -</span>
                        <span> START</span>
                      </span>
                    </div>
                    <div data-thq="thq-close-menu" className="home-close-menu">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav className="home-links1">
                    <span className="home-text06 navbarLink">About</span>
                    <span className="home-text07 navbarLink">Features</span>
                    <span className="home-text08 navbarLink">Pricing</span>
                    <span className="home-text09 navbarLink">Team</span>
                    <span className="home-text10 navbarLink">Blog</span>
                  </nav>
                  <div className="home-buttons">
                    <button className="button-secondary button">Log in</button>
                    <button className="button button-primary">
                      Get started
                    </button>
                  </div>
                </div>
                <div>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="home-hero hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <h1 className="home-title">
                <span className="home-text11">
                  मन:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text12">sthi</span>
                <span className="home-text13">ति</span>
              </h1>
              <span className="home-description">
                <span>
                  Meet मन:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text15">sthi</span>
                <span>
                  ति, your ally in mental well-being
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  A go-to tool for innovative surveillance, assessment,
                  personalized strategies and more for your healthier mind and a
                  brighter future.
                </span>
                <br className="home-text19"></br>
                <br></br>
              </span>
              <div className="home-container1">
                <button className="button button-gradient">Login</button>
              </div>
            </div>
            <img alt="image" src="/one.svg" className="home-image2" />
            <div className="home-image3">
              <img
                alt="image"
                src="/union-400h.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/group%2018-1200w.png"
                className="home-image4"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width">
            <img
              alt="image"
              src="/three-1200w.png"
              className="home-hero-image"
            />
            <div className="home-content1">
              <ul className="list">
                <li className="list-item"></li>
                <li className="list-item"></li>
                <li className="list-item"></li>
                <li className="list-item"></li>
              </ul>
              <h1 className="home-text21">
                <span>
                  Why मन:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text23">sthi</span>
                <span>ति?</span>
              </h1>
              <img alt="image" src="/group%201.svg" className="home-image5" />
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <h1 className="home-text25">Our Features!</h1>
          <div className="home-container2">
            <img alt="image" src="/ourfeatures.svg" className="home-image6" />
          </div>
        </div>
        <div className="home-section2 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-image7">
              <img
                alt="image"
                src="/three-1200w.png"
                className="home-hero-image1"
              />
            </div>
            <div className="home-content2">
              <span className="home-text26 beforeHeading">get started</span>
              <h1 className="home-text27">HOW TO DO?</h1>
              <div className="home-step">
                <div className="home-number">
                  <span className="home-text28">1</span>
                </div>
                <div className="home-container3">
                  <span className="home-title1">
                    <span>Login / Create an account</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <div className="home-number1">
                  <span className="home-text31">2</span>
                </div>
                <div className="home-container4">
                  <span className="home-title2">Give an Assessment test!</span>
                  <span className="home-text32">
                    A result after analysis of your test gets displayed.A
                    dashboard with recommendations for improving your mental
                    health is provided. 
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <div className="home-number2">
                  <span className="home-text33">3</span>
                </div>
                <div className="home-container5">
                  <span className="home-title3">Avail the features!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section3 section-container">
          <div className="home-max-width4 max-width">
            <h1 className="home-text34">
              “Your mental health is just as important as your physical health.”
            </h1>
          </div>
          <footer className="home-footer">
            <img alt="logo" src="/group%203-200h.png" className="home-image8" />
            <span className="home-text35">© All Rights Reserved.</span>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar {
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            flex: 0;
            width: var(--dl-size-size-medium);
            object-fit: cover;
            margin-right: 14px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text01 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 22px;
            object-fit: cover;
            margin-right: 14px;
          }
          .home-text04 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            background-color: #105449;
          }
          .home-max-width1 {
            height: 578px;
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 45%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            font-size: 525%;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text11 {
            font-family: 'Poppins';
          }
          .home-text12 {
            font-family: 'Satisfy';
          }
          .home-text13 {
            font-family: 'Poppins';
          }
          .home-description {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-text15 {
            font-family: 'Satisfy';
          }
          .home-text19 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image2 {
            width: 577px;
            height: 547px;
            object-fit: cover;
            animation-name: pulse;
            animation-delay: 0.5s;
            animation-duration: 450ms;
            animation-direction: reverse;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-image3 {
            position: relative;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .home-graphic-top {
            top: 0px;
            right: -170px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .home-image4 {
            right: -170px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          .home-max-width2 {
            align-items: stretch;
          }
          .home-hero-image {
            width: 549px;
            height: 525px;
            margin-top: 100px;
            object-fit: contain;
            margin-left: 0px;
            border-radius: 48px;
          }
          .home-content1 {
            width: 504px;
            height: 638px;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text21 {
            font-size: 42px;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text23 {
            font-family: 'Satisfy';
          }
          .home-image5 {
            width: 493px;
            height: 244px;
            object-fit: cover;
          }
          .home-section1 {
            height: 725px;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 199, 139, 0.14);
          }
          .home-text25 {
            top: var(--dl-space-space-threeunits);
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 4em;
            text-align: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-image6 {
            width: 722px;
            height: 543px;
            object-fit: cover;
            padding-top: var(--dl-space-space-threeunits);
          }
          .home-section2 {
            background-color: var(--dl-color-scheme-green100);
          }
          .home-max-width3 {
            align-items: stretch;
          }
          .home-image7 {
            width: 50%;
          }
          .home-hero-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 48px;
          }
          .home-content2 {
            width: 40%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text26 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-step {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text28 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-step1 {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text31 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container4 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text32 {
            color: var(--dl-color-scheme-white);
          }
          .home-step2 {
            display: flex;
            flex-direction: row;
          }
          .home-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text33 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container5 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-section3 {
            height: 448px;
          }
          .home-max-width4 {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text34 {
            font-size: 38px;
            font-style: normal;
            text-align: center;
            font-family: 'Urbanist';
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-image8 {
            width: var(--dl-size-size-large);
            height: var(--dl-size-size-large);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image3 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-hero-image {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width3 {
              flex-direction: column;
            }
            .home-image7 {
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image1 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content2 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width4 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .home-desktop-menu {
              display: none;
            }
            .home-links {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text06 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-max-width1 {
              flex-direction: column-reverse;
            }
            .home-content {
              width: 100%;
              margin-right: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text35 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              padding: 16px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image8 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text35 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
