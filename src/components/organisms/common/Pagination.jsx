import { PaginationNav, PaginationBtn } from "../../../styledComponents";

const Pagination = ({ meta, page, setPage }) => {
  return (
    <>
      <PaginationNav>
        <PaginationBtn
          onClick={() => {
            if (meta.first !== true) {
              setPage(page - 1);
            }
          }}
          disabled={meta.first === true}
        >
          &lt;
        </PaginationBtn>
        <PaginationBtn>{page}</PaginationBtn>
        <PaginationBtn
          onClick={() => {
            if (meta.last === false) {
              setPage(page + 1);
            } 
          }}
          disabled={meta.last === true}
        >
          &gt;
        </PaginationBtn>
      </PaginationNav>
    </>
  );
};

export default Pagination;
