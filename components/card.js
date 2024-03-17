import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className={`card-card ${props.rootClassName} `}>
        <div className="card-info">
          <span className="card-text">{props.text}</span>
          <span className="card-text1">{props.text1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .card-card {
            flex: 0 0 auto;
            width: 32%;
            display: flex;
            padding: 20px;
            max-width: 450px;
            min-height: 480px;
            align-items: center;
            border-radius: 36px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/rectangle%2035-1500w.png');
          }
          .card-info {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-scheme-white);
          }
          .card-text {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .card-text1 {
            line-height: 1.5;
          }
          @media (max-width: 767px) {
            .card-card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  text1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
  rootClassName: '',
  text: 'Business',
}

Card.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Card
