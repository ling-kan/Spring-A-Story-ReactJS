import BookSwiper from "./BookSwiper";
// import Recorder from "./Recorder";
import React, { useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
export default function CustomBookRender(props) {
    const { status, startRecording, stopRecording, mediaBlobUrl, error } =
        useReactMediaRecorder({
            screen: true,
            askPermissionOnMount: true,
            video: true,
        });
    let location = useLocation();

    useEffect(() => {
        startRecording();
    }, []);

    return (
        <React.Fragment>
            {location.hash.includes("#end") ? (
                <React.Fragment>
                    {
                        mediaBlobUrl ? (
                            <video
                                className="swiper-container"
                                src={mediaBlobUrl}
                                controls
                                autoPlay
                                loop
                            />
                        ) : (
                            <Alert severity="error">
                                <AlertTitle>ERROR</AlertTitle>
                                <p>NO RECORDING FOUND!</p>
                                {error &&
                                    <p>
                                        {error.length !== 0
                                            ? error.replace("_", " ").toUpperCase()
                                            : status.replace("_", " ").toUpperCase()}
                                    </p>}
                            </Alert>
                        )}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {error && <p style={{ position: "absolute", right: "2rem", top: "0" }}>
                        {error?.length !== 0
                            ? `ERROR! ${error.replace("_", " ").toUpperCase()}`
                            : status.replace("_", " ").toUpperCase()}
                    </p>}
                    <BookSwiper stopRecording={() => stopRecording()} {...props} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
}
