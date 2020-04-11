import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  console.log('El pathname ', router.pathname);
  console.log("L'Href ", props.href);
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href })}
    </Link>
  );
};

export default ActiveLink;
