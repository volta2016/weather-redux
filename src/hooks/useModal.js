import { useState } from "react";

const useModal = (intialValue = false) => {
	const [isOpen, setIsOpen] = useState(intialValue);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	return { isOpen, handleToggle, handleCloseModal, handleOpenModal };
};

export default useModal;
