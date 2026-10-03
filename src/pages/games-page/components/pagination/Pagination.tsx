import { PaginationContainerStyled } from "./Pagination.styled";

type PaginationProps = {
  page: number;
  hasNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

export const Pagination = ({ page, onPreviousPage, onNextPage, hasNextPage }: PaginationProps) => {
  return (
    <PaginationContainerStyled>
      {page > 1 && <button onClick={onPreviousPage}>Anterior</button>}
      <span>Página {page}</span>
      {hasNextPage && <button onClick={onNextPage}>Siguiente</button>}
    </PaginationContainerStyled>
  );
};
