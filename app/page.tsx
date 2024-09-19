import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
  return (
   <>
    <Container className={'mt-10'}>
        <Title text={'Все пиццы'} size={'lg'}/>
    </Container>

    <TopBar/>
    <Container className={'mt-10 pb-14'}>
        <div className={'flex gap-[80px]'}>

        {/* Фильтрация */}
            <div className={'w-[250px]'}>
                <Filters/>
            </div>

        {/* Список товаров */}
            <div className={'flex-1'}>
                <div className={'flex flex-col gap-16'}>
                    <ProductsGroupList
                        title={'Пиццы'}
                        categoryId={1}
                        items={[
                            {
                                id: '1',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },
                            {
                                id: '2',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '3',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '4',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '5',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '6',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },
                        ]}
                    /><ProductsGroupList
                        title={'Комбо'}
                        categoryId={2}
                        items={[
                            {
                                id: '1',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },
                            {
                                id: '2',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '3',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '4',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '5',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },{
                                id: '6',
                                name: 'Чизбургер-Пицца',
                                imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif',
                                price: 550,
                                items: [{price:550}]
                            },
                        ]}
                    />
                </div>
            </div>

        </div>
    </Container>
   </>
  );
}
