import Image from 'next/image'
import styles from '../styles/style.module.scss'
import RASMUS from "/public/rasmus_alt_bw_low.jpg"
import Head from 'next/head'

// Framer Motion
import { motion, useScroll, useTransform, motionValue } from "framer-motion"
import {useState, useRef, useEffect} from "react";

// React Device Detect
import { isMobile } from 'react-device-detect';

// TextBits
import text from "../lib/text";

// Custom Cursor
import { useContext } from "react";
import { MouseContext } from '../lib/MouseContext.js'
import Cursor from "../components/Cursor";
import {ScrollerMotion, useScrollerMotion} from "scroller-motion";

function Title() {
    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: isMobile ? 2.5 : 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const items = {
        hidden: {
            y: '125%',
        },
        visible: {
            y: 0,
            transition: {
                duration: 3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div variants={variants} whileInView='visible' initial='hidden' viewport={{ once:true }} className={styles.title}>
            <motion.h1 className={styles.animateIn}>
                <div><motion.span variants={items} style={{textAlign: 'right'}}>Kreativ</motion.span></div>
                <div><motion.span variants={items}>Frontend &</motion.span></div>
                <div><motion.span variants={items} style={{textAlign: 'right'}}>Backend</motion.span></div>
                <div><motion.span variants={items}>Udvikler</motion.span></div>
                <div><motion.span variants={items} style={{textAlign: 'right'}} className={styles.lastTitleItem}><span className="source">Fra</span> Odense</motion.span></div>
            </motion.h1>
        </motion.div>
    )
}

function FirstBit() {
    const [textBit, setTextBit] = useState(text);
    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: {
            y: '125%',
        },
        visible: {
            y: 0,
            transition: {
                duration: 3,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div viewport={{ once: true }} whileInView='visible' variants={variants} initial='hidden'  className={styles.textBit}>
            { text.map((object, index) => (
                <div key={index} className={styles.animateIn}>
                    { object.map((t, index) => (
                        <div key={index}><motion.span variants={items}>{t}</motion.span></div>
                    )) }
                </div>
            ))
            }
        </motion.div>
    )
}

function Frameworks() {
    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: {
            y: '2em',
        },
        visible: {
            y: 0,
            transition: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div
        variants={variants}
        whileInView='visible'
        initial='hidden'
        viewport={{ once: true }}
        className={styles.frameworks}
        >
            <motion.div className={styles.animateIn}>
                <div className={styles.subject}><motion.span variants={items}>Frameworks</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Gatsby</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Hygraph</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Nextjs</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>React</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Shopify / Liquid</motion.span></div>
            </motion.div>
        </motion.div>
    )
}

function Languages() {
    const ref = useRef(null);
    const { scrollYProgress } = useScrollerMotion();
    const y1 = useTransform(scrollYProgress, [0, 0], [0, 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);

    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: {
            y: '2em',
        },
        visible: {
            y: 0,
            transition: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div style={ isMobile ? {y : y1} : {y: y2}} variants={variants} whileInView='visible' initial='hidden' viewport={{ once: true }} ref={ref} className={styles.languages}>
            <motion.div className={styles.animateIn}>
                <div className={styles.subject}><motion.span variants={items}>Sprog</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>CSS</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>GraphQl</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Java</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>JavaScript</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>JSX</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>SCSS / SASS</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Styled Components</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Typo3</motion.span></div>
                <div className={styles.item}><motion.span variants={items}>Typescript</motion.span></div>
            </motion.div>
        </motion.div>
    )
}

function Clients() {
    const { cursorChangeHandler } = useContext(MouseContext);

    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: {
            y: '2em',
        },
        visible: {
            y: 0,
            transition: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <motion.div
            variants={variants}
            whileInView='visible'
            initial='hidden'
            viewport={{ once: true }}
            className={styles.clients}>
            <motion.div className={styles.animateIn}>
                <div className={styles.subject}><motion.span variants={items}>Udvalgte Projekter</motion.span></div>
                <div className={styles.item} onMouseEnter={() => cursorChangeHandler("dabea")} onMouseLeave={() => cursorChangeHandler("")}>
                    <motion.a data="Frontend" target="_blank" href="https://dabea.dk" variants={items}>Dabea</motion.a>
                </div>
                <div className={styles.item} onMouseEnter={() => cursorChangeHandler("dogme")} onMouseLeave={() => cursorChangeHandler("")}>
                    <motion.a data="Hygraph + Nextjs" target="_blank" href="https://digitaldogme.dk" variants={items}>Digital Dogme</motion.a>
                </div>
                <div className={styles.item} onMouseEnter={() => cursorChangeHandler("organic")} onMouseLeave={() => cursorChangeHandler("")}>
                    <motion.a data="Custom Shopify" target="_blank" href="https://theorganiccrave.com" variants={items}>Organic Crave</motion.a>
                </div>
                <div className={styles.item} onMouseEnter={() => cursorChangeHandler("tinekhome")} onMouseLeave={() => cursorChangeHandler("")}>
                    <motion.a data="Frontend" target="_blank" href="https://www.tinekhome.com/en/" variants={items}>Tinekhome</motion.a>
                </div>
                <div className={styles.item} onMouseEnter={() => cursorChangeHandler("twelveinch")} onMouseLeave={() => cursorChangeHandler("")}>
                    <motion.a data="Custom Shopify" target="_blank" href="https://twelve-inch.com" variants={items}>Twelve Inch</motion.a>
                </div>
            </motion.div>
        </motion.div>
    )
}

function Inner() {
    const { scrollY } = useScrollerMotion();
    const y0 = useTransform(scrollY, [0, 300], [0, -40]);
    const y1 = useTransform(scrollY, [0, 1500], [-40, 100]);
    let getDate = new Date().getFullYear();
    const [date, setDate] = useState(getDate.toString().split(''));
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const variants = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1
            }
        }
    }

    const items = {
        hidden: {
            y: '120%',
        },
        visible: {
            y: 0,
            transition: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const fadeIn = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.25,
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    let rasmus = ['R', 'a', 's', 'm', 'u', 's']
    return (
        <div className={styles.container} onMouseEnter={() => cursorChangeHandler("")} onMouseLeave={() => cursorChangeHandler("leave")}>
            <motion.div animate='visible' variants={variants} initial='hidden' className={styles.top}>
                <div className={styles.animateIn}>
                    <div><motion.a variants={items} href="https://www.instagram.com/rasmusholberg/">Instagram</motion.a></div>
                    <div><motion.a variants={items} href="https://www.linkedin.com/in/rasmus-andersen-91b91a5b/">Linkedin</motion.a></div>
                </div>
                <div className={styles.animateIn} style={{ textAlign: "right" }} >
                    <div><motion.a variants={items} href="mailto:rasmusholberg@gmail.com">rasmusholberg@gmail.com</motion.a></div>
                    <div><motion.a variants={items} href="tel:31623733">+45 31 62 37 33</motion.a></div>
                </div>
            </motion.div>
            <motion.header className={styles.header}>
                <motion.div animate='visible' variants={variants} initial='hidden' className={styles.firstName}>
                    { rasmus.map((l, i) => (
                        <motion.span key={i} variants={items}>{l}</motion.span>
                    ))}
                </motion.div>
                <div className={styles.socialsAndLastName}>
                    <motion.div animate='visible' variants={variants} initial='hidden' className={styles.lastNames}>
                        <div><motion.span variants={items} >Holberg</motion.span></div>
                        <div><motion.span variants={items} >Seidelin</motion.span></div>
                        <div><motion.span variants={items} >Andersen</motion.span></div>
                        <div style={{ color: "var(--orange" }}><motion.span variants={items} >13/07/1991</motion.span></div>
                    </motion.div>
                </div>
            </motion.header>
            <motion.div variants={fadeIn} initial='hidden' animate='visible' priority='true' className={styles.image} onMouseEnter={() => cursorChangeHandler("hello")} onMouseLeave={() => cursorChangeHandler("")}>
                <motion.div className={styles.imgFramer} style={{ y: y1 }}><Image className={styles.img} src={RASMUS} quality='100' alt='Picture of Rasmus Holberg Seidelin Andersen' priority='true'/></motion.div>
            </motion.div>
            <Title />
            <FirstBit />
            <Languages />
            <Frameworks />
            <Clients />
            <motion.footer
                className={styles.footer}>
                <motion.div className={styles.year}>
                    { date.map((ch, i) => (
                        <motion.span key={i} variants={items}>{ch}</motion.span>
                    ))}
                </motion.div>
                <motion.div className={styles.bottom}>
                    <div className={styles.left}>
                        <motion.div
                            className={styles.animateIn}>
                            <div><motion.span variants={items}>Odense C, 5000</motion.span></div>
                            <div><motion.span variants={items}>Danmark</motion.span></div>
                        </motion.div>
                        <motion.div className={styles.animateIn}>
                            <div><motion.span variants={items}>Rasmus H. S. Andersen</motion.span></div>
                            <div><motion.span variants={items}>13/07/1991</motion.span></div>
                        </motion.div>
                    </div>
                    <div className={styles.right}>
                        <motion.div className={styles.animateIn}>
                            <div><motion.a variants={items} href="https://www.instagram.com/rasmusholberg/">Instagram</motion.a></div>
                            <div><motion.a variants={items} href="https://www.linkedin.com/in/rasmus-andersen-91b91a5b/">Linkedin</motion.a></div>
                        </motion.div>
                        <motion.div className={styles.animateIn}>
                            <div><motion.a variants={items} href="mailto:rasmusholberg@gmail.com">rasmusholberg@gmail.com</motion.a></div>
                            <div><motion.a variants={items} href="tel:31623733">+45 31 62 37 33</motion.a></div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.footer>
        </div>
    )
}

export default function Home() {

    return (
        <>
            <Head>
                <meta name="description" content="Jeg er en fullstack udvikler fra Odense, med 8 års erfaring i udvikling af webløsninger og visuelle identiteter til start-ups og mindre virksomheder." key='description'/>
                <meta name="og:title" content="Webudvikler fra Odense | React, NextJS og Shopify" key='title'/>
                <title>Webudvikler fra Odense | React, NextJS og Shopify</title>
            </Head>
            <Cursor/>
            <ScrollerMotion scale={1.5}>
                <Inner />
            </ScrollerMotion>
        </>
    )
}
