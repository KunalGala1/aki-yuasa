type SubheaderProps = {
  children: React.ReactNode;
};

const Subheader = ({ children }: SubheaderProps) => {
  return <h2 className='text-slate-800 font-bold text-lg'>{children}</h2>;
};
export default Subheader;
