import Contact from '@/components/Contact'
import Products from '@/components/Products'
import SectionHeader from '@/components/SectionHeader'
import Works from '@/components/Works'
import { getVideoByType } from '@/lib/actions/video.actions'

export default async function Page() {
    const videoUrl = await getVideoByType('products');

    return (
        <div>
            {/* Birinchi bo'lak */}
            <SectionHeader
                title='products.text1'
                description='products.header'
                src={videoUrl}
            />

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