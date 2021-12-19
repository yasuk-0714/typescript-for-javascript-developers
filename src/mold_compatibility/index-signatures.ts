export {};

// let profile: { name?: string } = {};
// 
// profile.name = 'yasu';
// profile.age = 25;

// index signatureの書き方
// { [index: typeForIndex]: typeForValue }

interface Profile {
  name: string,
  underTwenty: boolean
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'yasu', underTwenty: false }

profile.name = 'yasu'
profile.age = 25
profile.nationality = 'japan'