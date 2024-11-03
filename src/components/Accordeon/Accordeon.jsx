import './accordeon.scss'
import ArrowDown from '../../assets/arrow-down.svg'
import { useRef, useState } from 'react'

const Accordeon = ({title, children}) => {

    const [display, setDisplay] = useState(false)
    const contentRef = useRef(null)

    const onDisplayContent = (e) => {
        e.preventDefault()
        setDisplay(!display)
    }

    return <div className={`accordeon ${display ? 'open' : ''}`}>
        <div className="title">
            <p>{title}</p>
            <button onClick={onDisplayContent}>
                <img src={ArrowDown} alt="arrow-down" />
            </button>    
        </div>
        <div className="accordeon-content" style={{height: display ? contentRef?.current?.getBoundingClientRect().height : 0 }}>
            <div ref={contentRef}>
                {children}
            </div> 
        </div>
    </div>
}

export default Accordeon;