import React, { setState } from 'react'
import "../../../styles/ViewSelector.css"

function ViewSelector() {

  const state = {
    toggle: false
  };

	function toggleStateOnClick() {
		setState({
			toggle: !state.toggle
		});
	};

  return (
    <>
        <form className="switch-field">
				<input
					type="radio"
					id="switch_left"
					name="switchToggle"
					value="leftLabel"
					onChange={toggleStateOnClick}
					checked={!state.toggle}
				/>
				<label htmlFor="switch_left">List</label>

				<input
					type="radio"
					id="switch_right"
					name="switchToggle"
					value="rightLabel"
					onChange={toggleStateOnClick}
					checked={state.toggle}
				/>
				<label htmlFor="switch_right">Map</label>
			</form>
    </>
  )
}

export default ViewSelector