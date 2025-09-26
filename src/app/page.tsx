use client
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import GradientFooter from '@/components/sections/layouts/footer/GradientFooter';

const theme: SiteTheme = {
  styleVariant: 'funAndTrendy',
  colorTemplate: 1,
  textAnimation: 'slide',
  buttonOption: 'motion-icon'
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'hero', id: '#hero' },
            { name: 'about', id: '#about' },
            { name: 'how-to-buy', id: '#how-to-buy' },
            { name: 'tokenomics', id: '#tokenomics' },
            { name: 'footer', id: '#footer' }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logotype-w-1758890805038-bd74ff1e.jpg"
          buttonText="Get MemePulse"
        />
      </div>
      <div id="hero" data-section="hero">
        <SimpleHero
          title="MemePulse – ride the meme wave with a token built for fun"
          description="Join a vibrant, playful community and watch the fun unfold on-chain. Clear, friendly vibes and zero complexity."
          primaryButtonText="Get MemePulse"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1758890802853-e3d60567.jpg"
          backgroundImageAlt=""
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="What is MemePulse?"
          descriptions={[
            "MemePulse is a community-driven memecoin designed for spontaneous fun and lighthearted engagement.",
            "We prioritize transparent communication, straightforward tokenomics, and a welcoming community that loves memes and crypto alike."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: "Connect wallet", description: "Open your preferred wallet and connect to the supported network." },
            { title: "Find MemePulse", description: "Search for MemePulse or copy the official contract address from the page." },
            { title: "Buy & hold", description: "Purchase MemePulse and add to your watchlist; join the community." }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics"
          description="MemePulse tokenomics are designed to reward holders and support meme-driven growth with transparent allocations and community governance."
          kpiItems={[
            { value: "1,000,000,000 MEME", description: "Total supply" },
            { value: "420,000,000 MEME", description: "Circulating" },
            { value: "5%", description: "Community fund" },
            { value: "2%", description: "Liquidity pool" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <GradientFooter
          logoText="MemePulse"
          columns={[
            { title: "Company", items: [{ label: "About", onClick: () => {} }, { label: "Team", onClick: () => {} }, { label: "Blog", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Discord", onClick: () => {} }, { label: "Telegram", onClick: () => {} }, { label: "Reddit", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Terms", onClick: () => {} }, { label: "Privacy", onClick: () => {} }] }
          ]}
          copyrightText="© 2025 MemePulse. All memes reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}