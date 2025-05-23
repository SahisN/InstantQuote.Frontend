# Live link
<p>App is live on: [https://instant-quote-frontend.vercel.app/] </p>
<p> Recommend browser: Chrome or Firefox </p>
<p>Note: App user cookies to authenticate and track user. Please enable cookies if you blocked it</p>

# Challeges faced during
<p> Challenge 1: Finding a secure way to authenticate user and remove the user when they login and logout <p>
<p> Solution: I watched videos on how different ways to authenticate users, and landed on cookie based authentication and learned how to hash password when saving it to database. <p>

<p> Challenge 2: I wanted to add auto suggestion feature to class code on quote form when user inputs class code or description. </p>
Solution: I used v0.dev as a guideline along with other libraries like shadcn to implement the feature

<p> Challenge 3: I wanted to implement a class code lookup page where it shows all the available class code and user can filter through in search. </p>
<p> Solution: I went to different sources to find class code and used python to scrape through the data and converted to json file. For Filtering system, I looked through youtube videos and chatgpt for guidance  </p>

 <p>Challenge 4: I wanted a good backend service that had high availability  </p>
<p>Solution: I upgrade render backend to $7 month because it had static outbound ip which allowed for easier whitelisting on my mongodb and offered high availability.  </p>

<p>Challenge 5: My backend was blocking my frontend for making request due to cors  </p>
<p>Solution: I looked thru youtube and stack overflow to figure out how can I configure cors and whitelist the frontend. Alot of it was trail and error too.  </p>

<p>Challenge 6: All the sessions created were being stored in memory but render only had limited memory  </p>
<p>Solution: Implemented Session management to store the session created in external file instead of memory.  </p>

<p>Challenge 7: Mongodb was blocking my backend server from accessing the database.  </p>
<p>Solution: I did some research on why it was causing it, I found out that it was because there was no whitelisting done. I whitelisted all my static outbound ip from my backend to fix it.  </p>

<p>Challenge 8: I wanted to use the express json for my project but i was new.  </p>
<p>Solution: I looked thru tutorials on how to use express json, made simple apis to gain knowledge, and used postman to check if my api's were working properly.  </p>

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
