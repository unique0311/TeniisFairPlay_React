import React from "react";
import "../components/CSS/home.css";

import doubleTennisImage from "../assets/doubles.png";
import Login from "./Login";

const DoubleTennis = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Double Tennis</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <img src={doubleTennisImage} className="juniorImage__setting" />
            <p className="doubleTennis__title">
              How to Choose Your Doubles Partner
            </p>

            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              Wisdom imparted by the Greek Philosopher Aristotle{" "}
              <span style={{ fontStyle: "italic" }}>
                “The Whole is Greater Than the Sum of it’s Parts”{" "}
              </span>{" "}
              applies to a great doubles team . Two players who share a strong
              connection, synergy and willful presence on court will present a
              threat to the opposing team. From building a point, setting up and
              activating your net player, creating an offence approach or
              retreating to defend and reset the point as a unit the string or
              wall approach at the net or from the baseline has the ability to
              maintain the pressure and make your opponent feel your authority.
            </p>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              Simply said, the best players don’t always make the ideal doubles
              partner. When recruiting , select complimentary styles of play. An
              ideal double’s team The team’s optimal performance is accomplished
              from players who compliment not compete against each other.
              Recognition and acknowledgement that no one skill is greater than
              the other will serve you well as a team. Careful considerations
              are worthy prior to committing to your double’s partnership. Take
              your time, observe and figure out if it’s the best fit for both of
              you. Choose a partner who shares the same goals. In order to
              improve as a team, each player much endeavour to work on their own
              weaknesses. If outcome, competition and ranking is not the
              priority then share the court with a like minded person and keep
              it at a fun social level and nothing further is expected out of
              the partnership.
            </p>
            <div className="paragraph" />
            <p className="doubleTennis__title">
              How to Become A Great Doubles Partner
            </p>
            <p className="aboutDetail__firstpart">
              Communication is key and most critical in a strong double’s team.
              It requires a total collaboration and joint effort in implementing
              a strategy, discussing your intent and developing a game plan.
              Huddle at the centre court service line, with up to 20 seconds to
              spare you can easily get your message across . A team that can
              communicate can also pull out a win against better skilled
              players.
            </p>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              Be present and in the moment. Expunge all other noise, thoughts,
              distractions. Support each other and forgive quickly for any
              mistakes. Press that reset button and move forward by focusing on
              the next point. Find your pace and play at your pace. Don’t allow
              your opponent to dictate the play nor to distract you if they are
              weaker players. Adjust your court positions , adapt and anticipate
              by being a fully aware and moving with the ball. Recognize the
              strengths and weaknesses of each player brings to the table. Avoid
              blame and give credit even when your partner didn't do much to
              earn it. Step up when your partner is struggling. See this
              situation as a challenge and raise your game in the face of
              adverse conditions. Consistency over flashy. Try to construct a
              point and distance yourself from the big ego.
            </p>
            <div className="paragraph" />
            <p className="aboutDetail__firstpart">
              If you look nervous, you play nervous. So <strong>relax!</strong>{" "}
              Be resilient and resourceful look at every point as an opportunity
              not a defeat. The key is to remain calm under pressure. Avoid
              coaching your partner. It will surely deflate them and look like
              you are the superior player. Develop a keen sense of court
              awareness, try not to put your team out of position. If the ball
              is a stretch , leave it for your partner. If pulled out wide,
              don’t go for the big shot, just put it up. Don’t be afraid to Lob,
              as an undervalued shot it has the power to move the players around
              the court and if they are both at the net, it will surely make
              them scramble. Ball placement over power is the name of the game
              in doubles. Maintain your level of fitness and conditioning to
              survive the third sets or super tie breakers. Practice weekly, not
              through playing a social match but through drills and repetition
              Make your opponent uncomfortable, so stay way from their
              strengths. Keep an element of surprise and doubt, so I formations,
              aggressive poaching is a good tactic. Remember that the job of the
              non hitting player is to move with their partner. Don’t break the
              team up! Strive to love every minute of competition, regardless of
              the score or the result making your tennis experience much more
              enjoyable. A successful double’s team embraces the Win together
              and loose together philosophy.
            </p>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default DoubleTennis;
