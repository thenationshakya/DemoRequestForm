export type OperatingSystemResponse = {
  title: string;
  options: OptionType[];
};

export type OptionType = {
  value: string;
  src: string;
};
