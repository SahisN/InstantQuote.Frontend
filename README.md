# Live link

App is live on: [https://instant-quote-frontend.vercel.app/]

# Challeges faced during

Challenge 1: Create a secure system to authenticate users and remove the user when they logout.

Solution: I watched videos on different ways to authenticate users, landed on cookie-based authentication, and learned how to hash passwords when saving them to the database.

Challenge 2: I wanted to implement a class code lookup page that shows all the available class codes, and users can filter through them in search.

Solution: I went to different sources to find class code and used Python to scrape through the data and convert it to a JSON file. I looked through YouTube videos and ChatGPT for guidance on the Filtering system.

Challenge 3: I wanted a good backend service that had high availability.

Solution: I upgraded the render backend to $7 per month because it had static outbound IP, which allowed for easier whitelisting on my Mongodb and offered high availability.

Challenge 4: My backend was blocking my frontend from requesting due to cors.

Solution: I looked through YouTube and stack overflow to figure out how to configure Cors and whitelist the front end. A lot of it was trial and error, too.

Challenge 5: All the sessions created were being stored in memory, but render only had limited memory

Solution: Implemented Session management to store the session created in an external file instead of memory.

Challenge 6: Mongodb was blocking my backend server from accessing the database

Solution: I researched why it was causing it and found out that it was because no whitelisting had been done. I whitelisted all my static outbound IPs from my backend to fix it

Challenge 7: I wanted to use the ExpressJS for my project, but it was new to me.

Solution: I looked through tutorials on using express JSON, made simple APIs to gain knowledge, and used Postman to check if my APIs worked correctly.

Challenge 8: Third-party / Cross-site cookies were blocked by some browsers like Safari and most phone browsers as security

Solution: I did some debugging and research to determine that most phone and incognito browsers block third-party cookies. I used a Vercel reverse proxy tool to treat the cookies like first-party cookies. By reverse proxy, I made it so all the API requests that the front end received were from the same domain as the front end itself, which changed it from third-party cookies to first-party.

# Technology used

- Shadcn
- TanstackQuery
- Tailwindcss
- Vite
- React JS

# Getting Started

1. git clone https://github.com/SahisN/InstantQuote.Frontend.git
2. cd InstantQuote.Frontend
3. npm install
4. npm run dev
