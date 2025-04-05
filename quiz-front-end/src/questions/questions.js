export const templates = [
  { id: 1, name: "How Well Do You Know Me?", emoji: "🧠" },
  { id: 2, name: "Most Likely To...", emoji: "🎯" },
  { id: 3, name: "This or That", emoji: "⚖️" },
  { id: 4, name: "Fun Facts About Me", emoji: "🕵️‍♂️" },
  { id: 5, name: "Would You Rather", emoji: "🤔" },
  { id: 6, name: "First Impressions", emoji: "👀" },
  { id: 7, name: "Guess the Memory", emoji: "📸" },
];

export const questionsByTemplate = [
  {
    templateId: 1,
    questions: [
      {
        id: 1,
        correctAnswerFrom: "friend",
        questionHost:
          "What do you think [name-of-friend]'s favorite genre of movie is?",
        questionFriend: "What is YOUR favorite genre of movie?",
        questionFriendAboutFriend: "What is your favorite genre of movie?",
        options: ["Action", "Comedy", "Romance", "Thriller"],
      },
      {
        id: 2,

        correctAnswerFrom: "host",
        questionHost: "What is YOUR favorite time of day?",
        questionFriend:
          "What do you think [name-of-host]'s favorite time of day is?",
        questionFriendAboutFriend:
          "What do you think [name-of-friend]'s favorite time of day is?",
        options: ["Morning", "Afternoon", "Evening", "Late Night"],
      },
      {
        id: 3,

        correctAnswerFrom: "friend",
        questionHost:
          "What do you think [name-of-friend]'s go-to comfort food is?",
        questionFriend: "What is YOUR go-to comfort food?",
        questionFriendAboutFriend: "What is your go-to comfort food?",
        options: ["Pizza", "Ice Cream", "Noodles", "Burger"],
      },
      {
        id: 4,

        correctAnswerFrom: "host",
        questionHost: "What is YOUR biggest fear?",
        questionFriend: "What do you think [name-of-host]'s biggest fear is?",
        questionFriendAboutFriend:
          "What do you think [name-of-friend]'s biggest fear is?",
        options: ["Heights", "Public Speaking", "Darkness", "Failure"],
      },
      {
        id: 5,

        correctAnswerFrom: "friend",
        questionHost:
          "Which of these apps do you think [name-of-friend] uses the most?",
        questionFriend: "Which app do YOU use the most?",
        questionFriendAboutFriend: "Which app do you use the most?",
        options: ["Instagram", "TikTok", "YouTube", "Spotify"],
      },
      {
        id: 6,

        correctAnswerFrom: "host",
        questionHost: "What is YOUR dream vacation destination?",
        questionFriend: "What do you think [name-of-host]'s dream vacation is?",
        questionFriendAboutFriend:
          "What do you think [name-of-friend]'s dream vacation is?",
        options: [
          "Beach Resort",
          "Mountain Cabin",
          "City Adventure",
          "Cultural Tour",
        ],
      },
      {
        id: 7,

        correctAnswerFrom: "friend",
        questionHost:
          "Which type of music do you think [name-of-friend] likes the most?",
        questionFriend: "What is YOUR favorite type of music?",
        questionFriendAboutFriend: "What is your favorite type of music?",
        options: ["Pop", "Rock", "Hip-hop", "Jazz"],
      },
      {
        id: 8,

        correctAnswerFrom: "host",
        questionHost: "How do YOU usually spend your weekends?",
        questionFriend:
          "How do you think [name-of-host] usually spends their weekends?",
        questionFriendAboutFriend:
          "How do you think [name-of-friend] usually spends their weekends?",
        options: [
          "Relaxing at home",
          "Going out with friends",
          "Working or studying",
          "Doing hobbies",
        ],
      },
      {
        id: 9,

        correctAnswerFrom: "friend",
        questionHost:
          "What do you think [name-of-friend]'s childhood dream job was?",
        questionFriend: "What was YOUR childhood dream job?",
        questionFriendAboutFriend: "What was your childhood dream job?",
        options: ["Doctor", "Actor", "Athlete", "Scientist"],
      },
      {
        id: 10,

        correctAnswerFrom: "host",
        questionHost: "If YOU had a superpower, what would it be?",
        questionFriend:
          "What do you think [name-of-host]'s superpower would be?",
        questionFriendAboutFriend:
          "What do you think [name-of-friend]'s superpower would be?",
        options: ["Invisibility", "Flying", "Reading minds", "Time travel"],
      },
    ],
  },
];
