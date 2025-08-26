// import { useState, useEffect } from "react";
import {Button, CardActions, CardContent, Typography} from "@mui/material";

export default function About() {
    // const [data, setData] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
    //
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.org/posts")
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             setIsLoading(false);
    //         }).catch(error => console.error("Error Fetching data:", error));
    //
    // }, []);
    //
    // if (isLoading) {
    //     return (
    //         <div>Loading ...</div>
    //     )
    // }

    return (
        <div id="about">
            {/*Data: {JSON.stringify(data)};*/}
            <h3>I got here - About</h3>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Toks Lawal
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Toks is an Enterprise Architect with a robust background in software development and cybersecurity,
                    honed through dedicated service in the US Army. With a solution-driven approach,
                    she specializes in leveraging event-driven architecture and advanced methodologies across ADM phases to craft resilient, scalable,
                    and efficient microservices architectures. Her experience encompasses
                    designing and implementing innovative solutions that meet complex enterprise needs while ensuring security and reliability at every step.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

        </div>
    )
}