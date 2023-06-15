import React from 'react'
import Card from './Card'
import Button from './Button'
import error from './ErrorModal.module.css'
const ErrorModal = (prpos) => {
  return (
    <div>

    
    <div className={error.backdrop} onClick={prpos.onHandlerError}/>
    <Card className={error.modal}>
        <header className={error.header}>
            <h2>{prpos.title}</h2>
        </header>
        <div className={error.content}>
            <p>{prpos.message}</p>
        </div>
        <footer className={error.actions}>
        <Button  onClick={prpos.onHandlerError}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModal
