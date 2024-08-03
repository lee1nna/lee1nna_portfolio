type WrapperProps = {
  children?: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="container mx-auto p-8 w-auto h-auto grid lg:grid-cols-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10">
      {children}
    </div>
  );
};

export default Wrapper;
