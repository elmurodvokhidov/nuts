import Contact from '@/components/Contact'
import Advantages from '@/components/Advantages'
import SectionHeader from '@/components/SectionHeader'
import Products from '@/components/Products'
import { getVideoByType } from '@/lib/actions/video.actions'

export default async function Page() {
    const videoUrl = await getVideoByType('products');

    return (
        <div>
            {/* Birinchi bo'lak */}
            <SectionHeader
                title='products.text1'
                description='advantages.header'
                src={videoUrl}
            />

            {/* Umumiy qism */}
            <section className="section">
                <Advantages />
                <Products />
            </section>

            {/* Contact qismi */}
            <Contact />
        </div>
    )
}