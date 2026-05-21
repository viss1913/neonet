import { ChatProvider } from './context/ChatContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SeoHead } from './components/SeoHead';
import { HeroSection } from './components/sections/HeroSection';
import { TrustSection } from './components/sections/TrustSection';
import { RisksSection } from './components/sections/RisksSection';
import { ControlSection } from './components/sections/ControlSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ExpertSection } from './components/sections/ExpertSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { AiChatWidget } from './components/chat/AiChatWidget';

export default function App() {
  return (
    <ChatProvider>
      <SeoHead />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <RisksSection />
        <ControlSection />
        <ArchitectureSection />
        <ProcessSection />
        <ExpertSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <AiChatWidget />
    </ChatProvider>
  );
}
