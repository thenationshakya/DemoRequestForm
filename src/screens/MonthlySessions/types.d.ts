export type SessionResponse = {
  title: string;
  subtitle: string;
  options: OptionType[];
};

export type OptionType = {
  id: string;
  value: string;
};
