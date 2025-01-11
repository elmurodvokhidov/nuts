import About from '@/components/About';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar'
import SectionHeader from '@/components/SectionHeader'
import WhyUs from '@/components/WhyUs';
import { useTranslations } from 'next-intl';

export default function page() {
    const t = useTranslations('about');

    return (
        <div>
            {/* Birinchi bo'lak */}
            <section className="h-screen relative overflow-hidden">
                {/* Navbar Componenti */}
                <Navbar />

                {/* Sahifaning asosiy bosh bo'lagi */}
                <SectionHeader
                    title={t('text1')}
                    description={t('header')}
                    src="videos/nuts2.mp4"
                />
            </section>

            {/* Umumiy qism */}
            <section className="section">
                <About />
                <WhyUs />
            </section>

            {/* Contact qismi */}
            <Contact />
        </div>
    )
}