import { site } from '../../config/site';
import { useChatUI } from '../../context/ChatContext';
import { Section, SectionTitle } from '../ui/Section';
import { Button } from '../ui/Button';

export function FinalCtaSection() {
  const { openWithMessage } = useChatUI();

  return (
    <Section id="contacts" tone="dark" className="!bg-gradient-to-br from-[#0a1a2f] to-slate-brand">
      <div className="mx-auto max-w-2xl text-center">
        <SectionTitle>{site.finalCta.title}</SectionTitle>
        <p className="mt-4 text-white/75">{site.finalCta.lead}</p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get('name') || '').trim();
            openWithMessage(
              name
                ? `Заявка с сайта. Имя: ${name}. Телефон: ${fd.get('phone')}. Запрос: ${fd.get('message') || 'диагностика ВЭД'}`
                : 'Хочу провести диагностику ВЭД',
            );
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Ваше имя"
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Телефон"
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40"
          />
          <input name="message" type="hidden" value="диагностика ВЭД" />
          <Button type="submit">{site.hero.ctaPrimary}</Button>
        </form>
        <div className="mt-6 flex justify-center gap-4 text-sm">
          <a href={site.social.telegram} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href={site.social.whatsapp} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
