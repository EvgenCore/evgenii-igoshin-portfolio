import React, { useEffect, useRef } from 'react'

import style from '../../styles/CertificateModal.module.css'

import X from '../../images/x.svg'

import { motion, AnimatePresence } from 'framer-motion';

export const CertificateModal = ({isOpen, onClose, children}) => {
    const modalRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(event){
            if(modalRef.current && !modalRef.current.contains(event.target)){
                onClose()
            }
        }
        
        if(isOpen){
            document.addEventListener('mousedown', handleClickOutside)
        }else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [isOpen, onClose])

    if(!isOpen) return null


  return (
    <AnimatePresence>
        {isOpen && (
        <motion.div
          className={style.overlay}
          initial={{ opacity: 0 }}  // Начальное состояние: прозрачное окно
          animate={{ opacity: 1 }}  // Анимация при открытии: непрозрачное окно
          exit={{ opacity: 0 }}     // Анимация при закрытии: снова прозрачное
          transition={{ duration: 0.3 }}  // Длительность анимации
        >
          <motion.div
            ref={modalRef}
            className={style.modal}
            initial={{ scale: 1, opacity: 0 }}  // Начальное состояние: уменьшенное и прозрачное
            animate={{ scale: 1, opacity: 1 }}    // Анимация при открытии: полный размер и видимость
            exit={{ scale: 0.9, opacity: 0 }}     // Анимация при закрытии: снова уменьшенное и прозрачное
            transition={{ duration: 0.3 }}  // Длительность анимации для модального окна
          >
            <button onClick={onClose} className={style.closeButton}>
              <img src={X} alt="Close Modal Button" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

