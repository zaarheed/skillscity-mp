export default function handler(req, res) {
    const locations = [
        {
            id: "manchester",
            title: "Manchester",
            visitedDate: "Last week",
            imgUrl: "/assets/manchester.png"
        },
        {
            id: "singapore",
            title: "Singapore",
            visitedDate: "Last year",
            imgUrl: "/assets/singapore.png"
        },
        {
            id: "san-francisco",
            title: "San Francisco",
            visitedDate: "Jan 2022",
            imgUrl: "/assets/san-francisco.png"
        }
    ];

    res.json(locations);
}