export interface FeaturedCardData {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export interface HomepageSectionData {
  heading: string;
  items: FeaturedCardData[];
}
