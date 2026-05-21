import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Tone = 'light' | 'dark' | 'muted';

const tones: Record<Tone, string> = {
  light: 'bg-white text-text',
  muted: 'bg-bg-light text-text',
  dark: 'bg-[#0a1a2f] text-white',
};

export function Section({
  id,
  tone = 'light',
  className = '',
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`py-16 md:py-24 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </motion.section>
  );
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${className}`}>{children}</h2>
  );
}
