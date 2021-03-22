import React from 'react';
import Line from '../static/images/line.png';
import Benefit from './Benefit';

export default (props) => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__flex">
          <div className="intro__titles__btn">

            <div className="intro__titles">
              <div className="intro__title">Путешествие</div>
              <div className="intro__subtitle">на красную планету</div>
            </div>

            <div>
              <button className="btn">
                Начать путешествие
              <span className="btn-border-hor"></span>
                <span className="btn-border-ver"></span>
                <span className="btn-flare"></span>
              </button>
              <div>
                <div className="btn__line">
                  <img src={Line} />
                </div>
              </div>
            </div>
          </div>

          <Benefit benefits={props.benefits} />

        </div>
      </div>
    </div>
  )
}