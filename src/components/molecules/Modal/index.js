import React from 'react'
import ReactModal from 'react-modal'
import { Button } from 'components/atoms'
import styled from 'styled-components'

const HeadingWrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

const Modal = ({ modalIsOpen, children, closeModal, title }) => (
	<ReactModal
		ariaHideApp={false}
		isOpen={modalIsOpen}
		onRequestClose={closeModal}
		style={customStyles}
	>
		<HeadingWrapper>
			<h3>Editing Booth {title}</h3>

			<Button onClick={closeModal} palette="grayscale" transparent>
				X
			</Button>
		</HeadingWrapper>

		{children}
	</ReactModal>
)

export default Modal
