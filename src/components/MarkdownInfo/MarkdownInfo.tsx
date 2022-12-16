import React from 'react'

interface Props {
  onToggleModal: () => void;
  toggleModal: boolean;
}

const MarkdownInfo = ({ onToggleModal, toggleModal }: Props) => {
  return (
    <div className={toggleModal ? 'active markdown-info' : 'markdown-info'}>
      <div className='markdown-blur-layer'></div>
      <div className="markdown-modal">
        <div className="modal-header flex justify-between align-items-center">
          <p className='ff-1 fs-30'>Markdown Syntax</p>
          <p className='close-modal' onClick={onToggleModal}>x</p>
        </div>
        <div className='markdown-grid'>
          <p>*Italic*</p>
          <p>**Bold**</p>
          <p># Heading 1</p>
          <p>## Heading 2</p>
          <p>### Heading 3</p>
          <p>[Link](http://a.com)</p>
          <p>![Image](http://url/a.png)</p>
          <p>{'>'} Blockquote</p>
          <p>Horizontal Rule - - - or ***</p>
          <p>`Inline code`</p>
          <p>
            ```
            # code block
            print '3 backticks'
            ```
          </p>
        </div>
      </div>
    </div>
  )
}

export default MarkdownInfo