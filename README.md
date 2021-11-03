# zodiac-symbols

Full-Stack Mobile App built using Express.js, Node.js, MongoDB Atlas connected through Heroku and React-Native for both iOS and Android Frontend. Expo environment.
The DB is a collection of the 360' Zodiac Degrees interpretations in accordance with the Sabian Symbols. The App allows the following:

1) To search in the DB for a specific Degree of the 360',
2) to get a random Degree from the 360' for matters of ...inspiration.

This is a handy tool to gain deeper insights regarding the current transits of the planets, the birth chart positions and other celestial events analysis 
(e.g. full/new moons, eclypses, etc.. )


##MVP:
- Build DB and API:
  * Configure DB in cloud using MongoDB Atlas
  * Deploy backend to Heroku Cloud Platform

- Build UI for Android and iOS:
  * set up Expo
  * used React Stack Navigation
  * customized nav Header to hide on scrolling down (while reading zodiac degree info)
  * customized loading screens
  * set up a random background everytime the API is called
  * added a Switch button to enable 'Reading Mode' and disable the random background


## Backlog:
- Add birthday degrees calculation
- Add other types of degrees interpretations
