import React, { useEffect, useRef } from "react";
import Alert from 'react-bootstrap/Alert';

const AlertPOP = (prop) => {
  // const [open, setOpen] = React.useState(true);

  return (
    <>
      <Alert variant='danger'>
        {prop.props}
      </Alert>
    </>
  );
};

export default AlertPOP;


//takes arguments message: '', set: false, id: ''and showalert function itself
export function AlertFile({ content, setShow }) {
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    if (content.set) {
      timeoutRef.current = setTimeout(() => {
        setShow({ message: '', set: false, id: '' })
      }, 8000);
    }
    return () => {
      clearTimeout(timeoutRef.current)
    };
  }, [content, setShow]);

  if (content.set) {
    return (
      content && <div className={`alert alert-${content.id === '1' ? 'success' : 'danger'} sticky-top text-capitalize text-center`} role="alert">
        <strong>{content.id === '1' ? "Success" : "error"} : </strong> {content.message}
      </div>

    )
  }
} 