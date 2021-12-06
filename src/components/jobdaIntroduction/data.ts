import { IanimationData, IinitData } from "./scrollAnimation";
import bezierEasing from "bezier-easing";

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);

export const initData: Record<any, IinitData> = {
    title: {
        top: 0,
        bottom: 1000,
        topStyle: {
            opacity: 1
        },
        bottomStyle: {
            opacity: 0
        }
    },
    circle: {
        top: 0,
        bottom: 3000,
        topStyle: {
            width: 20,
            height: 20,
        },
        bottomStyle: {
            width: 20,
            height: 20,
        }
    },
    circle2: {
        top: 2000,
        bottom: 10000,
        topStyle: {
            width: 20,
            height: 20,
        },
        bottomStyle: {
            width: 20,
            height: 20,
        }
    },
    sl1: {
        top: 500,
        bottom: 1900,
        topStyle: {
            opacity: 0,
            translateY: -60
        },
        bottomStyle: {
            opacity: 0,
            translateY: 60
        }
    },
    sl2: {
        top: 1900,
        bottom: 3200,
        topStyle: {
            opacity: 0,
            translateY: -60
        },
        bottomStyle: {
            opacity: 0,
            translateY: 60
        }
    },
    sl3: {
        top: 3300,
        bottom: 4600,
        topStyle: {
            opacity: 0
        },
        bottomStyle: {
            opacity: 0
        }
    },
    sl4: {
        top: 4700,
        bottom: 6500,
        topStyle: {
            opacity: 0
        },
        bottomStyle: {
            opacity: 0
        }
    },
    sl5: {
        top: 5500,
        bottom: 7000,
        topStyle: {
            opacity: 0,
        },
        bottomStyle: {
            opacity: 0,
        }
    },
    sl6: {
        top: 7100,
        bottom: 8600,
        topStyle: {
            opacity: 0,
        },
        bottomStyle: {
            opacity: 0,
        }
    },
}

export const animationData: Record<string, IanimationData[]> = {
    title: [
        {
            top: 600,
            bottom: 1000,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
    circle: [
        {
            top: 600,
            bottom: 1500,
            easing: ease,
            styles: {
                width: {
                    topValue: 20,
                    bottomValue: 300,
                },
                height: {
                    topValue: 20,
                    bottomValue: 300,
                },
            }
        },
        {
            top: 1800,
            bottom: 3000,
            easing: easeIn,
            styles: {
                width: {
                    topValue: 300,
                    bottomValue: 20,
                },
                height: {
                    topValue: 300,
                    bottomValue: 20,
                },
            }
        }
    ],
    circle2: [
        {
            top: 3000,
            bottom: 4000,
            easing: midSlow,
            styles: {
                width: {
                    topValue: 20,
                    bottomValue: 20,
                },
                height: {
                    topValue: 20,
                    bottomValue: 20,
                },
            }
        },
        {
            top: 4500,
            bottom: 6000,
            easing: easeIn,
            styles: {
                width: {
                    topValue: 20,
                    bottomValue: 3000,
                },
                height: {
                    topValue: 20,
                    bottomValue: 3000,
                },
            }
        },
    ],
    sl1: [
        {
            top: 500,
            bottom: 1900,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: 500,
            bottom: 800,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: 1400,
            bottom: 1900,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
    sl2: [
        {
            top: 1900,
            bottom: 3200,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: 1900,
            bottom: 2500,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: 2600,
            bottom: 3200,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
    sl3: [
        {
            top: 3300,
            bottom: 4600,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: 3300,
            bottom: 3900,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: 4000,
            bottom: 4600,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
    sl4: [
        {
            top: 4700,
            bottom: 6500,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: 4700,
            bottom: 5300,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: 5900,
            bottom: 6500,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
    sl5: [
        {
            top: 5500,
            bottom: 6100,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                },
                translateY: {
                    topValue: 150,
                    bottomValue: 50
                },
            }
        },
        {
            top: 6400,
            bottom: 7000,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                },
                translateY: {
                    topValue: 50,
                    bottomValue: -60
                },
            }
        }
    ],
    sl6: [
        {
            top: 7100,
            bottom: 8600,
            easing: midSlow,
            styles: {
                translateY: {
                    topValue: 60,
                    bottomValue: -60
                }
            }
        },
        {
            top: 7100,
            bottom: 7700,
            easing: ease,
            styles: {
                opacity: {
                    topValue: 0,
                    bottomValue: 1
                }
            }
        },
        {
            top: 8000,
            bottom: 8600,
            easing: easeIn,
            styles: {
                opacity: {
                    topValue: 1,
                    bottomValue: 0
                }
            }
        }
    ],
}
