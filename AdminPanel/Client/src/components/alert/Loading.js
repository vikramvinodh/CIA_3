import React from 'react'
import Hashloader from "react-spinners/HashLoader";

const Loading = () => {
    return (
        <>
            <div className="loading">
                <Hashloader color="#000000" loading={true} size={50} />
            </div>
        </>
    )
}

export default Loading
