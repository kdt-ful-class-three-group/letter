export interface IntroNavigationProps {
  index: number;
  total: number;
  onNext: () => void;
}

export interface IntroSlideProps {
  title: string;
  description: string;
}