type WrapperProps = {
  children?: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="md:container md:mx-auto p-8">{children}</div>;
};

export default Wrapper;
