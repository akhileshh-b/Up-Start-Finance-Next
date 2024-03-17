import React from 'react'
import Head from 'next/head'

const NotFound = (props) => {
  return (
    <>
      <div className="not-found-container">
        <Head>
          <title>404 - Not Found</title>
        </Head>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <div className="not-found-container1">
          <h1 className="not-found-text1">404</h1>
        </div>
        <div className="not-found-container2">
          <h2 className="not-found-text2">
            WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
          </h2>
        </div>
      </div>
      <style jsx>
        {`
          .not-found-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-container1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text1 {
            color: rgb(38, 38, 38);
            font-size: 252px;
            margin-top: -20px;
            font-weight: 900;
            margin-bottom: -20px;
            letter-spacing: -20px;
          }
          .not-found-container2 {
            width: 421px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text2 {
            text-align: center;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default NotFound
