type Props = {
  text: string;
};

export default function ButtonPrimary({ text }: Props) {
  return (
    <div className="inline-flex h-10 px-4 py-2 rounded-md text-base font-bold items-center cursor-pointer border-none bg-bec-color-btn-primary text-bec-color-btn-inverse leading-none">
      {text}
    </div>
  );
}
