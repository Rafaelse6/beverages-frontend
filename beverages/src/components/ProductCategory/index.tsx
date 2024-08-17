type Props = {
  name: string;
};

export default function ProductCategory({ name }: Props) {
  return (
    <div className="px-5 mr-5 mb-2.5 bg-bec-color-bg-tertiary rounded h-7 text-xs font-bold text-bec-color-font-tertiary flex justify-center items-center">
      {name}
    </div>
  );
}
