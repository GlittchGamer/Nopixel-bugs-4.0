const DISCORD_WEBHOOK = "change me";

interface BugReportData {
    title: string;
    description: string;
    url: string;
}

export const sendBugReport = (playerName: string, data: BugReportData) => {
    const embed = [
        {
            color: 255,
            title: `Bug Report - ${playerName}`,
            description: `Title: \n\n \`${data.title}\` \n\n━━━━━━━━━━━━━━━━━━\n\n Description: \n\n \`${data.description}\` \n\n━━━━━━━━━━━━━━━━━━\n\n VOD / Clip / Screenshot URLs: \n\n \`${data.url}\` \n\n━━━━━━━━━━━━━━━━━━\n\n`,
            footer: {
                text: "Made by Hypix",
            },
        }
    ];

    const payload = {
        username: "Bug Reports",
        avatar_url: "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/error-512.png",
        embeds: embed
    };

    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (response.ok) {
                console.log('Bug report sent successfully:', response.status);
            } else {
                console.error('Error sending bug report:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Network error:', error);
        });
};