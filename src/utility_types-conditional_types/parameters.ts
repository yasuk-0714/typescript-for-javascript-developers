export {};

const debugProfile = (name:string, age: number) => {
  console.log({ name, age });
}

debugProfile('yasu', 25);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['wasshoi', 51]

debugProfile(...profile)