import { FC } from 'react'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../@types/models'

const Main: FC = () => {
  return (
    <section className='main w-70 lg-w-60 m-w-100'>
      <div className='main--notes-edit w-100 flex flex-column mv-20 ph-20'>
        <input type="text" className='mb-20' id="title" autoFocus />
        <textarea id='body' rows={15} placeholder='Your note...' />
      </div>
      <div className='main--notes-preview w-100 p-20'>
        <h1 className='fs-30 mb-20'>Title</h1>
        <div className='markdown-preview'></div>
        note preview
      </div>
    </section>
  )
}

export default Main