export type ImprovementResponse = {
  title: string;
  subtitle: string;
  options: OptionType[];
};

export type OptionType = {
  id: string;
  value: string;
};
