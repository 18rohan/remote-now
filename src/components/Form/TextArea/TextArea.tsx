import React from 'react'
import TextareaAutosize  from '@mui/material/TextareaAutosize'

interface Props {
    placeholder?:string;
    minRows?:string;

}

const TextArea = ({placeholder, minRows}:Props) => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={minRows}
      placeholder={placeholder}
      style={{ width: 200 }}
    />
  )
}

export default TextArea