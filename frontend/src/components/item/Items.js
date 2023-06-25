import React, { useEffect } from 'react'
import { getItems } from '../../actions'
import { connect } from 'react-redux'

const Items = ({
  items_array,
  getItems
}) => {
  useEffect(() => {
    getItems()
  }, [getItems])
  return (
    <>
      <div className='mt-2 mx-auto grid grid-cols-4 gap-3 p-4'>
        {items_array && items_array.map((value, index) => {
          return (
            <div className='border shadow-xl h-56 bg-slate-100 p-3' key={index}>
              <h1><b>Item Name:</b> {value.name}</h1>
              <h1 className='mt-3'><b>Item Description:</b> {value.description}</h1>
              <h1 className='mt-3'><b>Item Importance:</b> {value.message}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { items_array } = state.variables
  return {
    items_array
  }
}
const mapActionsToProps = {
  getItems
}

export default connect(mapStateToProps, mapActionsToProps)(Items)