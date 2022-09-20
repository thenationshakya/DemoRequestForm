export type FrameworkResponse = {
  title: string;
  options: OptionType[];
};

export type OptionType = {
  id: string;
  value: string;
  src: string;
};
