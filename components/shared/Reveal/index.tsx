"use client"

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: React.ReactNode
    className?: string
    positions: "right" | "bottom"
    delay?: number
}

export const fadeIn = ( position: string, delay: number = 0.5 ) => {
    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween" as const,
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75] as const
            }
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween" as const,
                duration: 0.5,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.25] as const
            } 
        }
    }
}

export function Reveal({ children, className, positions, delay }: Props) {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimation()

    useEffect(() => {
        if ( isInView ) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])
    
    
    return (
        <div 
            ref={ref}

        >
            <motion.div
                className={className}
                variants={fadeIn(positions, delay ?? 0.5)}
                initial="hidden"
                animate={mainControls}
                exit={"hidden"}

            >
                {children}
            </motion.div>
        </div>
    )
}
