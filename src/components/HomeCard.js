import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomeCard({ imgUrl, name, desc, linkUrl }) {
    return (
        <Link to={linkUrl}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={
                            imgUrl && require(`../books/${imgUrl}/img/cover.png`).default
                        }
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
