type Props = {
    title: string
}

export function SectionTitle({title}: Props) {
    return (
        <div>
            <h4 className="text-zinc-700 text-4xl font-medium border-b-4 border-b-emerald-500 w-fit mt-8">{title}</h4>
        </div>
    )
}