import { useEffect, useState } from "react";
import { Button, Icon } from "@wwnds/react";
import { Modal, Tooltip } from "./components";
import logo from "./logo.svg";
import "./styles/App.scss";

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(true);
	const [button, setButton] = useState(null);

	useEffect(() => {
		setTooltipOpen(!modalOpen);
	}, [modalOpen]);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Button variant="solid" ref={setButton} onClick={() => setModalOpen(!modalOpen)}>
					Open modal
				</Button>
				<Tooltip reference={button} isOpen={tooltipOpen} trigger="manual">
					Click this to open the modal dialog
				</Tooltip>
				<Modal
					title={
						<>
							<Icon variant="list" /> {/* replace with the correct asset */}
							<span className="title-text">Exam settings</span>
						</>
					}
					isOpen={modalOpen}
					onRequestClose={() => setModalOpen(false)}
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
						ipsa? Et expedita molestias obcaecati optio illo, quos sed mollitia
						molestiae blanditiis facilis dolorem necessitatibus tempore itaque
						impedit a enim reprehenderit?
					</p>
					<p>
						Quidem commodi temporibus inventore modi iure repudiandae placeat
						recusandae, minus debitis voluptates laboriosam quibusdam nulla
						deleniti soluta facere, quisquam saepe maiores vero? Labore quis
						nisi, quasi saepe porro voluptatem? Voluptates.
					</p>
					<p>
						Reprehenderit dolore magni at quisquam earum iure quasi officiis
						quibusdam provident dolor. Debitis repudiandae voluptatum deleniti
						cumque laudantium molestias, impedit placeat. Itaque voluptates ab
						sapiente facilis enim possimus sit placeat!
					</p>
					<p>
						Maxime tempore porro nam laudantium itaque voluptatum odit,
						perferendis, natus dolore, fugiat dicta cum sit. Fuga nulla quaerat,
						velit facere dolorem ipsam id eaque nemo omnis expedita voluptates
						molestiae enim.
					</p>
				</Modal>
			</header>
		</div>
	);
}

export default App;
