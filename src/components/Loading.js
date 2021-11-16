import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
    return (
        <div className='loading'>
            <ClipLoader loading={true} color='#dd7230' size={150} css={override}/>
        </div>
    )
}

export default Loading
