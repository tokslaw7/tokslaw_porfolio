import {Card, CardContent, Stack } from "@mui/material";


export const serviceData = [
    {
        id: 1,
        name: "Software Architecture & Microservices",
        title: "alex@example.com",
        description: "Design and implement scalable, maintainable software architectures using modern patterns and practices.",
    },
    {
        id: 2,
        name: "Full-stack Web & Mobile Development",
        title: "jordan@example.com",
        description: "End-to-end development of web and mobile applications using cutting-edge technologies.",
    },
    {
        id: 3,
        name: "Enterprise Integration & Cloud Solutions",
        title: "tea@example.com",
        description: "Seamless integration of enterprise systems and cloud-native solution development.",
    },
    {
        id: 4,
        name: "Tech Consultation and Mentorship",
        title: "wren@example.com",
        description: "Strategic technology guidance and mentorship for teams and individuals.",
    },
];





export default function Service ()  {
    return (
        <div id="service">
            <h2> Featured Services </h2>
            <div className="">
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    {serviceData.map((serviceData) => (
                        <Card key={serviceData.name} className="bg-red-100 shadow-xl">
                            <CardContent className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{serviceData.name}</h2>
                                <p>{serviceData.description}</p>
                                <p>{serviceData.skills}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>

            </div>
        </div>
    );
};

