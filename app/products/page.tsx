import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import SectionHeader from '@/components/SectionHeader'
import Works from '@/components/Works'
import { useTranslations } from 'next-intl'

export default function page() {
    const t = useTranslations('products');

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
                    src="videos/nuts3.mp4"
                />
            </section>

            {/* Umumiy qism */}
            <section className="section">
                <Products />
                <Works />
            </section>

            {/* Contact qismi */}
            <Contact />
        </div>
    )
}