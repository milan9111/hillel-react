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

export interface AppProps {
    addProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
    removeProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
    removeOneItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
    addOneItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onSearchProducts: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HeaderContainerProps {
    onSearchProducts: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HeaderProps {
    countTypesProductsInBasket: number;
    onSearchProducts: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductListContainerProps {
    addProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProductListProps {
    id: number; 
    image: string;
    title: string;
    price: number;
    addProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
    selectedIdProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface CustomModalProps {
    show:  any;
    changeModal: () => void;
    children?: React.ReactChild | React.ReactNode
}

export interface ProductDetailsProps {
    idProduct: string | null;
}