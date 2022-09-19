export type OperatingSystemResponse = {
  title: string;
  options: OptionType[];
};

export type OptionType = {
  id: string;
  value: string;
  src: string;
};
