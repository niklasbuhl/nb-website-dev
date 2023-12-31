import React, { useEffect, useState } from "react"
import { WindowLocation } from "@reach/router" // These come from `@types/reach__router`

export enum DisplayType {
	Mobile = "mobile",
	Tablet = "tablet",
	Desktop = "desktop",
	Wide = "wide",
}

interface IEventContext {
	view: {
		height: number
		width: number
		scroll: number
		lastScroll: number
		display: DisplayType // mobile, tablet, desktop, wide (4k)
	}
	mouse: {
		position: {
			x: number
			y: number
		}
	}
	touch: {
		touches: Touch[]
		lastTouches: Touch[]
	}
	location: WindowLocation | undefined
	setLocation: React.Dispatch<React.SetStateAction<WindowLocation | undefined>>
}

const eventDefaultState = {
	//
	view: {
		height: 0,
		width: 0,
		scroll: 0,
		lastScroll: 0,
		display: DisplayType.Desktop,
	},
	mouse: {
		position: {
			x: 0,
			y: 0,
		},
	},
	touch: {
		touches: [] as Touch[],
		lastTouches: [] as Touch[],
	},
	location: undefined,
	setLocation: () => {},
}

const EventContext = React.createContext<IEventContext>(eventDefaultState)

interface IEventProvider {
	children: React.ReactNode
}

export const EventProvider: React.FC<IEventProvider> = ({ children }) => {
	const [view, setview] = useState(eventDefaultState.view)
	const [mouse, setMouse] = useState(eventDefaultState.mouse)
	const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)
	const [location, setLocation] = useState<WindowLocation>()
	const [touch, setTouch] = useState(eventDefaultState.touch)

	const handleMousePosition = (event: MouseEvent) => {
		let mouseX = event.clientX
		let mouseY = event.clientY

		setMouse({
			position: {
				y: mouseY,
				x: mouseX,
			},
		})
	}

	const handleTouchStart = (event: TouchEvent) => {
		// handleLastTouchPosition(event)
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, touches: newTouches }))
	}

	const handleTouchMove = (event: TouchEvent) => {
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, touches: newTouches }))
	}

	const handleTouchEnd = (event: TouchEvent) => {
		const newTouches = Array.from(event.touches)
		setTouch((prevState) => ({ ...prevState, lastTouches: newTouches }))
	}

	const handleLastTouchPosition = (event: TouchEvent) => {
		let touchX = event.touches[0].clientX
		let touchY = event.touches[0].clientY

		setTouch((prevState) => ({
			...prevState,
			lastTouchPosition: { x: touchX, y: touchY },
		}))
	}

	const handleScroll = () => {
		let scroll = window.scrollY

		setview((prevState) => ({
			...prevState,
			scroll: scroll,
		}))
	}

	const handleResize = () => {
		let width = window.innerWidth
		let height = window.innerHeight

		// console.log(view)

		let display: DisplayType = DisplayType.Desktop

		switch (true) {
			case width < 400:
				display = DisplayType.Mobile
				break
			case width < 800:
				display = DisplayType.Tablet
				break
			case width < 1200:
				display = DisplayType.Desktop
				break
			case width < 2000:
				display = DisplayType.Wide
				break
			default:
				display = DisplayType.Desktop
				break
		}

		setview((prevState) => ({
			...prevState,
			width: width,
			height: height,
			display: display,
		}))
	}

	useEffect(() => {
		let lastScroll = view.scroll - lastScrollPosition

		setLastScrollPosition(view.scroll)

		setview((prevState) => ({
			...prevState,
			lastScroll: lastScroll,
		}))
	}, [view.scroll])

	useEffect(() => {
		handleScroll()
		handleResize()

		try {
			window.addEventListener("resize", handleResize)
			window.addEventListener("scroll", handleScroll)
			window.addEventListener("mousemove", handleMousePosition)
			// Touch
			// https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW22
			window.addEventListener("touchstart", handleTouchStart)
			window.addEventListener("touchmove", handleTouchMove)
			window.addEventListener("touchend", handleTouchEnd)
		} catch (error) {
			console.log(error)
		}
		return () => {
			try {
				window.removeEventListener("resize", handleResize)
				window.removeEventListener("scroll", handleScroll)
				window.removeEventListener("mousemove", handleMousePosition)
				window.removeEventListener("touchstart", handleTouchStart)
			} catch (error) {
				console.log(error)
			}
		}
	}, [])

	return (
		<EventContext.Provider
			value={{
				view,
				mouse,
				touch,
				location,
				setLocation,
			}}
		>
			{children}
		</EventContext.Provider>
	)
}

export default EventContext
