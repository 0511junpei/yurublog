type Props = {
  caption: string;
};

const Caption = ({ caption }: Props) => {
  return (
    <div className="w-full mb-10 lg:mb-0 px-5 py-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 border-b-4 border-green-400 pb-4">
        {caption}
      </h1>
    </div>
  );
};

export default Caption;
