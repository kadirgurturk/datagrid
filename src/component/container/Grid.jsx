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

  const storedData = JSON.parse(localStorage.getItem('dataList'));

  let pageReducer = useSelector(state => state.PageNumber.PageNumber)
  const [data, setData] = useState(storedData || []);
  const textFilter = useSelector(state => state.TextFilter.text);
  let rowReducer = useSelector(state => state.RowNumber.RowNumber)

  useEffect(() => {
    const updatedData = JSON.parse(localStorage.getItem('dataList'));
    setData(updatedData || []);
  }, [localStorage.getItem('dataList')]);

  console.log(data);


  const columnsMemo = useMemo(() => COLUMNS, [])
  const dataMemo = useMemo(()=> data,[storedData])

  const tableInstance = useTable({
    columns: columnsMemo,
    data: data,
  },
  
    useGlobalFilter,
    useSortBy,
    usePagination,
    
    
  )

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
  } = tableInstance

  const { globalFilter, pageSize, pageIndex } = state;

  useEffect(() => {
    setGlobalFilter(textFilter);
  }, [textFilter]);

  useEffect(() => {
    gotoPage(pageReducer - 1);
  }, [pageReducer]);


  useEffect(() => {
    setPageSize(rowReducer);
  }, [rowReducer]);



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
