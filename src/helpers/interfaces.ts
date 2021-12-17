export interface ProductsType  {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    }
}

export interface AppProps extends ProductListContainerProps, BasketContainerProps, HeaderContainerProps  {
     
}

export interface HeaderProps extends HeaderContainerProps {
    countTypesProductsInBasket: number;
}

export interface ProductListProps extends ProductListContainerProps {
    id: number; 
    image: string;
    title: string;
    price: number;
    selectedIdProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface BasketContainerProps {
    removeProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
    removeOneItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
    addOneItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface HeaderContainerProps {
    onSearchProducts: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductListContainerProps {
    addProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomModalProps {
    show:  any;
    changeModal: () => void;
    children?: React.ReactChild | React.ReactNode
}

export interface ProductDetailsProps {
    idProduct: string | null;
}


