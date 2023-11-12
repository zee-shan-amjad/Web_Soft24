import Head from "next/head";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Feature from "../components/Feature";
import Process from "../components/Process";
import SliderContainer from "../components/SliderContainer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WEB SOFT- We Build Websites</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="Looking to build a website for your business. Well look no more. We are a Web Development agency with 2 years of experience. We create fully customized frontend as well as backend web based solution using latest technologies. All of the websites that we build are SEO friendly." />
        <meta name="keywords" content="Web Development, Web App Development, Web Application Development, Web Apps, web development agency, custom web development, custom website, E-Commerce website, Build website in lower rate, we will build your next website"/>
        <meta meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="apple-touch-icon" sizes="57x57" href="/logo/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/logo/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/logo/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/logo/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/logo/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/logo/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/logo/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/logo/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/logo/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png"/>
        <link rel="manifest" href="/logo/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/logo/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <Navbar></Navbar>
      <Header></Header>
      <Feature></Feature>
      <Process></Process>
      <Stack></Stack>
      <Projects></Projects>
      <Team></Team>
      <SliderContainer></SliderContainer>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
