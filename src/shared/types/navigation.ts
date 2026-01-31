export type NavigationItemProps = {
  title: string;
  url: string;
};

export type NavigationSectionProps = {
  title: string;
  items: NavigationItemProps[];
};
