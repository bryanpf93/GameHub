import { PaginationContainerStyled } from "./Pagination.styled";

type PaginationProps = {
  page: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
};

export const Pagination = ({ page, onPreviousPage, onNextPage }: PaginationProps) => {
  return (
    <PaginationContainerStyled>
      {page > 1 && (
        <button onClick={onPreviousPage} disabled={page === 1}>
          Anterior
        </button>
      )}
      <span>Página {page}</span>
      <button onClick={onNextPage}>Siguiente</button>
    </PaginationContainerStyled>
  );
};
