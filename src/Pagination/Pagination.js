import _ from 'lodash';

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav className="ml-[1rem] pt-[2rem] fixed bottom-0 sm-sc:ml-[2rem]">
      <ul className="pagination flex gap-2">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? 'page-item active bg-lime-600 pt-1 pb-1 pl-2 pr-2 text-white'
                : 'page-item pt-1 pb-1 pl-2 pr-2 '
            }
          >
            <p
              className="page-link cursor-pointer"
              onClick={() => onPageChange(page)}
            >
              {page}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
