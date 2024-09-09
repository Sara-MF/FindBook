import classNames from "classnames";

type Props = {
    title: string;
    variant?: 'light' | 'dark';
    className?: string;
    onClick?: (title: any) => void;
}

export function Button({ title, className, variant = 'dark', onClick }: Props) {
    return (
        <button className={classNames([
            'bg-emerald-500 px-6 py-2 rounded-lg shadow text-white text-medium mb-8',
            variant === 'dark' ? 'bg-emerald-500 text-white' : 'bg-white border-2 border-emerald-500 text-emerald-500',
            className
        ])}
        onClick={onClick}
        >
            {title}
        </button>
    )
}