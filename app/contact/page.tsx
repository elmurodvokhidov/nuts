import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import SectionHeader from '@/components/SectionHeader'
import { useTranslations } from 'next-intl';

export default function page() {
    const t = useTranslations();

    return (
        <div>
            {/* Birinchi bo'lak */}
            <section className="h-screen relative overflow-hidden">
                {/* Navbar Componenti */}
                <Navbar />

                {/* Sahifaning asosiy bosh bo'lagi */}
                <SectionHeader
                    title={t('contact.text3')}
                    description={t('contact.header')}
                    src="videos/contact.mp4"
                />
            </section>

            {/* Umumiy qism */}
            <section className="section !px-20 !my-32">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2755.749207176076!2d-87.76580116676062!3d42.018145127596775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcf2797ba9ccd%3A0x43cf790c38c2e9c5!2sGeorgia%20Nut%20Company!5e1!3m2!1sen!2sus!4v1736587583827!5m2!1sen!2sus"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full'
                />

                {/* So'rov oynasi */}
                <div className='my-20 space-y-6'>
                    <h1 className="text-black text-3xl font-semibold">{t('form.title1')}</h1>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}