import { Nut } from 'lucide-react';
import { useTranslations } from 'next-intl';

function AdvantageCard({ txt, des }: { txt: string, des: string }) {
    return (
        <div className='advantage__card'>
            <h3 className='text-xl laptop:text-[26px] text-black font-semibold'>{txt}</h3>
            <div className='size-20 laptop:size-[85px] bg-green-400/60 rounded-full flex items-center justify-center relative z-10'>
                <Nut className='size-16 text-black' strokeWidth={1} />
            </div>
            <p className='text-base laptop:text-xl text-black font-thin'>{des}</p>
            <div className='card_decoration' />
        </div>
    )
}

export default function Advantages() {
    const t = useTranslations();

    return (
        <div className='md:space-y-28 space-y-16 px-4 md:px-8 mt-8'>
            <div className='text-center space-y-5'>
                <p className='p'>{t('advantages.text1')}</p>
                <h1 className='h1 md:px-20'>{t('advantages.text2')}</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                <AdvantageCard
                    txt={t('advantagecard1.title')}
                    des={t('advantagecard1.des')}
                />
                <AdvantageCard
                    txt={t('advantagecard2.title')}
                    des={t('advantagecard2.des')}
                />
                <AdvantageCard
                    txt={t('advantagecard3.title')}
                    des={t('advantagecard3.des')}
                />
                <AdvantageCard
                    txt={t('advantagecard4.title')}
                    des={t('advantagecard4.des')}
                />
            </div>
        </div>
    )
}