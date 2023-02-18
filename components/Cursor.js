import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MouseContext } from '../lib/MouseContext.js'

// React Device Detect
import { isMobile } from 'react-device-detect';

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 75, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      border: '2px solid var(--white)',
      borderRadius: '25px',
      height: 50,
      mixBlendMode: 'difference',
      width: 50
    },
    hello: {
      backgroundColor: 'var(--white)',
      borderRadius: '70px',
      height: 140,
      mixBlendMode: 'difference',
      width: 140
    },
    dabea: {
      backgroundImage: 'url(/dabea.jpg)',
      borderRadius: '0px',
      height: 346,
      mixBlendMode: 'screen',
      width: 600,
    },
    dogme: {
      backgroundImage: 'url(/dogme.jpg)',
      borderRadius: '0px',
      height: 450,
      mixBlendMode: 'screen',
      width: 400,
    },
    organic: {
      backgroundImage: 'url(/organic_alt.jpg)',
      borderRadius: '0px',
      height: 400,
      mixBlendMode: 'screen',
      width: 500,
    },
    tinekhome: {
      backgroundImage: 'url(/tinekhome.jpg)',
      borderRadius: '0px',
      height: 463,
      mixBlendMode: 'screen',
      width: 400,
    },
    twelveinch: {
      backgroundImage: 'url(/twelveinch.jpg)',
      borderRadius: '0px',
      height: 400,
      mixBlendMode: 'screen',
      width: 500,
    },
    leave: {
      opacity: 0,
    }
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const setDefaultVariant = () => {
    setCursorVariant('default')
    setCursorText("")
  }

  const setEmptyVariant = () => {
    setCursorVariant('')
    setCursorText("")
  }

  const setHelloVariant = () => {
    setCursorVariant('hello')
    setCursorText("")
  }

  const setDabeaVariant = () => {
    setCursorVariant('dabea')
  }

  const setDogmeVariant = () => {
    setCursorVariant('dogme')
  }

  const setOrganicVariant = () => {
    setCursorVariant('organic')
  }

  const setTinekhomeVariant = () => {
    setCursorVariant('tinekhome')
  }

  const setTwelveinchVariant = () => {
    setCursorVariant('twelveinch')
  }

  const setLeaveVariant = () => {
    setCursorVariant('leave')
  }

  useEffect(() => {
    {
      cursorType === 'dabea' ? setDabeaVariant() :
      cursorType === 'dogme' ? setDogmeVariant() :
      cursorType === 'organic' ? setOrganicVariant() :
      cursorType === 'tinekhome' ? setTinekhomeVariant() :
      cursorType === 'twelveinch' ? setTwelveinchVariant() :
      cursorType === 'leave' ? setLeaveVariant() :
      cursorType === 'hello' ? setHelloVariant() :
      setDefaultVariant()
    }
    isMobile && setEmptyVariant()
  }, [cursorType])

  useEffect(() => (
    cursorChangeHandler()
  ), [])

  return (
    <motion.div
      variants={variants}
      className='cursor'
      animate={cursorVariant}
      transition={springConfig}
      style={{
        top: cursorYSpring,
        left: cursorXSpring,
      }}
    >
      <span className='cursorText'>{cursorText}</span>
    </motion.div>
  );
}