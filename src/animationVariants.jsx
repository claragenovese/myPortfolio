export const title = {
  hidden: {scale: 0.9, opacity: 0},
  visible: {
    scale: 1, 
    opacity: 1,
    transition:{delay: 1, duration: 0.6}
  }
}

export const subTitle = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition:{delay: 0.6, duration: 0.6}
  }
}
  
export const span = {
  hidden: {left: "-100%"},
  visible:{
      left: "101%",
      transition: {type: "cubic-bezier(0.05, 0.97, 1, 0.07)", duration: 0.6}
  }
}

export const firstContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  }
}
  
export const secondContainer = {
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 0.2
      }
  }
};

export const thirdContainer = {
  hidden: { },
  visible: {
    transition: {
      staggerChildren: 1.2
    }
  }
}

export const fourthContainer = {
  hidden: { },
  visible: {
    transition: {
      staggerChildren: 0.05
    }
}
};

export const navMobContainer = {
  hidden: {x: "110%"},
  visible: {
    x: "0%",
    transition: {
      duration: 0.1,
      staggerChildren: 0.4
    }
  }
}
  
export const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, type: "spring"}
  }
};

export const item2 = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {opacity: {duration: 0.5, type: "ease"}}
  }
} 