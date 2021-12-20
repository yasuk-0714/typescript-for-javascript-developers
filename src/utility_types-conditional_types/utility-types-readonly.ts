export {};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
  name: 'yasu',
  age: 25
}

me.age ++;

console.log(me)

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
  name: 'wasshoi',
  age: 65
}

// friend.age ++

console.log(friend);

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>