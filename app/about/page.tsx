import About from '@/components/About';
import Contact from '@/components/Contact';
import SectionHeader from '@/components/SectionHeader'
// import WhyUs from '@/components/WhyUs';
import { getVideoByType } from '@/lib/actions/video.actions';

export default async function Page() {
    const videoUrl = await getVideoByType('about');

    return (
        <div>
            {/* Birinchi bo'lak */}
            <SectionHeader
                title='about.text1'
                description='about.header'
                src={videoUrl}
            />

            {/* Umumiy qism */}
            <section className="section">
                <About />
                {/* <WhyUs /> */}
            </section>

            {/* Contact qismi */}
            <Contact />
        </div>
    )
}