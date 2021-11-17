import React from 'react';
import HomeCard from "../components/HomeCard.js";
import Grid from "@mui/material/Grid";

export default function Home() {
    const bookMenu = [
        {
            name: "Frogbook 1",
            desc: "one option",
            imgUrl: "Frogbook_1",
            linkUrl: "frogbook1",
        },
        {
            name: "Frogbook 2",
            desc: "two option",
            imgUrl: "Frogbook_2",
            linkUrl: "frogbook2",
        },
        {
            name: "Frogbook 3",
            desc: "three option",
            imgUrl: "Frogbook_3",
            linkUrl: "frogbook3",
        },
        {
            name: "Springloaded 1",
            desc: "three option",
            imgUrl: "Springloaded_1",
            linkUrl: "springloaded1",
        },
    ];
    return (
        <Grid container spacing={2}>
            {bookMenu.map(function (item, idx) {
                return (
                    <Grid xs={12} sm={6} md={4} item key={idx}>
                        <HomeCard
                            name={item.name}
                            desc={item.desc}
                            imgUrl={item.imgUrl}
                            linkUrl={"/book/" + item.linkUrl}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}