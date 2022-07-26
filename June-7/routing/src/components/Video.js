import React from 'react'

const Video = () => {
    return (
        <>
            <video controls width="250">
                <source src="/https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" />
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>

        </>


    )
}

export default Video