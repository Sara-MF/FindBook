type Props = {
  title: string;
}

export function Tag({ title }: Props) {

  return (
    <p className="rounded-full bg-emerald-200 bg-opacity-50 text-sm text-emerald-600 text-center w-fit px-2 py-1 mb-2">
      {title}
    </p>
  )

}