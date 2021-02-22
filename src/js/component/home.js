import React from "react";
import shortid from "shortid";
import { useState } from "react";
//include images into your bundle
//create your first component
export function Home() {
	const [homeWork, setHomeWork] = useState("");
	const [allhomeWork, setAllhomeWork] = useState([]);
	const addHomework = e => {
		e.preventDefault();

		setAllhomeWork([
			...allhomeWork,
			{
				id: shortid.generate(),
				namehomeWork: homeWork
			}
		]);
		setHomeWork("");
	};
	const deleteHomework = item => {
		let result = allhomeWork.filter(function(e) {
			return e.id !== item;
		});
		setAllhomeWork(result);
	};
	return (
		<div className="todolist">
			<h1 className="titulo">TO DO LIST</h1>
			<div className="form">
				<form onSubmit={addHomework} className="pizarra">
					<div className="">
						<ul className="lihome">
							{allhomeWork.map(item => (
								<li className="listawork" key={item.id}>
									<span className="lead">
										{item.namehomeWork}
										<button
											className="botonbasura"
											onClick={() => {
												deleteHomework(item.id);
											}}>
											<i className="far fa-trash-alt basura"></i>
										</button>
									</span>
								</li>
							))}
						</ul>
					</div>
					<input
						type="text"
						className="form-control mb-2"
						placeholder="Add Homework"
						onChange={e => setHomeWork(e.target.value)}
						value={homeWork}
					/>
					<button
						className="btn btn-warning btn-lg"
						type="submit"
						id="amarillo">
						ADD
					</button>
				</form>
			</div>
		</div>
	);
}
