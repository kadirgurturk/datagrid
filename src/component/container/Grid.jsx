import React, { useEffect, useState, useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table"
import { TextChange } from "../../reducers/TextReducer"
import { RowChange } from '../../reducers/RowNumberReducer';
import COLUMNS from './Column'
import { useDispatch, useSelector } from 'react-redux';
import { PageChange } from '../../reducers/PageNumberReducer';
import Up from "../../asset/grid/up.svg"
import Down from "../../asset/grid/down.svg"

export default function Grid() {

  const storedData = JSON.parse(localStorage.getItem('dataList')); //------->local'den gerekli listeyi buradan alırız.

  let pageReducer = useSelector(state => state.PageNumber.PageNumber) //-----> sayfa sayısını store'dan alırız.
  let textFilter = useSelector(state => state.TextFilter.text)
  const [data, setData] = useState(storedData || []);
  let rowReducer = useSelector(state => state.RowNumber.RowNumber) //-----> gösterilecek satır sayısını store'dan alırız.

  useEffect(() => {
    const updatedData = JSON.parse(localStorage.getItem('dataList'));
    setData(updatedData || []); 
  }, [localStorage.getItem('dataList')]); //-----> localstorage yenilendiği zaman, datayı yeniliyoruz. 



  const columnsMemo = useMemo(() => COLUMNS, [])
  const dataMemo = useMemo(()=> data,[storedData]) //-----------> react-table, chach için  datalar ve column özelliklerini useMemo ile kullanmayı öneriyor.

  const tableInstance = useTable({
    columns: columnsMemo,
    data: data,
  },
    useGlobalFilter,
    useSortBy,
    usePagination,
  ) //---> bir table nesnesi yaratırız ve buna gerekli column ve dataları veriririz, ayrıca sorting, filter ve pagination işlmeleri için gerekli hookları alırız.

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow ,
    state,
    setGlobalFilter,
    setPageSize,
  } = tableInstance //---> table isntance'ın gerekli fonksiyonlarını alırız.

  useEffect(() => {
    setGlobalFilter(textFilter);
  }, [textFilter]);

  useEffect(() => {
    gotoPage(pageReducer - 1);
  }, [pageReducer]);


  useEffect(() => {
    setPageSize(rowReducer);
  }, [rowReducer]);

  //---------------------->store'dan aldığımız değerleri table nesnesindeki gerekli state'lere veriririz. 



  return (
    <div className='grid'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <img src={Up} alt="Up" />
                        : <img src={Down} alt="Down" />
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
};
