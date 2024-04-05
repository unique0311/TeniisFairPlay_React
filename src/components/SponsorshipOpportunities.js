import React from "react";
import "../components/CSS/home.css";

import SponsorManImage from "../assets/sponsorMan.png";
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
              <div className="SponsorshipOppBlock_side">
                <div className="SponsorshipOppSide__container">
                  <div className="SponsorshipOppSide__round">
                    <div />
                  </div>
                  <div className="SponsorshipSide__paragraph">
                    <p className="SponsorshipSidePara__title">
                      Sponsorship Opportunities:
                    </p>
                    <div className="SponsorshipSidePara__details">
                      <p>- League Sponsors</p>
                      <p>- Sponsor Page Advertisement</p>
                      <p>- Member Benefit Sponsor</p>
                      <p>- Special Event Sponsor</p>
                      <p>- Exclusive Category Sponsor</p>
                      <p>- Junior Sponsor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SponsorshipOppBlock_side">
                <div className="SponsorshipOppSide__container">
                  <div className="SponsorshipOppSide__round">
                    <div />
                  </div>
                  <div className="SponsorshipSide__paragraph">
                    <p className="SponsorshipSidePara__title">Features:</p>
                    <div className="SponsorshipSidePara__details">
                      <p>- Visibility on the Sponsor Page</p>
                      <p>- Visibility on the Home Page</p>
                      <p>- Corporate Logo on the Website</p>
                      <p>- Corporate Logo on the Tennis Apparel</p>
                      <p>
                        - Corporate Logo on Tennis FairPlay's Promotional
                        Materials/Flyers
                      </p>
                      <p>- Reward Gift Bags & Monthly Draw Participation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SponsorshipOppBlock_side">
                <div className="SponsorshipOppSide__container">
                  <div className="SponsorshipOppSide__round">
                    <div />
                  </div>
                  <div className="SponsorshipSide__paragraph">
                    <p className="SponsorshipSidePara__title">
                      Additional Opportunities:
                    </p>
                    <div className="SponsorshipSidePara__details">
                      <p>- Non-Monetary Contributions & Collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SponsorOpp__bottomContainer">
              <div className="SponsorOpp__bottomLeft">
                <p className="SeniorsTennis__paragraph sponsor__space">
                  For programs and rates please fill out the form below and
                  submit your interest in receiving additional information on
                  Tennis FairPlay’s Sponsorship Opportunities
                </p>
                <p className="SeniorsTennis__paragraph sponsor__space">
                  [easy_contact_forms fid=1]
                </p>
                <p className="SeniorsTennis__paragraph sponsor__space">
                  <strong>Thank you for your participation!</strong>
                </p>
              </div>
              <img src={SponsorManImage} />
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default SponsorshipOppotunities;
