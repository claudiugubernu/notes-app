import React, { FC, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../@types/models'
import ReactMarkdown from 'react-markdown'

const Main: FC = () => {
  const { onGetNote, onUpdateNote } = useContext(AppContext) as AppContextType;

  const activeNote = onGetNote();

  const onEditTitle = (value: string) => {
    if (!activeNote) return

    onUpdateNote({
      id: activeNote.id,
      title: value,
      content: activeNote.content,
      lastModified: Date.now(),
    });
  }

  const onEditContent = (value: string) => {
    if (!activeNote) return
    onUpdateNote({
      id: activeNote.id,
      title: activeNote.title,
      content: value,
      lastModified: Date.now(),
    });
  }

  if (!activeNote) return <div className='no-active-notes fw-bold w-70 lg-w-60 m-w-100 flex justify-center align-items-center'>No note selected</div>;

  return (
    <section className='main w-70 lg-w-60 m-w-100'>
      <div className='main--notes-edit w-100 flex flex-column mv-20 ph-20'>
        <input type="text" className='mb-20' id="title" autoFocus defaultValue={activeNote?.title} onChange={(e) => onEditTitle(e.target.value)} />
        <small className='note--meta c-dark-grey mb-20'>
          Last modified {new Date(activeNote.lastModified).toLocaleDateString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </small>
        <textarea id='body' rows={15} defaultValue={activeNote?.content} placeholder='Your note...' onChange={(e) => onEditContent(e.target.value)} />
      </div>
      <div className='main--notes-preview w-100 p-20'>
        <h1 className='fs-30 mb-20'>{activeNote?.title}</h1>
        <ReactMarkdown className='markdown-preview'>
          {activeNote?.content}
        </ReactMarkdown>
      </div>
    </section>
  )
}

export default Main