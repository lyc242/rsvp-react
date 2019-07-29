import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props => (
	<li>
		<GuestName
			isEditing={props.isEditing}
			setName={e => props.setName(e.target.value)}
		>
			{props.name}
		</GuestName>
		<label>
			<input
				type='checkbox'
				onChange={props.handleConfirmation}
				checked={props.isConfirmed}
			/>{' '}
			Confirmed
		</label>
		<button onClick={props.toggleIsEditingAt}>
			{props.isEditing ? 'Save' : 'Edit'}
		</button>
		<button onClick={props.removeGuestAt}>remove</button>
	</li>
);

Guest.prototype = {
	name: PropTypes.string.isRequired,
	isConfirmed: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleNameEdits: PropTypes.func.isRequired,
	handleConfirmation: PropTypes.func.isRequired,
	setName: PropTypes.func.isRequired
};

export default Guest;
