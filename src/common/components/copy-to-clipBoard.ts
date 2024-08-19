export const copyToClipboard = (
  text: string,
  setShowPopover?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(text.toLowerCase()).then(
    () => {
      console.log('Text copied to clipboard');
      
      if (setShowPopover) {
        setShowPopover(true);
        setTimeout(() => setShowPopover(false), 2000);
      }
    },
    err => {
      console.error('Could not copy text: ', err);
    }
  );
};
