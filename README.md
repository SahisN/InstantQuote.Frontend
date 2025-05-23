# Challeges faced during
1. Implementing secure cookie-based authnetication, which required configuration to ensure both frontend and backend could securely share session data.
2. Adding auto complete Class Code to show suggestion on class code by inputing either class code or description
3. Finding a general class code lookup webpage to scrape information from and implement it on webapp, also adding feature to filter through large data provided via class code or description
4. Finding & configuring good backend service. I had to move away from render because the free tier had spindown after 15 minutes which caused the app start to be really slow. Ultimately, I came back to render and upgraded from free to $7 to avoid spindown
5. Implementing & Whitelisting CORS to ensure that frontend can communicate with backend
6. Implemented Session management to store in external file instead of memory to avoid excessive RAM.
7. Implemented Static outbound whitelist to allow backend to communicate with database

# Technology used
- Shadcn
- TanstackQuery
- Tailwindcss
- Vite

# Getting Started

1. git clone https://github.com/SahisN/InstantQuote.Frontend.git
2. cd InstantQuote.Frontend
3. npm install
4. npm run dev
