import React from 'react';
import { toast } from 'react-toastify';
import './react-toastify.css';
import './index.scss';

export const Toast = ({ output }) => (<h4 className="text-center">{output}</h4>);

export default function callToast(output, type) {
  toast[type](<Toast output={output} />, {
    position: toast.POSITION.TOP_RIGHT
  });
}
