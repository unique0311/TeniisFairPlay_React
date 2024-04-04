import React from "react";
import "../components/CSS/home.css";

import kidsTeensTennisImage from "../assets/kidsTeens.png";
import kidsBackImage from "../assets/Fotolia_52285910_XS_cropped.png";
import Login from "./Login";

const SponsorshipOppotunities = () => {
  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Sponsorship Opportunities</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <p className="SponsorshipOpportunities__title">
              Sponsorship Opportunities
            </p>
            <p className="SeniorsTennis__paragraph">
              With over 5 million Canadians playing tennis at least once a year,
              Tennis FairPlay finds itself in the hub of the most active tennis
              community in Canada. Beautiful Vancouver, BC is where 36% of the
              population reported playing tennis of which 25% on a regular
              basis. According to Statistic Canada, BC’s population is
              approximately 4,606,451.
            </p>
            <p className="SeniorsTennis__paragraph">
              Reaching 1,658,322 million British Columbians is what Tennis
              FairPlay can offer your company with a wide selection and variety
              of Sponsorship opportunities. Our Global Interactive Tennis
              Network provides members with incentives and preferred retailer
              discounts providing options for where and how they choose to spend
              their money. How your company takes advantage of this gainful
              partnership with Tennis FairPlay is simple. Select the options
              below and sign up for the sponsorship opportunity that suits your
              corporate agenda. The marketing portal through our Website and
              Mobile App. is specifically designed and tailored to cater to the
              tennis community ranging from youths, adults, seniors and people
              with disabilities. Help us encourage and promote a healthier
              lifestyle through the sport of tennis, also known as The Sport of
              a Lifetime!
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

export default SponsorshipOppotunities;
