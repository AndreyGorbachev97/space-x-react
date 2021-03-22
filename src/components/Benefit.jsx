import React from 'react';
import styled from 'styled-components';

const BenefitBtn = styled.div`
  position: relative;
  height: 160px;
  width: 185px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #bcbcbc;
  background: ${props => `linear-gradient(to ${props.directionGrad}, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.05) );`};
  transition: color 0.2s linear;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    background: ${props => `linear-gradient(to ${props.directionGrad}, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1) )`};
    border: 1px solid transparent;
    border-width: ${props => props.borderWidth};
    border-image: ${props => `radial-gradient(at ${props.directionGrad},rgb(151, 151, 151), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) )`};
    border-image-slice: 2;
    opacity: 0;
    transition: opacity 0.5s linear;
  }
  &:hover&:after {
    opacity: 1;
  }
  @media (max-width: 900px) {
    height: 150px;
    width: 175px;
  }

  @media (max-width:450px) {
    height: 130px;
    width: 155px;
  }
`

const BenefitBtnGrad = styled.div`
  background: ${props => `linear-gradient(45deg, ${props.gradColors})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default (props) => {
  return (
    <div className="intro__btns">
      {
        props.benefits.map((benefit, i) => (
          <BenefitBtn
            className="intro__btn"
            key={i}
            directionGrad={benefit.directionGrad}
            borderWidth={benefit.borderWidth}
          >
            <BenefitBtnGrad gradColors={benefit.gradColors}>
              <div className="intro__btn__suptitle">{benefit.suptitle}</div>
              <div className="intro__btn__title">
                {benefit.title}
                {benefit.letter && <span className="small__letter">{benefit.letter}</span>}
              </div>
              <div className="intro__btn__subtitle">{benefit.subtitle}</div>
            </BenefitBtnGrad>
          </BenefitBtn>
        ))
      }
    </div>
  )
}