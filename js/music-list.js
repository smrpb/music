// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "Harley Bird - Home",
    artist: "Jordan Schor",
    img: "music-1",
    src: "https://drive.google.com/file/d/17T4uZsqTloE36A7bUMcBPHtfnT4bq2dT/view?usp=sharing"
  },
  {
    name: "Ikson Anywhere – Ikson",
    artist: "Audio Library",
    img: "music-2",
    src: "https://drive.google.com/file/d/1lXiw9Lx1l356jgkTELD7zkffKkq3sSys/view?usp=sharing"
  },
  {
    name: "Beauz & Jvna - Crazy",
    artist: "Beauz & Jvna",
    img: "music-3",
    src: "https://drive.google.com/file/d/1gO_Spzs1z7WkdCV5cjstMT3rt6PIKTUM/view?usp=sharing"
  },
  {
    name: "Hardwind - Want Me",
    artist: "Mike Archangelo",
    img: "music-4",
    src: "https://drive.google.com/file/d/14X4BVlYYASZ10MJlMZ0fFNRsFUjMNuSo/view?usp=sharing"
  },
  {
    name: "Jim - Sun Goes Down",
    artist: "Jim Yosef x Roy",
    img: "music-5",
    src: "https://drive.google.com/file/d/1fMA5CIzN2zg3wWC0BLEJPpidvkgQ3945/view?usp=sharing"
  },
  {
    name: "Lost Sky - Vision NCS",
    artist: "NCS Release",
    img: "music-6",
    src: "https://drive.google.com/file/d/14QXrUBxSsinojdaAA9AkpOAqP7ZaOnsI/view?usp=sharing"
  },
  {
    name: "Alan Walker - Faded",
    artist: "ImanbekMusic",
    img: "music-7",
    src: "https://drive.google.com/file/d/1thDkn0LSoaotqjPUHamwyijiN8prTEfe/view?usp=sharing"
  },
  {
    name: "feat.Au/Ra and Tomine Harket",
    artist: "Alan Walker",
    img: "music-8",
    src: "https://drive.google.com/file/d/1uFgJdrVUwYzmmqq1dMFBvudBrVMgb5UP/view?usp=sharing"
  },
  {
    name: "MIC Drop(Steve Aoki Remix)",
    artist: "HYBE LABELS",
    img: "music-9",
    src: "https://drive.google.com/file/d/1iDdU45_fFr2HkkOoaI4fn-Eo3_HvEBA2/view?usp=sharing"
  },
  {
    name: "BTS(방탄소년단)'Butter' ",
    artist: "HYBE LABELS",
    img: "music-10",
    src: "https://drive.google.com/file/d/1X6nFZA2muOTspEt5AVHh8kJhbizsMDkT/view?usp=sharing"
  },
  {
    name: "BTS(방탄소년단)'Dynamite' ",
    artist: "HYBE LABELS",
    img: "music-11",
    src: "https://drive.google.com/file/d/1eBse-I0Np1LwXQwueIkM3gCG2IBxRCF-/view?usp=sharing"
  },
  {
    name: "DAOKO×Kenshi Yonezu -Fireworks",
    artist: "Daoko",
    img: "music-12",
    src: "https://drive.google.com/file/d/1izTTTj-GHRuabSyAdM95yzMu1dVa34eV/view?usp=sharing"
  },
  {
    name: "Teri Mitti - Kesari ",
    artist: " Zee Music Company",
    img: "music-13",
    src: "https://drive.google.com/file/d/1fk1AWAk8Hb__mFOGWqJJR12DLtB0nT4b/view?usp=sharing"
  },
  {
    name: "KHAIRIYAT(BONUS TRACK)-CHHICHHORE",
    artist: "T-Series",
    img: "music-14",
    src: "https://drive.google.com/file/d/15X7pi_23ZM_RaMua7IJSo0Fh9OQMLXV6/view?usp=sharing"
  },
  {
    name: "Waka Waka(This Time for Africa)",
    artist: "Shakira",
    img: "music-15",
    src: "https://drive.google.com/file/d/1hHq0Abwe488pMZbGwGSJ9w6WpJdYDRTW/view?usp=sharing"
  },
  {
    name: "Phao-2 Phut Hon(KAIZ Remix)",
    artist: "Light Night Music",
    img: "music-16",
    src: "https://drive.google.com/file/d/1Nftz_TgFIleGmfceYg-V0TG9ygq1Qkwz/view?usp=sharing"
  },
  {
    name: "スパークル - Your name",
    artist: "Radwimps",
    img: "music-17",
    src: "https://drive.google.com/file/d/10sPtPSu6D8wN_XNLYPFhIJsd-OP3WulH/view?usp=sharing"
  },
  {
    name: "Ed Sheeran - Shape of You",
    artist: "Ed Sheeran",
    img: "music-18",
    src: "https://drive.google.com/file/d/1R1qMOGQud03sxhJAfeBpM0CmW_hhwvra/view?usp=sharing"
  },
  {
    name: "Sia - Unstoppable ",
    artist: "Loku",
    img: "music-19",
    src: "https://drive.google.com/file/d/1i8AFcQIpjdyC-ffobT-7BjNsnmYpzt4p/view?usp=sharing"
  },
  {
    name: "Bhaag Milkha Bhaag - Zinda ",
    artist: "SonyMusicIndiaVEVO",
    img: "music-20",
    src: "https://drive.google.com/file/d/1gEkL1yELp4aLBnep96Ocr0Gp9U71Y5Oz/view?usp=sharing"
  },


  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];