# hitmeup-backend
```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

## User 

{
  "name": "Viktoriia",
  "email": "nazaruk.v92@gmail.com",
  "password": "password",
  "startLevel": "beginner"
  "currentLevel": "beginner",
  "role": "admin",
  "learnedWords": [],
  "myWords": [],
  "notifications": true,
  "token": "",
}


## Word
 {
  "word": "instant",
  "translate": ["мгновенный", "моментальный"],
  "level": "intermediate",
  "image": "https://www.pexels.com/photo/photo-of-person-holding-an-instant-camera-3353653",
  "example": [
    { "translate": "мгновенное удовлетворение ", "usage": "Instant gratification " },
    { "translate": "Растворимый кофе", "usage": "Instant coffee" },
    { "translate": "Каждую секунду", "usage": "At every instant" }
  ]
}

## Collocation
- {
  "image": "https://www.pexels.com/photo/focused-young-sportswoman-climbing-huge-cliff-in-ravine-4009355/",
  "level": "advanced",
  "collocation": "Hang in there!",
  "translate": ["Держись!", "Продожлай!", "Не сдавайся!"]
}

.md docs
https://github.com/DavidAnson/markdownlint/blob/v0.24.0/doc/Rules.md#md041

# Routs for WORDS

GET  /words/getAllWords                        - get all words
GET  /words/:wordId                            - get one word by id
POST /words/new                                - add new word
POST /words/delete/:wordId                     - delete one word

# Routs for COLLOCATIONS

GET /collocations/getAllCollocations           - get all collocations
GET /collocations/:collocationId               - get one collocation by id
POST /collocations/new                         - add new collocation
POST /collocations/delete/:collocationId       - delete one collocation

# Routs for USER

GET /users                                     - get all users
POST /auth/register                            - register new user
POST /auth/login                               - login user
POST /auth/logout/:userId                      - logout user
