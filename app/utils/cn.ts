import { clsx } from 'clsx';
import type { ClassValue as ClassNameValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassNameValue[]) => twMerge(clsx(inputs));

export { cn };
