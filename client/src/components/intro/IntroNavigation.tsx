import { Button } from '../common/Button';
import { IntroNavigationProps } from './intro.types';

export const IntroNavigation = ({ index, total, onNext }: IntroNavigationProps) => (
  <Button
    onClick={onNext}
    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
  >
    {index === total - 1 ? '처음으로' : '다음'}
  </Button>
);