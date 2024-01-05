type CategoryProps = {
  children: React.ReactNode;
};

const Category = ({ children }: CategoryProps) => {
  return (
    <span className='rounded-md bg-amber-200 py-1 px-2 text-black font-sans text-[11px] lowercase'>
      {children}
    </span>
  );
};
export default Category;
