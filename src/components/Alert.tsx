import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

interface AlertProps {
  open: boolean;
  message: string;
  type: string;
  closeAlert: () => {};
}
const Alert = ({ open, message, type, closeAlert }: AlertProps) => {
  return (
    <Modal open={open} onClose={closeAlert}>
      <Modal.Header>
        <Text b size={18}>
          {type}
        </Text>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
};
export default Alert;
