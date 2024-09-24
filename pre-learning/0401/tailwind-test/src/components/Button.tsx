// export default function Button({ text }: { text: string }) {
export default function Button({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        className={`${className} py-2 px-4 rounded-lg text-sm text-white`}
      >
        {children}
      </button>
    </>
  );
}
