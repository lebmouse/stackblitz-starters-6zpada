import * as React from 'react';
import Sheet from 'react-modal-sheet';
import CustomSheet from './ModalSheet'
export default function App() {

  return (
    <>
     <ModalSheet/>
     <CustomModalSheet/>
    </>
  );
}

function ModalSheet(){
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        tweenConfig={{ ease: [0.29, 1.24, 0.36, 1], duration: 0.474 }}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}

function CustomModalSheet(){
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <CustomSheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <CustomSheet.Container>
          <CustomSheet.Header />
          <CustomSheet.Content>{/* Your CustomSheet content goes here */}</CustomSheet.Content>
        </CustomSheet.Container>
        <CustomSheet.Backdrop />
      </CustomSheet>
    </>
  );
}