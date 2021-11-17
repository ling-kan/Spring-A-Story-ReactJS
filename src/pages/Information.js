import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Information() {

    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" component="div" gutterBottom>
                Application Information
            </Typography>

            <Typography variant="body1" gutterBottom>
                This application is used for 'Non-commerical research and private study'.
                <br />
                The following books are being used in this application.
                <ul>
                    <li>https://freekidsbooks.org/springloaded-wordless-book/ <br />
                        &emsp;Springloaded, Author Sam Wilson, Illustrator: Thea Nicole De Klerk Designer: Chenél Ferreira
                        <br />
                        &emsp;No changes have been made to the book, some pages are not included to shorten the book.
                    </li>
                    <li>https://freekidsbooks.org/toast-a-wordless-book-young-children/<br />
                        &emsp;Toast by Alex Latimer, Helen Moffett, Jennifer Jacobs <br />
                        &emsp;No changes have been made to the book, some pages are not included to shorten the book.
                    </li>
                    <li>Frog, Where Are You? by Mercer Mayer<br />
                        &emsp;Parts of the book has been edited to highlight certain parts of the picture, and some pages
                        are not included to shorten the book.</li>
                </ul>

                App Developed by Ling Kan
            </Typography>
        </Box >
    );
}