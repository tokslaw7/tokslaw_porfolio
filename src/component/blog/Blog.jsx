import {Card, CardContent, CardMedia, Stack} from "@mui/material";
import image from "../../assets/images/toks.png"





export const blogData = [
    {
        id: 1,
        name: "Building Scalable Microservices with Node.js",
        title: "alex@example.com",
        description: "Best practices for designing and implementing microservices architecture...",
    },
    {
        id: 2,
        name: "Microservices Architecture:Best Practices",
        title: "alex@example.com",
        description: "Exploring the key principles and patterns for building scalable microservices...",
    },
    {
        id: 3,
        name: "TOGAF in Modern Enterprise",
        title: "alex@example.com",
        description: "How TOGAF framework adapts to modern digital transformation initiatives...",
    },
    {
        id: 4,
        name: "Enterprise Architecture Best Practices",
        title: "alex@example.com",
        description: "Exploring the key principles and patterns for building scalable microservices...",
        image: { image }
    },
];

export default function Blog ()  {
    return (
        <div id="blog">
            <h2> Latest Blog Posts</h2>
            <div className="">
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    {blogData.map((blogData) => (
                        <Card key={blogData.name} className="">
                            <CardContent className="">
                                <h2 className="">{blogData.name}</h2>
                                <p>{blogData.description}</p>
                                <p>{blogData.skills}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>

            </div>
        </div>
    );
};





// <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//         component="img"
//         alt="blog image"
//         height="140"
//         image={image}
//     />
// </Card>

// <div>
//     <h2>{name}</h2>
//     <p>Title:{title}</p>
//     <p>Description: {description}</p>
// </div>