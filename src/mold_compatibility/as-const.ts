export {};

let name = 'kenta'

let nickname = 'yasu' as const;
// nickname = 'other_name'
nickname = 'yasu';

let profile = {
  name: 'kenta',
  height: 177
} as const;

// profile.name = 'yasu'
// profile.height = 180