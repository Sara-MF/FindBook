type Props = {
    title: string
}

export function Button({title}: Props) {
    return (
        <button className="bg-emerald-500 px-6 py-2 rounded-lg shadow text-white text-medium mt-14 mb-8">
            {title}
        </button>
    )
}