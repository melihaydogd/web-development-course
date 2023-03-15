# Heroku Commands

1. heroku create newsletter-signup-tut
2. heroku git:remote -a newsletter-signup-tut
3. heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack
4. heroku buildpacks:add heroku/nodejs
5. heroku config:set PROJECT_PATH=API_2_Newsletter-Signup
6. git push heroku master
7. heroku logs --tail -a newsletter-signup-tut
8. heroku open -a newsletter-signup-tut

-   1-2-3-4-5-6 is used to deploy the application named **newsletter-signup-tut**.
-   1: Creates app
-   2: Add remote origin to git
-   3-4-5: Sets buildpacks to the specified folder
-   6: Deploys the application
-   7: Shows the logs
-   8: Opens the application
