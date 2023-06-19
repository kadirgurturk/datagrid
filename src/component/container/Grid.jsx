import React, { useEffect, useState,useMemo } from 'react'
import DataList from '../data/DataList'
import {useTable,useSortBy,useGlobalFilter,usePagination } from "react-table"
import {TextChange} from "../../reducers/TextReducer"
import { RowChange } from '../../reducers/RowNumberReducer';
import COLUMNS from './Column'
import { useDispatch,useSelector } from 'react-redux'; 
import { PageChange } from '../../reducers/PageNumberReducer';
import Up from "../../asset/grid/up.svg"
import Down from "../../asset/grid/down.svg"

export default function Grid() {
  
  let page = useSelector(state => state.PageNumber.PageNumber)
  const [data,setData] = useState(DataList);
  const textFilter = useSelector(state => state.TextFilter.text);
  let row = useSelector(state => state.RowNumber.RowNumber)

  let dispatch = useDispatch()

  useEffect(()=>{
    setData(DataList)
  },[DataList])

  const columnsMemo = useMemo(() => COLUMNS,[])
  const dataMemo = useMemo(() => DataList,[])

    const tableInstance = useTable({
        columns: columnsMemo,
        data: dataMemo,
    },
    useGlobalFilter,
    useSortBy,
     usePagination   
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        setPageSize,
    } = tableInstance

    const { globalFilter,pageSize } = state;

    console.log(row);

    useEffect(() => {
      setPageSize(row);
    }, [row]);

    useEffect(() => {
      dispatch(RowChange(pageSize));
    }, [dispatch, pageSize]);

  
    useEffect(() => {
      setGlobalFilter(textFilter);
    }, [textFilter]);
  
    useEffect(() => {
      dispatch(TextChange(globalFilter));
    }, [dispatch, globalFilter]);
  

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
                        ? <img src={Up}/>
                        : <img src={Down}/>
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
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
