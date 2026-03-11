# Focus App – Deployable Full Stack Version

## Deploy to Render
1. Push repo to GitHub
2. Go to https://render.com
3. New → Web Service
4. Pick your repo
5. Build command: *empty*
6. Start command:
    ```
    npm start
    ```
7. Environment variables:
    - MONGODB_URI = your atlas uri
    - JWT_SECRET = your secret

Done.
