import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useNavigate } from 'react-router-dom';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../style/swiper.css";
import PositiveAffirmAudio from "./PositiveAffirmAudio";
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
SwiperCore.use([Pagination, Navigation]);

export default function BookSwiper(props) {
    const navigate = useNavigate();

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const pagination = {
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const generatePages = () => {
        const bookPages = [];
        for (var i = 1; i < props.bookLength; i++) {
            bookPages.push(
                <SwiperSlide key={i}>
                    <div className='player-wrapper'>
                        <img
                            alt={`${props.bookName} ${props.version} Page${i}`}
                            src={require(`../books/${props.bookName}_${props.version}/img/page${i}.png`).default}
                        />
                        <audio
                            id={`${props.bookName}_${props.version}_page${i}_audio`}
                            preload="auto"
                            controls
                            src={require(`../books/${props.bookName}_${props.version}/audio/page${i}_1.mp3`).default}
                        >
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>

                </SwiperSlide>
            );
        }
        return bookPages;
    };

    return (
        <Swiper
            pagination={pagination}
            className="mySwiper"
            centeredSlides={true}
            navigation={true}
            onSlideChange={(swiper) => {
                swiper.on('slideNextTransitionStart', function () {
                    // PositiveAffirmAudio();
                });
                swiper.on('slideChangeTransitionEnd', function (props) {
                    document.getElementById(`${props.bookName}_${props.version}_page${swiper.activeIndex}_audio`)?.play();
                });
                swiper.on('reachEnd', function () {
                    props.stopRecording();
                    navigate('#end')

                });
            }}
        >
            <SwiperSlide>
                <img alt={`${props.bookName} ${props.version} Cover`}
                    src={require(`../books/${props.bookName}_${props.version}/img/cover.png`).default}
                />
            </SwiperSlide>
            {generatePages()}
            <div ref={navigationPrevRef} />
            <div ref={navigationNextRef} />
        </Swiper >
    );
}
