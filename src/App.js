import "./App.css"
import mobileDivider from "./images/pattern-divider-mobile.svg"
import desktopDivider from "./images/pattern-divider-desktop.svg"
import diceRerollIcon from "./images/icon-dice.svg"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
	const [adviceNumber, setAdviceNumber] = useState(0)
	const [adviceText, setAdviceText] = useState(
		"Wisdom is often found in the wise but is often learned from foolish acts."
	)

	useEffect(() => {
		getNewAdvice()
	}, [])

	const getNewAdvice = () => {
		axios.get("https://api.adviceslip.com/advice").then((result) => {
			let slip = result.data.slip
			setAdviceNumber(slip.id)
			setAdviceText(slip.advice)
		})
	}

	return (
		<>
			<main className="App">
				<div className="advice-display">
					<div className="container">
						<h4 className="text-green">Advice #{adviceNumber}</h4>
						<p className="text-light">"{adviceText}"</p>
						<img
							className="mobile"
							src={mobileDivider}
							alt="divider mobile"
						></img>
						<img
							className="desktop"
							src={desktopDivider}
							alt="divider mobile"
						></img>
					</div>
					<button
						className="advice-generator reset-margin"
						onClick={() => getNewAdvice()}
					>
						<img
							className="advice-generator__dice reset-margin"
							src={diceRerollIcon}
							alt="reroll advice dice"
						></img>
					</button>
				</div>
			</main>
			<footer className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">Your Name Here</a>.
			</footer>
		</>
	)
}

export default App
