'use client'

import React from 'react';
import {useIntersection} from 'react-use'
import {ProductCard, Title} from "@/components/shared";
import {cn} from "@/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string;
    items: any[];
    listClassName?: string;
    categoryId: number;
    className?: string;
}

export const ProductsGroupList: React.FC<Props> = (
    {
        className,
        title,
        items,
        listClassName,
        categoryId
    }) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])


    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, index) => (
                    <ProductCard
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};