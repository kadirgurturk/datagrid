import React, { useEffect, useState, useMemo } from 'react'
import DataList from '../data/DataList'
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table"
import { TextChange } from "../../reducers/TextReducer"
import { RowChange } from '../../reducers/RowNumberReducer';
import COLUMNS from './Column'
import { useDispatch, useSelector } from 'react-redux';
import { PageChange } from '../../reducers/PageNumberReducer';
import Up from "../../asset/grid/up.svg"
import Down from "../../asset/grid/down.svg"

export default function Grid() {

  let pageReducer = useSelector(state => state.PageNumber.PageNumber)
  const [data, setData] = useState(DataList);
  const textFilter = useSelector(state => state.TextFilter.text);
  let rowReducer = useSelector(state => state.RowNumber.RowNumber)

  let dispatch = useDispatch()

  useEffect(() => {
    setData(DataList)
  }, [])

  const columnsMemo = useMemo(() => COLUMNS, [])
  const dataMemo = useMemo(() => DataList, [])

  const tableInstance = useTable({
    columns: columnsMemo,
    data: dataMemo,
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
    rows,
    prepareRow ,
    state,
    setGlobalFilter,
    setPageSize,
  } = tableInstance

  const { globalFilter, pageSize } = state;

  useEffect(() => {
    setGlobalFilter(textFilter);
  }, [textFilter]);

  useEffect(() => {
    dispatch(TextChange(globalFilter));
  }, [dispatch, globalFilter]);

  useEffect(() => {
    setPageSize(rowReducer);
  }, [rowReducer]);

  useEffect(() => {
    dispatch(RowChange(pageSize));
  }, [dispatch, pageSize]);

  useEffect(() => {
    // row değeri değiştiğinde pageSize değerini güncelle
    setPageSize(rowReducer);
  }, [rowReducer]);

  console.log(pageSize);

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
