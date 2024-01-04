type CategoryProps = {
  id: string;
  children: React.ReactNode;
};

const Category = ({ children, id }: CategoryProps) => {
  return (
    <span
      id={id}
      className='rounded-md bg-amber-200 py-1 px-2 text-black font-sans text-[11px] lowercase'
    >
      {children}
    </span>
  );
};
export default Category;
