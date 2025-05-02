import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 30 }) => {
  return <GraduationCap size={size} className={className} />;
};

export default Logo;
