type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <h1 className='font-bold text-2xl'>{children}</h1>;
};
export default Header;
