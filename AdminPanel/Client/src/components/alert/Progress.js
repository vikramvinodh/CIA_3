import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import HashLoader from "react-spinners/HashLoader";


const Progress = (props) => {
    return (
        <>
            <LoadingBar
                color='#000000'
                progress={props.props}
                onLoaderFinished={() => 0}
            />

        </>
    )
}

export function HashLoad(props) {
    return (

        <HashLoader
            color={"#000000"}
            loading={props.prop}
            size={50}
        />
    )
}

export default Progress
