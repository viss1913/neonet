import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const styles: Record<Variant, string> = {
  primary:
    'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25',
  secondary:
    'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
  ghost: 'text-primary hover:bg-primary/10',
};

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
