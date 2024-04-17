import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function GitHubCard() {
    const [githubData, setGithubData] = useState(null);

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                const response = await fetch(`https://api.github.com/users/crudd12`);
                const data = await response.json();
                setGithubData({
                    name: data.name,
                    profilePic: data.avatar_url,
                    username: data.login,
                    bio: data.bio
                });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            }
        }

        fetchGitHubData();
    }, []); // Empty dependency array so that the effect runs only once

    if (!githubData) {
        return <div>Loading...</div>;
    }

    const { name, profilePic, username, bio } = githubData;

    return (
        <div className="card">
            <h1>{name}</h1>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={profilePic} />
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <Card.Text>
                        {bio}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard;