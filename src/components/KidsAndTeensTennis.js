import React from "react";
import "../components/CSS/home.css";

import kidsTeensTennisImage from "../assets/kidsTeens.png";
import kidsBackImage from "../assets/Fotolia_52285910_XS_cropped.png";
import Login from "./Login";

const KidsAndTeensTennis = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Kids & Teens Tennis</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={kidsTeensTennisImage} className="juniorImage__setting" />
            <p className="KidsAndTeensTennis__title">
              Physical & Mental Benefits of Tennis for Youth:
            </p>
            <p className="SeniorsTennis__paragraph">
              Tennis offers physical & mental advantages that will benefit
              youths and teens throughout the course of their whole life.
            </p>
            <p className="SeniorsTennis__paragraph">
              Tennis develops hand-eye coordination, gross motor control and
              fine motor skills.
            </p>
            <p className="SeniorsTennis__paragraph">
              The game play rituals like in preparation of a serve or return of
              serve can be transferred to actions and planning for exams or
              developing effective studying habits.
            </p>
            <p className="SeniorsTennis__paragraph">
              As amateur tennis is a self-regulated game, kids must exercise
              good decision making, court ethics, good sportsmanship, making
              line calls, winning graciously or loosing with honour.
            </p>
            <p className="SeniorsTennis__paragraph">
              Kids and Teens learn the value of Teamwork and Communication as an
              essential quality to succeed in doubles. They also improve their
              social skills through on and off court interaction with other
              players.
            </p>
            <p className="SeniorsTennis__paragraph">
              The game of tennis is both fun and rewarding, making short term
              goals attainable through drills, lessons, social matches and
              tournaments.
            </p>
            <p className="SeniorsTennis__paragraph">
              It teaches youth to finish what they start with the rewards and
              euphoric sensations of wins, shot making or the ability to raise
              their game when challenged.
            </p>
            <p className="SeniorsTennis__paragraph">
              More kids today are getting involved in competitive and
              recreational tennis. The use of modified tennis balls, racquets,
              nets and courts develop quicker skills and eases the transition to
              full court equipment.
            </p>
            <div className="kidsTeensTennis__block">
              <div className="kidsTeensTennisBlock_side">
                <div className="kidsTeensSide__container">
                  <div className="kidsTeensSide__round">
                    <div />
                  </div>
                  <p>
                    Tennis FairPlay Offers a{" "}
                    <a
                      href="/category/junior-stories"
                      className="aTag__setting"
                    >
                      Sponsor a Junior
                    </a>{" "}
                    Program to Award an{" "}
                    <span style={{ color: "#27850E" }}>Annual Grant</span> to a
                    Junior Player Chosen by{" "}
                    <a href="/members" className="aTag__setting">
                      Tennis FairPlay Members
                    </a>
                    !
                  </p>
                </div>
              </div>
              <div className="kidsTeensTennisBlock_side">
                <div className="kidsTeensSide__container">
                  <div className="kidsTeensSide__round">
                    <div />
                  </div>
                  <a href="/category/junior-stories">
                    <img
                      src={kidsBackImage}
                      className="kidsBackImage__setting"
                    />
                  </a>
                </div>
              </div>
            </div>
            <p className="SeniorsTennis__paragraph">
              Tennis BC is a leader and strong advocate for Youth Tennis. Please
              visit{" "}
              <a
                href="https://www.tennisbc.org/"
                className="aTag__setting"
                target="_block"
              >
                www.tennisbc.org
              </a>{" "}
              for more information. Under the governance of Tennis Canada,
              certification and courses are offered to ensure the quality of
              instruction and to maintain an education standard of excellence.
              Please visit{" "}
              <a
                href="https://www.tenniscanada.com/"
                className="aTag__setting"
                target="_block"
              >
                www.tenniscanada.com
              </a>{" "}
              for more information. The North Vancouver Tennis Centre is
              designated as an official Tennis Development Centre where all
              programs are based on the Tennis Long-Term Athlete Development
              Path designed by Wayne Elderton, Tennis Director and Level 4
              Coach.
            </p>
            <p className="SeniorsTennis__paragraph">
              The International Tennis Federation (ITF), organizes tournaments
              for Juniors ranging 12-18.
            </p>
            <p className="SeniorsTennis__paragraph">
              From the School Systems, programs and funding from the municipal,
              provincial and federal government bodies, the local Recreational
              Centres, the Private Tennis Facilities & Clubs, Associations &
              Foundations for kids Tennis is a growing sport promoted and
              encouraged as a healthy lifestyle choice.
            </p>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default KidsAndTeensTennis;
