const db = {
  posts: [
    {
      img: "https://www.takefoto.ru/userfiles/image/Dlya%20Statey/07.04.2016/rezhim_peyzazh/rezhim_peyzazh_1.jpg",
      nickname: "Ivan",
      header: "Hi!",
      text: "This is my first text on my first page",
      postId: "1",
      authorId: 1,
      hashtag: "world",
    },
    {
      img: "https://avatars.mds.yandex.net/get-zen_doc/3122622/pub_5eabbd0b13284a1c2411369e_5eabbe2aec9bc44b276986cf/scale_1200",
      nickname: "Sergey2000",
      header: "New planet",
      text: 'yesterday, I\'ve looked to telescope and found a new planet in "Cascad" constellation',
      postId: "2",
      authorId: 2,
      hashtag: "world",
    },
    {
      img: "https://i.pinimg.com/originals/c1/55/d5/c155d50b10c5526bdffd2c2a0063f352.jpg",
      nickname: "Sergey2000",
      header: "Cool guy",
      text: "today mood",
      postId: "3",
      authorId: 2,
      hashtag: "world",
    },
  ],
  users: [
    {
      nickname: "test",
      email: "v1@mail.ru",
      password: 1234,
    },
  ],
};

module.exports = {
  db,
};
