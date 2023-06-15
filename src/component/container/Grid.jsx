import React from 'react'
import DataList from '../data/DataList'
import DataGrid, { Scrolling, Pager, Paging, Column, Editing  } from 'devextreme-react/data-grid';
import { useDispatch,useSelector } from 'react-redux'; 
import { PageChange } from '../../reducers/PageNumberReducer';

export default function Grid() {
  let row = useSelector(state => state.RowNumber.RowNumber)
  let page = useSelector(state => state.PageNumber.PageNumber)


  return (
    <div className='grid'>

      <DataGrid
       id='gridContainer'
        allowColumnReordering={true}
        dataSource={DataList}
        showBorders={false}
        focusedRowEnabled={false}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
        remoteOperations={true}
        keyExpr="link"
        paging={{
          enabled: true,
          pageIndex: page - 1, // Sayfa numarası 0 tabanlı olduğu için 1 çıkarıyoruz
          pageSize: row,
        }}
      >
        <Scrolling rowRenderingMode='virtual' />
        <Pager
          visible={false}
          allowedPageSizes={[4, 5, 6, 7, 8]}
          showPageSizeSelector={false}
          showInfo={false}
          showNavigationButtons={false}
        />

        <Column dataField='link' caption='Link' />
        <Column dataField='socialMedia' caption='Sosyal Medya' />
        <Column dataField='description' caption='Açıklama' />

        
        
      </DataGrid>
    </div>
  );
};
