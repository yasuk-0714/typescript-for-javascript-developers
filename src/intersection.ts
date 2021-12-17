export {};

type Piture1 = {
  throwSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Piture1 = {
  throwSpeed: 154,
};

const OchiaiHiromnitshu: Batter1 = {
  battingAverage: 0.367,
};

type TwoWayPlayer = Piture1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwSpeed: 165,
  battingAverage: 0.286,
};
