type MainTextProps = {
  children: React.ReactNode;
};

const MainText = ({ children }: MainTextProps) => {
  return <p className='text-slate-950 font-light'>{children}</p>;
};
export default MainText;
