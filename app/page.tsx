import {Container, Title, TopBar} from "@/components/shared";

export default function Home() {
  return (
   <>
    <Container className={'mt-10'}>
        <Title text={'Все пиццы'} size={'lg'}/>
    </Container>

    <TopBar/>
    <Container className={'pb-14'}>
        <div className={'flex gap-[60px]'}>

        {/* Фильтрация */}
            <div className={'w-[250px]'}>

            </div>

        {/* Список товаров */}
            <div className={'flex-1'}>
                <div className={'flex flex-col gap-16'}>Список товаров</div>
            </div>

        </div>
    </Container>
   </>
  );
}
