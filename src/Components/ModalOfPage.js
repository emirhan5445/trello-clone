import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useContext } from 'react';
import { AppContext } from '../Contexts/AppContext';

function ModalOfPage() {
  const { setIsOpen, isOpen } = useContext(AppContext);

  console.log(isOpen);
  return (
    <>
        <Dialog onClose={() => setIsOpen(currentShow => !currentShow)} open={isOpen} /* onClick={setIsOpen(currentShow => !currentShow)} */>
          <DialogTitle>
            title
          </DialogTitle>

          {/* <DialogContent>
            title
          </DialogContent> */}

        </Dialog>
    </>
  );
}

export default ModalOfPage;