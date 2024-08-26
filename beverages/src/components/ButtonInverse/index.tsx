type Props = {
  text: string;
};

export default function ButtonInverse({ text }: Props) {
  return (
    <div className="inline-flex h-10 px-4 py-2 rounded-md text-base font-bold items-center cursor-pointer border border-bec-color-btn-primary bg-bec-color-btn-inverse text-bec-color-btn-primary leading-none">
      {text}
    </div>
  );
}
