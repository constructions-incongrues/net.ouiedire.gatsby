import React from "react"
import {link} from "gatsby"

// import { Link } from "gatsby"

// Layout par défaut
export default function Layout({ children }) {
  return (
    <html lang="fr">

      <head>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <title>Ouïedire</title>
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"></link>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet"></link>
      </head>

      <body>
      	<header></header>
        <section class="background-dark-white-trans">
          <section class="wrap-all row">
            <aside class="side col-md-12 col-lg-3">
              <div class="search-container">
                <form action="./search_results.html">
                  <input type="text" placeholder="Recherche..." name="search"></input>
                  <button type="submit"><i class="fas fa-search"></i></button>
                </form>
              </div>
              <figure>
                <div class="visual">
                  <a href="#"></a>
                  <div class="show-infos">
                    <h6 class="white background-black last-categorie">
                      <a href="#"></a>
                      Bagage 01
                    </h6><br />
                    <h6 class="black background-white show-djs">
                      Thiaz Itch
                      <a href='#'></a>
                    </h6>
                    <br />
                    <h6 class="white background-pink last-title">
                      Proot Records Proot Mixcomp1
                      <a href="#"></a>
                    </h6>
                    <h6 class="white background-pink show-date">23-02-2018</h6>
                  </div>
                </div>
              </figure>
              <div class="side-container">
                <p class="list-description">
                  Des copains, des artistes, des fêtards, des autistes, des labels c'est <strong>Ouïedire!</strong>
                  Des collages à en perdre les oreilles, des mixes en pagaille, absurdes ou panachés, différents univers se croisent dans Ouïedire.
                  <strong>Ouïedire</strong>, ce sont des gens, tout simplement, qui nous font goûter leur substance sonore le temps d'une émission.
                </p>
                <ul class="counters row">
                  <li class="col-sm-4">
                    <a href="./all_artists.html">
                      <p class="blue">28</p>
                      <h6>artistes</h6>
                    </a>
                  </li>
                  <li class="col-sm-4">
                    <a href="#">
                      <p class="blue">4</p>
                      <h6>émissions</h6>
                    </a>
                  </li>
                  <li class="col-sm-4">
                    <a href="#">
                      <p class="blue">4</p>
                      <h6>djs</h6>
                    </a>
                  </li>
                </ul>
                <ul class="categories-container">
                  <li class="categories">
                    <a href='#' class="background-white bagage-link">bagage</a>
                    <p class="bagage-description"></p>
                  </li>
                  <li class="categories">
                    <a href='#' class="background-white ailleurs-link">ailleurs</a>
                    <p class="ailleurs-description"></p>
                  </li>
                  <li class="categories">
                    <a href='#' class="background-white ouidire-link">ouidire</a>
                    <p class="ouidire-description"></p>
                  </li>
                </ul>
                <figure class="last-flyer-container">
                  <div class="last-flyer">
                    <a href='#'></a>
                  </div>
                </figure>
                <div class="all-flyers-container background-white">
                  <span class="fas fa-plus"></span>
                  <a class="black all-flyers" href="./all_flyers.html">voir tous les flyers</a>
                </div>
              </div>
            </aside>
            <section class="main col-md-12 col-lg-9">
              <div class="logo-ouidire">
                <a href='./list.html'></a>
              </div>
              <div class="player-container background-grey-trans">
                <h6 class= "slogan white background-black">
                  J'en ai déjà entendu parler quelque part
                </h6>
                <div class="background-player">
                  <div class="transport-play">
                    <i class="fas fa-play white"></i>
                  </div>
                  <div id="waveform" data-src="./media/audio/Beat001.wav"></div>
                  <ul class="last-artists">
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Tep
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Katapulto
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Yvan&Lendl
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Batfinks
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Gentlemen
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Goto80 (feat. Acid Terrorist)
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Vernon Lenoir
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Silencide
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Ergo Phizmiz
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Thiaz Itch
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Okapi
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Michel Banane Jr.
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      David Fenech
                    </li>
                    <li class="last-artist white background-black white">
                      <a href="#"></a>
                      Syndrome WPW
                    </li>
                  </ul>
                </div>
              </div>

              {children}

            </section>
          </section>
        </section>
        <footer class="white background-black">
        <div class="wrap-footer row">
            <div class="col-sm-6 footer-left-container">
                <div class="row">
                    <h6 class="white col-sm-2">Diffusé sur</h6>
                    <ul class="col-sm-10 row">
                        <li class="col-sm-4">
                            <a href="http://www.choq.fm/" target="_blank">choq fm</a>
                        </li>
                        <li class="col-sm-4">
                            <a href="http://www.canalb.fr/gabuzomix" target="_blank">canal b</a>
                        </li>
                        <li class="col-sm-4">
                            <a href="http://www.radioeponyme.com/programmes/ouie-dire/" target="_blank">eponyme</a>
                        </li>
                        <li class="col-sm-6">
                            <a href="http://radio-octopus.org/" target="_blank">radio octopus</a>
                        </li>
                        <li class="col-sm-6">
                            <a href="http://www.vosgueules-lesmouettes.com/ouiumledire.html" target="_blank">vos gueules les mouettes</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6 footer-right-container">
                <ul class="row">
                    <li class="col-sm-2 offset-sm-2">
                        <a href="#">Dons</a>
                    </li>
                    <li class="col-sm-2">
                        <a href="http://www.musiques-incongrues.net/forum/shows/ouiedire/" target="_blank">forum</a>
                    </li>
                    <li class="col-sm-4">
                        <a href="mailto:contact@ouidire.net" target="_blank">contact@ouidire.net</a>
                    </li>
                    <li class="col-sm-2">
                        <a href="https://feeds.feedburner.com/ouiedire" target="_blank" class="fas fa-rss"></a>
                        <a href="https://www.facebook.com/ouiedireshow/" target="_blank" class="fab fa-facebook-f"></a>
                        <a href="https://twitter.com/OuiedireShow" target="_blank" class="fab fa-twitter"></a>
                    </li>
                </ul>
        				<p>Le projet <a href="#">Ouïedire</a> est développé par <a href="https://www.helloasso.com/associations/constructions-incongrues" target="_blank">Constructions Incongrues</a> et est hébergé par <a href="http://www.pastis-hosting.net/" target="_blank">Pastis Hosting</a>.</p>
                <p>Le logo a été réalisé par <a href="#" target="_blank">Otro</a>. Le code source est <a href="https://github.com/constructions-incongrues/net.ouiedire.www" target="_blank">distribué</a> sous licence <a href="https://www.gnu.org/licenses/agpl.html" target="_blank">AGPL3</a>.</p>
            </div>
        </div>
        </footer>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/3.0.0/less.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/2.0.5/wavesurfer.min.js"></script>
      </body>
    </html>
  )
}