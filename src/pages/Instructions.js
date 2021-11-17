import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Instructions() {

    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" component="div" gutterBottom>
                Instructions
            </Typography>

            <Typography variant="body1" gutterBottom>
                <b> About the research. </b> <br />
                The main focus of Spring-a-story Lancashire is to empower children to be more independent in reading
                through the introduction of e-book co-reading.
                <br />
                <b>Note:</b> Recommended browser; Firefox for Android and PC, Safari for iOS
                (with Media Recorder develop feature enabled.).
                <b> How does it work. </b>
                Your role is to facilitate the reading activity and the creation of the story, by helping the
                child
                when required as you would do when reading a book. This application will also request microphone
                permission to record the audio of your stories, this must be enabled for the recording to work.
                These stories will be confidential and only be used for research purposes only. <br />
                Once the book comes to its end a questionnaire will appear asking questions regarding you and
                your
                child’s experience. You will be also able to listen back the recording to ensure you are happy
                the
                story to be submitted to be a part of the research. This activity should last 15-20 minutes.
                <br /><br />
                Your child is required to tell a story, based on the pictures they see in the book. On each page
                there will be some question prompts to help them tell a story. There will also be orange circles
                where the child can tap on, these will have additional question prompts. If the page has no
                orange
                circles this means that there are no more question prompts and the child may turn over to the
                next
                page.
                <br /><br />
                Once the book comes to its end a questionnaire will appear asking questions regarding you and
                your
                child’s experience. You will be also able to listen back the recording to ensure you are happy
                the
                story to be submitted to be a part of the research. This activity should last 15-20 minutes.
                <br /><br />
                We use cookies to save your user ID and session ID to recognise your repeat visits. If you
                continue
                using this application, you agree that we can place these types of cookies on your device
                <br />

                <b> App Demo for Android</b>





                <b> View Participant Information Sheet </b>

                <a href="assets/file/PIS_parents from home.pdf">Download</a>



                <b> How to turn on iPad media recorder develop feature? </b>

                Open SettingSafariAdvancedExperimental Webkit Featuresturn on
                MediaRecorder toggle



                <b> How to turn on iPhone media recorder develop feature?</b>

                Open SettingSafariAdvancedExperimental Webkit Featuresturn on
                MediaRecorder toggle



                <b> How to download Firefox? </b>
                <a href="https://www.mozilla.org/en-GB/firefox/new/">Click this link to download Firefox , then
                    click 'Download Now'</a>

                If you have any further issues or questions you may get in touch by emailing
                e.rubegni@lancaster.ac.uk<br />
                Thanks, Elisa Rubegni, lecturer at the School of Computing  Communications
                Lancaster University, UK
            </Typography>
        </Box>
    );
}