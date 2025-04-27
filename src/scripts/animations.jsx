
import { motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }) {
    const location = useLocation();

    const pageVariants = {
        initial: {
        opacity: 0,
        y: 100,
        },
        animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
        },
        exit: {
        opacity: 0.5,
        y: -35,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
        },
    };

    return (
        <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            >
            {children}
        </motion.div>
    );
}

export default PageTransition;