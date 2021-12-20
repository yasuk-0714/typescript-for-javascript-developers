export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type sinpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

type smallProfile = Omit<DetailedProfile, 'height'>