import {Button, Card, CardActions, CardContent, Stack} from "@mui/material";


export const worksData = [
    {
        id: 1,
        name: "Mobile Banking App",
        title: "Mobile Banking App",
        description: "Secure React Native application with biometric authentication",
        skills: "React Native",
    },
    {
        id: 2,
        name: "Cross-Platform Mobile App",
        title: "Cross-Platform Mobile App",
        description: "Mobile App",
        skills: "React Native",
    },
    {
        id: 3,
        name: "Microservices API Gateway",
        title: "Microservices API Gateway",
        description: "Infrastructure Setup",
        skills: "Docker, Redis",
    },
    {
        id: 4,
        name: "Enterprise Analytics Platform",
        title: "Enterprise Analytics Platform",
        description: "Enterprise Dashboard",
        skills: "React.js, Node.js, PostgreSQL",
    },
];

export default function Works({name, title, description}) {
    return (
        <div id="works">
            <h2> Featured Works </h2>
            <div className="">
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    {worksData.map((worksData) => (
                        <Card key={worksData.name} className="">
                            <CardContent className="p-4">
                                <h2 className="">{worksData.name}</h2>
                                <p>{worksData.description}</p>
                                <p><strong>{worksData.skills}</strong></p>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </div>

        </div>

    )
};
