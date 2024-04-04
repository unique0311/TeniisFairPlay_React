import React from "react";
import "../components/CSS/home.css";

import wheelChairImage from "../assets/wheelchair.png";
import Login from "./Login";

const WheelChairTennis = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Wheelchair Tennis</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={wheelChairImage} className="juniorImage__setting" />
            <div className="paragraph" />
            <p className="SeniorsTennis__title">Wheelchair Tennis</p>
            <p className="SeniorsTennis__paragraph">
              What better way to view Tennis as the Sport of a Lifetime than
              through Wheelchair Tennis. With minor adaptations this great sport
              provides the disabled population a range of programs, social
              matches and tournaments . A healthy solution to resuming a normal
              lifestyle after suffering a severe injury.
            </p>
            <p className="SeniorsTennis__paragraph">
              According to the Wheelchair Tennis rules and regulations, a
              participant must demonstrate a mobility-related disability. To
              compete in wheelchair tennis and Paralympics, players must have a
              medically diagnosed permanent loss of function in the lower
              extremities. Like paralysis, amputations, limb shortening, joint
              replacements.
            </p>
            <p className="SeniorsTennis__paragraph">
              If you are seeking a more competitive environment, the
              International Tennis Federation offers a professional circuit of
              over 170 tournaments worldwide. Categories include Juniors Singles
              and Doubles, Adult Men’s and Women’s Singles and Doubles, Seniors
              Singles and Doubles and Quad Singles and Doubles. Tennis Canada
              and Tennis BC fully supports Wheelchair tennis through education,
              programs and tournaments across Canada . As tennis promotes
              strength, cardio, social interaction, fun and most importantly a
              connection with friends and family, the players will experience
              physical and emotional gains and benefits through a sense of
              accomplishment and sheer{" "}
              <strong>determination and fortitude</strong>.
            </p>
            <p className="SeniorsTennis__paragraph">
              Wheelchair Tennis Rules and regulations allow for two bounces and
              the wheelchair is considered as part of the body. The court size
              is the same and all rules of tennis apply otherwise. Balls must be
              returned prior to touching the ground a third time. The second
              bounce can either be in or out of court boundaries for singles and
              doubles. Players will lose a point if the ball hits the ground 3
              times, or if a player uses any part of his feet or lower
              extremities as stabilizers while serving, stroking the ball or
              while turning and stopping.
            </p>
            <p className="SeniorsTennis__paragraph">
              Locally, the BC Wheelchair Sports Association is a non profit
              organization that promotes wheelchair tennis options for athletes
              with a physical disability through certified coaches.
            </p>
            <p className="SeniorsTennis__paragraph">
              Several tennis facilities fully endorse and provide a wide
              selection of programs from beginners to experienced players, such
              as: Subscribing to a sport such as tennis provides a healthy
              therapy option after a disabling accident.
            </p>
            <ul className="aboutDetail__list">
              <li>
                The Vancouver Recreation Centre, formerly known as Grant
                Connell, North Vancouver, BC
              </li>
              <li>The YY Tennis Club, Richmond, BC.</li>
              <li>The Great West Fitness and Tennis Courts, Abbotsford, BC.</li>
              <li>The Cedar Hill Tennis, Victoria, BC.</li>
              <li>The Wheelchair Tennis, Kelowna, BC.</li>
            </ul>
            <p className="SeniorsTennis__paragraph">
              Sport Specific Chairs are available through most of the clubs or
              through the loan program offered by the BC Wheelchair Sports
              Association.
            </p>
            <p className="SeniorsTennis__paragraph">
              Tennis Canada newly introduced a Wheelchair Instructor Course
              which was recently offered at the Grant Connell Tennis Centre.
            </p>
            <p className="SeniorsTennis__paragraph">
              The Open NTRP Tournament in Coquitlam dated April 30th to May 10
              has an inaugural launch of several events for Wheelchair Athletes
              such as the Men’s and Women’s Singles, Men and Women Doubles and
              Quad singles and doubles.
            </p>
            <p className="wheelchair__subtitle">References and useful links:</p>
            <div className="wheelchair__referenceSite">
              <a
                href="https://www.tenniscanada.com/"
                className="aTag__setting"
                target="_block"
              >
                www.tenniscanada.com
              </a>
              <a
                href="https://www.tennisbc.org/"
                className="aTag__setting"
                target="_block"
              >
                www.tennisbc.org
              </a>
              <a
                href="https://www.itftennis.com/"
                className="aTag__setting"
                target="_block"
              >
                www.itftennis.com
              </a>
              <a
                href="https:/www.usta.com/"
                className="aTag__setting"
                target="_block"
              >
                www.usta.com
              </a>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default WheelChairTennis;
