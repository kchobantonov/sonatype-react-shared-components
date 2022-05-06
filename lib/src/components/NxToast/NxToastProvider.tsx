/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { useCallback, useState } from 'react';
import ToastContext from './contexts';
import NxToastContainer from './NxToastContainer';
import { NxToastProviderProps, nxToastProviderPropTypes, ToastAddModel, ToastModel } from './types';

let id = 1;

const NxToastProvider = (props: NxToastProviderProps) => {
  const { children } = props;
  const [toasts, setToasts] = useState<ToastModel[]>([]);

  const addToast = useCallback((content: ToastAddModel) => {
    setToasts((toasts) => [
      ...toasts,
      { toastId: id++, type: content.type, message: content.message }
    ]);
  }, [setToasts]);

  const removeToast = useCallback((id: number) => {
    setToasts(toasts => toasts.filter(t => t.toastId !== id));
  }, [setToasts]);

  return (
    <ToastContext.Provider value={{toasts, addToast, removeToast}}>
      <NxToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

NxToastProvider.propTypes = nxToastProviderPropTypes;
export default NxToastProvider;
