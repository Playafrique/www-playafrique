import React from 'react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Heading from '@components/atoms/Heading'
import Text from '@components/atoms/Text'
import { Button } from '@components/ui/button'
import { cn } from '@/lib/utils'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: { slug: string }
}

function ProductCard({ product, className }: ProductCardProps) {
    return (
        <div
            className={cn(
                'relative bg-orange-50 flex flex-col items-center justify-between h-96',
                className,
            )}>
            <div className='absolute top-0 left-0 w-full'>
                {/* badges come here */}
            </div>

            <div className='flex-1 w-full bg-orange-100 p-10 h-3/4'>
                The image {product.slug}
            </div>

            <div className='w-full px-8 flex items-center justify-between h-1/4'>
                <div>
                    <Link href={`/product/${product.slug}`} passHref>
                        <Heading as='h5' className='font-normal'>
                            Orange Citrus Oil
                        </Heading>
                    </Link>
                    <Text className='font-semibold'>£65</Text>
                </div>
                <Button className='rounded-sm' size='icon'>
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
