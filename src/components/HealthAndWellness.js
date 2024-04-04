import React from "react";
import "../components/CSS/home.css";

import healthImage from "../assets/health.png";
import Login from "./Login";

const HealthAndWellness = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">About</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={healthImage} className="juniorImage__setting" />
            <p className="healthAndWellness__title">The sky's the limit!</p>
            <p className="healthAndWellness__subTitle">Why Play Tennis?</p>
            <p className="aboutDetail__firstpart">
              Play tennis and acquire the physical, mental and emotional
              benefits throughout the course of your life as a youth, teen,
              adult, senior or managing a physical impairment. According to
              world renowned scientists, there is no doubt that tennis is one of
              the best sports for you to play for the following reasons;
            </p>
            <p className="healthAndWellness__subSubTitle">Physical Benefits:</p>
            <ul className="aboutDetail__list">
              <li>
                Playing tennis 3 hours a week cuts your risk of death in half
                according to Ralph Paffenbarger who conducted studies with well
                over 10,000 people and followed them over the course of 20
                years.
              </li>
              <li>
                Scientists at the University of Illinois suggest a link between
                playing tennis and continued brain development through the
                regeneration of connections between nerves in the brain which is
                the net result of a state of alertness and tactical thinking
                through strategic play.
              </li>
              <li>Tennis helps with your speed and overall body strength.</li>
              <li>Increased agility, balance and speed.</li>
              <li>
                Increased bone strength and bone density; disease prevention.
              </li>
              <li>Enhanced hand-eye coordination & greater flexibility.</li>
              <li>
                Promotes good eating habits, pre game to enhance energy and post
                game for recovery
              </li>
              <li>
                Competitive tennis burns more calories than aerobics, cycling
                and skating.
              </li>
            </ul>
            <p className="healthAndWellness__subSubTitle">Mental Benefits:</p>
            <ul className="aboutDetail__list">
              <li>
                Anxiety and associated disorders represent the most common form
                of classified mental illness ahead of depression and mood
                disorders. The National Institute of mental health reports that
                1 in 6 people suffer from an anxiety disorder.
              </li>
              <li>
                Anxiety is measured scientifically at the molecular level and
                the physiological level, as a result of body and mind, instinct
                and reason, nature and nurture disconnections.
              </li>
              <li>
                Tennis is an outlet which releases the anxiety and enhances your
                mental condition.
              </li>
              <li>
                It captivates and occupies the mind when fully engaged through
                learning a new skill or playing a match.
              </li>
              <li>
                As an equalizing force, tennis balances your moods, decreases
                the risks of depression, anger , confusion , anxiety and
                tension. Tennis allows the player to channel their thoughts and
                focus. An outlet to rid the body and purge the stress, anxiety
                and tension.
              </li>
              <li>
                To accept responsibility and learn coping skills on how best to
                recover mentally when facing challenging matches.
              </li>
              <li>
                Develop work ethic through drills and lessons and seeing the
                value of hard work.
              </li>
              <li>
                Optimal shot selection, requires much like in our life
                exercising the ability to make the right decisions at the right
                moment.
              </li>
            </ul>
            <p className="healthAndWellness__subSubTitle">
              Emotional Benefits:
            </p>
            <ul className="aboutDetail__list">
              <li>
                Choosing a healthy and active lifestyle playing the game of
                tennis has psychological benefits such as reducing depression
                and improving self-esteem.
              </li>
              <li>
                While exercising chemicals known as endorphins are produced in
                the brain and released into the body. Endorphins can give a
                euphoric and invigorating feeling and overall well being
                pleasant natural state of “high”, similar to that of morphine
                without the dependency or addiction. Endorphins interact with
                the receptors in your brain that reduce the perception of pain.
              </li>
              <li>
                Tennis helps us manage adversity while facing unforced errors it
                develops discipline and court ethics. Manage your mistakes by
                learning to play within your abilities and recognize that
                minimizing your mistakes in tennis or life is critical.
              </li>
              <li>
                Tennis requires excellent coping skills learning to adjust to
                the elements such as wind, sun and still be able to compete with
                tenacity.
              </li>
              <li>
                Learning to recover by adapting to the stress of a point and the
                recovery period between points is similar to the stress and
                recovery cycles in life.
              </li>
              <li>
                Planning and implementing strategic play; learning how to
                anticipate and opponents next moves and plan your counter-moves.
              </li>
              <li>
                Tennis develops your sense of observation and problem solving
                skills
              </li>
              <li>
                Discipline by working on your skills in practice and control the
                pace when in play or competition. Consistency is number 1 skill
                to strive for as an elite player.
              </li>
            </ul>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default HealthAndWellness;
