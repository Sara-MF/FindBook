import classNames from "classnames";

type Props = {
    title: string;
    variant?: 'light' | 'dark';
    className?: string;
}

export function Button({ title, className, variant = 'dark' }: Props) {
    return (
        <button className={classNames([
            'bg-emerald-500 px-6 py-2 rounded-lg shadow text-white text-medium mt-14 mb-8',
            variant === 'dark' ? 'bg-emerald-500' : 'bg-white border-2 border-emerald-500 text-emerald-600',
            className
        ])}>
            {title}
        </button>
    )
}